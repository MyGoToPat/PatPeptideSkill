import { Scale, Layers, DollarSign, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuickActionsProps {
  onAction: (prompt: string) => void;
  disabled?: boolean;
}

const actions = [
  {
    id: "compare",
    label: "Compare peptides",
    icon: Scale,
    prompt: "Can you compare the most relevant peptides for my goals in a table format?"
  },
  {
    id: "stacks",
    label: "Show stacks",
    icon: Layers,
    prompt: "What peptide stacks would you recommend for me and why?"
  },
  {
    id: "cost",
    label: "Cost breakdown",
    icon: DollarSign,
    prompt: "Can you give me a cost breakdown of the recommended peptides including monthly estimates?"
  },
  {
    id: "side-effects",
    label: "Side effects",
    icon: AlertTriangle,
    prompt: "What are the potential side effects I should know about for the peptides you'd recommend?"
  }
];

export function QuickActions({ onAction, disabled }: QuickActionsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide flex-wrap" data-testid="quick-actions">
      {actions.map((action) => (
        <Button
          key={action.id}
          variant="outline"
          size="sm"
          onClick={() => onAction(action.prompt)}
          disabled={disabled}
          className="flex-shrink-0 gap-2"
          data-testid={`button-quick-action-${action.id}`}
        >
          <action.icon className="w-4 h-4" />
          {action.label}
        </Button>
      ))}
    </div>
  );
}
