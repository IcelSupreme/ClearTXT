# Working practices

How the product manager and the programmer work together, and the lessons behind each practice. For how the work is planned and how issues are written, see [`issue-workflow.md`](issue-workflow.md).

ClearTXT is a low-effort project, worked on whenever the product manager has time. Keep each pull request self-contained, so the work can stop and pick up at any point.

## Roles and decisions

- **The product manager decides how it looks and behaves. The programmer picks the method.** Questions to the product manager describe visible results, such as "does the filter stay set after the page reloads?", and come with screenshots. Don't ask the product manager to choose between methods, rules, or numbers.
- **Ask how the fix should look.** When a report doesn't say what the fixed result looks like, ask, with two or three concrete options. In a bug issue, "What should happen" states only what the product manager said; mark the rest as open.
- **Ask when words have two meanings.** If a word in the product manager's direction can mean two things in the project, list both and ask. Don't build on a guess, even one stated as "my reading".
- **Answer the "but" first.** A reply such as "Option B is better, but can we…?" isn't a go-ahead. The question may change or replace the pick. Answer it and wait.
- **Routine steps need no approval.** Finding a hang, rerunning a check step by step, and cleaning temporary files are the programmer's job. Ask only about product decisions, look, scope, and changes to the repository's history or the product manager's own files.
- **An "out of scope" line the programmer wrote isn't the product manager's decision.**
- **The programmer doesn't write user-visible text.** When a task needs text, the programmer asks for it, or drafts it when the product manager asks, and the product manager approves it before it ships.

## Reuse what's established

- **New work never takes away from what exists**, unless the product manager says so: pages, features, fixes, methods, and settings.
- **Before building, find how the project already does it.** List what the current site produces for the case, and reuse that code or adapt it. If it can't be reused as it is, say so, explain why, and ask before writing anything new.
- **Look for a ready-made solution first.** Before building something new, check in this order, before the first line of code: what the browser and the web platform already provide, what JavaScript's standard library provides, the code and icons already in the project, then new dependencies. A ready-made solution is preferred over writing our own. Adding outside code, such as a new dependency, needs the product manager's approval, with its pros and cons. Write down what was checked and what was found in the pull request.
- **The three tools do the same things.** A behavior that one of the single-file, batch, and compare pages has and another lacks, such as a shared fix toggle, is a gap to file and fix, not a question to ask.
- **Fix only the reported part.** Name which piece is wrong before fixing, and keep the pieces the product manager called working.

## Visual and behavior problems

- **Find the cause before changing anything.** Reproduce the problem as users meet it: on the real site, at the screen width and in the browser of the report, not in an isolated test page. Switch parts off one at a time, such as styles, fixes, or extensions, until the part that causes the problem is found. Name the cause, and show the screenshot or output that proves it, before proposing a fix.
- **Ask for a marked screenshot early.** If the programmer's screenshots look fine but the product manager sees a problem, the gap is in reading the screenshot. After one failed round, ask the product manager to mark the spot on a screenshot, with a label for each mark.
- **Test features end to end before handing them over.** Drive the feature in the real pages, from where a user starts, and check transitions, edge cases, and odd input, such as invisible characters, mixed scripts, and very long text. A few screenshots miss them.
- **New work never undoes approved work: check for regressions before every handover.** The last release is the baseline. After a change to a page or to the cleaning logic, compare the result with the baseline: the output for the same input, and screenshots of the pages at fixed widths, side by side. Every change found is either one the task meant to make, shown to the product manager, or a regression, fixed before the handover.
- **Make checks see what users see.** Let a test ask the site's own code for its rules, as the tests already read `defaultOpts` from `site/script.js`, instead of copying them, so the two can't drift apart.
- **A test run that hangs never ends on its own.** `npm test` normally takes a few seconds. Count a run as failed when it stops printing well past that, when it never prints its final result, or when it prints an error from the test itself. When a change removes or renames something, search the tests for it.
- **The tests never touch user data.** They run in Node on the cleaning functions, so they can't reach the fix preferences a browser stores. Keep it that way.
- **Verify the rendered result.** Before calling a page change done, look at the page itself, not only the code, the tests, or a description of the change. Check it at desktop width and at 360 px. Headless Chrome won't lay a page out narrower than 500 px, so take narrow screenshots inside a 360 px frame. Confirm the change matches the conventions the site already uses: widths, spacing, shapes, icons, focus states, and text direction, since the site handles Hebrew and Arabic text.
- **Follow the web platform's own patterns.** Use the platform's documented way, such as native form controls and `<details>`, instead of hand-rolling an equivalent.
- **Build guards enforce contracts.** When a rule matters to users, such as the published URLs and the redirect stubs, add a check that fails when the rule breaks, instead of relying on review.

## Documentation

- **Every new method is documented when it's introduced**, with what it does and why, in the topic's document, such as the README or `docs/tech/`. Don't leave it in conversation.
- **Check every document before calling a pull request ready.** Search the repository for the names, paths, and phrases the change moved or replaced, and check the README, the vision, the roadmap, the epic files in `docs/product/epics/`, `architecture.md`, `deploy.md`, `CHANGELOG.md`, and the epic task lists. List what was checked in the pull request.
- **Link only to documents that exist.** A link to a document a later story adds waits for that story.
- **Moving a doc:** search the repository for its old path and name, including code comments, `README.md`, and the pull request template, and update every link in the same change.
- **Mark unverified interface steps.** When giving steps in another program's interface, such as GitHub's settings pages, check its documentation first. If a step can't be checked, say so.

