# [eslint](http://eslint.org)-config-mito [![NPM version][npm-image]][npm-url]
Version: **2.0.2**

This package provides Mito's .eslintrc as an extensible shared config.

## Usage

We export three ESLint configurations for your usage.

### eslint-config-mito

Lints EcmaScript 6+. Only requires `eslint`.

1. `npm install --save-dev eslint-config-mito eslint`
2. add `"extends": "mito"` to your [.eslintrc](http://eslint.org/docs/user-guide/configuring.html#configuration-file-formats)
```js
{
  "extends": "mito"
}
```

### eslint-config-mito/legacy

Lints EcmaScript 5 and below. Only requires `eslint`.

1. `npm install --save-dev eslint-config-mito eslint`
2. add `"extends": "mito/legacy"` to your [.eslintrc](http://eslint.org/docs/user-guide/configuring.html#configuration-file-formats)
```js
{
  "extends": "mito/legacy"
}
```

See [Mito's documentation](https://github.com/ggkovacs/eslint-config-mito/tree/master/docs) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## License
MIT © 2016 Gergely Kovács (gg.kovacs@gmail.com)

[npm-image]: https://badge.fury.io/js/eslint-config-mito.svg
[npm-url]: https://npmjs.org/package/eslint-config-mito
