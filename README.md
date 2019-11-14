# eslint-config-virgo

一套大一统ESlint标准，支持vue、react、node.js、typescript等项目，插件式配置

virgo：处女座，代表洁癖、强迫，象征我们的代码规范和强迫症的处女座一样。

<a href="url"><img src="icon.png" height="150" width="150" ></a>

## 安装

```bash
npm i eslint eslint-config-vergo --save-dev
```

## 使用

### 常规使用

- `.eslintrc.js`

```js
module.exports = {
  extends: 'eslint-config-vergo',
};
```

### 配置语言
- `scripts`

```json
{
  "lint": "eslint . --ext .ts"
}
```
# vscode配置
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
