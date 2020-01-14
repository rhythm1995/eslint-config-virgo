# eslint-config-virgo

一套针对 Sonar 静态检测的 ESlint 标准。支持 vue、react、node.js 等项目，插件式配置，是你保证项目质量的好帮手。目前覆盖了接近百分之 80 的 Sonar 规则，按照该 eslint 基本 Sonar 不会报错。

virgo 含义：处女座，代表洁癖、强迫，象征我们的代码规范和强迫症的处女座一样。

此外，在源码 index.js 中，每条配置后用注释表明了中英文含义，可以看 index.js 找到每条规则的含义和配置，

<a href="url"><img src="icon.png" height="150" width="150" ></a>

## 安装

```bash
npm i eslint eslint-config-vergo --save-dev
```

## 使用

### 常规使用

- `package.json`（建议方式）
```js
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "eslint-config-virgo"
    ]
  }
```

- `.eslintrc.js`

```js
module.exports = {
  extends: "eslint-config-vergo"
};
```

### 配置语言

- `scripts`

```json
{
  "lint": "eslint . --ext .ts .vue .tsx"
}
```

# vscode 配置

- `settings.json` in vscode

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "typescript",
      "autoFix": true
    }
  ]
}
```

- VSCode 中的 autoFixOnSave ）—— 没有效果
  如果需要针对 .vue、.ts 和 .tsx 文件开启 ESLint 的 autoFix，则需要配置成：

```json
{
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ]
}
```

警告级别

## License

[MIT](LICENSE)
