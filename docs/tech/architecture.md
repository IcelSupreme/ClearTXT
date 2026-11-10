# Architecture

This document describes how the product is put together and records each structural decision. Add a dated entry under "Decisions" whenever the structure changes.

## Sources

Decisions follow these sources, in order of authority. Each decision names the source it follows, or says that it departs from one and why.

- **Open:** the product manager hasn't named the architecture sources yet. Until then, each decision says that no source was named.

## Folder layout

```none
CHANGELOG.md            Every change by version
package.json            The version number, the dev dependency, and the npm scripts
biome.jsonc             Biome's lint and format settings
site/                   The site, exactly as it ships. See README.md, "Project structure".
    batch/, compare/,   One folder per page, each an index.html, so the URLs have no .html
    changelog/,
    documentation/
test/                   Unit tests for the text-processing logic in site/script.js
scripts/                Scripts for the team. Not part of the site.
    social-card/        card.html, the source of site/social-card.png, and build.sh, which renders it
docs/                   Documents for the team. Never published.
    project/            How the work is planned and done: the roadmap, the issue workflow, and the third-party list
    product/            What the product is, from the product manager's direction: one file per epic in epics/
    tech/               How the code works inside: this file, and deploy.md
.github/workflows/      CI and the Deploy workflow
.githooks/              The tracked pre-push hook. Enable once per clone with git config core.hooksPath .githooks
```

### Rules

- **Only what ships goes in `site/`.** The Deploy workflow publishes the folder as it is.
- **Project documents go in `docs/`,** in the folder for what they're for. Nothing in `docs/` is published.
- **Moving a file:** use `git mv`, and rewrite every path in code, config, and documents in the same change. Search the repository for the old path first, including code comments, `README.md`, and the pull request template.

### Naming

- Folders and files: lowercase, words joined with hyphens where a name has several, as the existing files are.

## Decisions

### 2026-11-10: Ship the site from `site/` through a Deploy workflow

- **Decision:** the site lives in `site/`. GitHub Pages' source is GitHub Actions, and only the Deploy workflow publishes, for a published release, an explicit ship run, or a call from the release workflow. It ships only `main` or a `v*` tag whose commit is on `main`. See [`deploy.md`](deploy.md).
- **Reason:** with Pages publishing `main:/docs`, every merge deployed, and any project document in `docs/` would have been published.
- **Source:** no architecture source named yet; the product manager's decision (#41).

### 2026-11-10: Group the docs by what they're for

- **Decision:** `docs/` has `project/` (how the work is planned and done), `product/` (the product manager's direction), and `tech/` (how the code works inside). A `guides/` folder is added when the first how-to guide is written.
- **Source:** no architecture source named yet. The split follows the planning levels in [`issue-workflow.md`](../project/issue-workflow.md).

### 2026-11-10: Keep the tests in `test/`, run directly by Node

- **Decision:** the tests stay in `test/` and run with `npm test` (`node --test`). They load `site/script.js` under Node and test its pure functions.
- **Reason:** the tests never run in a browser, so they can't reach a user's saved settings in browser storage. A runner that moves user data aside isn't needed.
- **Source:** no architecture source named yet; this records the existing layout.
