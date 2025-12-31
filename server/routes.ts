import type { Express } from "express";
import { createServer, type Server } from "http";
import OpenAI from "openai";
import { chatRequestSchema, type UserProfile } from "@shared/schema";
import { peptideKnowledgeBase } from "./peptideKnowledgeBase";
import { isRedFlag, sideEffectsDatabase } from "./sideEffectsDatabase";
import { checkTimingConflict, getOptimalSchedule } from "./timingConflicts";

// Using gpt-4o as the primary model
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Gemini API configuration for Mentor Mode with web search
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent";

interface Peptide {
  name: string;
  aliases: string[];
  mechanism: string;
  category_primary: string;
  goals_addressed: string[];
  monthly_cost_estimate: string;
  administration: string[];
  timeline_to_results: string;
  side_effects: string[];
  stack_synergy: string[];
  stack_redundant: string[];
  popularity_rank?: number;
}

function buildPeptideSummaries(): string {
  return (peptideKnowledgeBase.peptides as Peptide[]).map((p: Peptide) => 
    `**${p.name}** (${p.aliases?.join(", ") || "no aliases"}): ${p.mechanism?.slice(0, 100) || ""}... Category: ${p.category_primary}. Goals: ${p.goals_addressed?.slice(0, 5).join(", ") || "various"}. Cost: ${p.monthly_cost_estimate || "varies"}. Admin: ${p.administration?.join("/") || "injection"}. Timeline: ${p.timeline_to_results || "varies"}. Side effects: ${p.side_effects?.slice(0, 4).join(", ") || "minimal"}. Stack with: ${p.stack_synergy?.slice(0, 3).join(", ") || "standalone"}. Avoid stacking with: ${p.stack_redundant?.join(", ") || "none"}.`
  ).join("\n");
}

function buildBudgetGuide(): string {
  const bo = peptideKnowledgeBase.budget_optimization as Record<string, string[]>;
  const budget = bo?.budget_under_100 || bo?.budget || [];
  const moderate = bo?.moderate_100_200 || bo?.moderate || [];
  const premium = bo?.premium_200_plus || bo?.premium || [];
  return `Budget tier options: Low(<$100/mo): ${budget.join(", ")}. Mid($100-200/mo): ${moderate.join(", ")}. Premium($200+/mo): ${premium.join(", ")}.`;
}

