# Coding Standards

## React

- Functional components only.
- Hooks used correctly; avoid unnecessary useEffect.
- Reusable components in `src/components`.
- One responsibility per component.

## JavaScript

- `const` by default, `let` only when needed, never `var`.
- async/await for async operations.
- Explicit error handling.
- No console.log in production code (warn/error allowed).

## Naming

- Components: PascalCase.jsx
- Utilities: camelCase.js
- Hooks: useSomething.js
- Constants: UPPER_SNAKE_CASE where appropriate.

## Validation

- All user input validated before submission.
- Field length limits enforced client and database side.
