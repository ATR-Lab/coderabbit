# ATR-Lab CodeRabbit config

Organization-wide [CodeRabbit](https://coderabbit.ai) settings for every ATR-Lab repository. Researchers do not need to add anything to their repos.

## How it works

CodeRabbit treats a repository named `coderabbit` as the [central configuration](https://docs.coderabbit.ai/configuration/central-configuration) for its organization. [`.coderabbit.config.ts`](.coderabbit.config.ts) here applies to every ATR-Lab repo that has no CodeRabbit config of its own. The CodeRabbit app is installed on all org repositories, so new repos are covered from their first pull request.

The setup follows [pingdotgg/t3code's config](https://github.com/pingdotgg/t3code/blob/main/.coderabbit.config.ts):

- **Author gating.** Org owners, members and collaborators can run `@coderabbitai approve` on their own PRs. Outside contributors cannot, and only requested reviewers can override their failed pre-merge checks.
- **Lab standards.** Reviews hold changed code to the matching page in [ATR-Lab/dev-guidelines](https://github.com/ATR-Lab/dev-guidelines/tree/master/docs): Python, C/C++, JS/TS, Swift, Kotlin, C#/Unity, ROS 2 packages, hardware/firmware and docs. CodeRabbit loads those pages as code guidelines, so updating dev-guidelines updates reviews.
- **Quiet reviews.** Automatic reviews run on non-draft PRs, with no high-level summary, status message, poem or docstring requirement. Auto-approval is off because Macroscope handles approvals.
- **Noise filters.** Reviews skip build output (`build/`, `install/`, `log/`, Unity `Library/`, `node_modules/`, `.venv/`, `.pio/`).

## Changing it

1. Edit `.coderabbit.config.ts`. Do not add a `.coderabbit.yaml` here: if both files exist, CodeRabbit uses the YAML and ignores the TypeScript file.
2. Run `npm install && npm run typecheck`. The types come from CodeRabbit's config schema.
3. Open a PR. The change applies org-wide once it merges to `main`.

## Per-repo exceptions

A repo that adds its own `.coderabbit.yaml` or `.coderabbit.config.ts` replaces this config entirely. To keep these settings and change only a few, start that file with `inheritance: true`.
