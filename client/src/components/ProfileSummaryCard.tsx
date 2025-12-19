import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit2, User, Target, DollarSign, Syringe } from "lucide-react";
import type { UserProfile } from "@shared/schema";
import { goalCategories } from "@shared/schema";

interface ProfileSummaryCardProps {
  profile: Partial<UserProfile>;
  onEdit?: () => void;
  compact?: boolean;
}

const intentLabels: Record<string, string> = {
  cosmetic: "Cosmetic / Aesthetic",
  medical: "Medical / Therapeutic",
  both: "Both"
};

const experienceLabels: Record<string, string> = {
  beginner: "Complete Beginner",
  intermediate: "Curious Researcher",
  advanced: "Experienced User"
};

const genderLabels: Record<string, string> = {
  male: "Male",
  female: "Female",
  unspecified: "Not specified"
};

const lifeStageLabels: Record<string, string> = {
  pre_menopausal: "Pre-menopausal",
  peri_menopausal: "Peri-menopausal",
  post_menopausal: "Post-menopausal",
  medically_induced_menopause: "Medically-induced menopause"
};

const conditionLabels: Record<string, string> = {
  pcos: "PCOS",
  thyroid_issues: "Thyroid issues",
  insulin_resistance: "Insulin resistance",
  low_libido: "Low libido",
  low_testosterone: "Low testosterone",
  on_trt: "On TRT",
  using_steroids: "Using steroids",
  ed_low_libido: "ED / Low libido"
};

const budgetLabels: Record<string, string> = {
  budget: "$50-150/month",
  moderate: "$150-300/month",
  optimal: "$300+/month",
  unlimited: "Cost not a factor"
};

const administrationLabels: Record<string, string> = {
  injections: "Comfortable with injections",
  oral: "Oral only",
  topical: "Topical only",
  any: "Open to any method"
};

function getGoalLabel(goalId: string): string {
  const allGoals = Object.values(goalCategories).flat();
  const goal = allGoals.find((g) => g.id === goalId);
  return goal?.label || goalId;
}

export function ProfileSummaryCard({ profile, onEdit, compact = false }: ProfileSummaryCardProps) {
  return (
    <Card className={compact ? "border-0 shadow-none" : ""} data-testid="profile-summary-card">
      <CardHeader className={`flex flex-row items-center justify-between gap-4 ${compact ? "px-0 pt-0" : ""}`}>
        <CardTitle className="text-lg">Your Profile</CardTitle>
        {onEdit && (
          <Button variant="ghost" size="icon" onClick={onEdit} data-testid="button-edit-profile">
            <Edit2 className="w-4 h-4" />
          </Button>
        )}
      </CardHeader>
      <CardContent className={`space-y-6 ${compact ? "px-0" : ""}`}>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="w-4 h-4" />
            <span className="font-medium">Profile</span>
          </div>
          <div className="pl-6 space-y-1">
            {profile.intent && (
              <p className="text-sm">
                <span className="text-muted-foreground">Intent:</span>{" "}
                <span className="font-medium">{intentLabels[profile.intent]}</span>
              </p>
            )}
            {profile.experienceLevel && (
              <p className="text-sm">
                <span className="text-muted-foreground">Experience:</span>{" "}
                <span className="font-medium">{experienceLabels[profile.experienceLevel]}</span>
              </p>
            )}
            {profile.gender && (
              <p className="text-sm">
                <span className="text-muted-foreground">Gender:</span>{" "}
                <span className="font-medium">{genderLabels[profile.gender]}</span>
              </p>
            )}
            {profile.lifeStage && (
              <p className="text-sm">
                <span className="text-muted-foreground">Life stage:</span>{" "}
                <span className="font-medium">{lifeStageLabels[profile.lifeStage]}</span>
              </p>
            )}
            {profile.conditions && profile.conditions.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {profile.conditions.map((condition) => (
                  <Badge key={condition} variant="secondary" className="text-xs">
                    {conditionLabels[condition] || condition}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>

        {profile.goalsRanked && profile.goalsRanked.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Target className="w-4 h-4" />
              <span className="font-medium">Goals</span>
            </div>
            <ol className="pl-6 space-y-1 list-decimal list-inside">
              {profile.goalsRanked.map((goalId, index) => (
                <li key={goalId} className="text-sm" data-testid={`profile-goal-${index + 1}`}>
                  {getGoalLabel(goalId)}
                </li>
              ))}
            </ol>
          </div>
        )}

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <DollarSign className="w-4 h-4" />
            <span className="font-medium">Budget</span>
          </div>
          <p className="pl-6 text-sm font-medium">
            {profile.budgetTier ? budgetLabels[profile.budgetTier] : "Not specified"}
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Syringe className="w-4 h-4" />
            <span className="font-medium">Administration</span>
          </div>
          <p className="pl-6 text-sm font-medium">
            {profile.administrationPreference
              ? administrationLabels[profile.administrationPreference]
              : "Not specified"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
