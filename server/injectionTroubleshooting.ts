/**
 * Injection Technique Troubleshooting Database
 */

export interface InjectionIssue {
  issue: string;
  aliases: string[];
  commonCauses: string[];
  solutions: string[];
  prevention: string[];
  severity: 'minor' | 'moderate' | 'serious';
  seekHelpIf: string[];
}

export const injectionTroubleshootingDatabase: InjectionIssue[] = [
  {
    issue: "Injection Too Shallow (Subdermal Bleb)",
    aliases: ["bump under skin", "blister at injection", "raised lump", "fluid under skin"],
    commonCauses: [
      "Needle didn't penetrate deep enough",
      "Wrong angle (too horizontal)",
      "Using too short needle"
    ],
    solutions: [
      "The peptide will still absorb, just more slowly - don't re-inject",
      "Gently massage the area to help dispersion",
      "Apply warm compress to help absorption"
    ],
    prevention: [
      "Use 45-degree angle for subcutaneous injection",
      "Pinch at least 1 inch of skin if lean",
      "Insert needle fully before injecting"
    ],
    severity: "minor",
    seekHelpIf: ["Bleb doesn't resolve after several hours", "Area becomes red, hot, or painful"]
  },
  {
    issue: "Cold Peptide Injection Pain",
    aliases: ["burned when injecting", "stinging injection", "painful going in", "burning sensation"],
    commonCauses: [
      "Injecting peptide straight from refrigerator",
      "Cold solution causes vasoconstriction and pain"
    ],
    solutions: [
      "Pain should resolve within minutes",
      "Warm compress can help"
    ],
    prevention: [
      "Remove vial from fridge 10-15 minutes before injection",
      "Roll vial between palms to warm (don't shake)",
      "Never microwave or use hot water"
    ],
    severity: "minor",
    seekHelpIf: ["Pain persists for more than 30 minutes"]
  },
  {
    issue: "Bleeding After Injection",
    aliases: ["blood after injection", "injection bleeding", "blood came out", "bleeding from site"],
    commonCauses: [
      "Hit a small blood vessel (capillary)",
      "Normal occurrence, especially in vascular areas",
      "Blood thinners or supplements (fish oil, vitamin E)"
    ],
    solutions: [
      "Apply gentle pressure with clean gauze for 1-2 minutes",
      "Small amount of blood is completely normal",
      "Peptide was still delivered - do not re-dose"
    ],
    prevention: [
      "Rotate injection sites to allow healing",
      "Avoid injecting near visible veins",
      "Be aware if taking blood thinners"
    ],
    severity: "minor",
    seekHelpIf: ["Bleeding doesn't stop after 5 minutes of pressure", "Large amount of blood"]
  },
  {
    issue: "Bruising",
    aliases: ["bruise at injection site", "black and blue", "injection bruise", "purple mark"],
    commonCauses: [
      "Hit a small blood vessel during injection",
      "Moving needle while inserted",
      "Blood thinners or supplements",
      "Injecting too quickly"
    ],
    solutions: [
      "Bruising is cosmetic and harmless",
      "Ice pack for 10-15 minutes can minimize",
      "Bruise will resolve in 1-2 weeks",
      "Peptide absorption is NOT affected"
    ],
    prevention: [
      "Inject slowly (10 seconds per mL)",
      "Keep needle steady during injection",
      "Don't rub site aggressively after",
      "Apply gentle pressure after removing needle"
    ],
    severity: "minor",
    seekHelpIf: ["Bruise is very large (>2 inches)", "Bruise is painful and growing", "Accompanied by hard lump"]
  },
  {
    issue: "Medication Leaking Back Out",
    aliases: ["peptide leaking", "liquid coming out", "wet after injection", "medication escaped"],
    commonCauses: [
      "Removing needle too quickly after injection",
      "Not waiting after depressing plunger",
      "Injecting too much volume in one site",
      "Injecting too shallow"
    ],
    solutions: [
      "Small amount of leakage is normal - minimal loss",
      "Do NOT re-inject to make up for leaked amount",
      "Absorption from depot under skin continues"
    ],
    prevention: [
      "Count to 10 after fully depressing plunger before withdrawing",
      "For larger volumes (>0.5mL), split into two injection sites",
      "Ensure proper depth - needle should be fully inserted",
      "Z-track technique: pull skin to side, inject, release"
    ],
    severity: "minor",
    seekHelpIf: ["Large amount leaked (most of dose)", "Happens consistently despite proper technique"]
  },
  {
    issue: "Same Site Overuse (Lipohypertrophy)",
    aliases: ["hard lump at injection site", "fatty lump", "dent in skin", "scar tissue"],
    commonCauses: [
      "Injecting in same spot repeatedly",
      "Not rotating injection sites"
    ],
    solutions: [
      "STOP using affected area for at least 4-6 weeks",
      "Switch to completely different injection area",
      "Lumps may take months to resolve"
    ],
    prevention: [
      "Rotate injection sites systematically",
      "Keep injection sites at least 1 inch apart",
      "Alternate between abdomen, thighs, and arms"
    ],
    severity: "moderate",
    seekHelpIf: ["Lump is painful or growing", "Signs of infection"]
  },
  {
    issue: "Infection at Injection Site",
    aliases: ["infected injection site", "pus at site", "red and hot", "spreading redness"],
    commonCauses: [
      "Poor sterile technique",
      "Not swabbing site with alcohol",
      "Reusing needles",
      "Contaminated vial"
    ],
    solutions: [
      "SEEK MEDICAL ATTENTION - antibiotics likely needed",
      "Mark borders of redness to track spread",
      "Do NOT squeeze or try to drain"
    ],
    prevention: [
      "ALWAYS swab injection site with alcohol, let dry",
      "NEVER reuse needles or syringes",
      "Use bacteriostatic water (has preservative)",
      "Don't touch needle after uncapping"
    ],
    severity: "serious",
    seekHelpIf: [
      "Any spreading redness",
      "Red streaks extending from site",
      "Fever",
      "Pus or discharge"
    ]
  },
  {
    issue: "Air Bubble in Syringe",
    aliases: ["air in syringe", "bubble in needle", "injected air bubble"],
    commonCauses: ["Not properly expelling air before injection"],
    solutions: [
      "Small air bubbles in subQ injection are NOT dangerous",
      "SubQ air is absorbed harmlessly",
      "No need to re-dose"
    ],
    prevention: [
      "Tap syringe with needle up to move bubbles to top",
      "Push plunger slowly to expel air"
    ],
    severity: "minor",
    seekHelpIf: ["This is almost never a concern for subcutaneous injections"]
  }
];

export function findMatchingIssue(description: string): InjectionIssue | undefined {
  const searchTerms = description.toLowerCase();
  for (const issue of injectionTroubleshootingDatabase) {
    if (issue.issue.toLowerCase().includes(searchTerms)) return issue;
    for (const alias of issue.aliases) {
      if (searchTerms.includes(alias.toLowerCase())) return issue;
    }
  }
  return undefined;
}
