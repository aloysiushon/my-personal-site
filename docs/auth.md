# Auth Rules (Clerk)

Summary

All authentication in this app must be handled exclusively by Clerk. Do not add or rely on any other authentication method, provider, or custom token system.

Rules

- Clerk only: use Clerk for sign-in, sign-up, session management, and user metadata. No other auth libraries or custom auth flows are permitted.
- Protected route: the `/dashboard` page must require an authenticated user. Enforce this on the server-side (middleware or server components) so unauthenticated requests are redirected to sign-in.
- Homepage redirect: if a user is already authenticated and requests the homepage (`/`), they must be redirected to `/dashboard`.
- Modal auth: sign-in and sign-up interactions must launch via Clerk modal dialogs (not full-page flows). Use Clerk's modal components or APIs to open `SignIn`/`SignUp` in a modal.
- Implementation hints: integrate Clerk's Next.js helpers and middleware (`ClerkProvider`, server auth helpers, and middleware) and perform auth checks on the server where possible. Keep client components minimal and only use `'use client'` when necessary for modal triggers or interactive UI.
- Code changes: whenever adding auth-protected routes or checks, reference this document and ensure no additional auth code is introduced elsewhere.

Why

Centralizing auth with Clerk keeps the app secure, consistent, and simpler to maintain. These rules prevent accidental introduction of multiple auth mechanisms and ensure predictable redirects and UX.

Where to implement

- Wrap the app with `ClerkProvider` at the root.
- Use Clerk middleware or server auth helpers to protect `/dashboard` and to redirect authenticated users from `/` to `/dashboard`.
- Trigger sign-in/sign-up with Clerk's modal APIs from UI components.

If anything here is unclear or you want me to add enforcement examples (middleware or server-auth snippets), ask and I will add them.
