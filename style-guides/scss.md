# SCSS style guide

This document is based on the following two style guides:

- [CSS Guidelines](https://cssguidelin.es/) by Harry Roberts
- [Sass Guidelines](https://sass-guidelin.es/) by Kitty Giraudel

We deviate from those rules as follows.

## Contents

- [Extending classes](#extending-classes)
- [Import: Underscores](#import-underscores)
- [Maximum nesting depth](#maximum-nesting-depth)
- [Qualifying selectors](#qualifying-selectors)
- [Whitespace in variable declarations](#whitespace-in-variable-declarations)

## Extending classes

stylelint rule: [`scss/at-extend-no-missing-placeholder`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-extend-no-missing-placeholder/README.md)

Allow extending classes, not only placeholders.

```scss
.foo {
  @extend .bar;
}
```

## Import: Underscores

stylelint rule: [`scss/at-import-no-partial-leading-underscore`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-no-partial-leading-underscore/README.md)

Allow underscores in file names.

```scss
@import "_foo";
```

## Maximum nesting depth

stylelint rule: [`max-nesting-depth`](https://stylelint.io/user-guide/rules/max-nesting-depth)

Allowed depth set to `2`.

```scss
a {
  & .foo { /* 1 */
    &__foo {} /* 2 */
  }
}
```

## Qualifying selectors

stylelint rule: [`selector-no-qualifying-type`](https://stylelint.io/user-guide/rules/selector-no-qualifying-type)

Allow qualifying selectors.

```scss
input[type='button'] {
  margin: 0;
}
```

## Whitespace in variable declarations

stylelint rule: [`scss/dollar-variable-colon-space-after`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-after/README.md)

Leave at least one space after the colon.

```scss
$size-1:   3rem;
$size-10: 30rem;
```

---

For questions / discussion, refer to this issue:
[#13 How to CSS](https://github.com/peerhaven/peerhaven/issues/13)
