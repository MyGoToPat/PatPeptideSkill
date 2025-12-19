# Peptide Advisor Chatbot

## Overview

Peptide Advisor is an AI-powered chatbot application that helps users learn about peptides and receive personalized recommendations. The application features a multi-step onboarding wizard that collects user profile information (intent, experience level, biological profile, goals, budget, and administration preferences), then provides a conversational chat interface with an AI assistant named "Pat" who gives tailored peptide guidance based on the user's profile.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, built using Vite
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style variant)
- **State Management**: React Context API for user profile and theme state, TanStack Query for server state
- **Design System**: Material Design 3 principles adapted for healthcare UI with emphasis on trust, clarity, and accessibility

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **API Design**: RESTful endpoints under `/api` prefix
- **AI Integration**: OpenAI API (GPT models) for conversational responses
- **Build Process**: Vite for frontend bundling, esbuild for server bundling

### Data Layer
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Location**: `shared/schema.ts` contains Zod schemas for validation
- **Knowledge Base**: Embedded JSON peptide database in `server/peptideKnowledgeBase.ts`

### Application Flow
1. Welcome page introduces the chatbot
2. Six-step onboarding wizard collects user profile
3. Chat interface provides personalized peptide recommendations
4. Stateless conversation design (no persistent chat history in MVP)

### Key Design Patterns
- **Shared Schema**: Types and validation schemas in `shared/` directory used by both client and server
- **Context Providers**: ThemeContext for dark/light mode, UserProfileContext for onboarding state
- **Component Architecture**: Reusable UI components in `components/ui/`, feature components alongside pages

## External Dependencies

### AI Services
- **OpenAI API**: Powers the conversational AI assistant using `gpt-4o` model (API key stored as `OPENAI_API_KEY` secret)
- System prompt includes summarized peptide knowledge (~5KB) for efficient token usage

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database operations with schema push via `npm run db:push`

### Third-Party Libraries
- **@tanstack/react-query**: Server state management and API request caching
- **shadcn/ui + Radix UI**: Accessible, customizable component primitives
- **react-markdown + remark-gfm**: Markdown rendering in chat messages
- **Zod**: Runtime schema validation shared between client and server