## Git and pull requests

- **Branch each task from `main`.** When a task needs unmerged work, stack its branch, write "Based on #N" in the pull request, and after #N merges, rebase onto `main` with `git rebase --onto origin/main <old base tip> <branch>` and retarget the pull request's base to `main`. After a merge, check `git log origin/main` for every merged commit; a stacked pull request left on its old base can land on a deleted branch and never reach `main`.
- **Approved pull requests are merged with GitHub's merge,** through `dev.sh gh pr merge`, which keeps each pull request's commits. GitHub records itself as the committer of the merge commit, `GitHub <noreply@github.com>`, and that's accepted (product manager, 2026-11-10).
- **Pull requests are approved on GitHub.** The programmer opens each pull request with the product manager as reviewer, and merges it once the product manager approves it there. If any pull request in a stack lacks an approval, none is merged. A rebase that only fixes changelog conflicts keeps the approval; any other change after approval needs a new review request.
- **Work is split between two GitHub accounts by role.** The product manager's account opens issues and manages milestones. The developer account makes commits, pushes, pull requests, comments, merges, releases, and tags. Docs follow their folder: `docs/product/` and `docs/project/` as the product manager, `docs/guides/` and `docs/tech/` as the developer.
- **Commit at each working step, and add each fix round as its own commit.** Don't wait until the work is done to make one commit, and don't fold a fix into an earlier commit with `git commit --amend`. Merging keeps every commit, so the time a story took can be compared with its story points.
- **Replace text only in the files that contain it.** For a project-wide replacement, list the files first with `git grep -l -F`, then edit only those, in one pass.
- **Never use `git commit -a` while the product manager has local changes.** Stage files by name.
- **Never wipe the working tree while the product manager has local changes:** no `git reset --hard`, `git checkout -- .`, `git stash` without paths, or `git clean`.
- **Project documentation may go straight to `main`**, without an issue or a pull request, as may a version release. While a stack of pull requests is open, commit doc changes on the current branch instead, only the doc files, so the stack doesn't need rebasing.
- **Generated files have one writer.** `site/social-card.png` is written only by `scripts/social-card/build.sh`, from `scripts/social-card/card.html`. Change the card's source and run the script; never edit the image by hand.
- **Turn a lint rule off narrowly.** When a Biome rule can't be followed in one file without risk, turn it off for that file only, in `biome.jsonc`, with a comment that gives the reason. It stays on everywhere else.
- **Remove tool footers right after posting.** If a tool appends a footer or a link to a pull request description or a comment, edit the post at once to remove it.
- **Run the checks locally first** (`npm run lint` and `npm test`), and push to an open pull request once, when the work is done. Every push to a pull request runs CI.

## Versions and the changelog

The version number is in `package.json`, and `package-lock.json` follows it. [`CHANGELOG.md`](../../CHANGELOG.md), at the repository's root, lists every change by version, so a regression can be traced without reading the commit history. The public Changelog page, `site/changelog/index.html`, gives the short version of each release for users.

- **Numbers follow [Semantic Versioning](https://semver.org/) defined by the site's public surface,** as the intro of `CHANGELOG.md` describes.
- **The version lives in three places, kept in step:** `package.json` (with `package-lock.json`), the `?v=` cache-busting strings on every `.css`, `.js`, and `.svg` reference in the pages, and the version badge in each page's header. Without a new `?v=`, browsers can keep serving the old files after a release.
- **A build is approved when a batch is checked and merged.** A batch is a stack of pull requests, or one pull request outside a stack. Once the product manager has checked and merged the last pull request of a batch, release on the same day.
- **Every pull request adds its lines to the changelog**, under **Unreleased**, in the same pull request, under the headings Added, Changed, Deprecated, Removed, Fixed, and Security from [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and links its issue. Write what users or the product manager see, not how the code does it.
- **Every change to something that already exists is called out as a change,** including side effects and internal rewrites meant to keep the same results.
- **When stacked pull requests clash in Unreleased,** keep both sides' lines.
- **A release is one commit, straight to `main`, as the developer account.** It moves the Unreleased lines under the new version, bumps the version in all three places, and adds the release's entry to the public Changelog page, with text the product manager approved. Then run CI by hand on `main`, and run the Release workflow, which tags it `v<version>`, creates the GitHub Release, and ships it; [`deploy.md`](../tech/deploy.md) has the steps. Never push a release tag by hand. The tagged version is the new regression baseline.
- **Bug reports name the site version** they were found in, as the header badge shows it.

## Code and tools

- **Check known issues first.** When a browser, Biome, Node, or another tool crashes, hangs, or misbehaves, search its issue tracker before investigating: open and closed issues, for the symptom, the error text, and the version in use. Write in the project's issue what was searched and what was found.
- **Tag known limits in comments with `shortcut:`,** never a tool's name. The site ships as plain text, so its comments reach users.
- **Run Biome through the local install.** Run `npm ci` first when `node_modules/` is missing; `npx biome` without it downloads an unrelated package called `biome`.

## Assets

- **Asset sources are open to the team.** The rule against downloading assets binds the programmer, not the product manager or the team: asset libraries and stores stay open to them, and are never presented as ruled out for the project.
- **Third-party assets are recorded.** Record each one in [`third-party.md`](third-party.md), with its license and credit, in the same pull request, and ship its license where the license asks, as `site/licenses/phosphor.txt` does for the icons.
