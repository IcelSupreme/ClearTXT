# Issue workflow

How the work is planned, and how issues are written, organized, and navigated in this repository. The method adapts ["A practical guide to game project planning"](https://gamestudiounlocked.substack.com/p/game-development-project-planning), from the Game Studio Unlocked newsletter, to software projects. This repository doesn't use a GitHub Projects board. Navigate by milestones, epics, labels, and trackers, which all live on the issues themselves.

## Planning levels

Planning happens at several levels, each inside the one above it. Each level shapes the one below it.

| Level | What it answers | Where it lives |
| --- | --- | --- |
| Vision | What product this is, and why | [`vision.md`](../product/vision.md) |
| Roadmap | Which phases the project moves through, in what order | [`roadmap.md`](roadmap.md) |
| Milestone | What a stage of the current phase delivers, and how to tell it's done | A GitHub milestone, and its section in [`roadmap.md`](roadmap.md) |
| Epic | Which topic of work a story belongs to | An epic issue, and its file in [`product/epics/`](../product/epics/) |
| Story | One small result for a user or the product manager | A story issue |
| Task | One technical step inside a story | A checklist item in the story, or a commit |

- **Phases are planned one at a time.** Only the current phase has milestones and dates. Each later phase has a direction in [`roadmap.md`](roadmap.md): a list of what it will include. The next phase's milestones are planned near the end of the current phase. When a phase is planned, check first for basic project tools its work will lean on, such as tests, builds and releases, and profiling, and plan them early in the phase; a test framework left out of an early phase comes back later as unplanned work.
- **Near work is detailed, far work stays rough.** An epic that isn't close to the work stays one epic issue, without stories, until its phase is planned.

## Milestones

A milestone is a stage of the current phase, ending at the point where the product manager checks the state of the product and decides whether to go on, adjust, or stop. A milestone isn't a topic. Topics are epics.

Each milestone has these parts, in its section of [`roadmap.md`](roadmap.md), and in short in the GitHub milestone's description:

- **A name and a target date.** The date is the GitHub milestone's due date. It's a best guess, not a promise. When the work shows it's wrong, the product manager moves it.
- **Completion criteria:** the conditions that say the milestone is done. Each is a fact that anyone can check in the running product, such as "a new user can sign up and sign in with the keyboard only".
- **Go criteria:** what must hold for the product manager to move on to the next milestone, such as "no open bug in sign-up".

The milestone holds every story and bug needed to meet its completion criteria, and nothing else. On GitHub, name each milestone `<Phase>: <name>`, such as `Post launch improvement: Workflow adoption`.

- **A milestone's scope is set when it's planned, and the product manager adjusts it as the work shows.** The product manager may move work between the current phase's milestones, add a milestone, move a target date, or add work to a milestone whose scope is set. Work added after the scope was set carries the `unplanned` label (see "Labels"). The guard against scope creep stays: only the product manager adds work to a set milestone, and the `unplanned` label keeps the growth visible at the review.
  - **Too much unplanned work is a warning.** Each time work joins a milestone as `unplanned`, the programmer adds up its story points. When the unplanned points pass a fifth of the points the milestone was planned with, the programmer tells the product manager before going on. The product manager then decides whether the unplanned work gets its own scope, such as a milestone of its own, or moves to later milestones. A fifth is a starting point, and the product manager may change it. At the review, a lot of unplanned work points to planning that missed something, which is worth noting for the next milestones. New work that no milestone of the current phase needs goes to the backlog with the `far-future` label, naming its phase when that's known.
- **The milestone review.** At the target date, or when every completion criterion is met, the product manager checks the criteria and the go criteria, and decides:
  - **Go:** the milestone closes, and the next one starts.
  - **No-go:** the product manager cuts scope, moves the date, or adds the missing work.

  Record the decision and its date in the milestone's section of [`roadmap.md`](roadmap.md).

## Epics

An epic is a large topic of work, such as accounts, search, or data import. It can span several milestones and phases.

- An epic is an issue with the `epic` label. It holds a task list of its stories and bugs, and links to its file in [`product/epics/`](../product/epics/), which holds the product manager's decisions for the topic.
- An epic has no milestone of its own. Its stories carry the milestones they serve.
- An epic stays open while it has open stories, and closes when the topic is finished.

To list the epics, filter the issues by the `epic` label: `is:open label:epic`.

## Stories

A story is a small result that a user or the product manager can see or use. One story leads to one branch and one pull request. The pull request closes the issue with `Closes #N` in its description. The product manager checks the work in a staging or local build and approves the pull request on GitHub; the programmer then merges it.

- **Stories.** The product manager gives direction, and the product docs in `docs/product/` are updated. The programmer drafts the stories, and the product manager approves them and their order. Each approved story becomes one issue.
- **Bugs.** Anyone who finds a problem files a bug issue.
- **Ideas for later.** Intent that isn't planned yet is filed with the `far-future` label.
- **Audits.** From time to time, the work stops for an audit that checks the project is healthy. Each audit is a story in the current milestone, under a Project health epic, and ends with a report. Each finding is filed as a bug or a story: in the current milestone, with a priority, when its criteria need it; otherwise in the backlog.
  - **Code audits** can run on a schedule, such as twice a week at night. Each checks the changes since the previous audit for bugs, needed refactoring, needless code, the project's conventions, and optimization. If work is still going on at that time, the audit waits until it stops, so it never runs alongside the work.
  - A code audit files its findings without waiting for the product manager's approval. Before any fix, it writes a report on the findings that need the product manager's input, as a comment on the audit story. Then it fixes the rest in a pull request for the product manager's review. The findings it fixes go in the current milestone, so that pull request closes them.

### Write a story issue

The title is the story, in this form: "As a [user or the product manager], I [can do or see something], so that [the reason]." Write "As a user, I can export my report as a CSV file, so that I can open it in a spreadsheet", not "Work on export". The "so that" part tells whether the result serves its purpose, not just whether the code was written.

A story for a tool or a setting names the product manager: "As the product manager, I can set the session timeout in the config file, so that I can tune it without code".

The body uses these sections:

```markdown
**Story points:** N
**Priority:** Must, Should, or Could
**Blocked by:** #N, or None

## Context

Why this story exists, and product notes. Link the epic file, or the roadmap section, it comes from.

## Acceptance criteria

What the product manager will see, do, or be able to adjust in the running product or its configuration when the story is done. Each item is a condition that can be checked as met or not met.

- [ ] Open `<page, screen, or command>`, and do `<action>`: `<what happens>`.
- [ ] The config value `<value>` in `<config file>` changes `<effect>`.

## Text needed

User-visible text that this story adds or changes, with where it appears. The product manager writes the text; the project has no central strings file. Write "None" if the story adds no text.

## Out of scope

What this story doesn't cover, so that the pull request stays small.
```

The story doesn't copy the Definition of Done. It applies to every story; see "Definition of Done".

### Write a bug issue

The title says what happens, such as "Saving a draft with an empty title loses the draft".

```markdown
**Story points:** N
**Priority:** Must, Should, or Could
**Blocked by:** #N, or None

## What happens

## What should happen

## Steps to reproduce

1. Open `<page, screen, or command>`.
1. ...

## Where

The product version (from `package.json`, or as the product shows it), the environment (local, staging, or production), and the platform, browser, or device.
```

## Definition of Ready

A story or bug is ready, and can be started, when all of these hold:

- It's written in its format above, and its acceptance criteria, or what should happen, are written.
- It has story points, a priority, a milestone, and an epic.
- Every open point it depends on is answered by the product manager. An open point is never filled with a guess.
- Every issue it's blocked by is done.
- Every visual asset it needs exists. A story that needs a missing asset waits for the product manager.

## Definition of Done

A story or bug is done when all of these hold. The pull request template's "Ready?" checklist covers the programmer's part.

- Every acceptance criterion is met.
- The work is on its own branch, in a pull request that closes the issue.
- Biome (`npm run lint`) passes on every changed file. Once the type check exists (#47), it shows no errors.
- The tests that the work touches pass (`npm test`). Work that changes what users do was driven end to end through the real UI or API, not only checked in screenshots.
- Every adjustable value lives in configuration, with its description.
- All new or changed user-visible text was written by the product manager.
- Every screen and action the work touches works on every platform, browser, and device the product supports, and with every input method it supports.
- The docs and `CHANGELOG.md` say what changed.
- The product manager checked the work in a staging or local build and approved the pull request on GitHub, and it's merged. Work isn't done when the programmer says so, but when the product manager accepts it.

## Work in progress

The work flows continuously, as in Kanban, without fixed sprints. When a story is accepted, the next ready story starts. An issue moves through these stages, which show on the issues themselves:

| Stage | How it shows |
| --- | --- |
| Backlog | Open, with the `far-future` label |
| Ready | Open, on the current milestone, and meets the Definition of Ready |
| In progress | A branch for it exists |
| In review | Its pull request is open, waiting for the product manager's check |
| Done | Its pull request is merged, and the issue is closed |

A blocked issue names what blocks it in its **Blocked by** line.

## Priority

Every story and bug in a milestone carries one priority label. The product manager sets it.

- `must`: the milestone's completion criteria need it.
- `should`: important, but the milestone can close without it.
- `could`: worth doing if there's room.

Work that won't be done in this phase has no priority label. It goes to the backlog with the `far-future` label, or closes as not planned.

Within one priority, the product manager orders the work. A story that's of high value and small effort usually goes first. One of low value and large effort is a candidate to cut.

## Labels

Every open issue carries one area label, except an epic that spans several areas, and one type label. Stories and bugs in a milestone also carry one priority label. Combine them to filter.

Area labels (one primary per issue). Adapt them to the product: drop the ones it doesn't need, add one when a new part of the product needs it, and list it here.

- `frontend`: the pages, their scripts and styles, and what runs in the user's browser
- `infra`: hosting, deployment, builds, and monitoring
- `ux`: flows, layout, wording, and how the product feels to use
- `project`: project settings, folder layout, tools, and repository setup
- `docs`: project documentation, such as the files in `docs/` and code comments

Type labels:

- `bug`: something behaves or looks wrong
- `enhancement`: a story
- `epic`: an epic, which holds a topic's stories (see "Epics")
- `prototype`: throwaway work that tests one idea, in `prototypes/`, which stays local and out of the repository
- `far-future`: recorded intent, not planned yet
- `tracker`: a tracker, which collects ideas and findings (see "Trackers")
- `unplanned`: work added to a milestone after its scope was set, by the product manager's decision. A bug or audit finding in pre-existing work that the product manager decides to fix now is unplanned. A bug or audit finding in the work of the current milestone isn't.

Priority labels: `must`, `should`, and `could` (see "Priority").

Other labels:

- `accessibility`: work that makes the product usable by more people. Add it beside the area and type labels.

Filter examples:

- The current milestone's open work: `is:open milestone:"<name>"`
- What a milestone needs: `is:open milestone:"<name>" label:must`
- One area: `is:open label:infra`
- Area and type: `is:open label:frontend label:bug`
- Everything deferred: `is:open label:far-future`
- All epics: `is:open label:epic`
- All trackers: `is:open label:tracker`
- What joined a milestone after it was set: `is:issue milestone:"<name>" label:unplanned`

## Trackers

A tracker is an umbrella issue that carries the `tracker` label and holds a task list of related issues, such as the findings of one review or a set of tips. It has no milestone and no work of its own. A cluster of one or two issues doesn't need one; its area label is enough.

A tracker differs from an epic. An epic is a topic of work that is planned. A tracker collects ideas and findings, which become stories once they're planned. When a tracker's theme becomes planned work, it becomes an epic: swap the `tracker` label for `epic`, and add the story points.

## Story points

Every issue that holds real work carries a story-point estimate on a Fibonacci scale: 1, 2, 3, 5, 8, 13, or 21. A 1 is trivial, a 13 is very large, and a 21 is epic-scale. Points estimate the effort left to finish the work, not the calendar time, so an issue already fixed on a branch keeps a small estimate.

Record the estimate in two places:

- A title token, `[SP:N]`, at the front of the title. For example, `[SP:3] As a user, I can export my report as a CSV file, so that I can open it in a spreadsheet`.
- A body line, `**Story points:** N`, at the top of the description.

An epic's points roll up its children, so its estimate overlaps theirs. Don't add an epic's points to a work total. Count only children that are open or closed as completed: when a child is closed as not planned, take its points out of the epic's total. An epic listed inside another epic doesn't count toward that epic's total: its own children carry those points, and counting both would count them twice.

Skip the estimate on trackers, which hold no work of their own, and on a `far-future` placeholder that isn't specified yet. Point the placeholder once its scope is written.

A story larger than 8 points is usually too large for one pull request. Split it into several stories in its epic.

Points show relative size only. Don't work out milestone dates from them; the product manager sets each milestone's date.

### Check how the estimates match the work

From time to time, compare the closed issues that a pull request finished with the size of those pull requests, and record what the comparison found here.

- Count the lines changed in code and in documents (`.md` files). Leave out generated files, such as lock files, snapshots, and build output: a regenerated file can add tens of thousands of lines whatever the task's size. When one pull request finished several issues, split its size between them.
- Lines aren't effort. Every story carries fixed work that lines don't show, such as its pull request, its changelog lines, and the product manager's check. A bug's points pay for finding the cause, which doesn't show in the fix's size, and visual work spends its effort on screenshots and checks.
- Time can only be compared when a commit is made at each working step: with one commit made when the work is done, or a first commit made as the pull request opens, the building before it doesn't show.
- Leave out issues closed as not planned, closed without a pull request, trackers, and epics.

## Why no Project board

A GitHub Projects board is a view for people only. Scripts and command-line tools can read and write labels, milestones, epics, sub-issues, comments, and tracker task lists, because those live on the issues, but the tools in use here can't read or write a Projects board. So labels, milestones, epics, and trackers are the shared source of truth. Anyone may still add a Projects view on top and group it by the area labels, but keep the labels, milestones, epics, and trackers authoritative.

## Before you file or update an issue

- Read the live issue first: its state, latest comments, and linked pull requests. Issue state changes, so don't rely on memory. Don't comment on a closed issue; open a fresh issue, or reopen the original, instead. Searching first also avoids filing a duplicate.
- Before splitting or re-planning an issue, also read every pull request that mentions it, such as "Part of #N", which doesn't link as a closing pull request.
- To find work in an area, filter the issue list by its area label.
- To see a stage's status, open its milestone.
- To see a topic's status, open its epic.
- To see a theme's status, open its tracker.
- When you open a new story or bug, apply one area label and one type label, and add it to its epic's task list. If it belongs to the current phase, set its milestone and its priority label. Otherwise, give it the `far-future` label. Unless it's a tracker or an unspecified `far-future` placeholder, add a story-point estimate to the title and body.
- Don't rely on a Projects board being present.

## Keep milestones and epics current

Milestones and epics drift when they're set later instead of at once. Do each step when it happens, not in a batch afterward.

- **When you file an issue,** add it to its epic's task list, and set its milestone, in the same step. If the issue falls outside every open milestone's criteria, it goes to a later milestone or the backlog; don't stretch a milestone.
- **When you open a pull request,** set the milestone of the issue it closes. A pull request that closes no issue takes the milestone of the work it serves.
- **Keep each pull request in one milestone.** A pull request closes issues from one milestone only.
- **When an issue closes,** check its box in its epic's task list and in its tracker's task list.
- **When an issue's points change,** update the epic's total in its title and body.
- **When a milestone's review is done,** record the decision in [`roadmap.md`](roadmap.md), and close the milestone on a go.
- **Before you call a pull request ready,** check that the pull request and each issue it closes carry a milestone, and that each issue is on its epic's task list.

To find what's missing, list open issues and pull requests that have no milestone and aren't in the backlog: `is:open no:milestone -label:tracker -label:epic -label:far-future`.
