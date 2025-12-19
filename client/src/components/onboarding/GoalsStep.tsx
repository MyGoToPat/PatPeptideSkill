import { RankedGoalSelector } from "@/components/RankedGoalSelector";
import { useUserProfile } from "@/context/UserProfileContext";
import { Button } from "@/components/ui/button";
import { Beaker, ArrowRight } from "lucide-react";

interface GoalsStepProps {
  onNext: () => void;
}

export function GoalsStep({ onNext }: GoalsStepProps) {
  const { profile, updateProfile } = useUserProfile();

  const handleGoalsChange = (goals: string[]) => {
    updateProfile({ goalsRanked: goals });
  };

  const canContinue = true; // User can continue even without selecting goals

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Beaker className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-foreground">
            What are your top priorities?
          </h1>
          <p className="mt-2 text-muted-foreground">
            Pick up to 3 and rank them in order of importance to you.
          </p>
        </div>
      </div>

      <RankedGoalSelector
        selectedGoals={profile.goalsRanked || []}
        onGoalsChange={handleGoalsChange}
        maxSelections={3}
      />

      <Button
        onClick={onNext}
        disabled={!canContinue}
        className="w-full h-12 text-base gap-2"
        data-testid="button-continue"
      >
        Continue
        <ArrowRight className="w-5 h-5" />
      </Button>
    </div>
  );
}
