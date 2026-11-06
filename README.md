<p align="center">
  <img src=".github/assets/header.png" alt="CodeRabbit config: Lab-wide code review settings for every ATR-Lab repo. Advanced Telerobotics Research Laboratory, Kent State University." width="100%">
</p>

<p align="center">
  <b>One CodeRabbit configuration for every code repo of the Advanced Telerobotics Research Laboratory, so lab members get reviews that follow the lab's dev guidelines without adding a config file to their projects.</b><br>
  <sub>Advanced Telerobotics Research Laboratory · Department of Computer Science · Kent State University</sub>
</p>

<p align="center">
  <a href="https://docs.coderabbit.ai/configuration/central-configuration"><img alt="CodeRabbit: central config" src="https://img.shields.io/badge/CodeRabbit-central_config-003976?style=flat-square"></a>
  <a href="https://www.atr.cs.kent.edu/"><img alt="Advanced Telerobotics Research Laboratory, Kent State University" src="https://img.shields.io/badge/ATR_Lab-Kent_State-003976?style=flat-square"></a>
  <img alt="Last reviewed Nov. 2026" src="https://img.shields.io/badge/last_reviewed-Nov._2026-4A5868?style=flat-square">
</p>

## Start here

<table>
  <tr>
    <td width="33%" valign="top">
      <img src=".github/assets/icons/workshop-idea.png" width="44" alt=""><br>
      <b><a href="#how-it-works">How it works</a></b><br>
      <sub>Why every lab repo gets these settings with nothing to install.</sub>
    </td>
    <td width="33%" valign="top">
      <img src=".github/assets/icons/publication.png" width="44" alt=""><br>
      <b><a href="#what-reviews-check">What reviews check</a></b><br>
      <sub>Which dev-guidelines page applies to which files.</sub>
    </td>
    <td width="33%" valign="top">
      <img src=".github/assets/icons/safety-shield.png" width="44" alt=""><br>
      <b><a href="#who-can-approve">Who can approve</a></b><br>
      <sub>What lab members can do on their own pull requests, and what outside contributors cannot.</sub>
    </td>
  </tr>
  <tr>
    <td width="33%" valign="top">
      <img src=".github/assets/icons/code.png" width="44" alt=""><br>
      <b><a href=".coderabbit.config.ts">The config file</a></b><br>
      <sub><code>.coderabbit.config.ts</code>, the only file CodeRabbit reads here.</sub>
    </td>
    <td width="33%" valign="top">
      <img src=".github/assets/icons/mechanical-gear.png" width="44" alt=""><br>
      <b><a href="#changing-the-config">Changing the config</a></b><br>
      <sub>Edit, type-check and open a pull request.</sub>
    </td>
    <td width="33%" valign="top">
      <img src=".github/assets/icons/milestone-flag.png" width="44" alt=""><br>
      <b><a href="#per-repo-exceptions">Per-repo exceptions</a></b><br>
      <sub>Override a few settings in one repo and keep the rest.</sub>
    </td>
  </tr>
</table>

## How it works

