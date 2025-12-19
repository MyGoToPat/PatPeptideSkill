import { SelectionCard } from "@/components/SelectionCard";
import { useUserProfile } from "@/context/UserProfileContext";
import { Sparkles, HeartPulse, Stars } from "lucide-react";
import { Beaker } from "lucide-react";

interface IntentStepProps {
  onNext: () => void;
}

const intentOptions = [
  {
    id: "cosmetic" as const,
    title: "Cosmetic / Aesthetic",
    description: "Skin, hair, anti-aging, appearance improvements",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    id: "medical" as const,
    title: "Medical / Therapeutic",
    description: "Healing, recovery, metabolic health, performance",
    icon: <HeartPulse className="w-6 h-6" />
  },
  {
    id: "both" as const,
    title: "Both",
    description: "I want to explore all options",
    icon: <Stars className="w-6 h-6" />
  }
];

export function IntentStep({ onNext }: IntentStepProps) {
  const { profile, updateProfile } = useUserProfile();

  const handleSelect = (intentId: "cosmetic" | "medical" | "both") => {
    updateProfile({ intent: intentId });
    setTimeout(onNext, 200);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Beaker className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-foreground">
            What brings you to explore peptides today?
          </h1>
          <p className="mt-2 text-muted-foreground">
            This helps me understand what kind of guidance would be most helpful for you.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {intentOptions.map((option) => (
          <SelectionCard
            key={option.id}
            title={option.title}
            description={option.description}
            icon={option.icon}
            isSelected={profile.intent === option.id}
            onSelect={() => handleSelect(option.id)}
            testId={`intent-${option.id}`}
          />
        ))}
      </div>
    </div>
  );
}
