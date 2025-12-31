import { z } from "zod";

// User Profile Types
export const intentOptions = ["cosmetic", "medical", "both"] as const;
export const experienceLevelOptions = ["beginner", "intermediate", "advanced"] as const;
export const genderOptions = ["male", "female", "unspecified"] as const;
export const budgetTierOptions = ["budget", "moderate", "optimal", "unlimited"] as const;
export const administrationOptions = ["injections", "oral", "topical", "any"] as const;

// Female-specific options
export const femaleLifeStageOptions = [
  "pre_menopausal",
  "peri_menopausal", 
  "post_menopausal",
  "medically_induced_menopause"
] as const;

export const femaleConditionOptions = [
  "pcos",
  "thyroid_issues",
  "insulin_resistance",
  "low_libido"
] as const;

// Male-specific options
export const maleConditionOptions = [
  "low_testosterone",
  "on_trt",
  "using_steroids",
  "thyroid_issues",
  "insulin_resistance",
  "ed_low_libido"
] as const;

// Goal categories
export const goalCategories = {
  body_composition: [
    { id: "fat_loss", label: "Fat loss (general)" },
    { id: "stubborn_fat", label: "Stubborn fat (belly, hips)" },
    { id: "muscle_building", label: "Muscle building / preservation" },
    { id: "body_recomposition", label: "Body recomposition" }
  ],
  performance_recovery: [
    { id: "workout_recovery", label: "Workout recovery" },
    { id: "injury_healing", label: "Injury healing" },
    { id: "joint_health", label: "Joint health" },
    { id: "athletic_performance", label: "Athletic performance" }
  ],
  anti_aging_cosmetic: [
    { id: "skin_quality", label: "Skin quality" },
    { id: "hair_growth", label: "Hair growth" },
    { id: "tanning", label: "Tanning" },
    { id: "longevity", label: "Longevity" }
  ],
  metabolic_hormonal: [
    { id: "appetite_control", label: "Appetite control" },
    { id: "blood_sugar_regulation", label: "Blood sugar regulation" },
    { id: "hormone_optimization", label: "Hormone optimization" },
    { id: "menopause_relief", label: "Menopause relief" }
  ],
  other: [
    { id: "sleep_quality", label: "Sleep quality" },
    { id: "cognitive_function", label: "Cognitive function" },
    { id: "sexual_function", label: "Sexual function / Libido" },
    { id: "immune_support", label: "Immune support" },
    { id: "gut_health", label: "Gut health" }
  ]
} as const;

// User Profile Schema
export const userProfileSchema = z.object({
  intent: z.enum(intentOptions),
  experienceLevel: z.enum(experienceLevelOptions),
  gender: z.enum(genderOptions),
  lifeStage: z.enum(femaleLifeStageOptions).optional(),
  conditions: z.array(z.string()),
  goalsRanked: z.array(z.string()).max(3),
  budgetTier: z.enum(budgetTierOptions),
  administrationPreference: z.enum(administrationOptions)
});

export type UserProfile = z.infer<typeof userProfileSchema>;

// Chat Message Types
export const messageRoleOptions = ["user", "assistant"] as const;

export const chatMessageSchema = z.object({
  id: z.string(),
  role: z.enum(messageRoleOptions),
  content: z.string(),
  timestamp: z.number()
});

export type ChatMessage = z.infer<typeof chatMessageSchema>;

// Peptide Types
export interface PeptideGenderNotes {
  male: string;
  female: string;
}

export interface PeptideDosing {
  typical_range: string;
  frequency: string;
  timing: string;
  cycle_length: string;
}

export interface Peptide {
  id: string;
  name: string;
  aliases: string[];
  category_primary: string;
  categories_secondary: string[];
  mechanism: string;
  goals_addressed: string[];
  gender_notes: PeptideGenderNotes;
  conditions_beneficial: string[];
  conditions_contraindicated: string[];
  dosing: PeptideDosing;
  administration: string[];
  cost_tier: "budget" | "moderate" | "premium";
  monthly_cost_range: string;
  side_effects: string[];
  crossover_benefits: string[];
  stack_synergy: string[];
  stack_redundant: string[];
  timeline_to_results: string;
  research_status: "FDA-approved" | "clinical-trials" | "research-stage";
}

export interface PeptideKnowledgeBase {
  peptides: Peptide[];
  stacking_rules: {
    beginner_protocols: Record<string, string[]>;
    goal_focused_stacks: Record<string, string[]>;
  };
  contraindication_matrix: Record<string, string[]>;
  budget_optimization: Record<string, string[]>;
}

// API Request/Response Types
export const chatRequestSchema = z.object({
  messages: z.array(chatMessageSchema),
  userProfile: userProfileSchema
});

export type ChatRequest = z.infer<typeof chatRequestSchema>;

export interface ChatResponse {
  message: string;
}

// Onboarding Step
export type OnboardingStep = 
  | "welcome"
  | "intent"
  | "experience"
  | "biological"
  | "goals"
  | "constraints"
  | "summary"
  | "mentor";

// Empty user type placeholders for compatibility
export const users = {} as any;
export const insertUserSchema = z.object({
  username: z.string(),
  password: z.string()
});
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = { id: string; username: string; password: string };