function buildContraindicationWarnings(conditions: string[]): string {
  const warnings: string[] = [];
  const matrix = peptideKnowledgeBase.contraindication_matrix as Record<string, string[]>;
  
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

// Build mentor mode system prompt for side effects troubleshooting
function buildMentorSystemPrompt(): string {
  const sideEffectsSummary = sideEffectsDatabase.map(profile => 
    `**${profile.peptideName}**: Common: ${profile.commonSideEffects.map(se => se.name).join(', ')}. Red flags: ${profile.redFlags.slice(0, 2).join('; ')}.`
  ).join('\n');

  return `You are Pat, a knowledgeable and supportive peptide mentor. You help users who are ALREADY taking peptides with:
- Side effects troubleshooting
- Injection technique issues
- Timing and scheduling questions
- General peptide education

## Your Personality
- Warm, empathetic, never dismissive of concerns
- You understand that starting peptides can be anxiety-inducing
- You reassure when appropriate but never downplay serious symptoms
- You always err on the side of caution

## Severity Classification System
When discussing side effects, classify severity using these indicators:
- 🟢 NORMAL: Expected side effects that typically resolve with time or management
- 🟡 MONITOR: Side effects to watch closely; may need provider consultation
- 🔴 URGENT: Seek medical attention - stop peptide and contact healthcare provider

## Side Effects Reference
${sideEffectsSummary}

## Response Guidelines

1. **For side effect questions:**
   - Identify the likely cause based on their peptide(s)
   - Classify severity (🟢/🟡/🔴)
   - Provide practical management tips
   - Clearly state when to seek medical attention

2. **For injection issues:**
   - Offer technique guidance
   - Recommend site rotation patterns
   - Address pain, bruising, or irritation concerns

3. **For timing questions:**
   - Provide clear scheduling guidance
   - Note fasting requirements where applicable
   - Warn about drug interactions

4. **For general questions:**
   - Use web search to find latest information when needed
   - Provide evidence-based answers
   - Acknowledge limitations of current research

5. **Always:**
   - Be specific and actionable
   - Use markdown formatting for readability
   - End concerning symptom discussions with clear guidance on when to see a doctor

6. **Never:**
   - Diagnose medical conditions
   - Recommend stopping prescribed medications
   - Dismiss severe symptoms as "normal"

## Web Search Capability
You have access to web search for finding the latest peptide research, clinical guidelines, and real-time information. Use it when:
- Asked about recent studies or news
- Needing to verify current best practices
- User asks about something outside your knowledge base`;
}

// Extract peptide names from user text
function extractPeptideNames(text: string): string[] {
  const peptidePatterns = [
    'semaglutide', 'ozempic', 'wegovy', 'rybelsus',
    'tirzepatide', 'mounjaro', 'zepbound',
    'bpc-157', 'bpc157', 'bpc 157',
    'pt-141', 'pt141', 'bremelanotide',
    'cjc-1295', 'cjc1295', 'ipamorelin', 'cjc/ipa',
    'mk-677', 'mk677', 'ibutamoren',
    'melanotan', 'melanotan 2', 'mt2', 'mt-2',
    'tb-500', 'tb500', 'thymosin beta',
    'retatrutide', 'sermorelin', 'tesamorelin',
    'ghk-cu', 'ghk copper',
    'aod-9604', 'aod9604',
    'mots-c', 'motsc',
    'epithalon', 'epitalon',
    'selank', 'semax', 'dihexa',
    'ss-31', 'elamipretide'
  ];
  
  const textLower = text.toLowerCase();
  const found: string[] = [];
  
  for (const pattern of peptidePatterns) {
    if (textLower.includes(pattern)) {
      // Normalize to standard ID format
      let normalized = pattern.replace(/[-\s]/g, '').toLowerCase();
      if (['ozempic', 'wegovy', 'rybelsus'].includes(pattern)) normalized = 'semaglutide';
      if (['mounjaro', 'zepbound'].includes(pattern)) normalized = 'tirzepatide';
      if (pattern.includes('bremelanotide')) normalized = 'pt141';
      if (pattern.includes('ibutamoren')) normalized = 'mk677';
      if (pattern.includes('thymosin')) normalized = 'tb500';
      
      if (!found.includes(normalized)) {
        found.push(normalized);
      }
    }
  }
  
  return found;
}

// Call Gemini API with web search capability
async function callGeminiWithSearch(
  systemPrompt: string, 
  userMessage: string, 
  conversationHistory: Array<{ role: string; content: string }>
): Promise<string> {
  if (!GEMINI_API_KEY) {
    throw new Error("Gemini API key not configured");
  }

  const contents = [
    {
      role: "user",
      parts: [{ text: systemPrompt + "\n\n---\n\nUser: " + userMessage }]
    }
  ];

  // Add conversation history
  for (const msg of conversationHistory.slice(-6)) {
    contents.push({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }]
    });
  }

  // Add current message if not already in history
  if (conversationHistory.length === 0 || conversationHistory[conversationHistory.length - 1]?.content !== userMessage) {
    contents.push({
      role: "user",
      parts: [{ text: userMessage }]
    });
  }

  const requestBody = {
    contents,
    tools: [{
      googleSearch: {}
    }],
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 2048
    }
  };

  const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestBody)
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Gemini API error:", response.status, errorText);
    throw new Error(`Gemini API error: ${response.status}`);
  }

  const data = await response.json();
  
  // Extract text from Gemini response
  const candidates = data.candidates;
  if (!candidates || candidates.length === 0) {
    throw new Error("No response from Gemini");
  }

  const parts = candidates[0]?.content?.parts;
  if (!parts || parts.length === 0) {
    throw new Error("No content in Gemini response");
  }

  return parts.map((p: { text?: string }) => p.text || "").join("");
}

