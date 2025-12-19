import { cn } from "@/lib/utils";
import type { ChatMessage } from "@shared/schema";
import { Beaker } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MessageBubbleProps {
  message: ChatMessage;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex gap-3",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
      data-testid={`message-${message.id}`}
    >
      {!isUser && (
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Beaker className="w-5 h-5 text-primary" />
        </div>
      )}
      
      <div
        className={cn(
          "max-w-[80%] px-5 py-3",
          isUser
            ? "bg-primary text-primary-foreground rounded-2xl rounded-br-md"
            : "bg-card border border-border rounded-2xl rounded-bl-md prose prose-sm dark:prose-invert max-w-none"
        )}
      >
        {isUser ? (
          <p className="text-base">{message.content}</p>
        ) : (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              table: ({ children }) => (
                <div className="overflow-x-auto my-4 -mx-2">
                  <table className="min-w-full divide-y divide-border border border-border rounded-lg">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-muted">{children}</thead>
              ),
              th: ({ children }) => (
                <th className="px-4 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wide">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="px-4 py-3 text-sm">{children}</td>
              ),
              tr: ({ children }) => (
                <tr className="border-b border-border last:border-0">{children}</tr>
              ),
              h2: ({ children }) => (
                <h2 className="text-lg font-semibold mt-4 mb-2 text-foreground">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-base font-medium mt-3 mb-1 text-foreground">{children}</h3>
              ),
              ul: ({ children }) => (
                <ul className="list-disc pl-4 space-y-1 my-2">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal pl-4 space-y-1 my-2">{children}</ol>
              ),
              p: ({ children }) => (
                <p className="my-2 leading-relaxed">{children}</p>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-foreground">{children}</strong>
              ),
              code: ({ children }) => (
                <code className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono">{children}</code>
              )
            }}
          >
            {message.content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}
