# JavaScript style guide

This document is based on the following three style guides, with descending precedence:

1. [Airbnb](https://github.com/airbnb/javascript)
2. [Semi-Standard](https://github.com/standard/semistandard/)
3. [ESLint: recommended](https://eslint.org/docs/rules/)

We deviate from those rules as follows.

## Contents

- [Console](#console)
- [Global `require`](#global-require)
- [Import: Dynamic `require`](#import-dynamic-require)
- [Import: Extensions](#import-extensions)
- [Import: Unresolved](#import-unresolved)
- [Operators](#operators)

## Console

ESLint rule: [`no-console`](https://eslint.org/docs/rules/no-console)

Allow intentional console output, via warnings and errors.

```javascript
console.warn("Caution! Proceed with care!");
```

## Global `require`

ESLint rule: [`global-require`](https://eslint.org/docs/rules/global-require)

Allow require statements inside blocks.
Use only if necessary.

```javascript
function getAssetPath (asset) {
  return require(asset);
}
```

## Import: Dynamic `require`

ESLint rule: [`import/no-dynamic-require`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md)

Allow expressions as arguments in `require` calls.

```javascript
function getAssetPath (asset) {
  return require(asset);
}
```

## Import: Extensions

ESLint rule: [`import/extensions`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md)

No file extensions in import statements.

```javascript
import foo from './foo';
```

## Import: Unresolved

ESLint rule: [`import/no-unresolved`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md)

Allow unresolved arguments in `require` calls.
This allows us to use aliases like `~`.

```javascript
require('~/img/asset.webp');
```

## Operators

ESLint rule: [`operator-linebreak`](https://eslint.org/docs/rules/operator-linebreak)

Consistent linebreak style for operators: At the beginning of the line.

```javascript
answer = everything
  ? 42
  : foo;
```
