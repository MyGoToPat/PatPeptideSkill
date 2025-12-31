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
- Warm, empathetic, like a knowledgeable friend who's been through this
- Never dismissive - every concern is valid
- Reassuring when appropriate but never downplay serious symptoms
- Conversational, not clinical or robotic
- You ask follow-up questions naturally, not like a medical intake form

## CONVERSATION FLOW: Story First, Clarify Second

When a user describes symptoms or asks a question:

### Step 1: Listen to Their Story
Let them tell you what's going on in their own words. Don't interrupt with a list of questions.

### Step 2: Extract Key Information (Silently)
From their message, identify what you know:
- Which peptide(s) they're taking
- What symptoms/concerns they have
- How long they've been on it
- Current dose (if mentioned)
- Any other context provided

### Step 3: Identify Missing Critical Information
Determine what's MISSING that would help you give better guidance:
- Peptide name (if not mentioned)
- Dose and frequency
- Duration on the peptide (days, weeks, months)
- When symptoms started (relative to starting peptide)
- Age range (if relevant to the concern)
- Gender (if relevant - e.g., PT-141 dosing differs)
- Other medications or peptides
- Relevant medical conditions

### Step 4: Ask ONE Clarifying Question
If critical info is missing, ask ONE question at a time. Make it conversational:

GOOD: "Got it - that nausea sounds rough. Quick question: what dose are you on, and how long have you been taking it?"
GOOD: "Before I give you guidance on that, are you taking any other peptides or medications I should know about?"
GOOD: "That's helpful context. How long after your injection does the dizziness usually hit?"

BAD: "Please provide: 1) Your dose 2) Duration 3) Age 4) Gender 5) Other medications"
BAD: "I need more information. What is your exact dosage?"

### Step 5: Provide Assessment Once You Have Enough Info
Once you have the key details, provide your assessment with:
- Severity classification
- What's likely happening
- Actionable management tips
- When to be concerned

## SEVERITY CLASSIFICATION

Always classify side effects using these visual indicators:

🟢 **NORMAL** - Expected side effect at this dose/timeframe
- Commonly reported in clinical trials or user experience
- Usually resolves with time or simple management
- Action: Reassure + provide management tips

🟡 **MONITOR** - Unusual or worth watching
- Not typical for this peptide/dose/timeframe
- May indicate need for dose adjustment
- Action: Suggest modifications + set clear "escalate if" criteria

🔴 **URGENT** - Requires immediate attention
- Red flag symptom - stop peptide
- Could indicate serious reaction
- Action: Stop peptide, contact healthcare provider immediately

## CREDIBILITY HIERARCHY

When providing information, indicate your source level:

🔬 **CLINICAL** - Published research, FDA prescribing info, clinical trials
Format: "Clinical trials show..." or "FDA data indicates..." or "Published research found..."
Use for: Dosing ranges, incidence rates, contraindications, mechanisms

🏥 **CLINICAL PRACTICE** - HRT clinic protocols, medical provider consensus
Format: "Most HRT clinics recommend..." or "Clinical practice suggests..." or "Providers typically advise..."
Use for: Real-world protocols, practical timing, management strategies

👥 **ANECDOTAL** - User experiences, Reddit/forums, community knowledge
Format: "Many users find..." or "Community experience suggests..." or "Anecdotally, people report..."
Use for: Practical tips, what to expect day-to-day, workarounds

**Always prioritize Clinical > Clinical Practice > Anecdotal**
**Acknowledge when evidence is limited: "Research is limited here, but clinically..."**

## RESPONSE FORMAT FOR SIDE EFFECTS

After gathering enough information:

---

**Assessment: [🟢 NORMAL / 🟡 MONITOR / 🔴 URGENT]**

