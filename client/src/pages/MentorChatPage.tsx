import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Beaker, Send, ArrowLeft, AlertTriangle, Loader2 } from "lucide-react";
import { useUserProfile } from "@/context/UserProfileContext";
import { MessageBubble } from "@/components/MessageBubble";
import { TypingIndicator } from "@/components/TypingIndicator";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { apiRequest } from "@/lib/queryClient";
import type { ChatMessage } from "@shared/schema";

interface Message {
  role: "user" | "assistant";
  content: string;
  isUrgent?: boolean;
}

export function MentorChatPage() {
  const { setCurrentStep, getCompleteProfile } = useUserProfile();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mentorMode, setMentorMode] = useState<"side-effects" | "learn-more">("side-effects");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = (smooth = true) => {
    messagesEndRef.current?.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
  };

  useEffect(() => {
    const storedMode = sessionStorage.getItem("mentorMode") as "side-effects" | "learn-more" | null;
    if (storedMode) {
      setMentorMode(storedMode);
    }

    const welcomeMessage: Message = storedMode === "learn-more"
      ? {
          role: "assistant",
          content: `Great! I'm happy to do a deep dive on any peptide you're curious about. Whether you want to understand how a specific peptide works, compare different options, or learn about the science behind them, I'm here to help.

What would you like to explore?`
        }
      : {
          role: "assistant",
          content: `Hey! I'm here to help you work through any side effects you might be experiencing. Whether it's nausea, injection site reactions, or anything else, I can help you understand what's normal and when to be concerned.

Tell me what you're experiencing, and I'll do my best to help!`
        };

    setMessages([welcomeMessage]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    const message = inputValue.trim();
    if (!message || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: message
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await apiRequest("POST", "/api/mentor", {
        messages: [...messages, userMessage].map((m) => ({
          role: m.role,
          content: m.content
        })),
        context: {
          mode: mentorMode,
          userProfile: getCompleteProfile()
        }
      });

      const data = await response.json();

      const assistantMessage: Message = {
        role: "assistant",
        content: data.message,
        isUrgent: data.isUrgent
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        role: "assistant",
        content: "I apologize, but I encountered an issue processing your request. Please try again."
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleBackToWelcome = () => {
    setCurrentStep("welcome");
  };

  const hasUrgentMessage = messages.some((m) => m.isUrgent);

  const convertToChatMessage = (msg: Message, index: number): ChatMessage => ({
    id: `msg-${index}`,
    role: msg.role,
    content: msg.content,
    timestamp: Date.now()
  });

  return (
    <div className="h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 flex items-center justify-between gap-4 p-4 backdrop-blur-sm bg-background/80 border-b border-border">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBackToWelcome}
            data-testid="button-back-to-welcome"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Beaker className="w-4 h-4 text-primary" />
          </div>
          <span className="font-semibold hidden sm:inline">
            {mentorMode === "side-effects" ? "Side Effects Help" : "Learn More"}
          </span>
        </div>
        <ThemeToggle />
      </header>

      <div className="flex-1 flex flex-col overflow-hidden">
        {hasUrgentMessage && (
          <div className="bg-destructive/10 border-b border-destructive/20 px-4 py-3">
            <div className="max-w-3xl mx-auto flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0" />
              <p className="text-sm text-destructive font-medium">
                Based on your symptoms, you should consult a healthcare provider promptly.
              </p>
            </div>
          </div>
        )}

        <ScrollArea className="flex-1 px-4 py-6">
          <div className="max-w-3xl mx-auto space-y-6">
            {messages.map((message, index) => (
              <div key={index} className="relative">
                {message.isUrgent && (
                  <div className="absolute -left-2 top-0 bottom-0 w-1 bg-destructive rounded-full" />
                )}
                <MessageBubble message={convertToChatMessage(message, index)} />
              </div>
            ))}

            {isLoading && (
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

        <div className="border-t border-border p-4 bg-background">
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-3 items-end">
              <Textarea
                ref={textareaRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={
                  mentorMode === "side-effects"
                    ? "Describe what you're experiencing..."
                    : "Ask me anything about peptides..."
                }
                className="flex-1 min-h-[48px] max-h-[120px] resize-none"
                rows={1}
                data-testid="input-mentor-message"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                size="icon"
                className="h-12 w-12 rounded-full flex-shrink-0"
                data-testid="button-mentor-send"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
