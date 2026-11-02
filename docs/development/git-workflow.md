# Git Workflow

## Branches

- `main` — production-ready.
- `develop` — integration.
- `feature/*`, `fix/*`, `hotfix/*`.

## Commits

Follow Conventional Commits: `type(scope): description`.

## Before Committing

```
npm run lint
npm run test -- --run
npm run build
```

## Push

```
git push -u origin <branch-name>
```
