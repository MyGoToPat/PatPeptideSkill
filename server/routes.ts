import type { Express } from "express";
import { createServer, type Server } from "http";
import OpenAI from "openai";
import { chatRequestSchema, type UserProfile } from "@shared/schema";
import { peptideKnowledgeBase } from "./peptideKnowledgeBase";

// the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function buildPeptideSummaries(): string {
  return peptideKnowledgeBase.peptides.map(p => 
    `**${p.name}** (${p.aliases.join(", ") || "no aliases"}): ${p.mechanism.slice(0, 100)}... Category: ${p.category_primary}. Goals: ${p.goals_addressed.slice(0, 5).join(", ")}. Cost: ${p.monthly_cost_range}. Admin: ${p.administration.join("/")}. Timeline: ${p.timeline_to_results}. Side effects: ${p.side_effects.slice(0, 4).join(", ")}. Stack with: ${p.stack_synergy.slice(0, 3).join(", ") || "standalone"}. Avoid stacking with: ${p.stack_redundant.join(", ") || "none"}.`
  ).join("\n");
}

function buildBudgetGuide(): string {
  const { budget_optimization } = peptideKnowledgeBase;
  return `Budget tier options: Low($50-150): ${budget_optimization.budget.join(", ")}. Mid($150-300): ${budget_optimization.moderate.join(", ")}. Premium($300+): ${budget_optimization.premium.join(", ")}.`;
}

function buildContraindicationWarnings(conditions: string[]): string {
  const warnings: string[] = [];
  const matrix = peptideKnowledgeBase.contraindication_matrix;
  
  for (const [condition, peptides] of Object.entries(matrix)) {
    if (conditions.some(c => c.toLowerCase().includes(condition.replace("_", " ")))) {
      warnings.push(`For ${condition}: AVOID ${peptides.join(", ")}`);
    }
  }
  return warnings.length > 0 ? warnings.join(". ") : "No specific contraindications based on stated conditions.";
}

function buildSystemPrompt(profile: UserProfile): string {
  const profileSummary = `
## User Profile
- **Intent:** ${profile.intent}
- **Experience Level:** ${profile.experienceLevel}
- **Gender:** ${profile.gender}${profile.lifeStage ? `\n- **Life Stage:** ${profile.lifeStage}` : ""}
- **Conditions:** ${profile.conditions.length > 0 ? profile.conditions.join(", ") : "None specified"}
- **Top Goals (Ranked):** ${profile.goalsRanked.join(", ")}
- **Budget:** ${profile.budgetTier}
- **Administration Preference:** ${profile.administrationPreference}
`;

  const contraindicationWarnings = buildContraindicationWarnings(profile.conditions);

  return `You are Pat, a knowledgeable and friendly peptide education assistant. Your role is to help users understand peptides and prepare informed questions for their healthcare providers.

## Your Personality
- Warm, approachable, never clinical or robotic
- Confident but not preachy
- You explain complex things simply
- You proactively mention crossover benefits users might not know about
- You always include cost estimates and side effects in recommendations

${profileSummary}

## Contraindication Alerts
${contraindicationWarnings}

## Budget Guide
${buildBudgetGuide()}

## Peptide Reference (16 peptides available)
${buildPeptideSummaries()}

## Response Guidelines

1. **Always personalize** based on the user's profile (gender, conditions, goals, budget)

2. **For recommendations**, always include:
   - Why it fits their specific situation
   - Mechanism (brief, accessible language)
   - Timeline to expect results
   - Monthly cost estimate
   - Common side effects
   - Any crossover benefits they'd appreciate
   - Questions to discuss with their provider

3. **For comparisons**, use markdown tables with columns for Peptide, Best For, Monthly Cost, and Key Benefit

4. **Stacking guidance**:
   - Recommend synergistic combinations from the knowledge base
   - Warn about redundant pairings (e.g., "CJC-1295 and Sermorelin both work the same way—choose one")
   - Flag contraindications based on their conditions

5. **Contraindication alerts** (must always mention):
   - Cancer history: Avoid all GH-promoting peptides
   - Pregnancy: Recommend avoiding peptides
   - Specific condition conflicts from knowledge base

6. **Never**:
   - Provide specific medical advice
   - Recommend sources/vendors
   - Claim peptides can "cure" anything
   - Skip side effect disclosure

7. **Always end substantial recommendations with**: "This is educational information to discuss with your healthcare provider. They can help determine if this is appropriate for your specific situation."

## Formatting
- Use markdown for structure
- Use tables for comparisons
- Use bullet points for lists
- Keep paragraphs short and scannable
- Use sparingly for visual breaks: checkmark for benefits, warning triangle for side effects/contraindications, lightbulb for tips`;
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/chat", async (req, res) => {
    try {
      const validationResult = chatRequestSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          error: "Invalid request body",
          details: validationResult.error.flatten()
        });
      }

      const { messages, userProfile } = validationResult.data;

      const systemPrompt = buildSystemPrompt(userProfile);

      const openaiMessages: OpenAI.Chat.ChatCompletionMessageParam[] = [
        { role: "system", content: systemPrompt },
        ...messages.map((m) => ({
          role: m.role as "user" | "assistant",
          content: m.content
        }))
      ];

      const response = await openai.chat.completions.create({
        model: "gpt-5",
        messages: openaiMessages,
        max_completion_tokens: 2048
      });

      const assistantMessage = response.choices[0]?.message?.content || "I apologize, but I couldn't generate a response. Please try again.";

      return res.json({ message: assistantMessage });
    } catch (error: any) {
      console.error("Chat API error:", error);
      
      if (error?.status === 401) {
        return res.status(500).json({ 
          error: "OpenAI API key is invalid or not configured" 
        });
      }
      
      return res.status(500).json({ 
        error: "An error occurred while processing your request" 
      });
    }
  });

  return httpServer;
}
