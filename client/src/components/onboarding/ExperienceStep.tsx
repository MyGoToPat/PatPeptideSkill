import { SelectionCard } from "@/components/SelectionCard";
import { useUserProfile } from "@/context/UserProfileContext";
import { Sprout, BookOpen, Dumbbell, Beaker } from "lucide-react";

interface ExperienceStepProps {
  onNext: () => void;
}

const experienceOptions = [
  {
    id: "beginner" as const,
    title: "Complete Beginner",
    description: "I've heard of them but don't really know what they are",
    icon: <Sprout className="w-6 h-6" />
  },
  {
    id: "intermediate" as const,
    title: "Curious Researcher",
    description: "I've read about some (like semaglutide or BPC-157) but haven't used any",
    icon: <BookOpen className="w-6 h-6" />
  },
  {
    id: "advanced" as const,
    title: "Experienced User",
    description: "I've used peptides and want to optimize my protocol",
    icon: <Dumbbell className="w-6 h-6" />
  }
];

export function ExperienceStep({ onNext }: ExperienceStepProps) {
  const { profile, updateProfile } = useUserProfile();

  const handleSelect = (level: "beginner" | "intermediate" | "advanced") => {
    updateProfile({ experienceLevel: level });
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
            How familiar are you with peptides?
          </h1>
          <p className="mt-2 text-muted-foreground">
            This helps me adjust how I explain things to you.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {experienceOptions.map((option) => (
          <SelectionCard
            key={option.id}
            title={option.title}
            description={option.description}
            icon={option.icon}
            isSelected={profile.experienceLevel === option.id}
            onSelect={() => handleSelect(option.id)}
            testId={`experience-${option.id}`}
          />
        ))}
      </div>
    </div>
  );
}
