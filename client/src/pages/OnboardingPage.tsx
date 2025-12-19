import { ThemeToggle } from "@/components/ThemeToggle";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { useUserProfile } from "@/context/UserProfileContext";
import { Beaker, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IntentStep } from "@/components/onboarding/IntentStep";
import { ExperienceStep } from "@/components/onboarding/ExperienceStep";
import { BiologicalStep } from "@/components/onboarding/BiologicalStep";
import { GoalsStep } from "@/components/onboarding/GoalsStep";
import { ConstraintsStep } from "@/components/onboarding/ConstraintsStep";
import { SummaryStep } from "@/components/onboarding/SummaryStep";
import type { OnboardingStep } from "@shared/schema";

const stepOrder: OnboardingStep[] = ["intent", "experience", "biological", "goals", "constraints", "summary"];

export function OnboardingPage() {
  const { currentStep, setCurrentStep } = useUserProfile();

  const currentIndex = stepOrder.indexOf(currentStep as OnboardingStep);
  const canGoBack = currentIndex > 0;

  const handleBack = () => {
    if (canGoBack) {
      setCurrentStep(stepOrder[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1]);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case "intent":
        return <IntentStep onNext={handleNext} />;
      case "experience":
        return <ExperienceStep onNext={handleNext} />;
      case "biological":
        return <BiologicalStep onNext={handleNext} />;
      case "goals":
        return <GoalsStep onNext={handleNext} />;
      case "constraints":
        return <ConstraintsStep onNext={handleNext} />;
      case "summary":
        return <SummaryStep />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 flex items-center justify-between p-4 backdrop-blur-sm bg-background/80 border-b border-border">
        <div className="flex items-center gap-3">
          {canGoBack && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handleBack}
              data-testid="button-back"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
          )}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Beaker className="w-4 h-4 text-primary" />
            </div>
            <span className="font-semibold hidden sm:inline">Peptide Advisor</span>
          </div>
        </div>
        
        <ProgressIndicator currentStep={currentStep as OnboardingStep} />
        
        <ThemeToggle />
      </header>

      <main className="flex-1 flex flex-col py-8 px-6">
        <div className="w-full max-w-2xl mx-auto">
          {renderStep()}
        </div>
      </main>
    </div>
  );
}
