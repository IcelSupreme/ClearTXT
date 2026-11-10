# Deploy

How ClearTXT reaches users. The site is static: the files in `site/` are exactly what ships, with no build step. GitHub Pages serves them at `https://icelsupreme.github.io/ClearTXT/`.

The Deploy workflow (`.github/workflows/deploy.yml`) checks out one commit, packs `site/` as a Pages artifact, and publishes it. GitHub Pages switches to the new artifact in one step, so a partial upload can never go live.

## What ships, and when

A merge to `main` doesn't ship. A deploy happens only when the Deploy workflow runs, in one of these ways:

- **A release is published.** The workflow ships the release's tag.
- **The Release workflow calls it.** A release created inside a workflow can't trigger another workflow's release event, so Release calls Deploy directly.
- **An explicit ship run.** Run Deploy by hand from the Actions tab, or with `gh workflow run deploy.yml --ref main`. Leave **ref** empty to ship `main`, or give a release tag, such as `v1.15.0`, to ship that version.

Whichever way it starts, Deploy ships only `main` or an existing `v*` release tag whose commit is on `main`. It checks the requested ref before checking it out and stops with an error for anything else, such as another branch, a missing tag, or a tag on a commit outside `main`. The `github-pages` environment checks only the run's own ref, not the ref it checks out, so this check is what keeps an unapproved ref off the live site.

Only one deploy runs at a time. A second one waits for the first to finish.

## Release a version

1. Land the work on `main` through pull requests with green CI.
1. Make the release commit straight to `main`, as the developer account:
   - Move the lines under **Unreleased** in `CHANGELOG.md` to a new `## [<version>] - <date>` section, leave an empty **Unreleased** above it, and add the version's link at the end of the file.
   - Set the version in `package.json` and `package-lock.json` (`npm version <version> --no-git-tag-version`), in every `?v=` string, and in each page's header badge.
   - Add the release's entry to the public Changelog page, `site/changelog/index.html`, with text the product manager approved.
1. Run CI by hand on `main` (`gh workflow run ci.yml --ref main`), and wait for it to pass.
1. Run Release by hand on `main` (`gh workflow run release.yml --ref main`).

Release refuses to run when the run isn't on `main`, when the version's tag already exists, when the version isn't the same in all its places, when the Changelog page or `CHANGELOG.md` has no entry for it, or when the commit has no green CI run. Otherwise it creates the `v<version>` tag and the GitHub Release, with the version's `CHANGELOG.md` lines as notes, and then calls Deploy with the tag. Don't push a release tag yourself.

## What is in the artifact

Everything in `site/`, including:

- `404.html`, which GitHub Pages serves for any unmatched path.
- `batch.html`, `compare.html`, `changelog.html`, and `documentation.html`, the redirect stubs at the old flat paths.
- `robots.txt` and `sitemap.xml`.

GitHub Pages reads no server configuration from the deployed files.

## GitHub setup, once

1. **Pages source:** in **Settings > Pages**, set **Source** to **GitHub Actions**. With the old "Deploy from a branch" source, every push to `main` would publish.
1. **Environment:** the `github-pages` environment allows deploys only from the `main` branch and from release tags matching `v*`. The Deploy job runs in it, so a run from any other branch or tag fails before it publishes.
1. **Build variables:** none.

## Read the log

Each deploy is a run of the Deploy workflow in the Actions tab, and a deployment in the `github-pages` environment (`https://github.com/icelsupreme/ClearTXT/deployments`).

- **A good run** ends with the **deploy** step green and shows the page URL.
- **A failed run** stops at the failing step, and the live site stays on the previous deploy. A run from a branch or tag that the environment doesn't allow fails at the job's start.

## Roll back

Run Deploy by hand on `main`, with **ref** set to the previous release's tag. Pages switches back to that version's files. Then fix the problem on `main` through a pull request, and release again.
