# Product settings

Values the product manager can tune without changing how the code works. Each entry says where the value lives, what it does, its range, and what changes on the site when it changes. After a change, run `npm run lint` and `npm test`, and check the page it affects.

## Convert page

Both settings live in `site/script.js`, next to `htmlToMarkdown`. They shape the Markdown that the Convert page writes, before the fixes run.

### `TURNDOWN_OPTIONS`

How Turndown writes each kind of Markdown. Each option is a string.

| Option | Default | Choices | What changes |
| --- | --- | --- | --- |
| `headingStyle` | `"atx"` | `"atx"` or `"setext"` | `"atx"` writes `# Heading`. `"setext"` underlines level 1 and 2 headings with `===` or `---`; levels 3 to 6 stay `###`. |
| `hr` | `"---"` | Any thematic break, such as `"***"` or `"___"` | The line written for a horizontal rule. |
| `bulletListMarker` | `"-"` | `"-"`, `"*"`, or `"+"` | The marker at the start of each bulleted list item. |
| `codeBlockStyle` | `"fenced"` | `"fenced"` or `"indented"` | `"fenced"` wraps code blocks in a fence and keeps their language, such as `` ```js ``. `"indented"` indents them four spaces and drops the language. |
| `fence` | `` "```" `` | `` "```" `` or `"~~~"` | The fence around code blocks, when `codeBlockStyle` is `"fenced"`. |
| `emDelimiter` | `"_"` | `"_"` or `"*"` | The marker around emphasized (italic) text. |
| `strongDelimiter` | `"**"` | `"**"` or `"__"` | The marker around strong (bold) text. |

Turndown's README lists the other options it accepts: <https://github.com/mixmark-io/turndown#options>.

### `TURNDOWN_REMOVE`

The HTML elements that are dropped with everything inside them, so their text never reaches the Markdown. A list of element names.

- **Default:** `head`, `title`, `script`, `style`, `noscript`, and `template`.
- **Adding a name,** such as `"iframe"`, `"button"`, or `"form"`, drops that element's text too.
- **Removing a name** lets that element's text into the Markdown. For example, without `"script"` and `"style"`, pasted code and styles show up as plain text.
