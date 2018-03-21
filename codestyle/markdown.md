# Markdown code style

This styleguide is based on the [rules of the Markdown lint tool](https://github.com/markdownlint/markdownlint/blob/master/docs/RULES.md) (by Mark Harrison) and differs as follows.
Check our existing Markdown documents to see how the style is applied in practice.

## Contents

- [Excluded rules](#excluded-rules)
- [Configured rules](#configured-rules)
  - [MD003](#md003) (header style)
  - [MD004](#md004) (unordered list style)
  - [MD009](#md009) (trailing spaces)
  - [MD035](#md035) (horizontal rule style)
- [Custom rules](#custom-rules)

## Excluded rules

- [MD013](https://github.com/markdownlint/markdownlint/blob/master/docs/RULES.md#md013---line-length)
- [MD028](https://github.com/markdownlint/markdownlint/blob/master/docs/RULES.md#md028---blank-line-inside-blockquote)
- [MD034](https://github.com/markdownlint/markdownlint/blob/master/docs/RULES.md#md034---bare-url-used)
- [MD039](https://github.com/markdownlint/markdownlint/blob/master/docs/RULES.md#md039---spaces-inside-link-text)
- [MD040](https://github.com/markdownlint/markdownlint/blob/master/docs/RULES.md#md040---fenced-code-blocks-should-have-a-language-specified)
- [MD041](https://github.com/markdownlint/markdownlint/blob/master/docs/RULES.md#md041---first-line-in-file-should-be-a-top-level-header)

## Configured rules

The following rules have been adapted.

### MD003

**Header style**: ATX

```markdown
# We use ATX style headers
```

### MD004

**Unordered list style**: Dash

```markdown
- Item 1
- Item 2
- Item 3
```

### MD009

**Trailing spaces**: 2 allowed (for line breaks)

### MD035

**Horizontal rule style**: `---`

## Custom rules

Insert a line break for every new sentence, and only then.
