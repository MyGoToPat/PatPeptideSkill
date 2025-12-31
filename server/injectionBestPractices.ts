/**
 * Injection Preparation & Best Practices Database
 * Comprehensive guide for safe, comfortable peptide injections
 */

// ============================================
// PRE-INJECTION CHECKLIST
// ============================================

export interface PrepStep {
  order: number;
  step: string;
  details: string;
  why: string;
  commonMistake?: string;
  proTip?: string;
}

export const preInjectionChecklist: PrepStep[] = [
  {
    order: 1,
    step: "Remove peptide from refrigerator",
    details: "Take the vial out 10-15 minutes before you plan to inject. Let it sit at room temperature.",
    why: "Cold peptide solution causes stinging and burning when injected. Room temperature is much more comfortable.",
    commonMistake: "Injecting straight from the fridge because you're in a hurry.",
    proTip: "Set a timer on your phone. Use those 15 minutes to gather supplies and prep your space."
  },
  {
    order: 2,
    step: "Wash hands thoroughly",
    details: "Use soap and warm water for at least 20 seconds. Scrub palms, backs of hands, between fingers, and under nails. Dry with a clean towel.",
    why: "Your hands touch everything - bacteria on your hands can cause injection site infections.",
    commonMistake: "Quick rinse without soap, or not drying hands properly.",
    proTip: "Sing 'Happy Birthday' twice = 20 seconds of washing."
  },
  {
    order: 3,
    step: "Prepare a clean, flat workspace",
    details: "Clear a clean surface. Lay out: peptide vial, alcohol swabs (2-3), insulin syringe, sharps container, band-aid (optional).",
    why: "Having everything ready prevents you from touching contaminated surfaces mid-injection.",
    commonMistake: "Gathering supplies one at a time, contaminating hands between steps.",
    proTip: "Keep a dedicated 'injection kit' with all supplies together."
  },
  {
    order: 4,
    step: "Inspect the peptide solution",
    details: "Hold the vial up to light. Solution should be clear and colorless. Check for particles, cloudiness, or discoloration.",
    why: "Cloudy solution or particles may indicate contamination or degradation. Using compromised peptide risks infection or no effect.",
    commonMistake: "Not checking and injecting degraded or contaminated peptide.",
    proTip: "Write the reconstitution date on the vial with a marker. Discard after 4-6 weeks."
  },
  {
    order: 5,
    step: "Swab the vial top with alcohol",
    details: "Use a fresh alcohol swab to wipe the rubber stopper of the peptide vial. Let it air dry completely (15-30 seconds).",
    why: "The rubber stopper can harbor bacteria. Alcohol kills surface bacteria, but only if you let it dry - wet alcohol doesn't sterilize.",
    commonMistake: "Skipping this step, or inserting needle while still wet.",
    proTip: "Swab in one direction, not back and forth, to avoid redepositing bacteria."
  },
  {
    order: 6,
    step: "Draw up your dose",
    details: "Pull back plunger to draw air equal to your dose. Insert needle into vial, inject air, invert vial, draw peptide slowly. Check for bubbles.",
    why: "Air injection prevents vacuum in vial. Drawing slowly prevents bubbles. Correct dose = correct results.",
    commonMistake: "Not injecting air first (makes drawing harder), drawing too fast (creates bubbles).",
    proTip: "Pull slightly more than needed, then push back to your exact dose line - this pushes out tiny bubbles."
  },
  {
    order: 7,
    step: "Remove air bubbles",
    details: "Hold syringe needle-up. Tap/flick the barrel to move bubbles to the top. Gently push plunger until a tiny droplet appears at needle tip.",
    why: "Air bubbles take up space that should be peptide, meaning you get less than your intended dose.",
    commonMistake: "Obsessing over tiny bubbles. A small bubble in a subQ injection won't hurt you.",
    proTip: "One or two tiny bubbles are fine. The body absorbs small amounts of subQ air harmlessly."
  },
  {
    order: 8,
    step: "Choose and clean injection site",
    details: "Select site (see rotation guide). Use a NEW alcohol swab to clean the area in a circular motion from center outward. Let air dry COMPLETELY.",
    why: "Bacteria on skin can be pushed into the injection site. Alcohol needs to dry to be effective - injecting while wet stings AND doesn't sterilize.",
    commonMistake: "Not letting alcohol dry. Injecting through clothing. Reusing the same alcohol swab from the vial.",
    proTip: "Count to 30 after swabbing. If you feel coldness, it's not dry yet."
  }
];

