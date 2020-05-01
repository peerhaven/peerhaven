# Markdown style guide

This style guide is based on the [rules of the Markdown lint tool by David Anson](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md) and differs as follows.

## Contents

- [Excluded rules](#excluded-rules)
- [Configured rules](#configured-rules)
  + [MD003](#md003) (heading style)
  + [MD004](#md004) (unordered list style)
  + [MD024](#md024) (multiple headings with the same content)
  + [MD026](#md026) (trailing punctuation in header)
  + [MD035](#md035) (horizontal rule style)
  + [MD044](#md044) (proper names)
  + [MD046](#md046) (code block style)
  + [MD048](#md048) (code fence style)
- [Custom rules](#custom-rules)

## Excluded rules

- [MD013](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md013---line-length) (line length)
- [MD034](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md034---bare-url-used) (bare URL used)
- [MD040](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md040---fenced-code-blocks-should-have-a-language-specified) (fenced code blocks should have a language specified)
- [MD041](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md041---first-line-in-file-should-be-a-top-level-heading) (first line in file should be a top level heading)

## Configured rules

The following rules have been adapted.

### MD003

**Heading style**:
ATX

```markdown
# We use ATX style headings
```

### MD004

**Unordered list style**:
Consistent for list level

```markdown
- Item 1
  + Item 1.1
  + Item 1.2
    * Item 1.2.1
    * Item 1.2.2
- Item 2
- Item 3
```

### MD024

**Multiple headings with the same content**:
Allowed if they're not siblings

```markdown
# Changelog
## 1.0.0
### Features
## 2.0.0
### Features
```

### MD026

**Trailing punctuation in header**:
`?` and `!` allowed

### MD035

**Horizontal rule style**:
`---`

### MD044

**Proper names should have the correct capitalization**:
JavaScript, peerhaven, ...

### MD046

**Code block style**:
Fenced

Define the language of a code block if possible, to facilitate syntax highlighting.

````markdown
```bash
$ tree -a
3232 directories, 20741 files
```
````

### MD048

**Code fence style**:
Backtick (see example above)

## Custom rules

Insert a line break for every new sentence and after a colon – and only then.

---

For questions / discussion, refer to this issue:
[#3 Create or find Markdown style guide](https://github.com/peerhaven/peerhaven/issues/3)
