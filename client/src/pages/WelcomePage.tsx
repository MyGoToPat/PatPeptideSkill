import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Beaker, ArrowRight, Shield } from "lucide-react";
import { useUserProfile } from "@/context/UserProfileContext";

export function WelcomePage() {
  const { setCurrentStep } = useUserProfile();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 flex items-center justify-between p-4 backdrop-blur-sm bg-background/80 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Beaker className="w-5 h-5 text-primary" />
          </div>
          <span className="font-semibold text-lg">Peptide Advisor</span>
        </div>
        <ThemeToggle />
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Beaker className="w-4 h-4" />
              Your Peptide Education Assistant
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Hi, I'm Pat
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
              I'm here to help you understand peptides and find what might work best for your goals. Let's have a conversation.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <Button
              size="lg"
              onClick={() => setCurrentStep("intent")}
              className="h-14 px-8 text-lg gap-3"
              data-testid="button-start-onboarding"
            >
              Let's find what's right for you
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Takes about 2 minutes
            </p>
          </div>

          <div className="pt-12 space-y-6">
            <div className="grid sm:grid-cols-3 gap-6 text-left">
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Personalized</h3>
                <p className="text-sm text-muted-foreground">
                  Recommendations based on your specific goals, health profile, and preferences.
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Educational</h3>
                <p className="text-sm text-muted-foreground">
                  Clear explanations of how peptides work, including costs and side effects.
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Informative</h3>
                <p className="text-sm text-muted-foreground">
                  Prepare informed questions for your healthcare provider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="p-6 text-center border-t border-border">
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Shield className="w-4 h-4" />
          <span>Educational purposes only. Always consult a healthcare provider before using peptides.</span>
        </div>
      </footer>
    </div>
  );
}
