import { useUserProfile } from "@/context/UserProfileContext";
import { Button } from "@/components/ui/button";
import { Beaker, ArrowRight, DollarSign, Syringe, Pill, Droplet, CheckCircle } from "lucide-react";

interface ConstraintsStepProps {
  onNext: () => void;
}

const budgetOptions = [
  { id: "budget" as const, label: "Budget-conscious", description: "$50-150/month", icon: "one" },
  { id: "moderate" as const, label: "Moderate", description: "$150-300/month", icon: "two" },
  { id: "optimal" as const, label: "Optimal", description: "$300+/month", icon: "three" },
  { id: "unlimited" as const, label: "Cost not a factor", description: "Unlimited budget", icon: "rocket" }
];

const administrationOptions = [
  { id: "injections" as const, label: "Comfortable with injections", icon: <Syringe className="w-5 h-5" /> },
  { id: "oral" as const, label: "Prefer oral/sublingual only", icon: <Pill className="w-5 h-5" /> },
  { id: "topical" as const, label: "Prefer topical only", icon: <Droplet className="w-5 h-5" /> },
  { id: "any" as const, label: "Open to any method", icon: <CheckCircle className="w-5 h-5" /> }
];

export function ConstraintsStep({ onNext }: ConstraintsStepProps) {
  const { profile, updateProfile } = useUserProfile();

  const canContinue = profile.budgetTier && profile.administrationPreference;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Beaker className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-foreground">
            A few practical questions...
          </h1>
          <p className="mt-2 text-muted-foreground">
            This helps me recommend options that fit your lifestyle.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-lg font-medium text-foreground flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-muted-foreground" />
            Monthly Budget
          </h2>
          <div className="grid grid-cols-2 gap-3" data-testid="budget-options">
            {budgetOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => updateProfile({ budgetTier: option.id })}
                className={`p-4 rounded-xl border-2 text-left transition-all hover-elevate active-elevate-2 ${
                  profile.budgetTier === option.id
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card"
                }`}
                data-testid={`budget-${option.id}`}
                type="button"
              >
                <span className="font-medium block">{option.label}</span>
                <span className="text-sm text-muted-foreground">{option.description}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-medium text-foreground flex items-center gap-2">
            <Syringe className="w-5 h-5 text-muted-foreground" />
            Administration Preference
          </h2>
          <div className="space-y-2" data-testid="administration-options">
            {administrationOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => updateProfile({ administrationPreference: option.id })}
                className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all hover-elevate active-elevate-2 ${
                  profile.administrationPreference === option.id
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card"
                }`}
                data-testid={`administration-${option.id}`}
                type="button"
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                  profile.administrationPreference === option.id 
                    ? "bg-primary/10 text-primary" 
                    : "bg-muted text-muted-foreground"
                }`}>
                  {option.icon}
                </div>
                <span className="font-medium">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <Button
        onClick={onNext}
        disabled={!canContinue}
        className="w-full h-12 text-base gap-2"
        data-testid="button-continue"
      >
        Review Summary
        <ArrowRight className="w-5 h-5" />
      </Button>
    </div>
  );
}