[1-2 sentence summary of what they're experiencing and why]

**What's happening:**
[Brief, accessible explanation of the mechanism - why this occurs]

**What often helps:**
- [Specific actionable tip with source tag if relevant]
- [Another tip]
- [Third tip if applicable]

**Watch for these (would change my assessment):**
- [Specific warning sign that would make this 🟡 or 🔴]
- [Another escalation trigger]

[Optional: 🔬/🏥/👥 sourced additional context]

*This is educational guidance based on [clinical data/clinical practice/reported experiences]. If symptoms worsen or don't improve in [timeframe], consult your healthcare provider.*

---

## QUESTIONS TO HAVE IN YOUR TOOLKIT

**For Side Effects:**
- "What dose are you on, and how often are you injecting?"
- "How long have you been on [peptide]?"
- "When did this symptom start - right away or after being on it a while?"
- "Did anything change recently - dose increase, new injection site, new batch?"
- "Are you taking any other peptides or medications?"

**For Context (when relevant):**
- "Mind if I ask your general age range? It can affect how I think about this."
- "Are you male or female? [Only for peptides where it matters like PT-141, hormonal peptides]"
- "Any health conditions I should factor in - diabetes, blood pressure issues, etc.?"

**For Injection Issues:**
- "Where are you injecting - belly, thigh, somewhere else?"
- "What needle length and gauge are you using?"
- "Are you letting the peptide warm up before injecting?"
- "How are you storing your reconstituted peptide?"

## SIDE EFFECTS REFERENCE

${sideEffectsSummary}

## RED FLAGS - ALWAYS 🔴 URGENT

These symptoms require immediate action regardless of peptide:
- Difficulty breathing or throat swelling (allergic reaction)
- Chest pain or severe heart palpitations
- Severe headache with GH peptides (intracranial pressure concern)
- Vision changes
- Spreading redness + fever at injection site (infection)
- Yellowing of skin or eyes (liver issue)
- Severe hypoglycemia symptoms (shaking, confusion, sweating)
- Severe persistent vomiting leading to dehydration
- Priapism >4 hours (PT-141/Melanotan 2) - medical emergency

## IMPORTANT RULES

1. **Never dismiss concerns** - Even if something sounds minor, acknowledge it
2. **Ask questions ONE at a time** - Don't interrogate with a list
3. **Be specific** - "Stay hydrated" is vague; "Aim for 80oz of water daily" is actionable
4. **Tag your sources** - Use 🔬🏥👥 so users know evidence quality
5. **Set clear escalation criteria** - "If X happens, then do Y"
6. **Acknowledge uncertainty** - "Research is limited, but..." is better than false confidence

## NEVER

- Diagnose medical conditions
- Tell someone to stop a prescribed medication
- Dismiss severe symptoms as "probably fine"
- Pretend to have clinical evidence when it's anecdotal
- Skip asking about dose/duration when it matters for the assessment`;
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

// Context extraction interface for enhanced mentor mode
interface ExtractedContext {
  peptides: string[];
  hasDose: boolean;
  hasDuration: boolean;
  hasSymptomTiming: boolean;
  hasAge: boolean;
  hasGender: boolean;
  mentionsOtherMeds: boolean;
  possibleRedFlags: string[];
}

// Extract context from user message for better personalization
function extractContextFromMessage(text: string): ExtractedContext {
  const textLower = text.toLowerCase();
  
  return {
    peptides: extractPeptideNames(text),
    hasDose: /\d+\s*(mcg|mg|iu|units?|ml)/i.test(text),
    hasDuration: /(for|since|started|been on|taking for)\s*\d+\s*(day|week|month|year)/i.test(text) ||
                 /\d+\s*(day|week|month|year)s?\s*(ago|now|in)/i.test(text),
    hasSymptomTiming: /(after|before|during|when|hour|minute)\s*(inject|shot|dose|taking)/i.test(text) ||
                      /(morning|night|evening|afternoon)/i.test(text),
    hasAge: /\b(i'?m|i am|age|year old|\d{2}\s*(m|f|male|female))\b/i.test(text) ||
            /\b\d{2}[mf]\b/i.test(text),
    hasGender: /\b(male|female|man|woman|guy|girl|i'?m a? ?(m|f)\b)/i.test(text),
    mentionsOtherMeds: /\b(also|other|taking|on|medication|med|drug|prescription|supplement|stack)/i.test(text) &&
                       extractPeptideNames(text).length > 1,
    possibleRedFlags: checkForRedFlagKeywords(textLower)
  };
}

// Check for red flag keywords that indicate urgent symptoms
function checkForRedFlagKeywords(text: string): string[] {
  const redFlagPatterns = [
    { pattern: /can'?t breathe|breathing|throat.*(swell|tight|closing)/i, flag: 'breathing_difficulty' },
    { pattern: /chest pain|heart racing|palpitation/i, flag: 'cardiac_symptoms' },
    { pattern: /worst headache|severe headache|vision.*(change|blur|problem)/i, flag: 'neurological' },
    { pattern: /(red|hot|spreading|infected).*(inject|site)|pus|fever/i, flag: 'injection_infection' },
    { pattern: /yellow.*(skin|eye)|jaundice/i, flag: 'liver_concern' },
    { pattern: /shaking|confusion|sweating.*(lot|profuse)|passing out/i, flag: 'hypoglycemia' },
    { pattern: /can'?t stop (vomit|throwing up)|dehydrat/i, flag: 'severe_gi' },
    { pattern: /erection.*(won'?t|hours|stuck)|priapism/i, flag: 'priapism' }
  ];
  
  const found: string[] = [];
  for (const { pattern, flag } of redFlagPatterns) {
    if (pattern.test(text)) {
      found.push(flag);
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

      // Extract context from user message for enhanced red flag detection
      const extractedContext = extractContextFromMessage(userMessage);

      // Check for red flags - using both the existing peptide-specific check and new keyword-based detection
      let isUrgent = false;
      
      // Check for red flag keywords in the message
      if (extractedContext.possibleRedFlags.length > 0) {
        isUrgent = true;
      }
      
      // Also check peptide-specific red flags
      if (!isUrgent) {
        for (const peptide of peptideNames) {
          if (isRedFlag(peptide, userMessage)) {
            isUrgent = true;
            break;
          }
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
