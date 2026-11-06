# coderabbit

Central CodeRabbit configuration for the ATR-Lab GitHub organization. See `README.md`.

- `.coderabbit.config.ts` is the only config file. Never add `.coderabbit.yaml` or `.coderabbit.yml`; either would override it.
- The config may import only `@coderabbitai/config`. It runs without network access and must finish evaluating within 10 seconds.
- Guideline paths point at `ATR-Lab/dev-guidelines:docs/<page>.md`. Check that a page exists before adding a rule for it.
- Verify with `npm install && npm run typecheck` before committing. Keep `node_modules/` out of git.
