# eslint-config-mito
Version: **0.0.1**

This package provides Mito's .eslintrc as an extensible shared config.

## Usage

We export three ESLint configurations for your usage.

### eslint-config-mito

Lints EcmaScript 6+. Only requires `eslint`.

1. `npm install --save-dev eslint-config-mito eslint`
2. add `"extends": "mito"` to your .eslintrc
```js
{
  "extends": "mito"
}
```

### eslint-config-mito/legacy

Lints EcmaScript 5 and below. Only requires `eslint`.

1. `npm install --save-dev eslint-config-mito eslint`
2. add `"extends": "mito/legacy"` to your .eslintrc
```js
{
  "extends": "mito/legacy"
}
```

### eslint-config-mito/angular

Lints EcmaScript 6+ and Angular. It requires eslint and `eslint-plugin-angular`.

1. `npm install --save-dev eslint-config-mito eslint`
2. add `"extends": "mito/legacy"` to your .eslintrc
```js
{
  "extends": "mito/legacy"
}
```

## License
MIT © 2015 Gergely Kovács (gg.kovacs@gmail.com)