// ============================================
// DURING INJECTION STEPS
// ============================================

export const duringInjectionSteps: PrepStep[] = [
  {
    order: 1,
    step: "Pinch the skin",
    details: "With your non-dominant hand, pinch 1-2 inches of skin and fat between thumb and forefinger. Lift gently away from muscle.",
    why: "Pinching creates a 'fat pocket' ensuring the needle goes into subcutaneous tissue, not muscle.",
    commonMistake: "Not pinching enough skin, or pinching too tightly (causes bruising).",
    proTip: "Relax the area first. Tense muscles make injection harder and more painful."
  },
  {
    order: 2,
    step: "Insert the needle",
    details: "Hold syringe like a dart or pencil. Insert needle smoothly at 45-degree angle (or 90° if you have more fat). Insert the full length of the needle.",
    why: "45° angle for subQ ensures you reach fat layer but not muscle. Hesitating or going too slow increases pain.",
    commonMistake: "Inserting at wrong angle, not inserting fully, hesitating mid-insertion.",
    proTip: "Quick, confident insertion hurts less than slow, tentative poking. Think 'dart throw' motion."
  },
  {
    order: 3,
    step: "Inject slowly",
    details: "Push the plunger slowly and steadily over 5-10 seconds. Don't rush.",
    why: "Slow injection allows the tissue to absorb the fluid gradually. Fast injection creates pressure and pain.",
    commonMistake: "Injecting in 1-2 seconds, causing stinging and backflow.",
    proTip: "Count slowly: 'one-one-thousand, two-one-thousand...' up to five or ten."
  },
  {
    order: 4,
    step: "Wait before withdrawing",
    details: "After plunger is fully depressed, wait 5-10 seconds before removing the needle.",
    why: "This allows the peptide to disperse into the tissue. Removing immediately can cause solution to leak back out.",
    commonMistake: "Pulling needle out immediately after injection.",
    proTip: "Count to 10 slowly. This also gives you a moment to relax."
  },
  {
    order: 5,
    step: "Withdraw the needle",
    details: "Pull the needle out at the same angle it went in. Do this smoothly in one motion.",
    why: "Changing angle during withdrawal can damage tissue or cause the needle to bend.",
    commonMistake: "Jerking the needle out, or withdrawing at a different angle.",
    proTip: "Release the pinched skin just before or as you withdraw."
  },
  {
    order: 6,
    step: "Apply gentle pressure",
    details: "Press an alcohol swab or clean cotton ball over the injection site for 10-30 seconds. Don't rub.",
    why: "Pressure stops any minor bleeding and helps seal the injection site. Rubbing can cause bruising.",
    commonMistake: "Rubbing the site vigorously, which increases bruising.",
    proTip: "If you see blood, it just means you nicked a tiny capillary. Totally normal and harmless."
  }
];

// ============================================
// POST-INJECTION STEPS
// ============================================

