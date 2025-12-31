/**
 * Comprehensive Side Effects Database for Peptide Mentor Mode
 */

export type SeverityLevel = 'normal' | 'monitor' | 'urgent';

export interface SideEffect {
  name: string;
  aliases: string[];
  severity: SeverityLevel;
  typicalOnset: string;
  typicalDuration: string;
  frequency: string;
  managementTips: string[];
  whenToWorry: string[];
  relatedTo?: string[];
}

export interface PeptideSideEffectProfile {
  peptideId: string;
  peptideName: string;
  commonSideEffects: SideEffect[];
  rareSideEffects: SideEffect[];
  redFlags: string[];
  firstWeekExpectations: string;
  longTermConsiderations: string;
}

export const sideEffectsDatabase: PeptideSideEffectProfile[] = [
  // SEMAGLUTIDE
  {
    peptideId: "semaglutide",
    peptideName: "Semaglutide",
    commonSideEffects: [
      {
        name: "Nausea",
        aliases: ["queasy", "sick to stomach", "want to throw up", "upset stomach"],
        severity: "normal",
        typicalOnset: "Within 24-48 hours of injection",
        typicalDuration: "2-4 weeks, often improves with continued use",
        frequency: "Very common (40-50% of users)",
        managementTips: [
          "Eat smaller, more frequent meals",
          "Avoid fatty, greasy, or fried foods",
          "Take injection before bed to sleep through worst of it",
          "Ginger capsules or tea 30 min before eating",
          "Ondansetron (Zofran) 4mg - ask provider for prescription",
          "Stay hydrated with small sips throughout day",
          "Titrate dose slowly - don't rush to increase"
        ],
        whenToWorry: [
          "Nausea persists beyond 4-6 weeks without improvement",
          "Unable to keep any food or water down for 24+ hours",
          "Accompanied by severe abdominal pain",
          "Signs of dehydration (dark urine, dizziness, rapid heartbeat)"
        ]
      },
      {
        name: "Constipation",
        aliases: ["can't poop", "backed up", "hard stool", "bowel issues"],
        severity: "normal",
        typicalOnset: "First 1-2 weeks",
        typicalDuration: "Often ongoing but manageable",
        frequency: "Common (20-30%)",
        managementTips: [
          "Increase fiber intake gradually",
          "Drink MORE water - at least 64oz daily",
          "Magnesium citrate 200-400mg at bedtime",
          "Daily movement/walking helps gut motility"
        ],
        whenToWorry: [
          "No bowel movement for 5+ days",
          "Severe abdominal pain or bloating",
          "Blood in stool"
        ]
      },
      {
        name: "Fatigue",
        aliases: ["tired", "exhausted", "no energy", "sluggish"],
        severity: "normal",
        typicalOnset: "First 2-4 weeks",
        typicalDuration: "Usually improves as body adjusts",
        frequency: "Common (15-25%)",
        managementTips: [
          "Ensure adequate protein intake",
          "Check you're not under-eating - minimum 1000-1200 calories",
          "Stay hydrated",
          "Electrolytes (sodium, potassium, magnesium)"
        ],
        whenToWorry: [
          "Fatigue so severe you can't perform daily activities",
          "Accompanied by rapid heartbeat or shortness of breath"
        ]
      },
      {
        name: "Injection Site Reaction",
        aliases: ["red spot", "bump where I injected", "itchy injection site"],
        severity: "normal",
        typicalOnset: "Within hours of injection",
        typicalDuration: "24-72 hours",
        frequency: "Common (10-15%)",
        managementTips: [
          "Rotate injection sites",
          "Let solution warm to room temperature before injecting",
          "Use proper technique - 45° angle for subQ"
        ],
        whenToWorry: [
          "Spreading redness beyond 2 inches",
          "Hot to touch with fever",
          "Pus or discharge from site"
        ]
      },
      {
        name: "Sulfur Burps",
        aliases: ["rotten egg burps", "gross burps", "smelly burps"],
        severity: "normal",
        typicalOnset: "Within days of starting or increasing dose",
        typicalDuration: "Can persist, often food-related",
        frequency: "Common with GLP-1s",
        managementTips: [
          "Avoid high-fat foods - this is the #1 trigger",
          "Pepto-Bismol can help",
          "Eat slower, smaller portions"
        ],
        whenToWorry: [
          "Accompanied by severe abdominal pain",
          "Continuous vomiting"
        ]
      }
    ],
    rareSideEffects: [
      {
        name: "Pancreatitis",
        aliases: ["severe stomach pain", "pain radiating to back"],
        severity: "urgent",
        typicalOnset: "Can occur anytime",
        typicalDuration: "Requires medical treatment",
        frequency: "Rare (<1%)",
        managementTips: [
          "STOP medication immediately",
          "Seek emergency medical care"
        ],
        whenToWorry: [
          "Severe, persistent abdominal pain",
          "Pain radiating to back",
          "Nausea/vomiting that won't stop"
        ]
      }
    ],
    redFlags: [
      "Severe abdominal pain that doesn't resolve",
      "Signs of allergic reaction (facial swelling, difficulty breathing, hives)",
      "Symptoms of thyroid tumor (lump in neck, difficulty swallowing, hoarseness)",
      "Signs of severe dehydration (confusion, rapid heartbeat, no urination)",
      "Yellowing of skin or eyes (jaundice)"
    ],
    firstWeekExpectations: "Most users experience some nausea and decreased appetite in the first week. This is normal and typically improves. Start at lowest dose (0.25mg) and give your body 4 weeks to adjust before increasing.",
    longTermConsiderations: "Most side effects diminish significantly with continued use. Monitor for hair thinning (sign of too-rapid weight loss). Regular lab work recommended."
  },
  
  // BPC-157
  {
    peptideId: "bpc157",
    peptideName: "BPC-157",
    commonSideEffects: [
      {
        name: "Injection Site Irritation",
        aliases: ["red where I injected", "sore injection spot", "bump at site"],
        severity: "normal",
        typicalOnset: "Within hours",
        typicalDuration: "24-72 hours",
        frequency: "Common (15-20%)",
        managementTips: [
          "Rotate injection sites",
          "Let peptide warm to room temperature",
          "Use bacteriostatic water, not sterile water"
        ],
        whenToWorry: [
          "Spreading redness with heat",
          "Pus or discharge",
          "Fever"
        ]
      },
      {
        name: "Headache",
        aliases: ["head pain", "head hurts"],
        severity: "normal",
        typicalOnset: "First few days of use",
        typicalDuration: "Usually resolves with continued use",
        frequency: "Uncommon (5-10%)",
        managementTips: [
          "Stay well hydrated",
          "OTC pain relief (acetaminophen, ibuprofen)",
          "Reduce dose if severe"
        ],
        whenToWorry: [
          "Severe headache unlike any before",
          "Headache with vision changes",
          "Headache with stiff neck"
        ]
      },
      {
        name: "Dizziness",
        aliases: ["dizzy", "lightheaded", "woozy"],
        severity: "normal",
        typicalOnset: "Within first hour of injection",
        typicalDuration: "Usually brief (15-30 minutes)",
        frequency: "Uncommon (5-10%)",
        managementTips: [
          "Inject while sitting or lying down",
          "Stay hydrated",
          "Don't stand up quickly after injection"
        ],
        whenToWorry: [
          "Fainting",
          "Persistent dizziness lasting hours"
        ]
      }
    ],
    rareSideEffects: [],
    redFlags: [
      "Signs of allergic reaction (swelling, hives, difficulty breathing)",
      "Severe headache with vision changes or stiff neck",
      "Infection signs at injection site (spreading redness, pus, fever)"
    ],
    firstWeekExpectations: "BPC-157 is generally very well tolerated. Most users experience no significant side effects. Some mild injection site irritation may occur. Many report improved sense of wellbeing and reduced inflammation within the first week.",
    longTermConsiderations: "Long-term human safety data is limited. Most recommend cycling (4-8 weeks on, 2-4 weeks off). Avoid if any cancer history."
  },
  
  // PT-141
  {
    peptideId: "pt141",
    peptideName: "PT-141 (Bremelanotide)",
    commonSideEffects: [
      {
        name: "Nausea",
        aliases: ["queasy", "sick feeling", "want to throw up"],
        severity: "normal",
        typicalOnset: "30-60 minutes after injection",
        typicalDuration: "2+ hours (can overlap with desired effects)",
        frequency: "Very common (40%)",
        managementTips: [
          "Ondansetron (Zofran) 4mg 30 minutes BEFORE injection",
          "Ginger capsules pre-treatment",
          "Inject 2-3 hours before planned activity (nausea passes, effects remain)",
          "First dose is usually worst - improves with subsequent use"
        ],
        whenToWorry: [
          "Severe vomiting that won't stop",
          "Signs of dehydration"
        ]
      },
      {
        name: "Flushing",
        aliases: ["red face", "hot feeling", "warm flush"],
        severity: "normal",
        typicalOnset: "Within 30-60 minutes",
        typicalDuration: "1-2 hours",
        frequency: "Common (20%)",
        managementTips: [
          "This is normal melanocortin activation",
          "Cool environment helps",
          "Usually diminishes with continued use"
        ],
        whenToWorry: [
          "Accompanied by difficulty breathing (allergic reaction)",
          "Spreading hives or rash"
        ]
      },
      {
        name: "Hyperpigmentation",
        aliases: ["skin darkening", "dark spots", "moles darker", "gum darkening"],
        severity: "monitor",
        typicalOnset: "With repeated use, especially >8 doses/month",
        typicalDuration: "May be PERMANENT",
        frequency: "1% at ≤8 doses/month; 38% with daily use",
        managementTips: [
          "STRICT limit: no more than 8 doses per month",
          "Never use daily",
          "Monitor moles for changes"
        ],
        whenToWorry: [
          "Any mole changing shape, color, or size",
          "New dark spots appearing"
        ]
      }
    ],
    rareSideEffects: [],
    redFlags: [
      "Allergic reaction (swelling, hives, difficulty breathing)",
      "Chest pain or palpitations",
      "Mole changes (size, shape, color) - see dermatologist",
      "Priapism in men (erection >4 hours) - medical emergency"
    ],
    firstWeekExpectations: "First dose typically has most nausea - 40% experience it. Pre-treat with Zofran. Effects begin ~45-60 min after injection and last several hours. Inject 2-3 hours before planned activity to let nausea pass.",
    longTermConsiderations: "CRITICAL: Max 8 doses per month to avoid permanent hyperpigmentation. Not for daily use. Not recommended for cardiovascular disease or uncontrolled hypertension."
  },
  
  // CJC-1295/IPAMORELIN
  {
    peptideId: "cjc1295_ipamorelin",
    peptideName: "CJC-1295/Ipamorelin",
    commonSideEffects: [
      {
        name: "Water Retention",
        aliases: ["bloated", "puffy", "swollen", "retaining water", "face puffy"],
        severity: "normal",
        typicalOnset: "First 1-2 weeks",
        typicalDuration: "Usually resolves or stabilizes by week 4",
        frequency: "Common (20-30%)",
        managementTips: [
          "This is common with GH-releasing peptides",
          "Reduce sodium intake",
          "Stay well hydrated (paradoxically helps)",
          "May need to reduce dose temporarily"
        ],
        whenToWorry: [
          "Severe swelling in hands/feet affecting function",
          "Swelling with shortness of breath"
        ]
      },
      {
        name: "Joint Stiffness",
        aliases: ["achy joints", "stiff in morning", "carpal tunnel feeling"],
        severity: "normal",
        typicalOnset: "First 2-4 weeks",
        typicalDuration: "Often improves, may need dose adjustment",
        frequency: "Common with GH peptides",
        managementTips: [
          "Related to GH increase - sign it's working",
          "Reduce dose if severe",
          "Stretch regularly"
        ],
        whenToWorry: [
          "Severe carpal tunnel symptoms (numbness, weakness in hands)"
        ]
      },
      {
        name: "Vivid Dreams",
        aliases: ["crazy dreams", "intense dreams", "sleeping deeply"],
        severity: "normal",
        typicalOnset: "First week",
        typicalDuration: "Ongoing (this is actually a benefit)",
        frequency: "Very common",
        managementTips: [
          "This is typically a POSITIVE effect",
          "GH peptides enhance deep sleep",
          "Take before bed to maximize this effect"
        ],
        whenToWorry: [
          "Nightmares significantly affecting sleep quality"
        ]
      }
    ],
    rareSideEffects: [
      {
        name: "Blood Sugar Changes",
        aliases: ["feeling shaky", "sugar crash"],
        severity: "monitor",
        typicalOnset: "Variable",
        typicalDuration: "Ongoing while using",
        frequency: "Uncommon, more common in diabetics",
        managementTips: [
          "GH can affect insulin sensitivity",
          "Monitor blood sugar if diabetic or pre-diabetic"
        ],
        whenToWorry: [
          "Significant blood sugar swings",
          "Diabetes becoming harder to control"
        ]
      }
    ],
    redFlags: [
      "Severe headache (intracranial pressure concern)",
      "Vision changes",
      "Severe carpal tunnel (numbness, weakness, dropping things)",
      "Any cancer history - GH peptides contraindicated"
    ],
    firstWeekExpectations: "Many notice improved sleep quality within the first few days. Some water retention and mild joint stiffness may occur. Vivid dreams are common and indicate the peptides are working. Take before bed for best results.",
    longTermConsiderations: "Body composition changes typically visible at 8-12 weeks. Cycle 8-12 weeks on, 4 weeks off. Not for use if any cancer history."
  },
  
  // MK-677
  {
    peptideId: "mk677",
    peptideName: "MK-677 (Ibutamoren)",
    commonSideEffects: [
      {
        name: "Increased Appetite",
        aliases: ["hungry all the time", "can't stop eating", "ravenous"],
        severity: "normal",
        typicalOnset: "Within first few days",
        typicalDuration: "Often persists but may decrease after 2-4 weeks",
        frequency: "Very common (expected effect)",
        managementTips: [
          "Take before bed - sleep through hunger peak",
          "This is the ghrelin mechanism working",
          "Often decreases after initial weeks"
        ],
        whenToWorry: [
          "Unable to control eating affecting goals"
        ]
      },
      {
        name: "Water Retention",
        aliases: ["bloated", "puffy", "holding water", "face swollen"],
        severity: "normal",
        typicalOnset: "First 1-2 weeks",
        typicalDuration: "Often improves after 4 weeks",
        frequency: "Common",
        managementTips: [
          "Reduce sodium intake",
          "Stay hydrated",
          "Lower dose if severe"
        ],
        whenToWorry: [
          "Severe edema affecting mobility",
          "Shortness of breath with swelling"
        ]
      },
      {
        name: "Blood Sugar Elevation",
        aliases: ["sugar high", "glucose up", "A1C increased"],
        severity: "monitor",
        typicalOnset: "Can occur with ongoing use",
        typicalDuration: "While using - may persist",
        frequency: "Significant concern",
        managementTips: [
          "MK-677 can significantly affect insulin sensitivity",
          "Monitor fasting glucose regularly",
          "Not recommended for diabetics"
        ],
        whenToWorry: [
          "Fasting glucose consistently elevated",
          "Symptoms of high blood sugar"
        ]
      }
    ],
    rareSideEffects: [],
    redFlags: [
      "Significant blood sugar elevation",
      "Severe edema with breathing difficulty",
      "Cancer history (GH stimulation contraindicated)"
    ],
    firstWeekExpectations: "Expect significant appetite increase within first few days. Take before bed to sleep through hunger. Sleep quality typically improves noticeably.",
    longTermConsiderations: "Blood sugar management is a real concern with long-term use. Not recommended for diabetics. Cancer history is absolute contraindication."
  },
  
  // MELANOTAN 2
  {
    peptideId: "melanotan2",
    peptideName: "Melanotan 2",
    commonSideEffects: [
      {
        name: "Nausea",
        aliases: ["queasy", "sick to stomach"],
        severity: "normal",
        typicalOnset: "Within 1-2 hours of injection",
        typicalDuration: "2-4 hours",
        frequency: "Very common initially",
        managementTips: [
          "Start with very low dose (0.1mg)",
          "Take before bed to sleep through it",
          "Usually improves with continued use"
        ],
        whenToWorry: [
          "Severe vomiting",
          "Unable to keep fluids down"
        ]
      },
      {
        name: "Flushing",
        aliases: ["red face", "hot feeling", "flushed"],
        severity: "normal",
        typicalOnset: "Within 30 minutes",
        typicalDuration: "1-2 hours",
        frequency: "Common",
        managementTips: [
          "Normal melanocortin response",
          "Usually decreases with continued use"
        ],
        whenToWorry: [
          "Accompanied by difficulty breathing",
          "Hives or swelling"
        ]
      },
      {
        name: "Mole Darkening",
        aliases: ["moles getting darker", "new freckles", "spots darker"],
        severity: "monitor",
        typicalOnset: "With continued use",
        typicalDuration: "May be permanent",
        frequency: "Expected effect",
        managementTips: [
          "Monitor ALL moles before starting - photograph them",
          "Check moles monthly for changes",
          "Use sunscreen on face to prevent uneven tanning"
        ],
        whenToWorry: [
          "Mole changing shape or border",
          "Mole growing rapidly",
          "New irregular dark spots"
        ]
      }
    ],
    rareSideEffects: [],
    redFlags: [
      "Mole changes (shape, size, color, border) - see dermatologist immediately",
      "Priapism (erection >4 hours) - medical emergency",
      "Allergic reaction",
      "Melanoma history - absolute contraindication"
    ],
    firstWeekExpectations: "Loading phase: Start very low (0.1mg) due to nausea. Take before bed. Increased libido often noticed quickly. Photograph all moles before starting.",
    longTermConsiderations: "CRITICAL: Regular mole monitoring required. Not for use with melanoma history. Loading phase followed by maintenance (1-2x weekly)."
  }
];

// Helper functions
export function getSideEffectsByPeptide(peptideId: string): PeptideSideEffectProfile | undefined {
  return sideEffectsDatabase.find(p => p.peptideId.toLowerCase() === peptideId.toLowerCase());
}

export function isRedFlag(peptideId: string, symptomDescription: string): boolean {
  const profile = getSideEffectsByPeptide(peptideId);
  if (!profile) return false;
  
  const symptomLower = symptomDescription.toLowerCase();
  return profile.redFlags.some(flag => 
    flag.toLowerCase().split(/\s+/).some(word => 
      symptomLower.includes(word) && word.length > 3
    )
  );
}
