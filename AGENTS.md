# Agent Instructions

This document is the central reference for large language models (LLMs) that are working on the
`my-portfolio-site` repository. It defines the coding standards, architectural expectations,
and general rules that an automated agent must follow when editing, creating, or reviewing
code in this project.

**Note:** the contents of this file are meant to be human-readable, but they are also consumed programmatically by helper agents. Additional, domain‑specific instructions may be split into separate markdown files and stored in the `docs/` directory. **It is incredibly important that agents _always_ read the relevant individual instruction files within `/docs` before generating any code.** Each of those files should follow the same structure and are listed in the section _Related agent docs_ below.
ALWAYS refer to the relevant .md file BEFORE generating any code:

---

## 🛠 Project Overview

`my-portfolio-site` is a Next.js 14 application written in TypeScript. It uses
Drizzle ORM for database access, Tailwind CSS, and adheres to modern React /
server‑components best practices. The repo structure is fairly small and so new
code should remain lightweight and idiomatic.

### Key technologies

- **Next.js 14** (app router, React Server Components, edge functions)
- **TypeScript** (strict mode enabled)
- **Drizzle ORM** for database schema and queries
- **Tailwind CSS** for styling
- **ESLint** and **Prettier** for formatting
- **Vercel** deployment (serverless / edge oriented)

### Conventions

- Always prefer server components where possible. Client components must
  explicitly opt-in using the `'use client'` directive and should be limited to
  interactive UI elements.
- Keep CSS in `app/globals.css` and component‑specific styles inline with
  Tailwind utility classes.
- Use the `lib/` directory for shared helpers and utilities.
- Database logic lives in `db/` and should leverage Drizzle's type‑safe APIs.
- Public assets go in `public/` and are referenced with absolute paths.

## ✅ Coding Standards

All agent-produced code must conform to the following standards:

1. **TypeScript First**: Enable strict typing (`tsconfig.json` already does);
   avoid `any` unless absolutely necessary and documented.
2. **Formatting**: Run `npm run lint` and `npm run format` (or equivalent)
   before committing. ESLint rules are defined in `eslint.config.mjs`.
3. **Naming**: Use `PascalCase` for React components, `camelCase` for variables
   and functions, and `kebab-case` for file names under `app/` and `components/`.
4. **Composability**: Favor small, reusable components over large monoliths.
5. **Accessibility**: All interactive elements must have appropriate ARIA
   attributes, labels, and keyboard support.
6. **Testing**: Unit or integration tests are not currently required but
   welcome. When present, tests should live alongside code with `.test.ts` suffix.
7. **Database Schema**: Use `db/schema.ts` for migrations and declare types. New
   fields must be accompanied by migration logic and updates to Drizzle models.
8. **No Secrets**: Do not commit API keys or credentials. Use environment
   variables defined in `.env.local` (ignored by git).

## 📁 Agent File Organization

- The root `AGENTS.md` is a high‑level introduction for LLMs.
- Domain‑specific or task‑specific instructions should be placed in `docs/` as standalone markdown files. Example filenames:

- Each document should start with a brief summary and then list actionable rules
  or patterns. Cross‑reference other docs when necessary.

> **Tip:** When modifying the repo structure, update this file and add new
> docs as needed so the next agent knows where to look.

## 🔁 Workflow Expectations for LLM Agents

1. **Read the existing code** before making changes; run `fd . -e ts,tsx` when
   in doubt to locate relevant files.
2. **Ask clarifying questions** if a requirement is ambiguous. Use the
   `functions.ask_questions` tool for structured prompts.
3. **Use the provided tooling** (`npm run dev`, `npm run lint`, etc.) to verify
   that edits compile and pass linting. Report any errors encountered.
4. **Respect the project's semantic commit style** when generating diffs; use
   clear, concise messages (e.g. `feat: add contact form component`).
5. **Document changes** inside code with comments and update or add relevant
   docs in `docs/` when introducing new conventions.

## 📎 Related Agent Docs

- [Auth Rules (Clerk)](docs/auth.md) – authentication rules using Clerk
- [UI Component Standards](docs/ui-components.md) – shadcn/ui component guidelines and composition

> _If a linked file does not yet exist, create it with appropriate contents
> and update this list._

---

By following the guidance above, automated agents will maintain a consistent
style and produce high‑quality contributions that fit smoothly into the
`my-portfolio-site` project.
