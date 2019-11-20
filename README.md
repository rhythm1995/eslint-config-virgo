# eslint-config-virgo

一套大一统ESlint标准，支持vue、react、node.js等项目，插件式配置，是你保证项目质量的好帮手。

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
  "lint": "eslint . --ext .ts .vue .tsx"
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

# 常用命令

```
安装依赖
npm i

构建 index.js react.js 等 eslintrc 配置
npm run build

执行测试
npm test

自动修复 ESLint 错误
npm run eslint:fix

自动修复格式错误
npm run prettier:fix

检查当前是否覆盖了所有的规则
npm run test:rulesCoverage

发布新版本
npm version <major|minor|patch>
git push --follow-tags
npm publish
```



## License

[MIT](LICENSE)
