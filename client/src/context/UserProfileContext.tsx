import { createContext, useContext, useState, type ReactNode } from "react";
import type { UserProfile, OnboardingStep } from "@shared/schema";

interface UserProfileContextType {
  profile: Partial<UserProfile>;
  getCompleteProfile: () => UserProfile;
  updateProfile: (updates: Partial<UserProfile>) => void;
  resetProfile: () => void;
  isOnboardingComplete: boolean;
  setOnboardingComplete: (complete: boolean) => void;
  currentStep: OnboardingStep;
  setCurrentStep: (step: OnboardingStep) => void;
}

const defaultProfile: Partial<UserProfile> = {
  intent: "both",
  experienceLevel: "beginner",
  gender: "unspecified",
  conditions: [],
  goalsRanked: [],
  budgetTier: "moderate",
  administrationPreference: "any"
};

const UserProfileContext = createContext<UserProfileContextType | undefined>(undefined);

export function UserProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<Partial<UserProfile>>(defaultProfile);
  const [isOnboardingComplete, setOnboardingComplete] = useState(false);
  const [currentStep, setCurrentStep] = useState<OnboardingStep>("welcome");

  const updateProfile = (updates: Partial<UserProfile>) => {
    setProfile((prev) => ({ ...prev, ...updates }));
  };

  const getCompleteProfile = (): UserProfile => {
    return {
      intent: profile.intent || "both",
      experienceLevel: profile.experienceLevel || "beginner",
      gender: profile.gender || "unspecified",
      lifeStage: profile.lifeStage,
      conditions: profile.conditions || [],
      goalsRanked: profile.goalsRanked || [],
      budgetTier: profile.budgetTier || "moderate",
      administrationPreference: profile.administrationPreference || "any"
    };
  };

  const resetProfile = () => {
    setProfile(defaultProfile);
    setOnboardingComplete(false);
    setCurrentStep("welcome");
  };

  return (
    <UserProfileContext.Provider
      value={{
        profile,
        getCompleteProfile,
        updateProfile,
        resetProfile,
        isOnboardingComplete,
        setOnboardingComplete,
        currentStep,
        setCurrentStep
      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
}

export function useUserProfile() {
  const context = useContext(UserProfileContext);
  if (!context) {
    throw new Error("useUserProfile must be used within a UserProfileProvider");
  }
  return context;
}
