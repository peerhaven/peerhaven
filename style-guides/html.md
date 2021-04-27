# HTML style guide

This document is based on the [HTML Style Guide by Ryan Sechrest](https://gist.github.com/ryansechrest/8693303) and differs as follows.
In general, we try to be as close to well-formed XML as possible.

## Contents

- [Indentation with 2 spaces](#indentation-with-2-spaces)
- [Indentation of multi-line comments](#indentation-of-multi-line-comments)
- [Indentation of child elements of body](#indentation-of-child-elements-of-body)
- [Closing of void elements](#closing-of-void-elements)

## Indentation with 2 spaces

```html
<ul>
  <li>Item #1</li>
  <li>Item #2</li>
</ul>
```

## Indentation of multi-line comments

```html
<!--
  This is a comment
  that spans multiple lines
-->
```

## Indentation of child elements of body

```html
<body>
  <header>
    <h1>Hello world!</h1>
  </header>
</body>
```

## Closing of void elements

```html
<link
  href="theme.css"
  rel="stylesheet"
/>
<br />
```

---

For questions / discussion, refer to this issue:
[#11 Add HTML style guide & linter](https://github.com/peerhaven/peerhaven/issues/11)
