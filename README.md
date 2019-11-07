# eslint-config-virgo

一套大一统ESlint标准，支持vue、react、node.js、typescript等项目，插件式配置
virgo：处女座，代表洁癖、强迫，象征我们的代码规范和强迫症的处女座一样。

## 安装

```bash
npm i eslint eslint-config-vergo --save-dev
```

## 使用


- `.eslintrc.js`

```js
module.exports = {
  extends: 'eslint-config-',
};
```

### 在vue中使用
如果要在vue中使用此标准：

- `.eslintrc.js`

```js
module.exports = {
  extends: 'eslint-config-vergo',
  // for experimental features support
  parser: 'babel-eslint',
  parserOptions: {
    // for es6 module
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    // see https://github.com/eslint/eslint/issues/6274
    'generator-star-spacing': 'off',
    'babel/generator-star-spacing': 'off',
  },
};
```

### 在react中使用
如果要在react中使用此标准：

- `.eslintrc.js`

```js
module.exports = {
  extends: 'eslint-config-vergo',
  // for experimental features support
  parser: 'babel-eslint',
  parserOptions: {
    // for es6 module
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // for variables in jsx
    'react/jsx-uses-vars': 'error',
    // see https://github.com/eslint/eslint/issues/6274
    'generator-star-spacing': 'off',
    'babel/generator-star-spacing': 'off',
  },
};
```

### 在node.js中使用此标准

- `package.json`

```json
{
  "devDependencies": {
    "eslint-config-vergo": "7",
    "eslint": "4",
    "babel-eslint": "8"
  }
}
```

- `.eslintrc.js`

```js
module.exports = {
  extends: 'eslint-config-vergo',
  // for experimental features support
  parser: 'babel-eslint',
  rules: {
    // see https://github.com/eslint/eslint/issues/6274
    'generator-star-spacing': 'off',
    'babel/generator-star-spacing': 'off',
  }
};
```


### 在ts项目中使用此标准

- `.eslintrc.js`

```js
module.exports = {
  extends: 'eslint-config-vergo/typescript',
  parserOptions: {
    // recommend to use another config file like tsconfig.eslint.json and extends tsconfig.json in it.
    // because you may be need to lint test/**/*.test.ts but no need to emit to js.
    // @see https://github.com/typescript-eslint/typescript-eslint/issues/890
    project: './tsconfig.json'
  }
};
```

- `scripts`

```json
{
  "lint": "eslint . --ext .ts"
}
```

- `settings.json` in vscode

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "typescript",
      "autoFix": true
    },
  ]
}
```


## License

[MIT](LICENSE)