CodeRabbit treats a repository named `coderabbit` as the [central configuration](https://docs.coderabbit.ai/configuration/central-configuration) for its organization. [`.coderabbit.config.ts`](.coderabbit.config.ts) here applies to every ATR-Lab repo that has no CodeRabbit config of its own. The CodeRabbit app is installed on all ATR-Lab repositories, so a new repo is covered from its first pull request.

The setup follows [pingdotgg/t3code's config](https://github.com/pingdotgg/t3code/blob/main/.coderabbit.config.ts), with the lab's dev guidelines in place of T3 Code's internal docs. Reviews are kept quiet:

- Automatic reviews run on every pull request that is not a draft and again on each new push.
- There is no high-level summary, status message, poem or docstring requirement; the profile is "chill".
- Auto-approval is off, because Macroscope handles approvals.
- Build output and caches are skipped: `build/`, `install/`, `log/`, Unity `Library/`, `node_modules/`, `.venv/` and `.pio/`.

## What reviews check

CodeRabbit loads each page below from [ATR-Lab/dev-guidelines](https://github.com/ATR-Lab/dev-guidelines/tree/master/docs) as a code guideline and holds changed files to it. Updating a page there updates reviews in every lab repo.

| Guide | Applies to |
|---|---|
| [Python](https://github.com/ATR-Lab/dev-guidelines/blob/master/docs/python.md) | `*.py` |
| [C and C++](https://github.com/ATR-Lab/dev-guidelines/blob/master/docs/c-cpp.md) | `*.c`, `*.cc`, `*.cpp`, `*.cxx`, `*.h`, `*.hh`, `*.hpp`, `*.hxx` |
| [JavaScript and TypeScript](https://github.com/ATR-Lab/dev-guidelines/blob/master/docs/javascript-typescript.md) | `*.js`, `*.jsx`, `*.mjs`, `*.cjs`, `*.ts`, `*.tsx` |
| [Swift](https://github.com/ATR-Lab/dev-guidelines/blob/master/docs/swift.md) | `*.swift` |
| [Kotlin](https://github.com/ATR-Lab/dev-guidelines/blob/master/docs/kotlin.md) | `*.kt`, `*.kts` |
| [C# and Unity](https://github.com/ATR-Lab/dev-guidelines/blob/master/docs/csharp-unity.md) | `*.cs` |
| [Other languages](https://github.com/ATR-Lab/dev-guidelines/blob/master/docs/other-languages.md) | Arduino `*.ino`, Java, MATLAB `*.m`, Solidity and Ada |
| [ROS 2 packages](https://github.com/ATR-Lab/dev-guidelines/blob/master/docs/ros2-packages.md) | `package.xml`, `CMakeLists.txt`, `setup.py`, `setup.cfg`, `launch/` and `config/*.yaml` |
| [Hardware and firmware](https://github.com/ATR-Lab/dev-guidelines/blob/master/docs/hardware.md) | `platformio.ini`, `firmware/`, `cad/` and `bom/` |
| [Documentation](https://github.com/ATR-Lab/dev-guidelines/blob/master/docs/documentation.md) | `README.md`, `AGENTS.md`, `CLAUDE.md` and `CHANGELOG.md` |

## Who can approve

CodeRabbit reads the pull request author's association with the repo, the same way T3 Code's config does.

| Author | `@coderabbitai approve` on their own pull request | Overriding a failed pre-merge check |
|---|---|---|
| Owner, member or collaborator | Allowed | CodeRabbit's default rules |
| Outside or first-time contributor | Someone else must run it | Requested reviewers only |

## Changing the config

1. Edit [`.coderabbit.config.ts`](.coderabbit.config.ts). Do not add a `.coderabbit.yaml` here: if both files exist, CodeRabbit uses the YAML and ignores the TypeScript file.
2. Type-check it. The types come from CodeRabbit's config schema:

   ```bash
   npm install
   npm run typecheck
   ```

3. Open a pull request. The change applies to every lab repo once it merges to `main`.

## Per-repo exceptions

A repo that adds its own `.coderabbit.yaml` or `.coderabbit.config.ts` replaces this config entirely. To keep these settings and change only a few, start that file with `inheritance: true`.

## Repo map

| Path | What it holds | Read it when |
|---|---|---|
| [`.coderabbit.config.ts`](.coderabbit.config.ts) | The central CodeRabbit config | You want to see or change what reviews do |
| [`package.json`](package.json), [`tsconfig.json`](tsconfig.json) | The CodeRabbit config SDK and the type-check script | You change the config |
| [`.github/assets/`](.github/assets/) | The README header and icons | You restyle this page |
| [`AGENTS.md`](AGENTS.md) | Instructions for coding agents (`CLAUDE.md` points to it) | You are, or you are directing, a coding agent |

## Contributing

Suggest a change by [opening an issue](https://github.com/ATR-Lab/coderabbit/issues/new) or a pull request. Changes here reach every lab repo, so say why in the pull request and run the type-check first. To change what reviews hold code to, edit the guide in [dev-guidelines](https://github.com/ATR-Lab/dev-guidelines) instead.

---

<p align="center">
  <sub><b>ATR Lab docs</b> ·
  <a href="https://github.com/ATR-Lab/about">About the lab</a> ·
  <a href="https://github.com/ATR-Lab/getting-started-atr-lab">Getting started</a> ·
  <a href="https://github.com/ATR-Lab/dev-guidelines">Dev guidelines</a> ·
  <a href="https://github.com/ATR-Lab/all-things-ros2">All things ROS 2</a> ·
  <a href="https://github.com/ATR-Lab">All repositories</a></sub><br>
  <sub>Advanced Telerobotics Research Laboratory · Department of Computer Science · Kent State University ·
  <a href="https://www.atr.cs.kent.edu/">www.atr.cs.kent.edu</a></sub>
</p>
