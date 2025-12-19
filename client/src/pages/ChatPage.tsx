import { useState, useRef, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MessageBubble } from "@/components/MessageBubble";
import { TypingIndicator } from "@/components/TypingIndicator";
import { QuickActions } from "@/components/QuickActions";
import { ProfileSummaryCard } from "@/components/ProfileSummaryCard";
import { useUserProfile } from "@/context/UserProfileContext";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Beaker, Send, User, RotateCcw, ChevronDown } from "lucide-react";
import type { ChatMessage } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export function ChatPage() {
  const { profile, getCompleteProfile, resetProfile, isOnboardingComplete } = useUserProfile();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [showScrollButton, setShowScrollButton] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = (smooth = true) => {
    messagesEndRef.current?.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
  };

  useEffect(() => {
    if (messages.length === 0 && isOnboardingComplete) {
      const welcomeMessage: ChatMessage = {
        id: "welcome",
        role: "assistant",
        content: `Thanks for sharing that with me! Based on your profile, I have a good understanding of what you're looking for.

Would you like me to:
- **Give you my top recommendation** with details personalized to your goals
- **Compare a few options** side-by-side in a table
- **Start with the basics** of how the relevant peptides work

Just ask me anything, or use the quick actions below to get started!`,
        timestamp: Date.now()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOnboardingComplete, messages.length]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const isNearBottom = target.scrollHeight - target.scrollTop - target.clientHeight < 100;
    setShowScrollButton(!isNearBottom);
  };

  const sendMessageMutation = useMutation({
    mutationFn: async (userMessage: string) => {
      const newUserMessage: ChatMessage = {
        id: `user-${Date.now()}`,
        role: "user",
        content: userMessage,
        timestamp: Date.now()
      };

      setMessages((prev) => [...prev, newUserMessage]);

      const response = await apiRequest("POST", "/api/chat", {
        messages: [...messages, newUserMessage],
        userProfile: getCompleteProfile()
      });

      return response.json();
    },
    onSuccess: (data) => {
      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: data.message,
        timestamp: Date.now()
      };
      setMessages((prev) => [...prev, assistantMessage]);
    },
    onError: (error) => {
      const errorMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        role: "assistant",
        content: "I apologize, but I encountered an issue processing your request. Please try again.",
        timestamp: Date.now()
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  });

  const handleSend = () => {
    const message = inputValue.trim();
    if (message && !sendMessageMutation.isPending) {
      setInputValue("");
      sendMessageMutation.mutate(message);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickAction = (prompt: string) => {
    if (!sendMessageMutation.isPending) {
      sendMessageMutation.mutate(prompt);
    }
  };

  const handleStartOver = () => {
    resetProfile();
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 flex items-center justify-between p-4 backdrop-blur-sm bg-background/80 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Beaker className="w-4 h-4 text-primary" />
          </div>
          <span className="font-semibold hidden sm:inline">Peptide Advisor</span>
        </div>

        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" data-testid="button-profile">
                <User className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[320px] sm:w-[400px]">
              <ProfileSummaryCard profile={profile} compact />
              <div className="mt-6">
                <Button
                  variant="outline"
                  onClick={handleStartOver}
                  className="w-full gap-2"
                  data-testid="button-start-over"
                >
                  <RotateCcw className="w-4 h-4" />
                  Start Over
                </Button>
              </div>
            </SheetContent>
          </Sheet>
          <ThemeToggle />
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <div className="hidden lg:block w-80 border-r border-border p-4 overflow-y-auto">
          <ProfileSummaryCard profile={profile} compact />
          <div className="mt-6">
            <Button
              variant="outline"
              onClick={handleStartOver}
              className="w-full gap-2"
              data-testid="button-start-over-desktop"
            >
              <RotateCcw className="w-4 h-4" />
              Start Over
            </Button>
          </div>
        </div>

        <div className="flex-1 flex flex-col relative">
          <ScrollArea 
            className="flex-1 px-4 py-6" 
            onScroll={handleScroll}
            ref={scrollAreaRef}
          >
            <div className="max-w-3xl mx-auto space-y-6">
              {messages.map((message) => (
                <MessageBubble key={message.id} message={message} />
              ))}
              
              {sendMessageMutation.isPending && (
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Beaker className="w-5 h-5 text-primary" />
                  </div>
                  <div className="bg-card border border-border rounded-2xl rounded-bl-md">
                    <TypingIndicator />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {showScrollButton && (
            <Button
              variant="secondary"
              size="icon"
              className="absolute bottom-32 right-6 rounded-full shadow-lg"
              onClick={() => scrollToBottom()}
              data-testid="button-scroll-bottom"
            >
              <ChevronDown className="w-5 h-5" />
            </Button>
          )}

          <div className="border-t border-border p-4 bg-background">
            <div className="max-w-3xl mx-auto space-y-4">
              <QuickActions 
                onAction={handleQuickAction} 
                disabled={sendMessageMutation.isPending} 
              />
              
              <div className="flex gap-3 items-end">
                <Textarea
                  ref={textareaRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything about peptides..."
                  className="flex-1 min-h-[48px] max-h-[120px] resize-none"
                  rows={1}
                  data-testid="input-message"
                />
                <Button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || sendMessageMutation.isPending}
                  size="icon"
                  className="h-12 w-12 rounded-full flex-shrink-0"
                  data-testid="button-send"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