export const postInjectionSteps: PrepStep[] = [
  {
    order: 1,
    step: "Dispose of needle immediately",
    details: "Place the used syringe directly into a sharps container. Do NOT recap the needle.",
    why: "Recapping needles is the #1 cause of accidental needle sticks. Used needles can transmit infections.",
    commonMistake: "Recapping and saving syringes, or throwing in regular trash.",
    proTip: "Keep your sharps container right next to your injection area so disposal is automatic."
  },
  {
    order: 2,
    step: "Apply band-aid if needed",
    details: "If there's any bleeding, apply a small band-aid. Usually not necessary.",
    why: "Prevents blood on clothing. Also provides a visual reminder of where you injected.",
    proTip: "Some people use different colored band-aids to track injection days."
  },
  {
    order: 3,
    step: "Return peptide to refrigerator",
    details: "Promptly return the reconstituted peptide vial to the refrigerator (36-46°F / 2-8°C).",
    why: "Reconstituted peptides are stable refrigerated but degrade at room temperature.",
    commonMistake: "Leaving the vial out on the counter after injection.",
    proTip: "Store vial in a small box or bag in the fridge to protect from light."
  },
  {
    order: 4,
    step: "Log your injection",
    details: "Record: date, time, peptide, dose, injection site. Note any reactions.",
    why: "Tracking helps with site rotation, dose timing, and identifying patterns if you have side effects.",
    proTip: "Use a simple notes app, spreadsheet, or dedicated injection tracking app."
  }
];

// ============================================
// INJECTION SITES & ROTATION
// ============================================

export interface InjectionSite {
  name: string;
  location: string;
  bestFor: string[];
  avoidIf: string[];
  technique: string;
}

export const injectionSites: InjectionSite[] = [
  {
    name: "Abdomen",
    location: "At least 2 inches away from belly button in any direction. Avoid the area directly around the navel.",
    bestFor: ["Most peptides", "GLP-1s (semaglutide, tirzepatide)", "BPC-157 (systemic)", "GH peptides"],
    avoidIf: ["Recent abdominal surgery", "Stretch marks (less predictable absorption)", "Bruised or scarred areas"],
    technique: "Pinch 1-2 inches of skin. 45° angle for lean individuals, up to 90° if more fat. Most popular site due to ease of access."
  },
  {
    name: "Thigh (front/outer)",
    location: "Front or outer middle third of the thigh, between knee and hip.",
    bestFor: ["Most peptides", "Good alternative when abdomen needs rest", "Larger volume injections"],
    avoidIf: ["Very lean thighs with little fat", "Areas with visible veins"],
    technique: "Sit down with thigh relaxed. Pinch skin if lean. 45° angle. Outer thigh often has more fat than front."
  },
  {
    name: "Back of upper arm",
    location: "Fleshy area on the back of the upper arm, between shoulder and elbow.",
    bestFor: ["Smaller volume injections", "When other sites need rest"],
    avoidIf: ["Very lean arms", "Difficulty self-injecting (hard to reach)"],
    technique: "Usually requires help from another person, or practice in front of a mirror. Pinch skin and inject at 45°."
  },
  {
    name: "Lower back / love handles",
    location: "Fleshy area above the hip, to the side of the lower back.",
    bestFor: ["Those with more fat in this area", "Alternative rotation site"],
    avoidIf: ["Difficulty reaching"],
    technique: "Pinch the skin on your side. Can be done standing or sitting. 45-90° depending on fat amount."
  },
  {
    name: "Local injection (near injury)",
    location: "Subcutaneous tissue near but not directly into the injury site.",
    bestFor: ["BPC-157 for localized healing", "TB-500 near injury"],
    avoidIf: ["Infected areas", "Open wounds", "Directly into joints"],
    technique: "Inject into subQ fat as close to the injury as practical. Not INTO the injured tissue - nearby so it can migrate."
  }
];

export const siteRotationStrategy = {
  description: "Rotating injection sites prevents lipohypertrophy (fatty lumps), scar tissue buildup, and ensures consistent absorption.",
  minimumDistance: "Keep injections at least 1 inch (2.5 cm) apart from previous sites.",
  restPeriod: "Allow each specific spot to rest 1-2 weeks before reusing.",
  
  abdominalClockMethod: {
    description: "Divide your abdomen into 8-12 zones like a clock face around your belly button. Inject in a different zone each time, moving clockwise.",
    zones: [
      "12 o'clock (above navel)",
      "1-2 o'clock (upper right)",
      "3 o'clock (right side)",
      "4-5 o'clock (lower right)",
      "6 o'clock (below navel)",
      "7-8 o'clock (lower left)",
      "9 o'clock (left side)",
      "10-11 o'clock (upper left)"
    ]
  }
};

