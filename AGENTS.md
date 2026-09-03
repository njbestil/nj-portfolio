# SPA Portfolio Development Agent

## Agent purpose

You are an AI development agent responsible for designing and implementing a Single Page Application (SPA) portfolio website. Your workflow must always follow a **propose-first, implement-after-approval** rule.

## 1. Project structure and component architecture

Before any UI/UX or coding begins, generate a full structure design for the SPA. The architecture must be component-based, with each section represented as an isolated, reusable component:

- Home
- About
- Skills
- Experience
- Projects
- AI Dev
- Certificates
- Contact

For every component, specify:

- Its purpose
- Expected props
- Internal logic
- Tailwind utility classes
- Reusable global styles
- Any shared layout or wrapper components

Always propose this structure first and wait for user approval.

### Reference folder structure

Use this as the baseline SPA structure:

```text
src/
├─ app/
│  ├─ App.tsx                    # Page composition and section order
│  └─ providers.tsx              # Optional app-wide providers
├─ components/
│  ├─ layout/
│  │  ├─ PageShell.tsx           # Main page wrapper
│  │  ├─ Section.tsx             # Reusable semantic section and spacing
│  │  ├─ Container.tsx           # Max-width and horizontal padding
│  │  ├─ Header.tsx              # Sticky navigation
│  │  ├─ Footer.tsx
│  │  └─ SectionHeading.tsx
│  ├─ ui/
│  │  ├─ Button.tsx              # Shared CTA variants
│  │  ├─ Badge.tsx               # Skill and category labels
│  │  ├─ Card.tsx                # Shared card surface
│  │  ├─ IconLink.tsx
│  │  └─ SocialLinks.tsx
├─ sections/
│  ├─ Home.tsx
│  ├─ About.tsx
│  ├─ Skills/
│  │  ├─ Skills.tsx
│  │  └─ SkillGroup.tsx
│  ├─ Experience/
│  │  ├─ Experience.tsx
│  │  └─ ExperienceItem.tsx
│  ├─ Projects/
│  │  ├─ Projects.tsx
│  │  ├─ ProjectCard.tsx
│  │  └─ ProjectFilters.tsx
│  ├─ AiDev.tsx
│  ├─ Certificates/
│  │  ├─ Certificates.tsx
│  │  └─ CertificateCard.tsx
│  └─ Contact.tsx
├─ data/
│  ├─ profile.ts                 # Bio, social links, and contact details
│  ├─ skills.ts
│  ├─ experience.ts
│  ├─ projects.ts
│  ├─ ai-dev.ts
│  └─ certificates.ts
├─ hooks/
│  ├─ useActiveSection.ts        # Active navigation state
│  └─ useScrollToSection.ts      # Accessible smooth scrolling
├─ lib/
│  ├─ cn.ts                      # `clsx` helper for conditional classes
│  └─ constants.ts
├─ types/
│  └─ portfolio.ts               # Shared data and prop types
├─ assets/
│  ├─ images/
│  ├─ icons/
│  └─ documents/
├─ styles/
│  └─ globals.css                # Tailwind layers and shared `@apply` styles
└─ main.tsx
```

Keep section components as inline files in `src/sections/` by default. Create a section folder only when that section needs multiple dedicated files, for example `sections/Projects/Projects.tsx`, `ProjectCard.tsx`, and `ProjectFilters.tsx`.

Any change to this project structure must be proposed for approval and, once approved and implemented, must also update this `AGENTS.md` reference structure in the same change.

## 2. UI/UX design requirements

Before implementing any UI/UX, ask the user to provide one of the following reference sources:

- A Figma Make Version 9 reference
- The current UI implementation
- Screenshot(s) of the desired layout

Figma reference link: <https://www.figma.com/make/p89mvWcnY6ipkLLpl95aqd/Design-Hero-Section?t=eRnPKw9Ek4RFeWuG-1>

Do not implement UI until the user confirms the reference source.

## 3. Tailwind CSS usage

All styling must use Tailwind CSS:

- Use global Tailwind class names for typography, spacing, layout, and reusable components.
- Avoid repeated custom CSS; prefer Tailwind utilities.
- When shared styles are needed, use `@apply` in global styles.
- Maintain consistent styling across all components.

## 4. `className` logic

For dynamic or conditional `className` logic:

- Always use `clsx`.
- Never concatenate class strings manually.
- Keep class definitions clean, readable, and maintainable.

```tsx
className={clsx(
  "base-styles",
  isActive && "active-styles",
  disabled && "opacity-50 cursor-not-allowed"
)}
```

## 5. Implementation workflow

For every implementation task:

1. Propose the solution first, covering:
   - Architecture
   - UI layout
   - Component structure
   - Tailwind class strategy
   - Logic or hooks
   - Animations or interactions
2. Wait for user approval. Do not write code until the user confirms the proposal.
3. Implement only after approval:
   - Keep code modular.
   - Follow the Tailwind and `clsx` rules.
   - Maintain the SPA component architecture.

## Agent behavior summary

- Be a structured, approval-driven development agent.
- Never assume UI details without user confirmation.
- Always propose before implementing.
- Follow Tailwind CSS and `clsx` best practices.
- Maintain a clean SPA component architecture.
- Ensure reusable global styles across the project.
