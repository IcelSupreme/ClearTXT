# Third-party code, assets, and licenses

This document lists everything in the product that comes from someone else: the runtime and frameworks, dependencies and libraries, fonts, icons, art, sound, and music. Add an entry in the same pull request that adds it.

Before release, use this list to build the product's credits and license notices.

## Runtime and frameworks

None. The site is plain HTML, CSS, and JavaScript that runs in the browser, with no framework and no build step.

## Dependencies and libraries

### Shipped with the site

The Convert page turns HTML into Markdown with these two libraries. Each file is copied unchanged from its npm package's `dist/` folder into `site/vendor/`, with no build step, and its license ships unchanged in `site/licenses/`. Biome skips `site/vendor/` (`biome.jsonc`), so the files stay as published.

#### Turndown

- **Version:** 7.2.4, published 2026-04-03. 7.2.5 was a week old when it was chosen, so the release before it was taken.
- **Source:** <https://github.com/mixmark-io/turndown>, from npm as `turndown`. Integrity `sha512-I8yFsfRzmzK0WV1pNNOA4A7y4RDfFxPRxb3t+e3ui14qSGOxGtiSP6GjeX+Y6CHb7HYaFj7ECUD7VE5kQMZWGQ==`.
- **File:** `site/vendor/turndown.js`, from `dist/turndown.js`, the browser build that defines `TurndownService`. Its npm dependency, `@mixmark-io/domino`, is for Node only and isn't in this build.
- **License:** MIT, copyright 2017 Dom Christie. Ships as `site/licenses/turndown.txt`.
- **Use:** converts HTML to Markdown. It reads the HTML with the browser's `DOMParser`, which runs no scripts and loads no images or other files.
- **Credit:** "Markdown conversion by Turndown and turndown-plugin-gfm, MIT License." on the Documentation page (product manager, 2026-11-11).

#### turndown-plugin-gfm

- **Version:** 1.0.2, published 2018-05-11, the latest.
- **Source:** <https://github.com/domchristie/turndown-plugin-gfm>, from npm as `turndown-plugin-gfm`. Integrity `sha512-vwz9tfvF7XN/jE0dGoBei3FXWuvll78ohzCZQuOb+ZjWrs3a0XhQVomJEb2Qh4VHTPNRO4GPZh0V7VRbiWwkRg==`.
- **File:** `site/vendor/turndown-plugin-gfm.js`, from `dist/turndown-plugin-gfm.js`, which defines `turndownPluginGfm`.
- **License:** MIT, copyright 2017 Dom Christie. Ships as `site/licenses/turndown-plugin-gfm.txt`.
- **Use:** adds GitHub Flavored Markdown to Turndown: tables, strikethrough, and task lists.
- **Credit:** shared with Turndown, above.

### Development only

These aren't part of the site.

#### Biome

- **Version:** 2.5.10, pinned in `package.json`.
- **Source:** <https://biomejs.dev>, installed from npm as `@biomejs/biome`, with its platform package (`@biomejs/cli-*`).
- **License:** MIT or Apache-2.0, the user's choice, as the package states.
- **Use:** the linter and formatter, run by `npm run lint` and `npm run format`. Configured in `biome.jsonc`.
- **Shipping:** development only. The Deploy workflow publishes `site/` only, so Biome is never in what ships.

#### Node.js

- **Version:** 22 in CI (`.github/workflows/ci.yml`).
- **Source:** <https://nodejs.org>
- **Use:** runs Biome and the tests (`node --test`, built into Node). Not part of the site.

## Icons

The icons and the logo are drawn as inline `<svg>` markup inside each page's HTML, plus `site/favicon.svg` and the source of `site/social-card.png`, so there's no icon folder or license file beside them.

| Pack | Version | Folder | License | Credit |
|---|---|---|---|---|
| [Phosphor](https://phosphoricons.com), Bold weight | `@phosphor-icons/core` 2.1.1 | Inline in `site/**/*.html`, `site/batch.js`, `site/favicon.svg`, and `scripts/social-card/card.html` | MIT, copyright 2023 Phosphor Icons | "Icons by Phosphor Icons, MIT License." on the Documentation page, linking to `site/licenses/phosphor.txt` (product manager, 2026-11-10) |

Phosphor replaced Lucide (ISC) on 2026-11-10, by the product manager's decision, for its MIT license. The icons are copied unchanged from the package's `assets/bold/` folder; only the `<svg>` wrapper is the site's own. The license ships unchanged as `site/licenses/phosphor.txt`, and each file with icons carries a comment naming Phosphor, the license, and the copyright line.

## Fonts

The fonts aren't stored in the repository. Each page loads them from Google Fonts, so no font file or license file ships with the site.

- **SIL Open Font License fonts:** ship the license text and the copyright line of each font with the product, for example in the license notices. A modified version of a font can't use a reserved font name; using the fonts unchanged is fine.
- **Open:** whether the site needs its own license notice while the fonts come from Google Fonts. The copyright lines and reserved font names below are open until they're checked against each font's license file.

| Font | Files | Folder | Copyright | Reserved font name |
|---|---|---|---|---|
| [Noto Sans](https://fonts.google.com/noto/specimen/Noto+Sans) | Loaded from Google Fonts | None | Open | Open |
| [Noto Sans Mono](https://fonts.google.com/noto/specimen/Noto+Sans+Mono) | Loaded from Google Fonts | None | Open | Open |
| [Noto Sans Hebrew](https://fonts.google.com/noto/specimen/Noto+Sans+Hebrew) | Loaded from Google Fonts | None | Open | Open |
| [Noto Sans Arabic](https://fonts.google.com/noto/specimen/Noto+Sans+Arabic) | Loaded from Google Fonts | None | Open | Open |

## Art, sound, and music

None from third parties. `site/favicon.svg` and `site/social-card.png` are the project's own.

| Pack | Version | Folder | Author | License | Credit |
|---|---|---|---|---|---|