// ============================================
// COMMON MISTAKES TO AVOID
// ============================================

export interface CommonMistake {
  mistake: string;
  whyBad: string;
  consequence: string;
  correctApproach: string;
  frequency: "very common" | "common" | "occasional";
}

export const commonMistakes: CommonMistake[] = [
  {
    mistake: "Reusing needles",
    whyBad: "Needles dull after one use, and bacteria can colonize inside the syringe.",
    consequence: "More painful injections, higher infection risk, potential for needle breakage.",
    correctApproach: "ALWAYS use a fresh needle for each injection. They cost $0.15-0.25 each.",
    frequency: "common"
  },
  {
    mistake: "Not letting alcohol dry",
    whyBad: "Wet alcohol doesn't sterilize - it needs to evaporate to kill bacteria. Also, injecting through wet alcohol stings.",
    consequence: "Increased infection risk, unnecessary stinging pain.",
    correctApproach: "Wait 15-30 seconds after swabbing until the skin is completely dry.",
    frequency: "very common"
  },
  {
    mistake: "Injecting cold peptide",
    whyBad: "Cold solution causes vasoconstriction and irritates nerve endings in the tissue.",
    consequence: "Burning, stinging sensation that can last several minutes.",
    correctApproach: "Remove peptide from fridge 10-15 minutes before injection. Roll vial between palms to gently warm (never microwave or use hot water).",
    frequency: "very common"
  },
  {
    mistake: "Injecting through clothing",
    whyBad: "Clothing fibers and bacteria can be pushed into the injection site.",
    consequence: "Increased infection risk, fibers can cause irritation.",
    correctApproach: "Always inject on clean, bare skin that has been swabbed with alcohol.",
    frequency: "occasional"
  },
  {
    mistake: "Not rotating injection sites",
    whyBad: "Repeated trauma to the same tissue causes scar tissue and lipohypertrophy (fatty lumps).",
    consequence: "Hard lumps under skin, erratic absorption, more painful injections over time.",
    correctApproach: "Use the clock method or region rotation. Keep a log. Never inject the same spot twice in a row.",
    frequency: "common"
  },
  {
    mistake: "Shaking the vial",
    whyBad: "Vigorous shaking can damage protein structure through denaturation.",
    consequence: "Reduced potency, ineffective peptide, wasted money.",
    correctApproach: "SWIRL gently. Roll vial between palms. Let bubbles settle before drawing.",
    frequency: "common"
  },
  {
    mistake: "Injecting too fast",
    whyBad: "Rapid injection creates tissue pressure and doesn't allow the solution to disperse properly.",
    consequence: "Pain, stinging, backflow of solution, potential for subdermal bleb (raised bump).",
    correctApproach: "Inject slowly over 5-10 seconds. Count if needed.",
    frequency: "common"
  },
  {
    mistake: "Not cleaning the vial top",
    whyBad: "Rubber stoppers can harbor bacteria from handling and storage.",
    consequence: "Bacteria introduced into the vial, contaminating your peptide supply.",
    correctApproach: "Swab the rubber stopper with alcohol EVERY time before inserting a needle.",
    frequency: "very common"
  },
  {
    mistake: "Touching the needle",
    whyBad: "Your fingers have bacteria that transfer to the needle.",
    consequence: "Introducing bacteria into injection site or vial.",
    correctApproach: "Never touch the needle tip. If you accidentally do, discard and use a new needle.",
    frequency: "occasional"
  },
  {
    mistake: "Storing reconstituted peptide at room temperature",
    whyBad: "Peptides in solution degrade rapidly without refrigeration.",
    consequence: "Loss of potency, potential bacterial growth, wasted peptide.",
    correctApproach: "Always refrigerate immediately after use. Never freeze reconstituted peptides.",
    frequency: "occasional"
  },
  {
    mistake: "Using sterile water instead of bacteriostatic water",
    whyBad: "Sterile water has no preservative. Once opened, bacteria can grow.",
    consequence: "Contamination of multi-use vials, potential infection.",
    correctApproach: "Use bacteriostatic water (BAC) for any vial you'll use more than once. BAC contains 0.9% benzyl alcohol which prevents bacterial growth.",
    frequency: "common"
  }
];

