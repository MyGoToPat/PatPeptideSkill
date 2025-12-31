import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/context/ThemeContext";
import { UserProfileProvider, useUserProfile } from "@/context/UserProfileContext";
import { WelcomePage } from "@/pages/WelcomePage";
import { OnboardingPage } from "@/pages/OnboardingPage";
import { ChatPage } from "@/pages/ChatPage";
import { MentorChatPage } from "@/pages/MentorChatPage";

function AppContent() {
  const { currentStep, isOnboardingComplete } = useUserProfile();

  if (isOnboardingComplete) {
    return <ChatPage />;
  }

  if (currentStep === "welcome") {
    return <WelcomePage />;
  }

  if (currentStep === "mentor") {
    return <MentorChatPage />;
  }

  return <OnboardingPage />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <UserProfileProvider>
          <TooltipProvider>
            <Toaster />
            <AppContent />
          </TooltipProvider>
        </UserProfileProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
