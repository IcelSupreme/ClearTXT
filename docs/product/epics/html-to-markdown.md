# HTML to Markdown

A fourth tool that turns HTML into Markdown. Epic: #61.

## Decisions

- **The user pastes HTML; the site doesn't fetch URLs** (product manager, 2026-11-11). Most sites block a browser page from reading them, and the site has no backend. The HTML is converted in the browser, so none of it leaves the browser, as the vision promises.
- **The Markdown result goes through the existing cleaning fixes, with their options** (product manager, 2026-11-11).
- **The conversion may use an outside open-source library** (product manager, 2026-11-11). It would be the site's first shipped dependency, listed in [`third-party.md`](../../project/third-party.md).
- **Users can import an `.html` file as well as paste** (product manager, 2026-11-11).
- **The tool has its own page,** next to Batch and Compare (product manager, 2026-11-11).
- **Milestone:** Site enhancements (product manager, 2026-11-11).
- **The library is Turndown** (product manager, 2026-11-11), with its GFM add-on.
- **Tables, strikethrough, and task lists convert to GitHub-style Markdown** (product manager, 2026-11-11).
- **The page marks what the cleaning fixes changed,** as the single-file tool does (product manager, 2026-11-11).
- **The page is named "Convert"** (product manager, 2026-11-11).
- **No PDFs and no fetching from a URL** (product manager, 2026-11-11).

## Stories

Approved with their order by the product manager on 2026-11-11.

1. #62: As a user, I can paste HTML on the Convert page and copy or download the Markdown, so that I can reuse web content as plain text.
1. #63: As a user, I can have the Markdown cleaned with the same fixes and options as the other tools, so that the result is safe to paste anywhere.
1. #64: As a user, I can import an `.html` file, so that I don't have to copy its source.

- **The page's address is `/convert/`,** matching `/batch/` and `/compare/` (product manager, 2026-11-11).
- **The page's text was drafted in the style of the current site and approved** (product manager, 2026-11-11). It's listed in #62, "Text needed". New text uses sentence case and follows the Google developer style; the tab title keeps the other pages' " - " separator.
