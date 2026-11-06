// Organization-wide CodeRabbit configuration for ATR-Lab.
//
// CodeRabbit applies this file to every ATR-Lab repository that has no
// CodeRabbit config of its own, because this repository is named `coderabbit`.
// Modeled on pingdotgg/t3code's .coderabbit.config.ts.
//
// Do not add a .coderabbit.yaml here: if both exist, the YAML wins and this
// file is ignored.

import { defineConfig, type CodeRabbitContext } from "@coderabbitai/config";

// PR authors with write access to the org or repo. Everyone else (outside
// contributors, first-time contributors) is "gated".
const UNGATED_AUTHORS = new Set(["OWNER", "MEMBER", "COLLABORATOR"]);
const isGated = ({ pr }: CodeRabbitContext) => !UNGATED_AUTHORS.has(pr?.authorAssociation ?? "");

// The lab's coding standards, read from the default branch of ATR-Lab/dev-guidelines.
const GUIDELINES = "ATR-Lab/dev-guidelines:docs";

const RULES = [
  { doc: "python.md", files: "**/*.py" },
  { doc: "c-cpp.md", files: "**/*.{c,cc,cpp,cxx,h,hh,hpp,hxx}" },
  { doc: "javascript-typescript.md", files: "**/*.{js,jsx,mjs,cjs,ts,tsx}" },
  { doc: "swift.md", files: "**/*.swift" },
  { doc: "kotlin.md", files: "**/*.{kt,kts}" },
  { doc: "csharp-unity.md", files: "**/*.cs" },
  { doc: "other-languages.md", files: "**/*.{ino,java,m,sol,adb,ads}" },
  {
    doc: "ros2-packages.md",
    files: "**/{package.xml,CMakeLists.txt,setup.py,setup.cfg},**/launch/**,**/config/*.{yaml,yml}",
  },
  { doc: "hardware.md", files: "**/platformio.ini,**/firmware/**,**/{cad,bom}/**" },
  { doc: "documentation.md", files: "**/{README,AGENTS,CLAUDE,CHANGELOG}.md" },
];

export default defineConfig((ctx) => ({
  language: "en-US",
  reviews: {
    profile: "chill",
    high_level_summary: false,
    review_status: false,
    collapse_walkthrough: true,
    poem: false,
    auto_approvals: {
      // Macroscope handles automatic approvals.
      enabled: false,
      // Members and collaborators may run `@coderabbitai approve` on their own PRs;
      // outside contributors need someone else to.
      allow_author_approval: !isGated(ctx),
    },
    auto_review: {
      enabled: true,
      drafts: false,
      auto_incremental_review: true,
    },
    pre_merge_checks: {
      // No blanket docstring requirement for exploratory research code.
      docstrings: { mode: "off" },
      // For outside contributors, only requested reviewers can override failed checks.
      override_requested_reviewers_only: isGated(ctx),
    },
    // Build output, colcon workspaces, Unity caches and vendored code.
    path_filters: [
      "!**/{build,install,log}/**",
      "!**/{Library,Temp,Logs,obj}/**",
      "!**/{node_modules,.venv,.pio}/**",
      "!.repos/**",
    ],
    path_instructions: RULES.map(({ doc, files }) => ({
      path: files,
      instructions: `Hold changed code to the rules in ${GUIDELINES}/${doc}.`,
    })),
  },
  knowledge_base: {
    code_guidelines: {
      filePatterns: RULES.map(({ doc, files }) => ({
        files: `${GUIDELINES}/${doc}`,
        applyTo: files,
      })),
    },
  },
}));
