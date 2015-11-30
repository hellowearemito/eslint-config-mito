# [eslint](http://eslint.org)-config-mito
Version: **1.0.0-beta.0**

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

### eslint-config-mito/angular

Lints EcmaScript 6+ and Angular 1.x. It requires `eslint` and `eslint-plugin-angular`.

1. `npm install --save-dev eslint-config-mito eslint-plugin-angular eslint`
2. add `"extends": "mito/angular"` to your [.eslintrc](http://eslint.org/docs/user-guide/configuring.html#configuration-file-formats)
```js
{
  "extends": "mito/angular"
}
```

#### eslint-config-mito/angular-legacy
Add the following code to your [.eslintrc](http://eslint.org/docs/user-guide/configuring.html#configuration-file-formats)
```js
{
  "extends": [
    'eslint-config-mito/legacy',
    'eslint-config-mito/rules/angular'
  ]
}
```

### eslint-config-mito/react

Lints EcmaScript 6+ and React. It requires `eslint` and `eslint-plugin-react`.

1. `npm install --save-dev eslint-config-mito eslint-plugin-react eslint`
2. add `"extends": "mito/react"` to your [.eslintrc](http://eslint.org/docs/user-guide/configuring.html#configuration-file-formats)
```js
{
  "extends": "mito/react"
}
```

#### eslint-config-mito/react-legacy
Add the following code to your [.eslintrc](http://eslint.org/docs/user-guide/configuring.html#configuration-file-formats)
```js
{
  "extends": [
    'eslint-config-mito/legacy',
    'eslint-config-mito/rules/react'
  ]
}
```

## License
MIT © 2015 Gergely Kovács (gg.kovacs@gmail.com)
