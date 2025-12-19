import { Check, GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";
import { goalCategories } from "@shared/schema";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

interface RankedGoalSelectorProps {
  selectedGoals: string[];
  onGoalsChange: (goals: string[]) => void;
  maxSelections?: number;
}

const categoryLabels: Record<string, string> = {
  body_composition: "Body Composition",
  performance_recovery: "Performance & Recovery",
  anti_aging_cosmetic: "Anti-Aging & Cosmetic",
  metabolic_hormonal: "Metabolic & Hormonal",
  other: "Other"
};

const categoryIcons: Record<string, string> = {
  body_composition: "scale",
  performance_recovery: "activity",
  anti_aging_cosmetic: "sparkles",
  metabolic_hormonal: "heart-pulse",
  other: "more-horizontal"
};

export function RankedGoalSelector({
  selectedGoals,
  onGoalsChange,
  maxSelections = 3
}: RankedGoalSelectorProps) {
  const handleToggleGoal = (goalId: string) => {
    if (selectedGoals.includes(goalId)) {
      onGoalsChange(selectedGoals.filter((g) => g !== goalId));
    } else if (selectedGoals.length < maxSelections) {
      onGoalsChange([...selectedGoals, goalId]);
    }
  };

  const getGoalRank = (goalId: string): number | null => {
    const index = selectedGoals.indexOf(goalId);
    return index >= 0 ? index + 1 : null;
  };

  return (
    <div className="space-y-4" data-testid="ranked-goal-selector">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <p className="text-sm text-muted-foreground">
          Select up to {maxSelections} goals in order of priority
        </p>
        <Badge variant="secondary" className="text-xs" data-testid="goals-counter">
          {selectedGoals.length}/{maxSelections} selected
        </Badge>
      </div>

      {selectedGoals.length > 0 && (
        <div className="space-y-2 p-4 rounded-lg bg-muted/50 border border-border">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
            Your priorities (in order)
          </p>
          <div className="space-y-2">
            {selectedGoals.map((goalId, index) => {
              const allGoals = Object.values(goalCategories).flat();
              const goal = allGoals.find((g) => g.id === goalId);
              if (!goal) return null;

              return (
                <div
                  key={goalId}
                  className="flex items-center gap-3 p-3 rounded-md bg-background border border-border"
                  data-testid={`ranked-goal-${index + 1}`}
                >
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    {index + 1}
                  </div>
                  <GripVertical className="w-4 h-4 text-muted-foreground" />
                  <span className="flex-1 text-sm font-medium">{goal.label}</span>
                  <button
                    onClick={() => handleToggleGoal(goalId)}
                    className="text-xs text-muted-foreground hover:text-destructive"
                    data-testid={`button-remove-goal-${goalId}`}
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <Accordion type="multiple" className="space-y-2" defaultValue={Object.keys(goalCategories)}>
        {Object.entries(goalCategories).map(([categoryKey, goals]) => (
          <AccordionItem
            key={categoryKey}
            value={categoryKey}
            className="border border-border rounded-lg overflow-hidden"
          >
            <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/50">
              <span className="font-medium">{categoryLabels[categoryKey]}</span>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="grid gap-2">
                {goals.map((goal) => {
                  const isSelected = selectedGoals.includes(goal.id);
                  const rank = getGoalRank(goal.id);
                  const isDisabled = !isSelected && selectedGoals.length >= maxSelections;

                  return (
                    <button
                      key={goal.id}
                      onClick={() => handleToggleGoal(goal.id)}
                      disabled={isDisabled}
                      className={cn(
                        "flex items-center gap-3 p-3 rounded-md text-left transition-all",
                        "hover-elevate active-elevate-2",
                        isSelected
                          ? "bg-primary/10 border-2 border-primary"
                          : "bg-card border border-border",
                        isDisabled && "opacity-50 cursor-not-allowed"
                      )}
                      data-testid={`goal-option-${goal.id}`}
                    >
                      {rank ? (
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                          {rank}
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full border-2 border-input" />
                      )}
                      <span className={cn(
                        "flex-1 text-sm",
                        isSelected ? "font-medium" : "text-muted-foreground"
                      )}>
                        {goal.label}
                      </span>
                      {isSelected && (
                        <Check className="w-4 h-4 text-primary" />
                      )}
                    </button>
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