// Fallback to OpenAI if Gemini fails
async function callOpenAIFallback(
  systemPrompt: string,
  userMessage: string,
  conversationHistory: Array<{ role: string; content: string }>
): Promise<string> {
  const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
    { role: "system", content: systemPrompt },
    ...conversationHistory.slice(-6).map(m => ({
      role: m.role as "user" | "assistant",
      content: m.content
    })),
    { role: "user", content: userMessage }
  ];

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages,
    max_tokens: 2048
  });

  return response.choices[0]?.message?.content || "I apologize, but I couldn't generate a response. Please try again.";
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

      console.log("Sending request to OpenAI with", openaiMessages.length, "messages");
      
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: openaiMessages,
        max_tokens: 2048
      });
      
      console.log("Received response from OpenAI");

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

  // Mentor Mode endpoint - for users already taking peptides
  app.post("/api/mentor", async (req, res) => {
    try {
      const { messages, context } = req.body;
      
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Messages array required" });
      }

      const latestMessage = messages[messages.length - 1];
      const userMessage = latestMessage?.content || "";
      const conversationHistory = messages.slice(0, -1);

      // Build mentor system prompt
      const systemPrompt = buildMentorSystemPrompt();

      // Extract peptide names from user message and context
      const contextText = context?.currentPeptides?.join(" ") || "";
      const allText = userMessage + " " + contextText;
      const peptideNames = extractPeptideNames(allText);

      // Check for red flags
      let isUrgent = false;
      for (const peptide of peptideNames) {
        if (isRedFlag(peptide, userMessage)) {
          isUrgent = true;
          break;
        }
      }

      let responseMessage: string;

      // Try Gemini first, fallback to OpenAI
      try {
        console.log("Attempting Gemini API call for mentor mode...");
        responseMessage = await callGeminiWithSearch(systemPrompt, userMessage, conversationHistory);
        console.log("Gemini response received successfully");
      } catch (geminiError: any) {
        console.log("Gemini failed, falling back to OpenAI:", geminiError.message);
        responseMessage = await callOpenAIFallback(systemPrompt, userMessage, conversationHistory);
      }

      // Prepend urgent warning if red flag detected
      if (isUrgent) {
        responseMessage = `🔴 **URGENT ATTENTION REQUIRED**\n\nThe symptoms you've described may require immediate medical attention. Please contact your healthcare provider or seek emergency care if you're experiencing severe symptoms.\n\n---\n\n${responseMessage}`;
      }

      return res.json({ message: responseMessage, isUrgent });
    } catch (error: any) {
      console.error("Mentor API error:", error);
      return res.status(500).json({ 
        error: "An error occurred while processing your request" 
      });
    }
  });

  // Timing check endpoint - for scheduling peptides
  app.post("/api/timing-check", async (req, res) => {
    try {
      const { peptides } = req.body;
      
      if (!peptides || !Array.isArray(peptides)) {
        return res.status(400).json({ error: "Peptides array required" });
      }

      // Check for conflicts between all peptide pairs
      const conflicts: Array<{ peptide1: string; peptide2: string; reason: string; recommendation: string }> = [];
      
      for (let i = 0; i < peptides.length; i++) {
        for (let j = i + 1; j < peptides.length; j++) {
          const conflict = checkTimingConflict(peptides[i], peptides[j]);
          if (conflict.hasConflict) {
            conflicts.push({
              peptide1: peptides[i],
              peptide2: peptides[j],
              reason: conflict.reason || "",
              recommendation: conflict.recommendation || ""
            });
          }
        }
      }

      // Get optimal schedule
      const schedule = getOptimalSchedule(peptides);

      return res.json({
        conflicts,
        schedule,
        hasConflicts: conflicts.length > 0
      });
    } catch (error: any) {
      console.error("Timing check API error:", error);
      return res.status(500).json({ 
        error: "An error occurred while processing your request" 
      });
    }
  });

  return httpServer;
}
