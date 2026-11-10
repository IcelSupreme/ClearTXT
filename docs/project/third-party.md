# Third-party code, assets, and licenses

This document lists everything in the product that comes from someone else: the runtime and frameworks, dependencies and libraries, fonts, icons, art, sound, and music. Add an entry in the same pull request that adds it.

Before release, use this list to build the product's credits and license notices.

## Runtime and frameworks

None. The site is plain HTML, CSS, and JavaScript that runs in the browser, with no framework and no build step.

## Dependencies and libraries

The site ships no dependencies. These are used for development only.

### Biome

- **Version:** 2.5.10, pinned in `package.json`.
- **Source:** <https://biomejs.dev>, installed from npm as `@biomejs/biome`, with its platform package (`@biomejs/cli-*`).
- **License:** MIT or Apache-2.0, the user's choice, as the package states.
- **Use:** the linter and formatter, run by `npm run lint` and `npm run format`. Configured in `biome.jsonc`.
- **Shipping:** development only. The Deploy workflow publishes `site/` only, so Biome is never in what ships.

### Node.js

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
