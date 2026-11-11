# Vision

The direction of the product, from the product manager. It answers what product this is, who it's for, and why. Adapted from the README on 2026-11-10, at the product manager's direction. Points the README doesn't settle are marked as open.

## Problem

Text pasted from other places carries characters that cause trouble: smart quotes, em dashes, emoji, accents, invisible and control characters, look-alike characters from other scripts, and unsafe link protocols in Markdown. Most of them are hard or impossible to see.

## Users

Open: the README doesn't name who the site is for.

## Value

- **Clean text in one step:** paste text in and get a filtered, normalized version out, as you type.
- **See exactly what changed:** the cleaned text sits beside the original, with every removed and converted character marked.
- **Private by design:** none of the text leaves the browser.
- **Free.**

## Scope

Four tools on one static site:

- **Single file:** paste, import, or type text, and copy or download the cleaned result.
- **Batch:** clean many files at once with the same fixes, each downloaded under its original name.
- **Compare:** diff two files word by word, with a report of the differences, optionally after cleaning both.
- **HTML to Markdown:** paste HTML or import an `.html` file, and get Markdown out, cleaned with the same fixes and options as the other tools (product manager, 2026-11-11). See [`html-to-markdown.md`](epics/html-to-markdown.md).

Every fix is a separate toggle, grouped by kind, and the choices are remembered between visits and shared by the four tools. A Documentation page explains what the site defends against and how, and a Changelog page lists what's new.

## Non-goals

- **No backend:** the site is static, and the text is processed in the browser only.
- **No build step:** the files in `site/` are what ships.
- Open: any other non-goals.

## UX principles

- **A fix that's off leaves its characters untouched.**
- **Every change is visible:** removed, converted, and invisible characters are marked in place, and changed lines can be stepped through with buttons or the keyboard.
- **One click back to the defaults** with "Restore defaults".
- Open: any other principles.

## Text and voice

Open: the product manager hasn't set the tone or the rules for user-visible text.

## Ideas to try

Open: none recorded yet.
