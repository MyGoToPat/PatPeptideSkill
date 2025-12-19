export const peptideKnowledgeBase = {
  "peptides": [
    {
      "id": "semaglutide",
      "name": "Semaglutide",
      "aliases": ["Wegovy", "Ozempic"],
      "category_primary": "fat_loss",
      "categories_secondary": ["metabolic", "appetite_control"],
      "mechanism": "GLP-1 receptor agonist that mimics the incretin hormone, increasing insulin secretion, slowing gastric emptying, and reducing appetite signals to the brain.",
      "goals_addressed": ["fat_loss", "appetite_control", "blood_sugar_regulation", "weight_loss"],
      "gender_notes": {
        "male": "Effective for visceral fat reduction. May affect testosterone indirectly through weight loss.",
        "female": "Excellent for PCOS-related weight management. Discontinue 2 months before planned pregnancy."
      },
      "conditions_beneficial": ["insulin_resistance", "prediabetes", "type_2_diabetes", "metabolic_syndrome", "pcos"],
      "conditions_contraindicated": ["medullary_thyroid_cancer_history", "men2_syndrome", "pregnancy", "breastfeeding", "pancreatitis_history"],
      "dosing": {
        "typical_range": "0.25mg - 2.4mg weekly",
        "frequency": "Once weekly",
        "timing": "Same day each week, any time",
        "cycle_length": "Ongoing; titrate up over 16-20 weeks"
      },
      "administration": ["subcutaneous"],
      "cost_tier": "moderate",
      "monthly_cost_range": "$150 - $300",
      "side_effects": ["nausea", "constipation", "diarrhea", "decreased_appetite", "fatigue", "injection_site_reactions"],
      "crossover_benefits": ["cardiovascular_protection", "reduced_inflammation", "potential_neuroprotection"],
      "stack_synergy": ["cjc1295_ipamorelin", "bpc157"],
      "stack_redundant": ["tirzepatide", "liraglutide"],
      "timeline_to_results": "Appetite changes: 1-2 weeks. Visible fat loss: 4-8 weeks.",
      "research_status": "FDA-approved"
    },
    {
      "id": "tirzepatide",
      "name": "Tirzepatide",
      "aliases": ["Mounjaro", "Zepbound"],
      "category_primary": "fat_loss",
      "categories_secondary": ["metabolic", "appetite_control"],
      "mechanism": "Dual GIP/GLP-1 receptor agonist providing enhanced metabolic effects through two pathways simultaneously.",
      "goals_addressed": ["fat_loss", "appetite_control", "blood_sugar_regulation", "weight_loss"],
      "gender_notes": {
        "male": "Often produces faster results than semaglutide. Monitor for muscle loss during rapid weight reduction.",
        "female": "Particularly effective for metabolic syndrome and PCOS. Use non-oral contraception for 4 weeks after dose increases."
      },
      "conditions_beneficial": ["insulin_resistance", "prediabetes", "type_2_diabetes", "metabolic_syndrome", "pcos"],
      "conditions_contraindicated": ["medullary_thyroid_cancer_history", "men2_syndrome", "pregnancy", "breastfeeding", "pancreatitis_history"],
      "dosing": {
        "typical_range": "2.5mg - 15mg weekly",
        "frequency": "Once weekly",
        "timing": "Same day each week",
        "cycle_length": "Ongoing; titrate up over 4-20 weeks"
      },
      "administration": ["subcutaneous"],
      "cost_tier": "premium",
      "monthly_cost_range": "$200 - $400",
      "side_effects": ["nausea", "diarrhea", "decreased_appetite", "vomiting", "constipation", "abdominal_pain"],
      "crossover_benefits": ["improved_lipid_profile", "blood_pressure_reduction"],
      "stack_synergy": ["cjc1295_ipamorelin", "bpc157"],
      "stack_redundant": ["semaglutide", "liraglutide"],
      "timeline_to_results": "Appetite changes: 1-2 weeks. Significant fat loss: 4-6 weeks.",
      "research_status": "FDA-approved"
    },
    {
      "id": "cjc1295_ipamorelin",
      "name": "CJC-1295 + Ipamorelin",
      "aliases": ["CJC/Ipa", "GH peptide stack"],
      "category_primary": "body_recomposition",
      "categories_secondary": ["muscle_growth", "fat_loss", "recovery", "sleep", "anti_aging"],
      "mechanism": "CJC-1295 (GHRH analog) extends growth hormone release while Ipamorelin (GHRP) triggers clean GH pulses without cortisol/prolactin spikes.",
      "goals_addressed": ["muscle_building", "fat_loss", "body_recomposition", "sleep_quality", "recovery", "anti_aging"],
      "gender_notes": {
        "male": "Gold standard for natural GH optimization. Synergizes well with TRT.",
        "female": "Gentler GH boost than direct HGH. Good for perimenopause/menopause support. Often combined with Sermorelin for women."
      },
      "conditions_beneficial": ["low_growth_hormone", "poor_sleep", "slow_recovery", "age_related_decline"],
      "conditions_contraindicated": ["cancer_history", "active_malignancy", "pregnancy", "breastfeeding", "uncontrolled_diabetes"],
      "dosing": {
        "typical_range": "CJC: 100-200mcg, Ipamorelin: 200-300mcg",
        "frequency": "1-3 times daily",
        "timing": "Before bed (primary), optionally morning and post-workout",
        "cycle_length": "8-12 weeks on, 4 weeks off; or 5 days on, 2 days off"
      },
      "administration": ["subcutaneous"],
      "cost_tier": "moderate",
      "monthly_cost_range": "$100 - $200",
      "side_effects": ["water_retention", "joint_stiffness", "tingling_numbness", "headache", "flushing"],
      "crossover_benefits": ["improved_deep_sleep", "skin_quality", "cognitive_clarity", "faster_injury_healing"],
      "stack_synergy": ["bpc157", "tb500", "semaglutide", "tesamorelin"],
      "stack_redundant": ["mk677", "sermorelin", "ghrp6"],
      "timeline_to_results": "Sleep improvement: 1-2 weeks. Body composition: 8-12 weeks.",
      "research_status": "research-stage"
    },
    {
      "id": "bpc157",
      "name": "BPC-157",
      "aliases": ["Body Protective Compound", "Pentadecapeptide"],
      "category_primary": "healing",
      "categories_secondary": ["gut_health", "injury_recovery", "neuroprotection"],
      "mechanism": "Gastric pentadecapeptide that promotes angiogenesis, collagen formation, and tissue repair through multiple growth factor pathways.",
      "goals_addressed": ["injury_healing", "gut_health", "tendon_repair", "ligament_repair", "muscle_healing", "joint_health"],
      "gender_notes": {
        "male": "Essential for bodybuilders/athletes under heavy training loads. Helps with NSAID-induced gut damage.",
        "female": "Excellent for post-surgical recovery. May help with gut issues common in autoimmune conditions."
      },
      "conditions_beneficial": ["tendon_injuries", "ligament_injuries", "gut_issues", "ibs", "leaky_gut", "nsaid_damage", "ulcers"],
      "conditions_contraindicated": ["active_cancer", "pregnancy", "breastfeeding"],
      "dosing": {
        "typical_range": "250-500mcg",
        "frequency": "1-2 times daily",
        "timing": "Near injury site if localized; subcutaneous if systemic/gut",
        "cycle_length": "4-8 weeks typically"
      },
      "administration": ["subcutaneous", "oral"],
      "cost_tier": "budget",
      "monthly_cost_range": "$50 - $100",
      "side_effects": ["injection_site_irritation", "rare_nausea", "rare_dizziness"],
      "crossover_benefits": ["neuroprotection", "counteracts_nsaid_damage", "gut_healing", "reduces_inflammation"],
      "stack_synergy": ["tb500", "ghkcu", "cjc1295_ipamorelin"],
      "stack_redundant": [],
      "timeline_to_results": "Gut healing: 1-2 weeks. Injury healing: 2-6 weeks depending on severity.",
      "research_status": "research-stage"
    },
    {
      "id": "tb500",
      "name": "TB-500",
      "aliases": ["Thymosin Beta-4", "TB4"],
      "category_primary": "healing",
      "categories_secondary": ["hair_growth", "cardiac_health", "anti_inflammatory"],
      "mechanism": "Regulates actin and promotes cell migration, angiogenesis, and tissue regeneration. Works systemically rather than locally.",
      "goals_addressed": ["muscle_healing", "tendon_repair", "soft_tissue_repair", "hair_growth", "cardiac_tissue_repair"],
      "gender_notes": {
        "male": "Popular for sports injuries and hair regrowth. Works well with steroid cycles to protect connective tissue.",
        "female": "Helpful for chronic inflammatory conditions. Hair regrowth benefits apply equally."
      },
      "conditions_beneficial": ["soft_tissue_injuries", "hair_loss", "chronic_inflammation", "cardiac_issues", "slow_wound_healing"],
      "conditions_contraindicated": ["active_cancer", "pregnancy", "breastfeeding"],
      "dosing": {
        "typical_range": "2-5mg",
        "frequency": "2 times weekly (loading), then weekly (maintenance)",
        "timing": "Any time; not timing-sensitive",
        "cycle_length": "4-6 weeks loading, 4-6 weeks maintenance"
      },
      "administration": ["subcutaneous", "intramuscular"],
      "cost_tier": "moderate",
      "monthly_cost_range": "$80 - $150",
      "side_effects": ["head_rush", "lethargy", "injection_site_irritation"],
      "crossover_benefits": ["hair_regrowth", "cardiac_tissue_support", "systemic_anti_inflammatory"],
      "stack_synergy": ["bpc157", "ghkcu"],
      "stack_redundant": [],
      "timeline_to_results": "Healing effects: 2-4 weeks. Hair growth: 8-12 weeks.",
      "research_status": "research-stage"
    },
    {
      "id": "ghkcu",
      "name": "GHK-Cu",
      "aliases": ["Copper Peptide", "Copper Tripeptide-1"],
      "category_primary": "cosmetic",
      "categories_secondary": ["healing", "anti_aging", "hair_growth", "neuroprotection"],
      "mechanism": "Copper-binding tripeptide that stimulates collagen/elastin synthesis, promotes wound healing, and may reset aging gene expression patterns.",
      "goals_addressed": ["skin_quality", "wrinkle_reduction", "wound_healing", "hair_growth", "anti_aging", "scar_reduction"],
      "gender_notes": {
        "male": "Excellent for post-procedure recovery. Injectable for systemic; topical for facial.",
        "female": "Top choice for skin anti-aging. Can be combined with microneedling. Popular in perimenopause for skin changes."
      },
      "conditions_beneficial": ["aging_skin", "wounds", "scars", "hair_loss", "post_surgical_recovery"],
      "conditions_contraindicated": ["copper_sensitivity", "wilsons_disease", "pregnancy"],
      "dosing": {
        "typical_range": "1-2mg (injectable) or 1-7% (topical)",
        "frequency": "Daily (injectable) or twice daily (topical)",
        "timing": "Any time for injectable; after cleansing for topical",
        "cycle_length": "8-12 weeks"
      },
      "administration": ["subcutaneous", "topical"],
      "cost_tier": "moderate",
      "monthly_cost_range": "$80 - $150",
      "side_effects": ["copper_uglies_rare", "skin_irritation_topical", "consider_zinc_supplementation"],
      "crossover_benefits": ["neuroprotection", "gene_expression_reset", "wound_healing_beyond_skin"],
      "stack_synergy": ["bpc157", "tb500", "epithalon"],
      "stack_redundant": [],
      "timeline_to_results": "Skin texture: 4-8 weeks. Significant collagen improvement: 12+ weeks.",
      "research_status": "research-stage"
    },
    {
      "id": "mk677",
      "name": "MK-677",
      "aliases": ["Ibutamoren"],
      "category_primary": "body_recomposition",
      "categories_secondary": ["muscle_growth", "sleep", "appetite"],
      "mechanism": "Growth hormone secretagogue that mimics ghrelin, stimulating sustained GH and IGF-1 release orally.",
      "goals_addressed": ["muscle_building", "muscle_preservation", "sleep_quality", "appetite_increase", "bone_density"],
      "gender_notes": {
        "male": "Popular oral alternative to injectable GH peptides. Good for bulking phases due to appetite increase.",
        "female": "May cause unwanted appetite increase. Consider lower doses. Water retention can be more pronounced."
      },
      "conditions_beneficial": ["muscle_wasting", "poor_sleep", "low_appetite", "age_related_gh_decline", "bone_health"],
      "conditions_contraindicated": ["cancer_history", "diabetes_uncontrolled", "pregnancy", "breastfeeding"],
      "dosing": {
        "typical_range": "10-25mg daily",
        "frequency": "Once daily",
        "timing": "Before bed preferred (can cause drowsiness)",
        "cycle_length": "8-12 weeks on, 4 weeks off"
      },
      "administration": ["oral"],
      "cost_tier": "budget",
      "monthly_cost_range": "$50 - $80",
      "side_effects": ["increased_appetite", "water_retention", "lethargy", "joint_stiffness", "elevated_blood_sugar"],
      "crossover_benefits": ["improved_sleep_depth", "skin_quality", "hair_health"],
      "stack_synergy": ["semaglutide", "cardarine"],
      "stack_redundant": ["cjc1295_ipamorelin", "sermorelin", "tesamorelin"],
      "timeline_to_results": "Sleep/appetite: 1 week. Body composition: 8-12 weeks.",
      "research_status": "clinical-trials"
    },
    {
      "id": "tesamorelin",
      "name": "Tesamorelin",
      "aliases": ["Egrifta"],
      "category_primary": "body_recomposition",
      "categories_secondary": ["fat_loss", "muscle_preservation"],
      "mechanism": "GHRH analog that stimulates natural growth hormone production, particularly effective for visceral/abdominal fat.",
      "goals_addressed": ["abdominal_fat_loss", "body_recomposition", "muscle_preservation", "gh_optimization"],
      "gender_notes": {
        "male": "Excellent for men over 40 with stubborn belly fat. FDA-approved (for HIV lipodystrophy).",
        "female": "Effective but often CJC/Ipa preferred for cost. Good option for post-menopausal belly fat."
      },
      "conditions_beneficial": ["visceral_fat", "lipodystrophy", "age_related_gh_decline", "metabolic_syndrome"],
      "conditions_contraindicated": ["cancer_history", "pituitary_disease", "pregnancy", "breastfeeding"],
      "dosing": {
        "typical_range": "1-2mg daily",
        "frequency": "Once daily",
        "timing": "Before bed or morning on empty stomach",
        "cycle_length": "12-26 weeks"
      },
      "administration": ["subcutaneous"],
      "cost_tier": "premium",
      "monthly_cost_range": "$250 - $400",
      "side_effects": ["injection_site_reactions", "joint_pain", "muscle_pain", "peripheral_edema"],
      "crossover_benefits": ["cognitive_benefits", "improved_lipid_profile"],
      "stack_synergy": ["ipamorelin", "semaglutide"],
      "stack_redundant": ["cjc1295", "sermorelin", "mk677"],
      "timeline_to_results": "Visible abdominal fat reduction: 8-12 weeks.",
      "research_status": "FDA-approved"
    },
    {
      "id": "pt141",
      "name": "PT-141",
      "aliases": ["Bremelanotide", "Vyleesi"],
      "category_primary": "sexual_health",
      "categories_secondary": ["libido"],
      "mechanism": "Melanocortin receptor agonist that works through the nervous system to enhance sexual arousal and desire.",
      "goals_addressed": ["libido_enhancement", "sexual_function", "arousal"],
      "gender_notes": {
        "male": "Works for ED through different pathway than PDE5 inhibitors. Can be combined with them.",
        "female": "FDA-approved for HSDD (hypoactive sexual desire disorder). Particularly helpful for menopause-related libido decline."
      },
      "conditions_beneficial": ["low_libido", "sexual_dysfunction", "hsdd", "ed"],
      "conditions_contraindicated": ["uncontrolled_hypertension", "cardiovascular_disease", "pregnancy"],
      "dosing": {
        "typical_range": "1-2mg",
        "frequency": "As needed, 45 min before activity",
        "timing": "45 minutes before desired effect",
        "cycle_length": "As needed; not daily"
      },
      "administration": ["subcutaneous", "nasal"],
      "cost_tier": "moderate",
      "monthly_cost_range": "$75 - $150",
      "side_effects": ["nausea", "flushing", "headache", "blood_pressure_changes", "injection_site_reactions"],
      "crossover_benefits": [],
      "stack_synergy": [],
      "stack_redundant": ["melanotan2"],
      "timeline_to_results": "Effect within 45-60 minutes of administration.",
      "research_status": "FDA-approved"
    },
    {
      "id": "melanotan2",
      "name": "Melanotan 2",
      "aliases": ["MT2", "Melanotan II"],
      "category_primary": "cosmetic",
      "categories_secondary": ["tanning", "libido", "fat_loss"],
      "mechanism": "Non-selective melanocortin receptor agonist that stimulates melanin production, affects appetite, and enhances libido.",
      "goals_addressed": ["tanning", "libido_enhancement", "appetite_suppression", "fat_mobilization"],
      "gender_notes": {
        "male": "Strong libido effects (spontaneous erections common initially). Popular for tanning without UV damage.",
        "female": "Same tanning benefits. Libido enhancement present but often less pronounced. Monitor moles closely."
      },
      "conditions_beneficial": ["fair_skin_tanning", "low_libido"],
      "conditions_contraindicated": ["melanoma_history", "many_moles", "pregnancy", "autoimmune_skin_conditions"],
      "dosing": {
        "typical_range": "0.25-0.5mg",
        "frequency": "Daily during loading, then maintenance 1-2x weekly",
        "timing": "Before bed (reduces nausea)",
        "cycle_length": "2-3 weeks loading, then as needed"
      },
      "administration": ["subcutaneous"],
      "cost_tier": "budget",
      "monthly_cost_range": "$40 - $80",
      "side_effects": ["nausea", "facial_flushing", "mole_darkening", "spontaneous_erections", "appetite_suppression"],
      "crossover_benefits": ["libido_enhancement_significant", "appetite_suppression", "fat_mobilization"],
      "stack_synergy": [],
      "stack_redundant": ["pt141"],
      "timeline_to_results": "Tanning: 1-2 weeks. Full color: 3-4 weeks.",
      "research_status": "research-stage"
    },
    {
      "id": "aod9604",
      "name": "AOD-9604",
      "aliases": ["Anti-Obesity Drug 9604"],
      "category_primary": "fat_loss",
      "categories_secondary": [],
      "mechanism": "Modified fragment of human growth hormone (176-191) that stimulates lipolysis without affecting blood sugar or growth.",
      "goals_addressed": ["fat_loss", "stubborn_fat", "weight_loss"],
      "gender_notes": {
        "male": "Good for targeted fat loss without appetite effects. Popular for cutting phases.",
        "female": "Excellent option for those who don't want appetite suppression from GLP-1s."
      },
      "conditions_beneficial": ["stubborn_fat", "obesity", "metabolic_health"],
      "conditions_contraindicated": ["pregnancy", "breastfeeding", "active_cancer"],
      "dosing": {
        "typical_range": "300-500mcg",
        "frequency": "Once daily",
        "timing": "Morning on empty stomach",
        "cycle_length": "12 weeks"
      },
      "administration": ["subcutaneous"],
      "cost_tier": "moderate",
      "monthly_cost_range": "$100 - $180",
      "side_effects": ["injection_site_irritation", "headache", "rare_indigestion"],
      "crossover_benefits": ["no_gh_side_effects", "no_appetite_changes"],
      "stack_synergy": ["cjc1295_ipamorelin", "bpc157"],
      "stack_redundant": ["fragment_176_191"],
      "timeline_to_results": "Fat loss visible: 4-8 weeks.",
      "research_status": "clinical-trials"
    },
    {
      "id": "sermorelin",
      "name": "Sermorelin",
      "aliases": ["GRF 1-29", "Geref"],
      "category_primary": "body_recomposition",
      "categories_secondary": ["anti_aging", "sleep", "recovery"],
      "mechanism": "GHRH analog that stimulates natural, pulsatile growth hormone release in a physiological pattern.",
      "goals_addressed": ["gh_optimization", "anti_aging", "sleep_quality", "recovery", "body_composition"],
      "gender_notes": {
        "male": "Gentler alternative to CJC-1295. Good starting point for GH peptides.",
        "female": "Often preferred for women due to lower side effect profile. Excellent for perimenopause."
      },
      "conditions_beneficial": ["age_related_gh_decline", "poor_sleep", "slow_recovery"],
      "conditions_contraindicated": ["cancer_history", "pregnancy", "breastfeeding"],
      "dosing": {
        "typical_range": "200-500mcg",
        "frequency": "Once daily",
        "timing": "Before bed",
        "cycle_length": "3-6 months"
      },
      "administration": ["subcutaneous"],
      "cost_tier": "moderate",
      "monthly_cost_range": "$100 - $180",
      "side_effects": ["injection_site_reactions", "flushing", "headache", "dizziness"],
      "crossover_benefits": ["natural_gh_rhythm", "lower_side_effect_profile"],
      "stack_synergy": ["ipamorelin", "bpc157"],
      "stack_redundant": ["cjc1295", "tesamorelin", "mk677"],
      "timeline_to_results": "Sleep improvement: 2-4 weeks. Body composition: 12+ weeks.",
      "research_status": "FDA-approved"
    },
    {
      "id": "motsc",
      "name": "MOTS-c",
      "aliases": ["Mitochondrial ORF of the 12S rRNA Type-C"],
      "category_primary": "metabolic",
      "categories_secondary": ["longevity", "fat_loss", "energy"],
      "mechanism": "Mitochondrial-derived peptide that regulates metabolic homeostasis, improves insulin sensitivity, and acts as an exercise mimetic.",
      "goals_addressed": ["metabolic_health", "energy", "fat_loss", "insulin_sensitivity", "longevity", "exercise_performance"],
      "gender_notes": {
        "male": "Excellent for metabolic optimization. Good for desk-bound professionals.",
        "female": "Helpful for metabolic syndrome and insulin resistance. May support healthy aging."
      },
      "conditions_beneficial": ["insulin_resistance", "metabolic_syndrome", "low_energy", "sedentary_lifestyle"],
      "conditions_contraindicated": ["pregnancy", "breastfeeding", "active_cancer"],
      "dosing": {
        "typical_range": "5-10mg",
        "frequency": "2-3 times weekly",
        "timing": "Morning preferred",
        "cycle_length": "8-12 weeks"
      },
      "administration": ["subcutaneous"],
      "cost_tier": "premium",
      "monthly_cost_range": "$200 - $350",
      "side_effects": ["injection_site_reactions", "rare_fatigue_initially"],
      "crossover_benefits": ["angiogenesis", "mitochondrial_biogenesis", "exercise_mimetic_effects", "longevity_pathways"],
      "stack_synergy": ["epithalon", "nad_precursors"],
      "stack_redundant": [],
      "timeline_to_results": "Energy improvements: 2-4 weeks. Metabolic benefits: 8+ weeks.",
      "research_status": "research-stage"
    },
    {
      "id": "selank",
      "name": "Selank",
      "aliases": [],
      "category_primary": "cognitive",
      "categories_secondary": ["anxiety", "immune"],
      "mechanism": "Synthetic tuftsin analog that modulates GABA, serotonin, and dopamine while providing immunomodulatory effects.",
      "goals_addressed": ["anxiety_reduction", "cognitive_enhancement", "focus", "immune_support", "stress_management"],
      "gender_notes": {
        "male": "Good nootropic option with anti-anxiety benefits.",
        "female": "Helpful for anxiety and stress. May support mood during hormonal fluctuations."
      },
      "conditions_beneficial": ["anxiety", "stress", "cognitive_decline", "immune_weakness"],
      "conditions_contraindicated": ["pregnancy", "breastfeeding"],
      "dosing": {
        "typical_range": "250-500mcg",
        "frequency": "1-3 times daily",
        "timing": "Morning and/or as needed for anxiety",
        "cycle_length": "2-4 weeks on, 1-2 weeks off"
      },
      "administration": ["nasal", "subcutaneous"],
      "cost_tier": "moderate",
      "monthly_cost_range": "$80 - $150",
      "side_effects": ["fatigue", "nasal_irritation"],
      "crossover_benefits": ["immune_modulation", "stress_resilience"],
      "stack_synergy": ["semax"],
      "stack_redundant": [],
      "timeline_to_results": "Anxiety reduction: days to 1 week. Cognitive benefits: 2-4 weeks.",
      "research_status": "research-stage"
    },
    {
      "id": "thymosin_alpha1",
      "name": "Thymosin Alpha-1",
      "aliases": ["Ta1", "Zadaxin"],
      "category_primary": "immune",
      "categories_secondary": ["longevity"],
      "mechanism": "Thymic peptide that modulates immune function by enhancing T-cell activity and balancing immune responses.",
      "goals_addressed": ["immune_support", "immune_modulation", "viral_defense", "longevity"],
      "gender_notes": {
        "male": "Good for immune optimization and chronic viral management.",
        "female": "Helpful for autoimmune conditions (balancing rather than stimulating). Good for chronic fatigue."
      },
      "conditions_beneficial": ["chronic_infections", "hepatitis", "cancer_adjunct", "autoimmune_conditions", "frequent_illness"],
      "conditions_contraindicated": ["organ_transplant", "immunosuppressive_therapy", "pregnancy"],
      "dosing": {
        "typical_range": "1.6mg",
        "frequency": "2 times weekly",
        "timing": "Any time",
        "cycle_length": "8-12 weeks or ongoing"
      },
      "administration": ["subcutaneous"],
      "cost_tier": "premium",
      "monthly_cost_range": "$150 - $300",
      "side_effects": ["injection_site_reactions", "rare_flu_like_symptoms"],
      "crossover_benefits": ["anti_tumor_activity", "vaccine_enhancement"],
      "stack_synergy": ["bpc157"],
      "stack_redundant": [],
      "timeline_to_results": "Immune improvements: 4-8 weeks.",
      "research_status": "FDA-approved"
    },
    {
      "id": "epithalon",
      "name": "Epithalon",
      "aliases": ["Epitalon", "Epithalamin"],
      "category_primary": "longevity",
      "categories_secondary": ["anti_aging", "sleep"],
      "mechanism": "Synthetic tetrapeptide that stimulates telomerase production, potentially slowing cellular aging and protecting telomeres.",
      "goals_addressed": ["longevity", "anti_aging", "sleep_quality", "cellular_health"],
      "gender_notes": {
        "male": "Popular longevity peptide. Often used in quarterly protocols.",
        "female": "Same benefits. May support hormonal balance during aging."
      },
      "conditions_beneficial": ["aging", "poor_sleep", "cellular_aging"],
      "conditions_contraindicated": ["active_cancer", "pregnancy", "breastfeeding"],
      "dosing": {
        "typical_range": "5-10mg",
        "frequency": "Daily for 10-20 days",
        "timing": "Any time; often split into 2 doses",
        "cycle_length": "10-20 day cycles, 1-4 times per year"
      },
      "administration": ["subcutaneous"],
      "cost_tier": "moderate",
      "monthly_cost_range": "$100 - $200",
      "side_effects": ["injection_site_reactions"],
      "crossover_benefits": ["improved_sleep", "antioxidant_effects", "retinal_health"],
      "stack_synergy": ["ghkcu", "motsc"],
      "stack_redundant": [],
      "timeline_to_results": "Sleep: during cycle. Longevity effects: cumulative over multiple cycles.",
      "research_status": "research-stage"
    }
  ],
  "stacking_rules": {
    "beginner_protocols": {
      "healing_recovery": ["bpc157"],
      "body_recomp": ["cjc1295_ipamorelin"],
      "fat_loss": ["semaglutide"],
      "anti_aging": ["ghkcu"]
    },
    "goal_focused_stacks": {
      "aggressive_fat_loss": ["semaglutide", "cjc1295_ipamorelin", "aod9604"],
      "muscle_building": ["cjc1295_ipamorelin", "bpc157", "tb500"],
      "injury_recovery": ["bpc157", "tb500", "ghkcu"],
      "anti_aging": ["cjc1295_ipamorelin", "ghkcu", "epithalon"],
      "metabolic_optimization": ["semaglutide", "motsc"],
      "cognitive_enhancement": ["selank", "semax"],
      "immune_support": ["thymosin_alpha1", "bpc157"]
    }
  },
  "contraindication_matrix": {
    "cancer_history": ["cjc1295_ipamorelin", "mk677", "tesamorelin", "sermorelin", "tb500", "bpc157", "epithalon", "motsc"],
    "pregnancy": ["semaglutide", "tirzepatide", "cjc1295_ipamorelin", "bpc157", "tb500", "ghkcu", "mk677", "tesamorelin", "pt141", "melanotan2", "aod9604", "sermorelin", "motsc", "selank", "thymosin_alpha1", "epithalon"],
    "diabetes_uncontrolled": ["mk677", "cjc1295_ipamorelin"],
    "cardiovascular_disease": ["pt141"]
  },
  "budget_optimization": {
    "budget": ["bpc157", "mk677", "melanotan2"],
    "moderate": ["semaglutide", "cjc1295_ipamorelin", "ghkcu", "tb500", "aod9604", "sermorelin", "pt141", "selank", "epithalon"],
    "premium": ["tirzepatide", "tesamorelin", "motsc", "thymosin_alpha1"]
  }
};