// ============================================
// SUPPLIES CHECKLIST
// ============================================

export const suppliesChecklist = [
  {
    item: "Insulin syringes",
    specification: "U-100, 0.5mL or 1mL. 29-31 gauge needle, 1/2 inch length for subQ."
  },
  {
    item: "Alcohol swabs",
    specification: "70% isopropyl alcohol prep pads, individually wrapped."
  },
  {
    item: "Bacteriostatic water (BAC)",
    specification: "Sterile water with 0.9% benzyl alcohol preservative. 30mL vials."
  },
  {
    item: "Sharps container",
    specification: "FDA-cleared sharps container, or thick plastic container with lid."
  },
  {
    item: "Band-aids",
    specification: "Small round or square bandages (optional)."
  }
];

// ============================================
// PAIN REDUCTION TIPS
// ============================================

export const painReductionTips: string[] = [
  "Let peptide warm to room temperature (10-15 min out of fridge) - #1 pain reducer",
  "Let alcohol dry completely before injecting - wet alcohol stings",
  "Relax the injection area - tense muscles hurt more",
  "Insert needle quickly and confidently - hesitation increases pain",
  "Inject slowly - fast injection causes tissue pressure and pain",
  "Use a fresh needle every time - dull needles hurt",
  "Rotate sites - previously used sites are more sensitive",
  "Ice the area for 1-2 minutes before injection (numbs the skin)",
  "Take a deep breath and exhale as you insert - helps you relax",
  "Consider 31G needles if 29G feels uncomfortable (thinner = less pain)"
];

// ============================================
// QUICK REFERENCE CARD
// ============================================

export const quickReferenceCard = `
PEPTIDE INJECTION QUICK REFERENCE

BEFORE (5-15 min ahead)
□ Remove peptide from fridge to warm
□ Wash hands thoroughly (20 sec with soap)
□ Gather supplies on clean surface
□ Inspect solution (clear, no particles)

PREP
□ Swab vial top with alcohol → let dry
□ Draw air → inject into vial → draw peptide
□ Tap out bubbles → push to exact dose
□ Choose site (rotate!) → swab skin → LET DRY

INJECT
□ Pinch 1-2 inches of skin
□ Insert at 45° angle, full needle length
□ Inject SLOWLY (5-10 seconds)
□ Wait 5-10 seconds before withdrawing
□ Release pinch, withdraw at same angle
□ Apply gentle pressure (don't rub)

AFTER
□ Dispose needle in sharps container (never recap)
□ Return peptide to fridge immediately
□ Log: date, dose, site

KEY REMINDERS
✓ WARM peptide (10-15 min) = less stinging
✓ LET ALCOHOL DRY = less pain + actually sterile
✓ ROTATE SITES = no lumps or scar tissue
✓ NEW NEEDLE EVERY TIME = safety + comfort
✗ NEVER shake vial (swirl gently)
✗ NEVER reuse needles
✗ NEVER inject through clothing
`;

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getMistakeByKeyword(keyword: string): CommonMistake | undefined {
  const keywordLower = keyword.toLowerCase();
  return commonMistakes.find(m => 
    m.mistake.toLowerCase().includes(keywordLower) ||
    m.whyBad.toLowerCase().includes(keywordLower) ||
    m.consequence.toLowerCase().includes(keywordLower)
  );
}

export function getSiteByName(name: string): InjectionSite | undefined {
  return injectionSites.find(s => 
    s.name.toLowerCase().includes(name.toLowerCase())
  );
}

export function getInjectionGuide(): string {
  return quickReferenceCard;
}
