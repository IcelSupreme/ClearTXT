# Adopt the improved workflow

Brings ClearTXT onto the improved workflow: no local-only setup or forbidden words in the repository or its history, role-split accounts with a push guard, the planning method, releases that ship the site, and strict checks. Epic: #48.

## Repository and history

- **The developer account does all code work, through a push guard** (product manager, 2026-11-10). Built in #39.
- **Local-only files are listed in `.git/info/exclude`, not in tracked files** (product manager, 2026-11-10). Built in #38.
- **The history was rewritten, and the commits split by role** (product manager, 2026-11-10): the product manager's commits and merges as the product manager, all other work as the developer account. Built in #40.
- **Old pull request descriptions are edited; old pull request refs aren't purged** (product manager, 2026-11-10). Done in #40.
- **`site/robots.txt` keeps its crawler block list,** and the push guard skips its word check for that file only (product manager, 2026-11-10).

## Releases and deploys

- **The site lives in `site/` and ships only through the Deploy workflow** (product manager, 2026-11-10). Built in #41.
- **Tagging starts with the next release;** past versions get no tags (product manager, 2026-11-10). Planned in #45.

## Planning

- **The current phase is "Post launch improvement"** (product manager, 2026-11-10). See [`roadmap.md`](../../project/roadmap.md).
- **The vision is adapted from the README** (product manager, 2026-11-10). See [`vision.md`](../vision.md). Open: the users, the voice, and the points it marks as open.
- **Area labels:** `frontend`, `ux`, `infra`, `project`, and `docs` (product manager, 2026-11-10). Planned in #43.
- **Open:** the milestones of "Post launch improvement", their dates, and their criteria.
- **Open:** whether GitHub's unused default labels are deleted (#43).

## Checks

- **No central strings file for this project** (product manager, 2026-11-10).
- **Strict type checking is planned** (product manager, 2026-11-10), in #47. Open: how types are written, and whether to split the story per script.
- **No review watcher and no scheduled audit for this project** (product manager, 2026-11-10).
