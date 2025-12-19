# Peptide Advisor Chatbot - Design Guidelines

## Design Approach
**Selected System:** Material Design 3 principles with healthcare UI patterns
**Rationale:** This medical education tool requires clarity, trustworthiness, and information density. Material Design's robust component system and emphasis on readable content hierarchies suits the complex forms, chat interface, and data-heavy content while maintaining an approachable, modern feel.

## Core Design Principles
1. **Trust through clarity** - Clean layouts, generous whitespace, clear labeling
2. **Conversation-first** - Chat interface is primary interaction model
3. **Progressive disclosure** - Multi-step onboarding reveals complexity gradually
4. **Accessibility foundation** - WCAG AA minimum, readable typography, clear affordances

---

## Typography System

**Font Stack:** Inter (primary) via Google Fonts CDN for superior readability in health/medical contexts

**Hierarchy:**
- **Display:** 2.5rem (40px), font-bold - Landing page headline only
- **H1:** 2rem (32px), font-semibold - Section headers, onboarding step titles
- **H2:** 1.5rem (24px), font-semibold - Chat section headers, peptide names in cards
- **H3:** 1.25rem (20px), font-medium - Subsections within recommendations
- **Body Large:** 1.125rem (18px), font-normal - Chat messages (Pat's responses)
- **Body:** 1rem (16px), font-normal - Standard UI text, form labels, user messages
- **Body Small:** 0.875rem (14px), font-normal - Helper text, timestamps, disclaimers
- **Caption:** 0.75rem (12px), font-medium - Badges, tags, metadata

**Line Heights:**
- Headlines: 1.2
- Body text: 1.6 (chat messages), 1.5 (forms)
- Captions: 1.4

---

## Layout System

**Spacing Scale:** Use Tailwind units of **2, 4, 8, 12, 16, 20, 24** for all spacing
- Micro spacing (form field gaps): `gap-2`, `space-y-2`
- Component internal padding: `p-4`, `px-6 py-4`
- Section spacing: `space-y-8`, `mb-12`
- Major sections: `py-16`, `py-20` (desktop), `py-12` (mobile)

**Grid System:**
- Single column layouts for onboarding and chat (max-w-2xl centered)
- Two-column split for biological profile step: gender selection + conditional questions
- Auto-fit grid for goal selection cards: `grid-cols-1 sm:grid-cols-2 gap-4`
- Chat layout: Fixed input at bottom, scrollable messages area

**Viewport Management:**
- Landing hero: 70vh minimum, content-based height
- Onboarding steps: Natural height, no forced viewport constraints
- Chat interface: 100vh with fixed header and input areas

**Container Widths:**
- Landing/Welcome: `max-w-4xl`
- Onboarding steps: `max-w-2xl`
- Chat interface: `max-w-3xl`
- Chat messages: `max-w-prose` for Pat's responses (optimal reading)

---

## Component Library

### Navigation
**Header (Persistent):**
- App logo/name (top-left)
- Progress indicator for onboarding (centered, dot-based: Step 1/6)
- Profile menu icon (top-right, visible post-onboarding)
- Height: 64px, `sticky top-0`, blur backdrop

### Forms & Inputs

**Selection Cards (Onboarding):**
- Full-width interactive cards with hover/active states
- Height: auto-fit content, min-height: 100px
- Layout: Icon/emoji (left, 3rem), title + description (stacked)
- Multi-select: Checkbox (top-right corner)
- Single-select: Radio button visual or full card highlight
- Border emphasis, rounded-xl corners
- Padding: `p-6`

**Text Input Fields:**
- Height: 48px minimum for touch targets
- Rounded-lg borders, `px-4 py-3`
- Floating labels or persistent labels above
- Helper text below: text-sm

**Buttons:**
- Primary CTA: `h-12 px-8`, font-semibold, rounded-lg, full-width mobile
- Secondary: Same size, outlined style
- Ghost/Text: `h-10 px-4`, font-medium
- Icon buttons: 44x44px (mobile touch target)

**Ranked Selection (Goals):**
- Draggable cards with handle icon (left side)
- Numbered badges (1, 2, 3) overlay on selected items
- Category headers with collapsible sections

### Chat Interface

**Message Bubbles:**
- User messages (right-aligned): `max-w-[80%] ml-auto`, rounded-2xl with sharp right-bottom corner
- Pat messages (left-aligned): `max-w-prose`, rounded-2xl with sharp left-bottom corner
- Padding: `px-5 py-3` for text-only, `p-6` for structured content
- Avatar: 40px circle, positioned outside bubble (Pat only)

**Structured Recommendation Cards (within chat):**
- Full-width cards with rounded-xl borders
- Sections: Header (peptide name + badge), mechanism, timeline, cost, side effects, questions
- Internal spacing: `space-y-4`, section dividers
- Padding: `p-6`

**Comparison Tables:**
- Responsive tables with horizontal scroll on mobile
- Sticky header row
- Alternating row treatment for readability
- Padding: `px-4 py-3` per cell
- Minimum column width: 150px

**Quick Action Buttons:**
- Pill-shaped buttons below chat input
- Height: 36px, `px-4`, font-medium
- Horizontal scroll on mobile: `flex overflow-x-auto gap-2`
- Icons (optional, left-aligned within button)

**Typing Indicator:**
- Three animated dots inside Pat's bubble style
- Height: 48px, centered content

**Input Area (Fixed Bottom):**
- Height: auto (grows with content, max 120px)
- Layout: Textarea (left, flex-1) + Send button (right, 44x44 circle)
- Padding: `p-4`
- Border-top separator

### Data Display

**Profile Summary Card:**
- Collapsible sections (mobile), persistent sidebar (desktop)
- Sections: Intent, Experience, Profile, Goals (numbered list), Constraints
- Edit icon buttons per section
- Padding: `p-6`, `space-y-6`

**Badge Components:**
- Cost tier badges: `px-3 py-1`, rounded-full, font-semibold, text-xs
- Status badges (FDA-approved, Research-stage): Same style, different semantic treatment
- Condition tags: `px-2 py-1`, rounded-md, text-xs

### Progress & Feedback

**Progress Indicator (Onboarding):**
- Dot-based: 6 dots, current step emphasized with size/treatment
- Text: "Step 2 of 6" below dots
- Sticky positioning at top

**Loading States:**
- Skeleton screens for chat messages
- Spinner for API calls (16px centered in button)
- Shimmer effect for loading cards

---

## Interaction Patterns

**Onboarding Flow:**
- Slide transitions between steps (subtle, 200ms ease-out)
- "Back" button always visible (except step 1)
- "Continue" button enabled only when valid selection made
- Auto-advance on single-choice questions (optional, 300ms delay)

**Chat Interactions:**
- Auto-scroll to bottom on new messages (smooth)
- "Scroll to bottom" FAB when user scrolls up (bottom-right, 56px circle)
- Message send on Enter, Shift+Enter for new line
- Quick action buttons insert pre-formatted prompts

**Responsive Behavior:**
- Mobile: Stack all elements, full-width buttons, bottom sheets for modals
- Tablet: Slightly wider containers, persistent quick actions
- Desktop: Sidebar for profile summary (right, 320px), centered chat column

---

## Animations

**Minimal Animation Strategy:**
- Message appearance: Fade-in + slide-up (150ms)
- Button hover: Scale 1.02 (100ms)
- Card selection: Border emphasis (no motion)
- Step transitions: Crossfade only (200ms)
- NO scroll-triggered animations, parallax, or decorative motion

---

## Images

**Hero Section (Landing):**
- Large hero image: Modern laboratory/science aesthetic with peptide molecules visualization
- Placement: Full-width, 60vh height, content overlaid
- Treatment: Subtle gradient overlay for text contrast

**Chat Avatar (Pat):**
- Friendly, professional illustration of a person in lab coat or abstract scientific icon
- Size: 40px circle
- Placement: Left of all Pat messages

**Empty States:**
- Chat start screen: Centered illustration (max 240px) showing conversation bubbles with molecule icons
- No image needed for onboarding steps (icon-based cards suffice)

---

## Dark Mode Considerations

- System preference detection on load
- Toggle switch in header (post-onboarding)
- Inverted hierarchy maintained
- Reduced contrast for reduced eye strain
- Message bubbles with appropriate treatment variations
- Border emphasis more pronounced in dark mode