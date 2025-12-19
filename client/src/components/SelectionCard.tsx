import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SelectionCardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  isSelected: boolean;
  onSelect: () => void;
  variant?: "single" | "multi";
  testId?: string;
}

export function SelectionCard({
  title,
  description,
  icon,
  isSelected,
  onSelect,
  variant = "single",
  testId
}: SelectionCardProps) {
  return (
    <button
      onClick={onSelect}
      className={cn(
        "relative w-full text-left p-6 rounded-xl border-2 transition-all duration-200",
        "hover-elevate active-elevate-2",
        isSelected
          ? "border-primary bg-primary/5"
          : "border-border bg-card"
      )}
      data-testid={testId || `selection-card-${title.toLowerCase().replace(/\s+/g, "-")}`}
      type="button"
    >
      <div className="flex items-start gap-4">
        {icon && (
          <div className={cn(
            "flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center",
            isSelected ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
          )}>
            {icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground">{title}</h3>
          {description && (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        {variant === "multi" && (
          <div className={cn(
            "flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors",
            isSelected
              ? "border-primary bg-primary text-primary-foreground"
              : "border-input bg-background"
          )}>
            {isSelected && <Check className="w-4 h-4" />}
          </div>
        )}
        {variant === "single" && isSelected && (
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <Check className="w-4 h-4 text-primary-foreground" />
          </div>
        )}
      </div>
    </button>
  );
}
