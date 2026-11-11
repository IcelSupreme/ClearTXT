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
- **Two boxes: HTML, then cleaned Markdown** (product manager, 2026-11-11). Converted characters are marked in the Markdown box; removed ones are counted in "What changed?", not marked in place.
- **#62 and #63 are built and reviewed in one pull request** (product manager, 2026-11-11), since the page runs on the single-file page's code, which cleans as it converts.
- **A table without a header row gets its first row promoted to the header** (product manager, 2026-11-11), so it becomes a Markdown table instead of staying raw HTML.
- **The HTML's metadata becomes front matter,** as its own story, #67 (product manager, 2026-11-11): title, description, source (the canonical URL), author, published and modified dates, language, site name, and image. Keywords aren't kept, and a field with no value is left out, never written empty.

## Stories

Approved with their order by the product manager on 2026-11-11.

1. #62: As a user, I can paste HTML on the Convert page and copy or download the Markdown, so that I can reuse web content as plain text.
1. #63: As a user, I can have the Markdown cleaned with the same fixes and options as the other tools, so that the result is safe to paste anywhere.
1. #64: As a user, I can import an `.html` file, so that I don't have to copy its source.
1. #67: As a user, I can keep an HTML page's metadata as front matter at the top of the Markdown, so that the Markdown still says where it came from and what it is.

- **The page's address is `/convert/`,** matching `/batch/` and `/compare/` (product manager, 2026-11-11).
- **The page's text was drafted in the style of the current site and approved** (product manager, 2026-11-11). It's listed in #62, "Text needed". New text uses sentence case and follows the Google developer style; the tab title keeps the other pages' " - " separator.
