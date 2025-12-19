import { useState } from "react";
import { SelectionCard } from "@/components/SelectionCard";
import { useUserProfile } from "@/context/UserProfileContext";
import { Button } from "@/components/ui/button";
import { Beaker, ArrowRight, User } from "lucide-react";
import { femaleLifeStageOptions, femaleConditionOptions, maleConditionOptions } from "@shared/schema";

interface BiologicalStepProps {
  onNext: () => void;
}

const genderOptions = [
  { id: "male" as const, title: "Male" },
  { id: "female" as const, title: "Female" },
  { id: "unspecified" as const, title: "Prefer not to say" }
];

const lifeStageLabels: Record<string, string> = {
  pre_menopausal: "Pre-menopausal (regular cycles)",
  peri_menopausal: "Peri-menopausal (irregular cycles, transitioning)",
  post_menopausal: "Post-menopausal (natural)",
  medically_induced_menopause: "Medically-induced menopause (surgical, chemotherapy, etc.)"
};

const femaleConditionLabels: Record<string, string> = {
  pcos: "PCOS",
  thyroid_issues: "Thyroid issues",
  insulin_resistance: "Insulin resistance / Pre-diabetes",
  low_libido: "Low libido"
};

const maleConditionLabels: Record<string, string> = {
  low_testosterone: "Low testosterone (diagnosed or suspected)",
  on_trt: "Currently on TRT",
  using_steroids: "Using anabolic steroids",
  thyroid_issues: "Thyroid issues",
  insulin_resistance: "Insulin resistance / Pre-diabetes",
  ed_low_libido: "Erectile dysfunction / Low libido"
};

export function BiologicalStep({ onNext }: BiologicalStepProps) {
  const { profile, updateProfile } = useUserProfile();
  const [showFollowUp, setShowFollowUp] = useState(!!profile.gender && profile.gender !== "unspecified");

  const handleGenderSelect = (gender: "male" | "female" | "unspecified") => {
    updateProfile({ 
      gender, 
      lifeStage: undefined, 
      conditions: [] 
    });
    
    if (gender === "unspecified") {
      setTimeout(onNext, 200);
    } else {
      setShowFollowUp(true);
    }
  };

  const handleLifeStageSelect = (stage: typeof femaleLifeStageOptions[number]) => {
    updateProfile({ lifeStage: stage });
  };

  const handleConditionToggle = (condition: string) => {
    const currentConditions = profile.conditions || [];
    if (currentConditions.includes(condition)) {
      updateProfile({ conditions: currentConditions.filter((c) => c !== condition) });
    } else {
      updateProfile({ conditions: [...currentConditions, condition] });
    }
  };

  const handleContinue = () => {
    onNext();
  };

  const canContinue = 
    profile.gender === "unspecified" ||
    (profile.gender === "female" && profile.lifeStage) ||
    profile.gender === "male";

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Beaker className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-foreground">
            To give you the most relevant guidance, I need to know a bit about you.
          </h1>
          <p className="mt-2 text-muted-foreground">
            Some peptides work differently based on biological factors.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-lg font-medium text-foreground flex items-center gap-2">
            <User className="w-5 h-5 text-muted-foreground" />
            Gender
          </h2>
          <div className="grid grid-cols-3 gap-3" data-testid="gender-options">
            {genderOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleGenderSelect(option.id)}
                className={`p-4 rounded-xl border-2 text-center font-medium transition-all hover-elevate active-elevate-2 ${
                  profile.gender === option.id
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card"
                }`}
                data-testid={`gender-${option.id}`}
                type="button"
              >
                {option.title}
              </button>
            ))}
          </div>
        </div>

        {showFollowUp && profile.gender === "female" && (
          <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-300">
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-foreground">
                What stage of life are you in?
              </h2>
              <div className="space-y-2">
                {femaleLifeStageOptions.map((stage) => (
                  <button
                    key={stage}
                    onClick={() => handleLifeStageSelect(stage)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all hover-elevate active-elevate-2 ${
                      profile.lifeStage === stage
                        ? "border-primary bg-primary/5"
                        : "border-border bg-card"
                    }`}
                    data-testid={`life-stage-${stage}`}
                    type="button"
                  >
                    {lifeStageLabels[stage]}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-medium text-foreground">
                Do any of these apply to you?
              </h2>
              <p className="text-sm text-muted-foreground">Select all that apply, or skip if none.</p>
              <div className="space-y-2">
                {femaleConditionOptions.map((condition) => (
                  <SelectionCard
                    key={condition}
                    title={femaleConditionLabels[condition]}
                    isSelected={(profile.conditions || []).includes(condition)}
                    onSelect={() => handleConditionToggle(condition)}
                    variant="multi"
                    testId={`condition-${condition}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {showFollowUp && profile.gender === "male" && (
          <div className="space-y-3 animate-in slide-in-from-bottom-4 duration-300">
            <h2 className="text-lg font-medium text-foreground">
              Do any of these apply to you?
            </h2>
            <p className="text-sm text-muted-foreground">Select all that apply, or skip if none.</p>
            <div className="space-y-2">
              {maleConditionOptions.map((condition) => (
                <SelectionCard
                  key={condition}
                  title={maleConditionLabels[condition]}
                  isSelected={(profile.conditions || []).includes(condition)}
                  onSelect={() => handleConditionToggle(condition)}
                  variant="multi"
                  testId={`condition-${condition}`}
                />
              ))}
            </div>
          </div>
        )}

        {showFollowUp && canContinue && (
          <div className="pt-4">
            <Button
              onClick={handleContinue}
              className="w-full h-12 text-base gap-2"
              data-testid="button-continue"
            >
              Continue
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
