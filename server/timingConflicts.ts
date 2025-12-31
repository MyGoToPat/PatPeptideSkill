/**
 * Peptide Timing Conflicts & Scheduling Database
 */

export interface PeptideTiming {
  peptideId: string;
  peptideName: string;
  optimalTimeOfDay: 'morning' | 'evening' | 'bedtime' | 'anytime' | 'pre-activity';
  fastingRequirements: {
    required: boolean;
    details?: string;
  };
  foodInteractions: string[];
  frequencyNotes: string;
  spacingFromOthers: Array<{
    conflictsWith: string;
    reason: string;
    recommendation: string;
  }>;
}

export const timingDatabase: PeptideTiming[] = [
  {
    peptideId: "semaglutide",
    peptideName: "Semaglutide",
    optimalTimeOfDay: "anytime",
    fastingRequirements: {
      required: false,
      details: "No fasting required. Can be taken with or without food."
    },
    foodInteractions: ["Slows gastric emptying - fatty foods may cause more discomfort"],
    frequencyNotes: "Once weekly, same day each week. Do not take more than once per 7 days.",
    spacingFromOthers: [
      { conflictsWith: "tirzepatide", reason: "Both are GLP-1 agonists", recommendation: "Never use together." },
      { conflictsWith: "retatrutide", reason: "Both target GLP-1 receptor", recommendation: "Never use together." }
    ]
  },
  {
    peptideId: "bpc157",
    peptideName: "BPC-157",
    optimalTimeOfDay: "anytime",
    fastingRequirements: {
      required: false,
      details: "No fasting required."
    },
    foodInteractions: ["No significant food interactions"],
    frequencyNotes: "Typically 1-2 times daily. 250-500mcg per dose.",
    spacingFromOthers: [
      { conflictsWith: "tb500", reason: "No conflict - actually highly synergistic", recommendation: "Excellent combination for healing." }
    ]
  },
  {
    peptideId: "pt141",
    peptideName: "PT-141 (Bremelanotide)",
    optimalTimeOfDay: "pre-activity",
    fastingRequirements: {
      required: false,
      details: "Light stomach recommended - not too full, not empty."
    },
    foodInteractions: ["Heavy meal may delay onset"],
    frequencyNotes: "MAXIMUM: Once per 24 hours, 8 doses per month to avoid permanent hyperpigmentation.",
    spacingFromOthers: [
      { conflictsWith: "melanotan2", reason: "Both affect melanocortin receptors", recommendation: "Don't use same day." }
    ]
  },
  {
    peptideId: "cjc1295_ipamorelin",
    peptideName: "CJC-1295/Ipamorelin",
    optimalTimeOfDay: "bedtime",
    fastingRequirements: {
      required: true,
      details: "Take on empty stomach - at least 2 hours after eating, no food for 30-60 minutes after."
    },
    foodInteractions: ["CRITICAL: Food (especially carbs and fats) significantly blunts GH release"],
    frequencyNotes: "Typically 1-2 times daily. Most common: once before bed.",
    spacingFromOthers: [
      { conflictsWith: "mk677", reason: "Both stimulate GH release", recommendation: "If using both, MK-677 at night, CJC/Ipa in morning." }
    ]
  },
  {
    peptideId: "mk677",
    peptideName: "MK-677 (Ibutamoren)",
    optimalTimeOfDay: "bedtime",
    fastingRequirements: {
      required: false,
      details: "No fasting required, but taking at bedtime helps sleep through appetite increase."
    },
    foodInteractions: ["Dramatically increases appetite - expect hunger 30-60 min after dosing"],
    frequencyNotes: "Once daily. Can be taken continuously or cycled (5 on/2 off).",
    spacingFromOthers: [
      { conflictsWith: "cjc1295_ipamorelin", reason: "Both stimulate GH release", recommendation: "If using both, take at different times of day." }
    ]
  },
  {
    peptideId: "melanotan2",
    peptideName: "Melanotan 2",
    optimalTimeOfDay: "bedtime",
    fastingRequirements: {
      required: false,
      details: "No fasting required. Taking before bed helps sleep through nausea."
    },
    foodInteractions: ["No significant food interactions, but empty stomach may increase nausea"],
    frequencyNotes: "Loading phase: Daily for 1-2 weeks at low dose. Maintenance: 1-2x weekly.",
    spacingFromOthers: [
      { conflictsWith: "pt141", reason: "Both affect melanocortin receptors", recommendation: "Don't use same day to avoid receptor desensitization." }
    ]
  }
];

export function getTimingInfo(peptideId: string): PeptideTiming | undefined {
  return timingDatabase.find(t => t.peptideId.toLowerCase() === peptideId.toLowerCase());
}

export function checkTimingConflict(peptide1: string, peptide2: string): { hasConflict: boolean; reason?: string; recommendation?: string } {
  const timing1 = timingDatabase.find(t => t.peptideId.toLowerCase() === peptide1.toLowerCase());
  if (!timing1) return { hasConflict: false };
  
  const conflict = timing1.spacingFromOthers.find(c => c.conflictsWith.toLowerCase() === peptide2.toLowerCase());
  if (conflict) {
    return { hasConflict: true, reason: conflict.reason, recommendation: conflict.recommendation };
  }
  
  const timing2 = timingDatabase.find(t => t.peptideId.toLowerCase() === peptide2.toLowerCase());
  if (!timing2) return { hasConflict: false };
  
  const reverseConflict = timing2.spacingFromOthers.find(c => c.conflictsWith.toLowerCase() === peptide1.toLowerCase());
  if (reverseConflict) {
    return { hasConflict: true, reason: reverseConflict.reason, recommendation: reverseConflict.recommendation };
  }
  
  return { hasConflict: false };
}

export function getOptimalSchedule(peptides: string[]): string[] {
  const schedule: string[] = [];
  const timings = peptides
    .map(id => timingDatabase.find(t => t.peptideId.toLowerCase() === id.toLowerCase()))
    .filter(Boolean) as PeptideTiming[];
  
  if (timings.length === 0) {
    return ["No timing information available for the specified peptides."];
  }
  
  const morning = timings.filter(t => t.optimalTimeOfDay === 'morning');
  const bedtime = timings.filter(t => t.optimalTimeOfDay === 'bedtime');
  const anytime = timings.filter(t => t.optimalTimeOfDay === 'anytime');
  const preActivity = timings.filter(t => t.optimalTimeOfDay === 'pre-activity');
  
  if (morning.length > 0) {
    schedule.push(`MORNING: ${morning.map(t => t.peptideName).join(', ')}`);
  }
  if (anytime.length > 0) {
    schedule.push(`ANYTIME: ${anytime.map(t => t.peptideName).join(', ')}`);
  }
  if (preActivity.length > 0) {
    schedule.push(`PRE-ACTIVITY: ${preActivity.map(t => t.peptideName).join(', ')} (45 min - 2 hours before)`);
  }
  if (bedtime.length > 0) {
    const fastingNeeded = bedtime.some(t => t.fastingRequirements.required);
    schedule.push(`BEDTIME${fastingNeeded ? ' (fasted)' : ''}: ${bedtime.map(t => t.peptideName).join(', ')}`);
  }
  
  const conflicts: string[] = [];
  for (let i = 0; i < peptides.length; i++) {
    for (let j = i + 1; j < peptides.length; j++) {
      const conflict = checkTimingConflict(peptides[i], peptides[j]);
      if (conflict.hasConflict && conflict.recommendation) {
        conflicts.push(`Note: ${conflict.recommendation}`);
      }
    }
  }
  
  return [...schedule, ...conflicts];
}
