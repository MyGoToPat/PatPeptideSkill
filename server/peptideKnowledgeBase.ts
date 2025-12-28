export const peptideKnowledgeBase = {
  "version": "3.0",
  "last_updated": "2025-12-28",
  "supplier": "Pure Life Peptides",
  "supplier_pricing": true,
  "peptides": [
    {
      "id": "semaglutide",
      "name": "Semaglutide",
      "aliases": ["Wegovy", "Ozempic", "GLP-1"],
      "category_primary": "fat_loss",
      "categories_secondary": ["metabolic", "appetite_control"],
      "mechanism": "GLP-1 receptor agonist that mimics incretin hormone, increasing insulin secretion, slowing gastric emptying, and reducing appetite signals to the brain.",
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
        "cycle_length": "Ongoing; titrate up over 16-20 weeks",
        "reconstitution": "5mg vial + 2ml bacteriostatic water = 2.5mg/ml"
      },
      "administration": ["subcutaneous"],
      "supplier_pricing": {
        "5mg_vial": "$134.99",
        "10mg_vial": "$259.99",
        "oral_25tabs": "$174.99"
      },
      "monthly_cost_estimate": "$135-260",
      "side_effects": ["nausea", "constipation", "diarrhea", "decreased_appetite", "fatigue", "injection_site_reactions"],
      "crossover_benefits": ["cardiovascular_protection", "reduced_inflammation", "potential_neuroprotection"],
      "stack_synergy": ["cjc1295_ipamorelin", "bpc157", "tesamorelin"],
      "stack_redundant": ["tirzepatide", "retatrutide", "liraglutide"],
      "timeline_to_results": "Appetite changes: 1-2 weeks. Visible fat loss: 4-8 weeks.",
      "research_status": "FDA-approved",
      "popularity_rank": 1
    },
    {
      "id": "tirzepatide",
      "name": "Tirzepatide",
      "aliases": ["GLP1/GIP", "Mounjaro", "Zepbound", "Twincretin"],
      "category_primary": "fat_loss",
      "categories_secondary": ["metabolic", "appetite_control", "diabetes_management"],
      "mechanism": "Dual GLP-1 and GIP receptor agonist. GLP-1 slows gastric emptying and reduces appetite while GIP improves insulin sensitivity and enhances fat metabolism. Combined action produces synergistic weight loss exceeding single-agonist therapies.",
      "goals_addressed": ["fat_loss", "weight_loss", "appetite_control", "blood_sugar_regulation", "metabolic_syndrome"],
      "gender_notes": {
        "male": "Superior weight loss vs semaglutide alone. Monitor for muscle preservation with adequate protein.",
        "female": "Excellent efficacy. May affect oral contraceptive absorption; use barrier methods 4 weeks after dose changes."
      },
      "conditions_beneficial": ["obesity", "type_2_diabetes", "insulin_resistance", "metabolic_syndrome", "nafld"],
      "conditions_contraindicated": ["medullary_thyroid_cancer_history", "men2_syndrome", "pregnancy", "breastfeeding", "pancreatitis_history", "gastroparesis"],
      "dosing": {
        "typical_range": "2.5mg starting, titrate to 5-15mg",
        "frequency": "Once weekly",
        "timing": "Same day each week, any time",
        "cycle_length": "Ongoing; titrate up over 16-20 weeks",
        "reconstitution": "10mg vial + 2ml bacteriostatic water = 5mg/ml; 30mg vial + 3ml = 10mg/ml"
      },
      "administration": ["subcutaneous"],
      "supplier_pricing": {
        "10mg_vial": "$279.99",
        "30mg_vial": "$549.99"
      },
      "monthly_cost_estimate": "$280-550",
      "side_effects": ["nausea", "diarrhea", "vomiting", "constipation", "decreased_appetite", "abdominal_pain"],
      "crossover_benefits": ["improved_lipid_profile", "liver_fat_reduction", "cardiovascular_benefits"],
      "stack_synergy": ["cjc1295_ipamorelin", "bpc157"],
      "stack_redundant": ["semaglutide", "retatrutide"],
      "timeline_to_results": "Appetite changes: 1-2 weeks. 15-20% weight loss: 48-72 weeks.",
      "research_status": "FDA-approved",
      "popularity_rank": 2
    },
    {
      "id": "retatrutide",
      "name": "Retatrutide",
      "aliases": ["LY3437943", "Triple Agonist", "GGG"],
      "category_primary": "fat_loss",
      "categories_secondary": ["metabolic", "appetite_control", "diabetes_management"],
      "mechanism": "Triple receptor agonist targeting GLP-1, GIP, and glucagon receptors simultaneously. Provides enhanced appetite suppression from GLP-1/GIP plus increased energy expenditure and direct fat metabolism from glucagon receptor activation.",
      "goals_addressed": ["fat_loss", "weight_loss", "appetite_control", "blood_sugar_regulation", "metabolic_syndrome"],
      "gender_notes": {
        "male": "Most potent weight loss peptide available. Monitor for muscle loss during rapid weight reduction; maintain protein intake.",
        "female": "Extremely effective for stubborn fat. Use non-oral contraception for 4 weeks after dose increases."
      },
      "conditions_beneficial": ["obesity", "insulin_resistance", "type_2_diabetes", "metabolic_syndrome", "nafld"],
      "conditions_contraindicated": ["medullary_thyroid_cancer_history", "men2_syndrome", "pregnancy", "breastfeeding", "pancreatitis_history", "gastroparesis"],
      "dosing": {
        "typical_range": "1mg starting, titrate to 8-12mg",
        "frequency": "Once weekly",
        "timing": "Same day each week, any time",
        "cycle_length": "Ongoing; titrate up over 16-20 weeks",
        "reconstitution": "15mg vial + 3ml bacteriostatic water = 5mg/ml"
      },
      "administration": ["subcutaneous"],
      "supplier_pricing": {
        "15mg_vial": "$374.99"
      },
      "monthly_cost_estimate": "$375-750",
      "side_effects": ["nausea_common", "diarrhea", "vomiting", "constipation", "decreased_appetite", "dysesthesia_tingling"],
      "crossover_benefits": ["cardiovascular_benefits", "liver_fat_reduction", "improved_lipids"],
      "stack_synergy": ["cjc1295_ipamorelin", "bpc157"],
      "stack_redundant": ["semaglutide", "tirzepatide"],
      "timeline_to_results": "Appetite changes: 1-2 weeks. Significant fat loss: 4-8 weeks. 24% weight loss: 48 weeks.",
      "research_status": "clinical-trials-phase3",
      "popularity_rank": 3
    },
    {
      "id": "cagrilintide",
      "name": "Cagrilintide",
      "aliases": ["Long-Acting Amylin Analog", "AM833"],
      "category_primary": "fat_loss",
      "categories_secondary": ["appetite_control", "metabolic"],
      "mechanism": "Long-acting amylin analog that activates amylin and calcitonin receptors in the brain. Slows gastric emptying, enhances satiety signals in hypothalamus, and reduces food intake. Works through different pathway than GLP-1, enabling synergistic combinations.",
      "goals_addressed": ["appetite_suppression", "weight_loss", "satiety", "metabolic_health"],
      "gender_notes": {
        "male": "Works well as add-on to GLP-1 therapy. Different mechanism may help GLP-1 non-responders.",
        "female": "Excellent combined with semaglutide. Addresses appetite through complementary pathway."
      },
      "conditions_beneficial": ["obesity", "metabolic_syndrome", "appetite_dysregulation"],
      "conditions_contraindicated": ["pregnancy", "breastfeeding", "hypersensitivity_to_amylin"],
      "dosing": {
        "typical_range": "0.6-4.5mg weekly",
        "frequency": "Once weekly",
        "timing": "Same day each week",
        "cycle_length": "Ongoing; titrate over 4-6 weeks",
        "reconstitution": "5mg vial + 3ml bacteriostatic water = ~1.67mg/ml"
      },
      "administration": ["subcutaneous"],
      "supplier_pricing": {
        "5mg_vial": "$134.99"
      },
      "monthly_cost_estimate": "$135-270",
      "side_effects": ["nausea", "vomiting", "diarrhea", "constipation", "injection_site_reactions"],
      "crossover_benefits": ["enhanced_satiety", "reduced_food_cravings", "improved_glycemic_control"],
      "stack_synergy": ["semaglutide"],
      "stack_redundant": [],
      "timeline_to_results": "Appetite reduction: 1-2 weeks. Weight loss: 5-15% at 26 weeks. CagriSema combo: ~20% at 68 weeks.",
      "research_status": "clinical-trials-phase3",
      "popularity_rank": 10
    },
    {
      "id": "bpc157",
      "name": "BPC-157",
      "aliases": ["Body Protective Compound", "Pentadecapeptide", "PL 14736"],
      "category_primary": "healing",
      "categories_secondary": ["gut_health", "injury_recovery", "neuroprotection"],
      "mechanism": "Gastric pentadecapeptide that promotes angiogenesis, collagen formation, and tissue repair through multiple growth factor pathways including VEGF, NO system, and FAK-paxillin pathway.",
      "goals_addressed": ["injury_healing", "gut_health", "tendon_repair", "ligament_repair", "muscle_healing", "joint_health", "post_surgery_recovery"],
      "gender_notes": {
        "male": "Essential for bodybuilders/athletes under heavy training loads. Helps with NSAID-induced gut damage. Synergizes well with steroid cycles to protect connective tissue.",
        "female": "Excellent for post-surgical recovery. May help with gut issues common in autoimmune conditions. Well-tolerated with minimal hormonal effects."
      },
      "conditions_beneficial": ["tendon_injuries", "ligament_injuries", "gut_issues", "ibs", "leaky_gut", "nsaid_damage", "ulcers", "inflammatory_conditions"],
      "conditions_contraindicated": ["active_cancer", "pregnancy", "breastfeeding"],
      "dosing": {
        "typical_range": "250-500mcg per injection",
        "frequency": "1-2 times daily",
        "timing": "Near injury site if localized; subcutaneous abdomen if systemic/gut healing",
        "cycle_length": "4-8 weeks typically; can extend to 12 weeks for severe injuries",
        "reconstitution": "5mg vial + 2ml bacteriostatic water = 250mcg per 0.1ml"
      },
      "administration": ["subcutaneous", "intramuscular", "oral"],
      "supplier_pricing": {
        "5mg_vial": "$59.99",
        "oral_100tabs": "$134.99"
      },
      "monthly_cost_estimate": "$60-135",
      "side_effects": ["injection_site_irritation", "rare_nausea", "rare_dizziness", "generally_very_well_tolerated"],
      "crossover_benefits": ["neuroprotection", "counteracts_nsaid_damage", "dopamine_system_support", "reduces_inflammation", "accelerates_wound_healing"],
      "stack_synergy": ["tb500", "ghkcu", "cjc1295_ipamorelin", "kpv"],
      "stack_redundant": [],
      "timeline_to_results": "Gut healing: 1-2 weeks. Minor injuries: 2-4 weeks. Major injuries: 4-8 weeks.",
      "research_status": "research-stage",
      "popularity_rank": 4
    },
    {
      "id": "tb500",
      "name": "TB-500",
      "aliases": ["Thymosin Beta-4", "TB4", "Tβ4"],
      "category_primary": "healing",
      "categories_secondary": ["hair_growth", "cardiac_health", "anti_inflammatory"],
      "mechanism": "Regulates actin and promotes cell migration, angiogenesis, and tissue regeneration. Works systemically rather than locally, promoting healing throughout the body.",
      "goals_addressed": ["muscle_healing", "tendon_repair", "soft_tissue_repair", "hair_growth", "cardiac_tissue_repair", "chronic_injuries"],
      "gender_notes": {
        "male": "Popular for sports injuries and hair regrowth. Works well with steroid cycles to protect connective tissue under heavy loads.",
        "female": "Helpful for chronic inflammatory conditions. Hair regrowth benefits apply equally. Good for autoimmune-related tissue damage."
      },
      "conditions_beneficial": ["soft_tissue_injuries", "hair_loss", "chronic_inflammation", "cardiac_issues", "slow_wound_healing", "sports_injuries"],
      "conditions_contraindicated": ["active_cancer", "pregnancy", "breastfeeding"],
      "dosing": {
        "typical_range": "2-5mg per injection",
        "frequency": "2x weekly (loading phase), then 1x weekly (maintenance)",
        "timing": "Any time; not timing-sensitive",
        "cycle_length": "4-6 weeks loading, 4-6 weeks maintenance",
        "reconstitution": "5mg vial + 2ml bacteriostatic water = 2.5mg per 1ml"
      },
      "administration": ["subcutaneous", "intramuscular"],
      "supplier_pricing": {
        "5mg_vial": "$64.99"
      },
      "monthly_cost_estimate": "$130-260",
      "side_effects": ["head_rush", "temporary_lethargy", "injection_site_irritation"],
      "crossover_benefits": ["hair_regrowth", "cardiac_tissue_support", "systemic_anti_inflammatory", "promotes_new_blood_vessel_formation"],
      "stack_synergy": ["bpc157", "ghkcu"],
      "stack_redundant": [],
      "timeline_to_results": "Healing effects: 2-4 weeks. Hair growth: 8-12 weeks.",
      "research_status": "research-stage",
      "popularity_rank": 5
    },
    {
      "id": "ghkcu",
      "name": "GHK-Cu",
      "aliases": ["Copper Peptide", "Copper Tripeptide-1", "GHK-Copper"],
      "category_primary": "cosmetic",
      "categories_secondary": ["healing", "anti_aging", "hair_growth", "neuroprotection"],
      "mechanism": "Copper-binding tripeptide that stimulates collagen/elastin synthesis, promotes wound healing, activates stem cells, and may reset gene expression patterns associated with aging.",
      "goals_addressed": ["skin_quality", "wrinkle_reduction", "wound_healing", "hair_growth", "anti_aging", "scar_reduction", "skin_firmness"],
      "gender_notes": {
        "male": "Excellent for post-procedure recovery. Injectable for systemic effects; topical for facial skin. Helps with hair regrowth.",
        "female": "Top choice for skin anti-aging. Can be combined with microneedling. Popular in perimenopause for skin changes. Often preferred in topical form."
      },
      "conditions_beneficial": ["aging_skin", "wounds", "scars", "hair_loss", "post_surgical_recovery", "sun_damage", "fine_lines"],
      "conditions_contraindicated": ["copper_sensitivity", "wilsons_disease", "pregnancy"],
      "dosing": {
        "typical_range": "1-2mg injectable OR 1-7% topical concentration",
        "frequency": "Daily (injectable) or twice daily (topical)",
        "timing": "Any time for injectable; after cleansing for topical",
        "cycle_length": "8-12 weeks injectable; ongoing for topical",
        "reconstitution": "50mg vial + 2ml bacteriostatic water; use 0.04-0.08ml per injection (1-2mg)"
      },
      "administration": ["subcutaneous", "topical", "mesotherapy"],
      "supplier_pricing": {
        "50mg_vial": "$54.99"
      },
      "monthly_cost_estimate": "$55-110",
      "side_effects": ["copper_uglies_rare_with_overuse", "skin_irritation_topical", "consider_zinc_supplementation_with_high_doses"],
      "crossover_benefits": ["neuroprotection", "gene_expression_reset", "wound_healing_beyond_skin", "anti_inflammatory", "antioxidant"],
      "stack_synergy": ["bpc157", "tb500", "epithalon"],
      "stack_redundant": [],
      "timeline_to_results": "Skin texture: 4-8 weeks. Significant collagen improvement: 12+ weeks. Hair: 3-6 months.",
      "research_status": "research-stage",
      "popularity_rank": 6
    },
    {
      "id": "igf1_lr3",
      "name": "IGF1-LR3",
      "aliases": ["Insulin-like Growth Factor 1 Long R3", "Long R3 IGF-1"],
      "category_primary": "muscle_growth",
      "categories_secondary": ["recovery", "fat_loss", "anti_aging"],
      "mechanism": "Modified IGF-1 with extended half-life (20-30 hours vs 20 minutes for native). Resists binding to IGFBPs, keeping more free IGF-1 available. Activates PI3K/Akt/mTOR pathway, stimulating protein synthesis, muscle cell proliferation (hyperplasia), and satellite cell activation.",
      "goals_addressed": ["muscle_growth", "muscle_hyperplasia", "recovery", "fat_loss", "body_recomposition", "injury_healing"],
      "gender_notes": {
        "male": "Powerful anabolic for muscle growth beyond size increase - actual new muscle cell creation. Best used post-workout. Monitor blood sugar.",
        "female": "Promotes lean muscle tone, recovery, and skin/collagen benefits. Use lower doses. Avoid during pregnancy planning."
      },
      "conditions_beneficial": ["muscle_wasting", "sarcopenia", "slow_recovery", "body_composition_goals", "age_related_decline"],
      "conditions_contraindicated": ["active_cancer", "diabetes_uncontrolled", "pregnancy", "breastfeeding"],
      "dosing": {
        "typical_range": "20-80mcg per day",
        "frequency": "Once daily on training days, or split AM/PM",
        "timing": "Post-workout preferred for muscle; morning fasted for systemic",
        "cycle_length": "4-6 weeks on, 4-6 weeks off to prevent receptor desensitization",
        "reconstitution": "1mg vial + 1ml bacteriostatic water = 100mcg per 0.1ml"
      },
      "administration": ["subcutaneous", "intramuscular"],
      "supplier_pricing": {
        "1mg_vial": "$109.99"
      },
      "monthly_cost_estimate": "$220-440",
      "side_effects": ["hypoglycemia", "joint_pain", "water_retention", "potential_organ_growth_at_high_doses"],
      "crossover_benefits": ["skin_quality", "collagen_synthesis", "bone_density", "cognitive_function"],
      "stack_synergy": ["cjc1295_ipamorelin", "bpc157", "mk677"],
      "stack_redundant": [],
      "timeline_to_results": "Recovery improvement: 1-2 weeks. Muscle gains: 4-6 weeks.",
      "research_status": "research-stage",
      "popularity_rank": 11
    },
    {
      "id": "cjc1295_dac",
      "name": "CJC-1295 with DAC",
      "aliases": ["CJC-1295 DAC", "Modified GRF with DAC"],
      "category_primary": "body_recomposition",
      "categories_secondary": ["muscle_growth", "fat_loss", "anti_aging"],
      "mechanism": "GHRH analog with Drug Affinity Complex (DAC) that extends half-life to 6-8 days, providing sustained GH elevation. Creates more constant GH levels vs pulsatile release.",
      "goals_addressed": ["muscle_building", "fat_loss", "body_recomposition", "anti_aging", "recovery"],
      "gender_notes": {
        "male": "Good for sustained GH elevation. Less frequent dosing than non-DAC version. May cause more water retention.",
        "female": "Some prefer non-DAC version for more physiological pulsatile release. Monitor for water retention."
      },
      "conditions_beneficial": ["low_gh", "muscle_wasting", "fat_accumulation", "age_related_decline"],
      "conditions_contraindicated": ["cancer_history", "active_malignancy", "pregnancy", "breastfeeding", "uncontrolled_diabetes"],
      "dosing": {
        "typical_range": "1-2mg per injection",
        "frequency": "1-2 times per week",
        "timing": "Before bed or morning; consistent timing",
        "cycle_length": "8-12 weeks on, 4 weeks off",
        "reconstitution": "5mg vial + 2ml bacteriostatic water = 2.5mg per 1ml"
      },
      "administration": ["subcutaneous"],
      "supplier_pricing": {
        "5mg_vial": "$89.99"
      },
      "monthly_cost_estimate": "$90-180",
      "side_effects": ["water_retention_common", "joint_stiffness", "tingling_numbness", "headache", "flushing"],
      "crossover_benefits": ["improved_sleep", "skin_quality", "cognitive_clarity"],
      "stack_synergy": ["ipamorelin", "semaglutide"],
      "stack_redundant": ["cjc1295_no_dac", "sermorelin", "mk677", "tesamorelin"],
      "timeline_to_results": "Sleep improvement: 1-2 weeks. Body composition: 8-12 weeks.",
      "research_status": "research-stage",
      "popularity_rank": 7
    },
    {
      "id": "ipamorelin",
      "name": "Ipamorelin",
      "aliases": ["Ipamorelin Acetate", "GHRP"],
      "category_primary": "body_recomposition",
      "categories_secondary": ["muscle_growth", "sleep", "recovery"],
      "mechanism": "Selective growth hormone releasing peptide (GHRP) that stimulates GH pulses without significantly affecting cortisol or prolactin. Cleanest GHRP available.",
      "goals_addressed": ["gh_optimization", "sleep_quality", "recovery", "muscle_preservation", "anti_aging"],
      "gender_notes": {
        "male": "Clean GH stimulation without appetite increase or cortisol spike. Works well alone or with CJC-1295.",
        "female": "Preferred GHRP for women due to clean side effect profile. Good starting point for GH peptides."
      },
      "conditions_beneficial": ["low_gh", "poor_sleep", "slow_recovery", "age_related_decline"],
      "conditions_contraindicated": ["cancer_history", "active_malignancy", "pregnancy", "breastfeeding"],
      "dosing": {
        "typical_range": "200-300mcg per injection",
        "frequency": "1-3 times daily",
        "timing": "Before bed (primary); can add morning and post-workout",
        "cycle_length": "8-12 weeks on, 4 weeks off",
        "reconstitution": "5mg vial + 2ml bacteriostatic water = 250mcg per 0.1ml"
      },
      "administration": ["subcutaneous"],
      "supplier_pricing": {
        "5mg_vial": "$59.99"
      },
      "monthly_cost_estimate": "$60-180",
      "side_effects": ["mild_water_retention", "rare_headache", "rare_dizziness", "generally_well_tolerated"],
      "crossover_benefits": ["improved_sleep_quality", "faster_recovery", "no_appetite_increase"],
      "stack_synergy": ["cjc1295", "sermorelin", "bpc157"],
      "stack_redundant": ["ghrp6", "ghrp2", "mk677"],
      "timeline_to_results": "Sleep improvement: days to 1 week. Body composition: 8-12 weeks.",
      "research_status": "research-stage",
      "popularity_rank": 8
    },
    {
      "id": "cjc1295_ipamorelin",
      "name": "CJC-1295 + Ipamorelin",
      "aliases": ["CJC/Ipa", "GH peptide stack"],
      "category_primary": "body_recomposition",
      "categories_secondary": ["muscle_growth", "fat_loss", "recovery", "sleep", "anti_aging"],
      "mechanism": "CJC-1295 (GHRH analog) extends growth hormone release while Ipamorelin (GHRP) triggers clean GH pulses without cortisol/prolactin spikes. Synergistic combination for optimal GH optimization.",
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
        "cycle_length": "8-12 weeks on, 4 weeks off; or 5 days on, 2 days off",
        "reconstitution": "Premixed vials available; or reconstitute each separately per above"
      },
      "administration": ["subcutaneous"],
      "supplier_pricing": {
        "combo_vial": "$99.99"
      },
      "monthly_cost_estimate": "$100-200",
      "side_effects": ["water_retention", "joint_stiffness", "tingling_numbness", "headache", "flushing"],
      "crossover_benefits": ["improved_deep_sleep", "skin_quality", "cognitive_clarity", "faster_injury_healing"],
      "stack_synergy": ["bpc157", "tb500", "semaglutide", "tesamorelin"],
      "stack_redundant": ["mk677", "sermorelin", "ghrp6"],
      "timeline_to_results": "Sleep improvement: 1-2 weeks. Body composition: 8-12 weeks.",
      "research_status": "research-stage",
      "popularity_rank": 9
    },
    {
      "id": "aod9604",
      "name": "AOD-9604",
      "aliases": ["Anti-Obesity Drug 9604", "Lipotropin", "HGH Fragment"],
      "category_primary": "fat_loss",
      "categories_secondary": [],
      "mechanism": "Modified fragment of human growth hormone (amino acids 176-191) that stimulates lipolysis and inhibits lipogenesis without affecting blood sugar or growth. Targets fat specifically.",
      "goals_addressed": ["fat_loss", "stubborn_fat", "body_recomposition"],
      "gender_notes": {
        "male": "Good for targeted fat loss without appetite effects. Popular for cutting phases. No GH side effects.",
        "female": "Excellent option for those who don't want appetite suppression from GLP-1s. Safe metabolic profile."
      },
      "conditions_beneficial": ["stubborn_fat", "obesity", "body_composition"],
      "conditions_contraindicated": ["pregnancy", "breastfeeding", "active_cancer"],
      "dosing": {
        "typical_range": "300-500mcg per injection",
        "frequency": "Once daily",
        "timing": "Morning on empty stomach, 30 min before food",
        "cycle_length": "12 weeks",
        "reconstitution": "5mg vial + 2ml bacteriostatic water = 250mcg per 0.1ml"
      },
      "administration": ["subcutaneous"],
      "supplier_pricing": {
        "5mg_vial": "$64.99"
      },
      "monthly_cost_estimate": "$130-195",
      "side_effects": ["injection_site_irritation", "rare_headache", "rare_indigestion"],
      "crossover_benefits": ["no_gh_side_effects", "no_appetite_changes", "no_blood_sugar_impact"],
      "stack_synergy": ["cjc1295_ipamorelin", "bpc157"],
      "stack_redundant": ["fragment_176_191"],
      "timeline_to_results": "Fat loss visible: 4-8 weeks.",
      "research_status": "clinical-trials",
      "popularity_rank": 12
    },
    {
      "id": "motsc",
      "name": "MOTS-c",
      "aliases": ["Mitochondrial ORF of 12S rRNA Type-C", "Mitochondrial Peptide"],
      "category_primary": "metabolic",
      "categories_secondary": ["longevity", "fat_loss", "energy", "exercise_mimetic"],
      "mechanism": "Mitochondrial-derived peptide that regulates metabolic homeostasis, improves insulin sensitivity, promotes fatty acid oxidation, and activates AMPK pathway. Acts as an exercise mimetic.",
      "goals_addressed": ["metabolic_health", "energy", "fat_loss", "insulin_sensitivity", "longevity", "exercise_performance"],
      "gender_notes": {
        "male": "Excellent for metabolic optimization. Good for desk-bound professionals. Supports muscle function.",
        "female": "Helpful for metabolic syndrome and insulin resistance. May support healthy aging. Good for those who can't exercise."
      },
      "conditions_beneficial": ["insulin_resistance", "metabolic_syndrome", "low_energy", "sedentary_lifestyle", "obesity", "age_related_decline"],
      "conditions_contraindicated": ["pregnancy", "breastfeeding", "active_cancer"],
      "dosing": {
        "typical_range": "5-10mg per injection",
        "frequency": "2-3 times weekly",
        "timing": "Morning preferred",
        "cycle_length": "8-12 weeks",
        "reconstitution": "10mg vial + 1ml bacteriostatic water = 10mg per 1ml"
      },
      "administration": ["subcutaneous"],
      "supplier_pricing": {
        "10mg_vial": "$84.99"
      },
      "monthly_cost_estimate": "$170-255",
      "side_effects": ["injection_site_reactions", "rare_fatigue_initially"],
      "crossover_benefits": ["angiogenesis", "mitochondrial_biogenesis", "exercise_mimetic_effects", "longevity_pathways", "stress_resistance"],
      "stack_synergy": ["epithalon", "ss31", "nad_precursors"],
      "stack_redundant": [],
      "timeline_to_results": "Energy improvements: 2-4 weeks. Metabolic benefits: 8+ weeks.",
      "research_status": "research-stage",
      "popularity_rank": 13
    },
    {
      "id": "nad_plus",
      "name": "NAD+",
      "aliases": ["Nicotinamide Adenine Dinucleotide", "NAD+ Injectable"],
      "category_primary": "longevity",
      "categories_secondary": ["energy", "cognitive", "metabolic"],
      "mechanism": "Essential coenzyme present in all cells, critical for energy metabolism, DNA repair, gene expression, and cellular signaling. Levels decline with age.",
      "goals_addressed": ["energy", "longevity", "cognitive_function", "cellular_repair", "anti_aging", "addiction_recovery"],
      "gender_notes": {
        "male": "Supports testosterone production pathways. Good for energy and cognitive function.",
        "female": "May help with hormonal transitions. Supports cellular health and energy."
      },
      "conditions_beneficial": ["chronic_fatigue", "aging", "cognitive_decline", "addiction_recovery", "metabolic_dysfunction"],
      "conditions_contraindicated": ["pregnancy", "breastfeeding", "active_cancer_controversial"],
      "dosing": {
        "typical_range": "100-500mg SubQ or IV",
        "frequency": "1-3 times weekly (SubQ) or monthly (IV)",
        "timing": "Morning preferred; may cause energy boost",
        "cycle_length": "Ongoing or cyclical depending on form",
        "reconstitution": "500mg vial - follow supplier instructions for concentration"
      },
      "administration": ["subcutaneous", "intravenous", "oral_precursors"],
      "supplier_pricing": {
        "500mg_vial": "$174.99"
      },
      "monthly_cost_estimate": "$175-350",
      "side_effects": ["flushing", "nausea", "headache", "injection_site_reactions"],
      "crossover_benefits": ["dna_repair", "sirtuin_activation", "mitochondrial_function", "neuroprotection"],
      "stack_synergy": ["five_amino_1mq", "motsc", "ss31"],
      "stack_redundant": [],
      "timeline_to_results": "Energy: days to 1 week. Cellular benefits: ongoing.",
      "research_status": "supplement-research",
      "popularity_rank": 14
    },
    {
      "id": "melanotan2",
      "name": "Melanotan 2",
      "aliases": ["MT2", "Melanotan II", "MT-2"],
      "category_primary": "cosmetic",
      "categories_secondary": ["tanning", "libido", "fat_loss", "appetite_suppression"],
      "mechanism": "Non-selective melanocortin receptor agonist that stimulates melanin production, affects appetite regulation, and enhances sexual function through central nervous system pathways.",
      "goals_addressed": ["tanning", "libido_enhancement", "appetite_suppression", "fat_mobilization", "sun_protection"],
      "gender_notes": {
        "male": "Strong libido effects (spontaneous erections common initially). Popular for tanning without excessive UV exposure. May help with ED.",
        "female": "Same tanning benefits. Libido enhancement present but often less pronounced. Appetite suppression can help weight loss. Monitor moles closely."
      },
      "conditions_beneficial": ["fair_skin_wanting_tan", "low_libido", "sun_sensitivity"],
      "conditions_contraindicated": ["melanoma_history", "family_history_melanoma", "many_moles", "pregnancy", "autoimmune_skin_conditions"],
      "dosing": {
        "typical_range": "0.25-0.5mg per injection",
        "frequency": "Daily during loading (1-2 weeks), then 1-2x weekly maintenance",
        "timing": "Before bed (reduces nausea). UV exposure enhances tanning effect.",
        "cycle_length": "2-3 weeks loading, then as needed for maintenance",
        "reconstitution": "10mg vial + 2ml bacteriostatic water = 500mcg per 0.1ml"
      },
      "administration": ["subcutaneous"],
      "supplier_pricing": {
        "10mg_vial": "$49.99"
      },
      "monthly_cost_estimate": "$50-100",
      "side_effects": ["nausea_common_initially", "facial_flushing", "mole_darkening", "spontaneous_erections", "appetite_suppression", "fatigue"],
      "crossover_benefits": ["significant_libido_enhancement", "appetite_suppression", "fat_mobilization", "may_protect_against_sun_damage"],
      "stack_synergy": [],
      "stack_redundant": ["pt141"],
      "timeline_to_results": "Tanning visible: 1-2 weeks. Full color: 3-4 weeks. Libido: days.",
      "research_status": "research-stage",
      "popularity_rank": 15
    },
    {
      "id": "pt141",
      "name": "PT-141",
      "aliases": ["Bremelanotide", "Vyleesi"],
      "category_primary": "sexual_health",
      "categories_secondary": ["libido"],
      "mechanism": "Melanocortin receptor agonist that works through the central nervous system to enhance sexual arousal and desire, bypassing vascular pathways.",
      "goals_addressed": ["libido_enhancement", "sexual_function", "arousal", "ed_support"],
      "gender_notes": {
        "male": "Works for ED through different pathway than PDE5 inhibitors (Viagra). Can be combined with them.",
        "female": "FDA-approved for HSDD (hypoactive sexual desire disorder). Particularly helpful for menopause-related libido decline."
      },
      "conditions_beneficial": ["low_libido", "sexual_dysfunction", "hsdd", "ed"],
      "conditions_contraindicated": ["uncontrolled_hypertension", "cardiovascular_disease", "pregnancy"],
      "dosing": {
        "typical_range": "1-2mg per dose",
        "frequency": "As needed, 45 min before activity",
        "timing": "45 minutes before desired effect",
        "cycle_length": "As needed; not daily use",
        "reconstitution": "10mg vial + 2ml bacteriostatic water = 500mcg per 0.1ml"
      },
      "administration": ["subcutaneous", "nasal"],
      "supplier_pricing": {
        "10mg_vial": "$49.99"
      },
      "monthly_cost_estimate": "$50-100",
      "side_effects": ["nausea", "flushing", "headache", "blood_pressure_changes", "injection_site_reactions"],
      "crossover_benefits": [],
      "stack_synergy": ["tadalafil"],
      "stack_redundant": ["melanotan2"],
      "timeline_to_results": "Effect within 45-60 minutes of administration.",
      "research_status": "FDA-approved",
      "popularity_rank": 16
    },
    {
      "id": "gonadorelin",
      "name": "Gonadorelin",
      "aliases": ["GnRH", "Gonadotropin-Releasing Hormone", "Factrel"],
      "category_primary": "hormonal",
      "categories_secondary": ["fertility", "trt_support", "pct"],
      "mechanism": "Synthetic GnRH analog that stimulates anterior pituitary to release LH and FSH. In men, LH triggers testosterone production; FSH supports sperm production. Mimics natural pulsatile GnRH release to maintain HPG axis function.",
      "goals_addressed": ["testicular_preservation", "fertility_preservation", "testosterone_support", "pct", "trt_support"],
      "gender_notes": {
        "male": "Alternative to HCG for TRT protocols. Helps prevent testicular shrinkage. Less reliable than HCG but good for cost-conscious patients.",
        "female": "Used for ovulation induction in hypothalamic amenorrhea. Can help restore menstrual cycles."
      },
      "conditions_beneficial": ["trt_induced_suppression", "hypogonadotropic_hypogonadism", "infertility", "testicular_atrophy", "pct"],
      "conditions_contraindicated": ["hormone_sensitive_cancers", "pregnancy", "pituitary_tumors"],
      "dosing": {
        "typical_range": "100-200mcg per injection",
        "frequency": "2-3 times per week",
        "timing": "Any time; consistent schedule important",
        "cycle_length": "Ongoing with TRT; 2-4 weeks for PCT",
        "reconstitution": "2mg vial + 2ml bacteriostatic water = 100mcg per 0.1ml"
      },
      "administration": ["subcutaneous", "intramuscular"],
      "supplier_pricing": {
        "2mg_vial": "$39.99"
      },
      "monthly_cost_estimate": "$40-80",
      "side_effects": ["injection_site_reactions", "temporary_hormone_fluctuations", "headache", "flushing"],
      "crossover_benefits": ["maintains_fertility_on_trt", "preserves_testicular_size", "natural_hormone_stimulation"],
      "stack_synergy": ["testosterone", "clomid", "nolvadex"],
      "stack_redundant": ["hcg", "kisspeptin"],
      "timeline_to_results": "LH/FSH response: hours. Testicular effects: 2-4 weeks.",
      "research_status": "FDA-approved",
      "popularity_rank": 17
    },
    {
      "id": "tesamorelin",
      "name": "Tesamorelin",
      "aliases": ["Egrifta", "TH9507"],
      "category_primary": "body_recomposition",
      "categories_secondary": ["fat_loss", "muscle_preservation", "cognitive"],
      "mechanism": "GHRH analog that stimulates natural growth hormone production from the pituitary, particularly effective for visceral/abdominal fat reduction. FDA-approved for HIV lipodystrophy.",
      "goals_addressed": ["abdominal_fat_loss", "body_recomposition", "muscle_preservation", "gh_optimization", "cognitive_support"],
      "gender_notes": {
        "male": "Excellent for men over 40 with stubborn belly fat. FDA-approved (for HIV lipodystrophy). Good alternative to direct GH.",
        "female": "Effective but CJC/Ipa often preferred for cost. Good option for post-menopausal belly fat."
      },
      "conditions_beneficial": ["visceral_fat", "lipodystrophy", "age_related_gh_decline", "metabolic_syndrome"],
      "conditions_contraindicated": ["cancer_history", "pituitary_disease", "pregnancy", "breastfeeding"],
      "dosing": {
        "typical_range": "1-2mg per injection",
        "frequency": "Once daily",
        "timing": "Before bed or morning on empty stomach",
        "cycle_length": "12-26 weeks",
        "reconstitution": "10mg vial + 2ml bacteriostatic water = 5mg per 1ml"
      },
      "administration": ["subcutaneous"],
      "supplier_pricing": {
        "10mg_vial": "$199.99"
      },
      "monthly_cost_estimate": "$200-400",
      "side_effects": ["injection_site_reactions", "joint_pain", "muscle_pain", "peripheral_edema"],
      "crossover_benefits": ["cognitive_benefits", "improved_lipid_profile", "improved_sleep"],
      "stack_synergy": ["ipamorelin", "semaglutide"],
      "stack_redundant": ["cjc1295", "sermorelin", "mk677"],
      "timeline_to_results": "Visible abdominal fat reduction: 8-12 weeks.",
      "research_status": "FDA-approved",
      "popularity_rank": 18
    },
    {
      "id": "dsip",
      "name": "DSIP",
      "aliases": ["Delta Sleep-Inducing Peptide", "Emideltide"],
      "category_primary": "sleep",
      "categories_secondary": ["stress_management", "recovery", "hormone_modulation"],
      "mechanism": "Nonapeptide that promotes delta-wave (deep) sleep, modulates stress hormones including cortisol, and may influence growth hormone release and LH secretion.",
      "goals_addressed": ["sleep_quality", "insomnia", "stress_reduction", "recovery", "circadian_rhythm"],
      "gender_notes": {
        "male": "Helps with stress-related sleep issues. May support natural hormone production during sleep. Good for high-stress periods.",
        "female": "Useful for sleep disruption during hormonal transitions. Helps with stress-related insomnia. Non-sedating approach."
      },
      "conditions_beneficial": ["insomnia", "poor_sleep_quality", "chronic_stress", "jet_lag", "shift_work", "recovery_optimization"],
      "conditions_contraindicated": ["pregnancy", "breastfeeding", "severe_psychiatric_conditions"],
      "dosing": {
        "typical_range": "100-300mcg",
        "frequency": "Once daily, can be every other day",
        "timing": "Evening, 1-2 hours before bed, or daytime (effects last into night)",
        "cycle_length": "2-4 weeks on, 1-2 weeks off; may not require cycling",
        "reconstitution": "5mg vial + 2ml bacteriostatic water = 250mcg per 0.1ml"
      },
      "administration": ["subcutaneous", "intramuscular", "intranasal"],
      "supplier_pricing": {
        "5mg_vial": "$54.99"
      },
      "monthly_cost_estimate": "$55-110",
      "side_effects": ["minimal_side_effects", "possible_morning_grogginess_if_dose_too_high", "injection_site_irritation"],
      "crossover_benefits": ["cortisol_modulation", "may_support_gh_release", "analgesic_properties", "may_help_withdrawal_symptoms"],
      "stack_synergy": ["epithalon", "semax", "selank"],
      "stack_redundant": [],
      "timeline_to_results": "Sleep improvement: same night to 1-2 weeks.",
      "research_status": "research-stage",
      "popularity_rank": 19
    },
    {
      "id": "selank",
      "name": "Selank",
      "aliases": ["TP-7"],
      "category_primary": "cognitive",
      "categories_secondary": ["anxiety", "immune", "mood"],
      "mechanism": "Synthetic tuftsin analog that modulates GABA, serotonin, and dopamine systems while providing immunomodulatory effects. Anxiolytic without sedation.",
      "goals_addressed": ["anxiety_reduction", "stress_management", "cognitive_enhancement", "immune_support", "mood_stability"],
      "gender_notes": {
        "male": "Good nootropic option with anti-anxiety benefits. Does not affect testosterone.",
        "female": "Helpful for anxiety and stress. May support mood during hormonal fluctuations. Non-hormonal approach."
      },
      "conditions_beneficial": ["anxiety", "stress", "mild_depression", "immune_weakness", "cognitive_decline"],
      "conditions_contraindicated": ["pregnancy", "breastfeeding"],
      "dosing": {
        "typical_range": "250-500mcg per dose",
        "frequency": "1-3 times daily",
        "timing": "Morning and/or as needed for anxiety",
        "cycle_length": "2-4 weeks on, 1-2 weeks off",
        "reconstitution": "5mg vial + 2ml bacteriostatic water = 250mcg per 0.1ml"
      },
      "administration": ["intranasal", "subcutaneous"],
      "supplier_pricing": {
        "5mg_vial": "$29.99"
      },
      "monthly_cost_estimate": "$30-90",
      "side_effects": ["fatigue_rare", "nasal_irritation_with_spray"],
      "crossover_benefits": ["immune_modulation", "stress_resilience", "cognitive_clarity"],
      "stack_synergy": ["semax", "dsip"],
      "stack_redundant": [],
      "timeline_to_results": "Anxiety reduction: days to 1 week. Cognitive benefits: 2-4 weeks.",
      "research_status": "approved_russia",
      "popularity_rank": 20
    },
    {
      "id": "semax",
      "name": "Semax",
      "aliases": ["ACTH 4-10 analog", "Semaxum"],
      "category_primary": "cognitive",
      "categories_secondary": ["neuroprotection", "focus", "memory", "stroke_recovery"],
      "mechanism": "Synthetic heptapeptide analog of ACTH (4-10) that increases BDNF expression, modulates dopamine and serotonin, and provides neuroprotection without affecting cortisol levels.",
      "goals_addressed": ["cognitive_enhancement", "focus", "memory", "neuroprotection", "stroke_recovery", "adhd_support", "mental_clarity"],
      "gender_notes": {
        "male": "Excellent for focus and productivity. Does not affect hormones. Good for high-cognitive-demand work.",
        "female": "Same cognitive benefits. May help with brain fog. Non-hormonal, well-tolerated."
      },
      "conditions_beneficial": ["cognitive_decline", "brain_fog", "adhd_symptoms", "stroke_recovery", "tbi_recovery", "mental_fatigue"],
      "conditions_contraindicated": ["pregnancy", "breastfeeding", "severe_anxiety_disorders", "uncontrolled_hypertension"],
      "dosing": {
        "typical_range": "200-600mcg per dose",
        "frequency": "1-3 times daily",
        "timing": "Morning preferred; avoid evening (may affect sleep)",
        "cycle_length": "5-14 days; repeat cycles every 1-3 months",
        "reconstitution": "30mg vial + 3ml bacteriostatic water = 1mg per 0.1ml"
      },
      "administration": ["intranasal", "subcutaneous"],
      "supplier_pricing": {
        "30mg_vial": "$94.99"
      },
      "monthly_cost_estimate": "$95-190",
      "side_effects": ["nasal_irritation", "possible_anxiety_in_some", "rare_blood_sugar_elevation"],
      "crossover_benefits": ["increased_bdnf", "neuroprotection", "may_help_depression", "immune_modulation"],
      "stack_synergy": ["selank", "dsip"],
      "stack_redundant": [],
      "timeline_to_results": "Focus/clarity: 15-30 minutes. Full cognitive benefits: 1-2 weeks.",
      "research_status": "approved_russia",
      "popularity_rank": 21
    },
    {
      "id": "mk677",
      "name": "MK-677",
      "aliases": ["Ibutamoren", "Nutrobal", "LUM-201"],
      "category_primary": "body_recomposition",
      "categories_secondary": ["sleep", "recovery", "muscle_growth"],
      "mechanism": "Oral GH secretagogue that mimics ghrelin at GHSR receptors, stimulating pulsatile GH release and sustained IGF-1 elevation without suppressing natural GH production. Long half-life allows once-daily dosing.",
      "goals_addressed": ["gh_optimization", "muscle_growth", "sleep_quality", "recovery", "anti_aging", "bone_density"],
      "gender_notes": {
        "male": "Oral convenience vs injectable peptides. Increases appetite (may help bulking). Monitor blood glucose.",
        "female": "Good for sleep and skin quality. Appetite increase may be unwanted. Consider lower doses."
      },
      "conditions_beneficial": ["low_gh", "poor_sleep", "slow_recovery", "sarcopenia", "bone_density_loss"],
      "conditions_contraindicated": ["diabetes_uncontrolled", "cancer_history", "pregnancy", "breastfeeding"],
      "dosing": {
        "typical_range": "10-25mg per day",
        "frequency": "Once daily",
        "timing": "Before bed preferred (enhances sleep); morning if appetite unwanted at night",
        "cycle_length": "8-16 weeks; some use continuously but tolerance may develop",
        "reconstitution": "N/A - oral tablets"
      },
      "administration": ["oral"],
      "supplier_pricing": {
        "oral_100tabs_10mg": "$109.99"
      },
      "monthly_cost_estimate": "$35-110",
      "side_effects": ["increased_appetite", "water_retention", "lethargy", "insulin_resistance", "numbness_tingling"],
      "crossover_benefits": ["improved_sleep_quality", "skin_hair_nail_improvement", "joint_comfort"],
      "stack_synergy": ["cardarine", "bpc157"],
      "stack_redundant": ["cjc1295_ipamorelin", "ghrp6", "tesamorelin"],
      "timeline_to_results": "Sleep improvement: days. Body composition: 8-12 weeks.",
      "research_status": "investigational",
      "popularity_rank": 22
    },
    {
      "id": "tesofensine",
      "name": "Tesofensine",
      "aliases": ["Triple Monoamine Reuptake Inhibitor", "NS2330"],
      "category_primary": "fat_loss",
      "categories_secondary": ["appetite_control", "cognitive"],
      "mechanism": "Triple monoamine reuptake inhibitor blocking reuptake of norepinephrine, dopamine, and serotonin. Increases satiety, reduces appetite, may boost resting energy expenditure. Works on hypothalamic GABAergic neurons involved in feeding behavior.",
      "goals_addressed": ["appetite_suppression", "weight_loss", "fat_loss", "metabolic_health"],
      "gender_notes": {
        "male": "Powerful appetite suppressant without stimulant jitters. May improve motivation during caloric deficit.",
        "female": "Excellent for those who struggle with hunger on diets. Monitor heart rate and blood pressure."
      },
      "conditions_beneficial": ["obesity", "appetite_dysregulation", "diet_compliance_issues", "metabolic_syndrome"],
      "conditions_contraindicated": ["uncontrolled_hypertension", "cardiovascular_disease", "psychiatric_conditions", "pregnancy", "breastfeeding", "mao_inhibitor_use"],
      "dosing": {
        "typical_range": "0.25-0.5mg per day",
        "frequency": "Once daily",
        "timing": "Morning, fasted preferred",
        "cycle_length": "8-12 weeks; cycle off 4 weeks if tolerance develops",
        "reconstitution": "N/A - oral tablets"
      },
      "administration": ["oral"],
      "supplier_pricing": {
        "oral_100tabs_500mcg": "$299.99"
      },
      "monthly_cost_estimate": "$100-300",
      "side_effects": ["dry_mouth", "constipation", "insomnia", "increased_heart_rate", "nausea"],
      "crossover_benefits": ["mood_enhancement", "cognitive_clarity", "motivation", "potential_muscle_preservation"],
      "stack_synergy": ["semaglutide", "bpc157"],
      "stack_redundant": ["phentermine"],
      "timeline_to_results": "Appetite suppression: days. Weight loss: 10% at 24 weeks in trials.",
      "research_status": "clinical-trials-phase2",
      "popularity_rank": 23
    },
    {
      "id": "cardarine",
      "name": "Cardarine",
      "aliases": ["GW501516", "GW-501516", "Endurobol"],
      "category_primary": "metabolic",
      "categories_secondary": ["fat_loss", "endurance", "exercise_mimetic"],
      "mechanism": "PPARδ agonist that activates genes involved in fat oxidation, increases good cholesterol (HDL), and enhances endurance capacity. Switches muscle fuel preference from glucose to fat.",
      "goals_addressed": ["fat_loss", "endurance", "metabolic_health", "cardiovascular_health", "cholesterol_improvement"],
      "gender_notes": {
        "male": "Popular for cutting phases and endurance enhancement. Non-hormonal, no testosterone suppression.",
        "female": "Excellent for fat loss without muscle loss. No androgenic effects. Good for cardio performance."
      },
      "conditions_beneficial": ["obesity", "poor_endurance", "dyslipidemia", "metabolic_syndrome"],
      "conditions_contraindicated": ["pregnancy", "breastfeeding", "cancer_history"],
      "dosing": {
        "typical_range": "10-20mg per day",
        "frequency": "Once daily",
        "timing": "30-60 minutes before exercise, or morning",
        "cycle_length": "8-12 weeks; take 4-week break between cycles",
        "reconstitution": "N/A - oral tablets"
      },
      "administration": ["oral"],
      "supplier_pricing": {
        "oral_100tabs_10mg": "$99.99"
      },
      "monthly_cost_estimate": "$30-100",
      "side_effects": ["generally_well_tolerated", "potential_cancer_risk_in_animal_studies_controversial"],
      "crossover_benefits": ["improved_lipid_profile", "anti_inflammatory", "liver_protection"],
      "stack_synergy": ["mk677", "semaglutide"],
      "stack_redundant": [],
      "timeline_to_results": "Endurance improvement: 1-2 weeks. Fat loss: 4-8 weeks.",
      "research_status": "discontinued-development",
      "popularity_rank": 24
    }
  ],
  "supplies": {
    "bacteriostatic_water": {
      "5ml_vial": "$11.99",
      "10ml_vial": "$14.99"
    },
    "sterile_water": {
      "10ml_vial": "$14.99"
    }
  },
  "patches_transdermal": {
    "note": "Transdermal patches available - contents vary by product",
    "products": {
      "pre_party": {"patches": 30, "category": "Health & Immunity", "price": "$49.99"},
      "pick_me_up": {"patches": 30, "category": "Cognitive", "price": "$49.99"},
      "pay_attention": {"patches": 30, "category": "Cognitive", "price": "$49.99"},
      "sleep_around": {"patches": 30, "category": "Sleep", "price": "$49.99"},
      "the_glow_up": {"patches": 30, "category": "Anti-Aging", "price": "$49.99"},
      "rock_hard": {"patches": 30, "category": "Muscle", "price": "$49.99"},
      "power_up": {"patches": 30, "category": "Health & Immunity", "price": "$49.99"},
      "drop_it_likes_its_hot_beginner": {"patches": 30, "category": "Fat Loss", "price": "$69.99"},
      "drop_it_likes_its_hot_intermediate": {"patches": 30, "category": "Fat Loss", "price": "$89.99"},
      "drop_it_likes_its_hot_advanced": {"patches": 30, "category": "Fat Loss", "price": "$109.99"},
      "x_marks_the_spot": {"patches": 30, "category": "Fat Loss", "price": "$69.99"}
    }
  },
  "non_peptide_compounds": {
    "note": "Available from supplier but not peptides - included for completeness",
    "tadalafil": {"form": "20mg x 100 tabs", "price": "$109.99", "category": "Sexual Health/Vascular"},
    "finasteride": {"form": "5mg x 100 tabs", "price": "$199.99", "category": "Hair Loss/DHT Blocker"},
    "yk11": {"form": "10mg x 100 tabs", "price": "$149.99", "category": "SARM/Myostatin Inhibitor"},
    "lipo_b_shot": {"form": "10ml", "price": "$124.99", "category": "Fat Loss Support"},
    "lipo_c_shot": {"form": "10ml", "price": "$124.99", "category": "Fat Loss Support"}
  },
  "stacking_rules": {
    "synergistic_combinations": [
      {
        "stack": ["semaglutide", "cjc1295_ipamorelin"],
        "reason": "GLP-1 for appetite control + GH stack for muscle preservation during weight loss",
        "best_for": ["significant_weight_loss", "body_recomposition"]
      },
      {
        "stack": ["bpc157", "tb500"],
        "reason": "Different healing mechanisms - BPC for local/gut healing, TB-500 for systemic tissue repair",
        "best_for": ["injury_recovery", "surgery_recovery", "chronic_pain"]
      },
      {
        "stack": ["semaglutide", "cagrilintide"],
        "reason": "CagriSema combination - GLP-1 + amylin pathways for enhanced satiety (up to 20% weight loss)",
        "best_for": ["maximum_weight_loss", "appetite_control"]
      },
      {
        "stack": ["semax", "selank"],
        "reason": "Semax for focus/cognitive enhancement + Selank for anxiety reduction = calm focus",
        "best_for": ["cognitive_performance", "stress_management"]
      },
      {
        "stack": ["motsc", "nad_plus"],
        "reason": "Dual mitochondrial support - MOTS-c for metabolic signaling, NAD+ for cellular energy",
        "best_for": ["energy", "longevity", "metabolic_health"]
      },
      {
        "stack": ["retatrutide", "cjc1295_ipamorelin"],
        "reason": "Maximum fat loss with triple agonist + muscle preservation with GH stack",
        "best_for": ["aggressive_weight_loss", "body_recomposition"]
      },
      {
        "stack": ["gonadorelin", "testosterone"],
        "reason": "Maintain testicular function and fertility while on TRT",
        "best_for": ["trt_support", "fertility_preservation"]
      },
      {
        "stack": ["ghkcu", "bpc157", "tb500"],
        "reason": "Comprehensive healing and anti-aging stack",
        "best_for": ["wound_healing", "surgery_recovery", "anti_aging"]
      }
    ],
    "redundant_combinations": [
      {
        "peptides": ["semaglutide", "tirzepatide", "retatrutide"],
        "reason": "All work on GLP-1 pathway - choose based on potency desired",
        "recommendation": "Semaglutide (proven safety), Tirzepatide (more potent), Retatrutide (most potent)"
      },
      {
        "peptides": ["cjc1295_dac", "tesamorelin", "mk677"],
        "reason": "All stimulate GH release - different mechanisms but overlapping effects",
        "recommendation": "Choose one GH stimulator approach"
      },
      {
        "peptides": ["melanotan2", "pt141"],
        "reason": "Both affect melanocortin receptors and libido; MT2 has broader effects",
        "recommendation": "Use MT2 if you want tanning + libido; PT-141 for libido only"
      },
      {
        "peptides": ["gonadorelin", "kisspeptin"],
        "reason": "Both stimulate GnRH axis - kisspeptin works upstream of gonadorelin",
        "recommendation": "Gonadorelin for cost; Kisspeptin if pituitary needs more support"
      }
    ],
    "contraindication_alerts": [
      {
        "condition": "cancer_history",
        "avoid": ["cjc1295_dac", "cjc1295_ipamorelin", "ipamorelin", "mk677", "tesamorelin", "igf1_lr3"],
        "reason": "GH-promoting peptides may stimulate tumor growth"
      },
      {
        "condition": "diabetes_uncontrolled",
        "avoid": ["mk677", "cjc1295_ipamorelin", "cjc1295_dac", "igf1_lr3"],
        "reason": "GH peptides can affect blood glucose"
      },
      {
        "condition": "pancreatitis_history",
        "avoid": ["semaglutide", "tirzepatide", "retatrutide"],
        "reason": "GLP-1 agonists may increase pancreatitis risk"
      },
      {
        "condition": "cardiovascular_disease",
        "avoid": ["tesofensine", "pt141"],
        "reason": "May affect heart rate and blood pressure"
      },
      {
        "condition": "pregnancy",
        "avoid": "all",
        "reason": "Insufficient safety data for fetal development"
      }
    ]
  },
  "goals_mapping": {
    "fat_loss": ["semaglutide", "tirzepatide", "retatrutide", "cagrilintide", "aod9604", "tesofensine", "cardarine", "motsc"],
    "muscle_building": ["igf1_lr3", "cjc1295_dac", "ipamorelin", "tesamorelin", "mk677"],
    "injury_healing": ["bpc157", "tb500", "ghkcu"],
    "gut_health": ["bpc157"],
    "skin_quality": ["ghkcu", "cjc1295_dac", "ipamorelin"],
    "hair_growth": ["ghkcu", "tb500"],
    "sleep_quality": ["dsip", "cjc1295_dac", "ipamorelin", "mk677"],
    "libido": ["pt141", "melanotan2"],
    "cognitive_function": ["semax", "selank"],
    "immune_support": ["selank"],
    "longevity": ["motsc", "nad_plus", "ghkcu"],
    "anxiety_stress": ["selank", "dsip"],
    "energy": ["motsc", "nad_plus", "cardarine"],
    "fertility_hormones": ["gonadorelin"],
    "trt_support": ["gonadorelin"]
  },
  "contraindication_matrix": {
    "cancer_history": ["cjc1295_ipamorelin", "cjc1295_dac", "ipamorelin", "mk677", "tesamorelin", "igf1_lr3", "tb500", "bpc157", "motsc", "cardarine"],
    "pregnancy": ["semaglutide", "tirzepatide", "retatrutide", "cagrilintide", "cjc1295_ipamorelin", "cjc1295_dac", "ipamorelin", "bpc157", "tb500", "ghkcu", "igf1_lr3", "mk677", "tesamorelin", "pt141", "melanotan2", "aod9604", "motsc", "nad_plus", "selank", "semax", "dsip", "gonadorelin", "tesofensine", "cardarine"],
    "diabetes_uncontrolled": ["mk677", "cjc1295_ipamorelin", "cjc1295_dac", "igf1_lr3"],
    "cardiovascular_disease": ["pt141", "tesofensine"],
    "pancreatitis_history": ["semaglutide", "tirzepatide", "retatrutide"]
  },
  "budget_optimization": {
    "budget_under_100": ["selank", "gonadorelin", "melanotan2", "pt141", "mk677", "bpc157", "ipamorelin", "ghkcu", "dsip", "aod9604", "cardarine"],
    "moderate_100_200": ["semaglutide", "cjc1295_ipamorelin", "cjc1295_dac", "tb500", "semax", "tesofensine", "motsc"],
    "premium_200_plus": ["tirzepatide", "retatrutide", "cagrilintide", "tesamorelin", "igf1_lr3", "nad_plus"]
  }
};
