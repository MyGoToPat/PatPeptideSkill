import type { OnboardingStep } from "@shared/schema";

interface ProgressIndicatorProps {
  currentStep: OnboardingStep;
}

const steps: OnboardingStep[] = ["intent", "experience", "biological", "goals", "constraints", "summary"];

export function ProgressIndicator({ currentStep }: ProgressIndicatorProps) {
  const currentIndex = steps.indexOf(currentStep);

  if (currentStep === "welcome" || currentIndex === -1) {
    return null;
  }

  return (
    <div className="flex flex-col items-center gap-2" data-testid="progress-indicator">
      <div className="flex gap-2 flex-wrap justify-center">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? "w-3 h-3 bg-primary"
                : index < currentIndex
                ? "bg-primary/60"
                : "bg-muted"
            }`}
            data-testid={`progress-dot-${step}`}
          />
        ))}
      </div>
      <span className="text-sm text-muted-foreground" data-testid="progress-step-text">
        Step {currentIndex + 1} of {steps.length}
      </span>
    </div>
  );
}
