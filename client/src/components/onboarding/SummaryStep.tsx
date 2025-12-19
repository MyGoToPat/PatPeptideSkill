import { useUserProfile } from "@/context/UserProfileContext";
import { ProfileSummaryCard } from "@/components/ProfileSummaryCard";
import { Button } from "@/components/ui/button";
import { Beaker, ArrowRight, Edit2 } from "lucide-react";

export function SummaryStep() {
  const { profile, setOnboardingComplete, setCurrentStep } = useUserProfile();

  const handleConfirm = () => {
    setOnboardingComplete(true);
  };

  const handleEdit = () => {
    setCurrentStep("intent");
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Beaker className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-foreground">
            Here's what I understand about you:
          </h1>
          <p className="mt-2 text-muted-foreground">
            Does this look right? I'll use this to personalize my recommendations.
          </p>
        </div>
      </div>

      <ProfileSummaryCard profile={profile} />

      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          variant="outline"
          onClick={handleEdit}
          className="flex-1 h-12 text-base gap-2"
          data-testid="button-edit"
        >
          <Edit2 className="w-5 h-5" />
          Edit Something
        </Button>
        <Button
          onClick={handleConfirm}
          className="flex-1 h-12 text-base gap-2"
          data-testid="button-confirm"
        >
          Looks Good!
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
