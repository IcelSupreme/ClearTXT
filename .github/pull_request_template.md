## Description

Summarize the change and give reviewers what they need:

- Summary of changes
- Reasoning
- Additional context
- How to check (which page, screen, or command to open, what to do, what to
  see, which config values to adjust, and what to ignore)


## Screenshots

Add screenshots or a screen recording of any visual change.

(Delete this section for a change with no visual effect.)


## Docs

Add notes that document the feature or change. A few words or a code snippet is
enough.


## Project impact

List anything the rest of the project needs to know.

- Changes to project config: settings, environment variables, feature flags,
  build or deploy steps
- New user-visible text, and whether the product manager approved it
- New config values that can be tuned, and their defaults
- Changes to what the site stores in the browser, such as fix preferences
- New dependencies

(Delete this section when the change has no project impact.)


## Deploy impact

List anything a release needs to know. A deploy ships on a version tag or an explicit ship run, not on merge.

- Migrations or regenerated data
- Preserved URLs or the redirect map
- Server configuration that ships with the release

(Delete this section when the change has no deploy impact, or when the product doesn't deploy.)


## Ready?

Check each item you completed. Leave an item unchecked when it doesn't apply.

- [ ] Documented what's new
- [ ] Added this change to `CHANGELOG.md` under Unreleased, and called out every change to something that already existed
- [ ] Added in-code documentation (wherever needed)
- [ ] Wrote tests for new components or features
- [ ] Ran `npm run lint` (Biome: formatter and linter)
- [ ] Ran `npm test`, and drove the change end to end in the real pages
- [ ] Kept adjustable values in configuration, with descriptions
- [ ] Used only user-visible text the product manager wrote or approved
- [ ] Checked the change at desktop width and at 360 px, with the keyboard as well as the mouse
- [ ] Set the milestone on this pull request and on each issue it closes, all in one milestone, and checked that each issue is on its epic's task list and meets every acceptance criterion
