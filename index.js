/**
 * @description: Virgo处女座：eslint代码检查规则，对标公司的sonarqube进行的静态检查
 * @author: bugzhang <https://bugzhang.com>
 * @date: 2019-11-11 15:02:46
 * 
 * "off" 或者 0：关闭规则。
 * "warn" 或者 1：打开规则，并且作为一个警告（不影响exit code）。
 * "error" 或者 2：打开规则，并且作为一个错误（exit code将会是1）。
 */

module.exports = {
  root: true, // 停止在父级目录中寻找 .eslintrc.* | package.json 文件里的 eslintConfig
  parserOptions: {
    // 解析器选项。帮助 ESLint 确定什么是解析错误，所有语言选项默认都是 false
    ecmaVersion: 2019, // 支持 ES2019 规范
    sourceType: "module", // script (默认) | module（如果你的代码是 ECMAScript 模块)
    ecmaFeatures: {
      // 想使用的额外的语言特性
      jsx: true // 启用 JSX
    }
  },
  env: {
    browser: true, // 浏览器全局变量
    node: true, // Node.js 全局变量和 Node.js 作用域
    es6: true // 启用 ES6 语法支持 及 新的 ES6 全局变量
  },
  globals: {
    // 定义全局变量。访问当前源文件内未定义的变量时，no-undef 规则将发出警告。如果你想在一个源文件里使用全局变量，推荐你在 ESLint 中定义这些全局变量，这样 ESLint 就不会发出警告了
    Page: false, // false 不允许被重写
    template: false
  },
	extends: "", // 一个配置文件可以从基础配置中继承已启用的规则，每个配置继承它前面的配置
	plugins: ['sonarjs', 'filenames'], // 

  // 启用的规则及其各自的错误级别：
  // 'off' | 0    - 关闭规则
  // 'warn' | 1   - 开启规则，使用警告（次要）级别的错误：warn (不会导致程序退出) 
  // 'error' | 2  - 开启规则，使用错误（主要）级别的错误：error (当被触发的时候，程序会退出)
  rules: {
		"eqeqeq": ["error", "smart"], // "===" and "!==" should be used instead of "==" and "!=": 【比较使用 === 和 !==】
		"no-alert": 1, // "alert" should not be used: 【不允许使用alert，confirm，prompt语句】
		"prefer-rest-params": 1, // "arguments" should not be accessed directly:【建议使用...参数代替 arguments】
		"no-caller": 2, // "arguments.caller" and "arguments.callee" should not be used: 【不允许使用arguments.callee和arguments.caller属性】
		"sonarjs/no-useless-catch": 1, // "catch" clauses should do more than rethrow:【建议catch语句中除了捕获错误需要打印日志等工作】
		"no-continue": 2, // "continue" should not be used: 【不允许使用continue关键字】
		"no-delete-var": 1, // "delete" should be used only with object properties: 【不建议使用delete关键字】
		"no-eval": 2, // "eval" and "arguments" should not be bound or assigned: 【不允许使用eval】
		"guard-for-in": 2 , // "for...in" loops should filter properties before acting on them: 【强制要求 for-in 循环中有一个 if 语句】
		"sonarjs/no-identical-conditions": 2, // "if ... else if" constructs should end with "else" clauses: 【if...else if不应该在没有else的时候出现】
		"no-duplicate-imports": 2, // "import" should be used to include external code: 【禁止模块重复导入】
		"use-isnan": 2, // "NaN" should not be used in comparisons: 【要求使用 isNaN() 检查 NaN】
		"no-new-wrappers": 2, // "new" operators should be used with functions: 【禁止对 String，Number 和 Boolean 使用 new 操作符】
		'constructor-super': 2, // "super()" should be invoked appropriately: 【要求在构造函数中有 super() 的调用】
		'no-this-before-super': 2, // "super()" should be invoked appropriately: 【禁止在构造函数中，在调用 super() 之前使用 this 或 super】
		"default-case": 2, // "switch" statements should have "default" clauses: 【在switch语句中需要有default语句】
		"sonarjs/no-small-switch": 1, // "switch" statements should have at least 3 "case" clauses: 【switch至少要有3个case】
		'sonarjs/max-switch-cases': 2, // "switch" statements should not have too many "case" clauses: 【switch不能有太多case】
		"no-new-symbol": 2, // "Symbol" should not be used as a constructor: 【禁止 Symbol new 操作符和 new 一起使用】
		"no-undef-init":  1, // "undefined" should not be assigned: 【不建议将变量初始化为 undefined】
		"no-void": 2, // "void" should not be used: 【禁用 void 操作符】
		"no-with": 2, // "with" statements should not be used: 【禁用 with 关键字】
		"require-yield": 2, // "yield" expressions should not be used outside generators: 【要求 generator 函数内有 yield并且 yield 只能出现在 generator 函数中】
		"for-direction": 2, // A "for" loop update clause should move the counter in the right direction: 【强制for循环向正确的方向】
		'sonarjs/prefer-while': 1, // A "while" loop should be used instead of a "for" loop
		'sonarjs/no-all-duplicated-branches': 2, // All branches in a conditional structure should not have exactly the same implementation: 【条件结构中的所有分支都不应该具有完全相同的实现】
		"brace-style": [1, "1tbs", { "allowSingleLine": true }], // An open curly brace should be located at the end of a line: 【采用js的 1tbs 大括号风格，并且允许单行代码大括号】
		"no-array-constructor": 1, // Array constructors should not be used: 【避免Array的构造函数】
		"no-unexpected-multiline": 2, // Assignments should not be made from within sub-expressions: 【禁止多行表达式】
		"no-extra-boolean-cast": 1, // Boolean literals should not be used in comparisons: 【避免不必要的布尔类型转换】
		"sonarjs/no-inverted-boolean-check": 1, // Boolean checks should not be inverted: 【布尔检查不应该反转】
		"sonarjs/no-redundant-boolean": 1, // Boolean literals should not be redundant: 【布尔检查不应该是多于的】
		"array-callback-return": 2, // Callbacks of array methods should have return statements: 【强制回调函数中有 return 语句】
		"callback-return": 2, // Callbacks of array methods should have return statements: 【强制回调函数中有 return 语句】
		"sonarjs/cognitive-complexity": 1, // Cognitive Complexity of functions should not be too high: 【函数的认知复杂性不应太高】
		"sonarjs/no-collapsible-if": 2, // Collapsible "if" statements should be merged: 【应该合并可合并的“if”语句】
		"sonarjs/no-unused-collection": 1, // Collection and array contents should be used: 【array、set、map中的元素应该被使用】
		"sonarjs/no-element-overwrite": 2, // Collection elements should not be replaced unconditionally: 【不做无意义的array、set、map的元素替换】
		"sonarjs/no-collection-size-mischeck": 1, // Collection sizes and array length comparisons should make sense: 【array、set、map中的元素的length应该是有意义的】
		"no-sequences": 2, // Comma and logical OR operators should not be used in switch cases / Comma operator should not be used: 【禁用逗号操作符】
		"no-empty": 2, // Conditionally executed blocks should be reachable
		"no-lone-blocks": 2, // Conditionally executed blocks should be reachable: 【有条件地执行的块应该是可到达的】
		"max-depth": ["error", 2], // Control flow statements "if", "for", "while", "switch" and "try" should not be nested too deeply: 【代码块最多嵌套三层】
		"max-nested-callbacks": ["error", 2], // Control flow statements "if", "for", "while", "switch" and "try" should not be nested too deeply: 【代码块最多嵌套三层】
		"no-debugger": 1, // Debugger statements should not be used: 【避免使用debugger语句（意思是上传的代码不应该有，开发环境当然要用）】
		'filenames/match-exported': 1, // Default export names and file names should match: 【默认导出模块名称和文件应该一致】
		"no-unexpected-multiline": 2, // Expressions should not be too complex: 【禁止出现令人困惑的多行表达式】
		"eol-last": ["always", 2], // Files should contain an empty newline at the end: 【文件末尾应该有一个空行】
		"no-multiple-empty-lines": 2, // Files should not have too many lines: 【禁止出现多行空行】
		"camelcase": 1, // Function and method names should comply with a naming convention: 【强制驼峰命名法】
		"no-dupe-args": 2, // Function argument names should be unique: 【函数参数名应该是唯一的】
		"no-useless-constructor": 1, // Function constructors should not be used
		"no-inner-declarations": 2, // Function declarations should not be made within blocks：【禁止在嵌套的块中出现变量声明或 function 声明】
		"sonarjs/no-extra-arguments": 2, // Function calls should not pass extra arguments: 【函数调用不应传递额外的参数】
		"sonarjs/no-identical-functions": 2, // Functions should not have identical implementations：【相同功能的函数不应该被多次实现】
		"no-ex-assign": 2, // Function parameters, caught exceptions and foreach variables should not be reassigned:【禁止对 catch 子句的参数重新赋值y】
		"consistent-return":2, // Function returns should not be invariant：【要求 return 总是返回指定不变的值】
		"no-loop-func": 2, // Functions should not be defined inside loops: 【禁止在循环中出现 function 声明和表达式】
		"max-params": 1, // Functions should not have too many parameters: 【函数最多允许3个参数】
		"require-yield": 2, // Generators should "yield" something: 【Generators中必须有yield出现】
		"sonarjs/no-identical-expressions":2,  // Identical expressions should not be used on both sides of a binary operator:  【在二进制运算符的两侧不应使用相同的表达式】
		"sonarjs/no-redundant-jump": 2, // Jump statements should not be followed by dead code: 【跳转语句不应该跟死代码】
		"no-unsafe-finally": 2, // Jump statements should not occur in "finally" blocks: 【禁止在 finally 语句块中出现控制流语句】
		"no-unreachable": 2, // Jump statements should not be used unconditionally: 【禁止在return、throw、continue 和 break 语句之后出现不可达代】
		"sonarjs/no-one-iteration-loop": 2, // Loops with at most one iteration should be refactored: 【只有迭代一次的循环应该被重构】
		"sonarjs/prefer-immediate-return": 1, // Local variables should not be declared and then immediately returned or thrown: 【不应声明局部变量，然后立即返回或抛出】
		"no-labels": 2, // Labels should not be used: 【禁用标签语句】 
		"no-trailing-spaces": 1, // Lines should not end with trailing whitespaces: 【禁止行位空格】
		"no-unmodified-loop-condition": 1, // Loops should not be infinite: 【禁用无限循环】
		"no-multi-str": 1, // Multiline string literals should not be used: 【不应使用多行字符串文字】
		"func-names": ["error", "never"], // Named function expressions should not be used: 【要求或禁止使用命名的 function 表达式】
		"key-spacing": [
      2,
      {
        // 强制在对象字面量的属性中键和值之间使用一致的间距
        beforeColon: false,
        afterColon: true
      }
		],
		"object-shorthand": ["error", "always"], // Object literal shorthand syntax should be used / Object literal syntax should be used: 【应使用对象字面量简写语法】
		"no-octal": 2, // Octal values should not be used: 【禁用八进制字面量】 
		"sonarjs/prefer-object-literal": 1, // Object literal syntax should be used: 【应该使用对象字面语法】
		"no-octal-escape": 2, // Octal values should not be used: 【禁止在字符串中使用八进制转义序列】
		"accessor-pairs": 1, // Property getters and setters should come in pairs: 【强制 getter 和 setter 在对象中成对出现】
		"no-extra-parens": 2, // Redundant pairs of parentheses should be removed: 【禁止不必要的括号】
		"sonarjs/no-identical-conditions": 2, // Related "if/else if" statements should not have the same condition: 【相关的“if/else if”语句不应该具有相同的条件】
		"prefer-single-boolean-return": 1, // Return of boolean expressions should not be wrapped into an "if-then-else" statement: 【布尔表达式的返回不应被封装到"if-else if-else"语句中】
		"jsx-quotes": [1, "prefer-double"], // Single quotes should be used for string literals 【强制在 JSX 属性中一致地使用双引号】
		"quotes": [
      1,
      "single", // Single quotes should be used for string literals：【尽可能使用单引号】
      {
        // 强制使用一致的反勾号、双引号或单引号
        avoidEscape: true, // 允许字符串使用单引号或双引号，只要字符串中包含了一个其它引号，否则需要转义
        allowTemplateLiterals: true // 允许字符串使用反勾号
      }
    ],
		"no-irregular-whitespace": 1, // Source files should have a sufficient density of comment lines: 【禁止在字符串和注释之外不规则的空白】
		"sonarjs/no-duplicate-string": 1, // String literals should not be duplicated: 【字符串文本不应重复】
		"semi": ["error", "always"], // Statements should end with semicolons: 【语句强制分号】
		"no-useless-concat": 2, // Template literal placeholder syntax should not be used in regular strings: 【禁止不必要的字符串字面量或模板字面量的连接】
		"prefer-template": 1, // Template strings should be used instead of concatenation: 【要求使用模板字面量而非字符串连接】
		""



    "accessor-pairs": 2, // 强制 getter 和 setter 在对象中成对出现
    "arrow-spacing": [
      2,
      {
        // 强制箭头函数的箭头前后使用一致的空格
        before: true,
        after: true
      }
    ],
    "block-spacing": [2, "always"], // 禁止或强制在左花括号和同一行上的下一个 token 之间有一致的空格
    "brace-style": [
      2,
      "stroustrup",
      {
        // 强制在代码块中使用一致的大括号风格 1tbs|stroustrup（if-else中的else语句，连同catch 和 finally，都必须在右括号后另起一行）|allman
        allowSingleLine: true // 允许块的开括号和闭括号在 同一行
      }
    ],
    "comma-dangle": [2, "never"], // 要求或禁止末尾逗号 never|always|always-multiline
    "comma-spacing": [
      2,
      {
        // 强制在逗号前后使用一致的空格
        before: false,
        after: true
      }
    ],
    "comma-style": [2, "last"], // 强制使用一致的逗号风格
    "constructor-super": 2, // 要求在构造函数中有 super() 的调用
    curly: [2, "multi-line"], // 强制所有控制语句使用一致的括号风格
    "dot-location": [2, "property"], // 强制在点号之前和之后一致的换行
    "eol-last": 2,
    "generator-star-spacing": [
      2,
      {
        // 强制 generator 函数中 * 号周围使用一致的空格
        before: true,
        after: true
      }
    ],
    "handle-callback-err": [2, "^(err|error)$"], // 要求回调函数中有容错处理
    indent: [
      2,
      4,
      {
        // 强制使用一致的缩进
        SwitchCase: 2
      }
    ],
    "jsx-quotes": [2, "prefer-single"], // 强制在 JSX 属性中一致地使用双引号或单引号
    "key-spacing": [
      2,
      {
        // 强制在对象字面量的属性中键和值之间使用一致的间距
        beforeColon: false,
        afterColon: true
      }
    ],
    "keyword-spacing": [
      2,
      {
        // 强制在关键字前后使用一致的空格
        before: true,
        after: true
      }
    ],
    "new-cap": [
      2,
      {
        // 要求构造函数首字母大写
        newIsCap: true,
        capIsNew: false
      }
    ],
    "new-parens": 2, // 要求调用无参构造函数时有圆括号
    "no-array-constructor": 2, // 禁用 Array 构造函数
    "no-caller": 2, // 禁用 arguments.caller 或 arguments.callee
    "no-console": 1, // 禁用 console
    "no-class-assign": 2, // 禁止修改 类声明的变量
    "no-cond-assign": 2, // 禁止条件表达式中出现赋值操作符
    "no-const-assign": 2, // 禁止修改 const 声明的变量
    "no-control-regex": 0, // 禁止在正则表达式中使用控制字符
    "no-delete-var": 2, // 禁止删除变量
    "no-dupe-args": 2, // 禁止 function 定义中出现重名参数
    "no-dupe-class-members": 2, // 禁止 类成员中出现重复的名称
    "no-dupe-keys": 2, // 禁止对象字面量中出现重复的 key
    "no-duplicate-case": 2, // 禁止出现重复的 case 标签
    "no-empty-character-class": 2, // 禁止在正则表达式中使用空字符集
    "no-empty-pattern": 2, // 禁止使用空解构模式
    "no-eval": 2, // 禁用 eval()
    "no-ex-assign": 2, // 禁止对 catch 子句的参数重新赋值
    "no-extend-native": 2, // 禁止扩展原生类型
    "no-extra-bind": 2, // 禁止不必要的 .bind() 调用
    "no-extra-boolean-cast": 2, // 禁止不必要的布尔转换 !!
    "no-extra-parens": [2, "functions"], // 禁止不必要的括号
    "no-fallthrough": 2, // 禁止 case 语句落空
    "no-floating-decimal": 2, // 禁止数字字面量中使用前导和末尾小数点
    "no-func-assign": 2, // 禁止对 function 声明重新赋值
    "no-implied-eval": 2, // 禁止使用类似 eval() 的方法
    "no-inner-declarations": [2, "functions"], // 禁止在嵌套的块中出现变量声明或 function 声明
    "no-invalid-regexp": 2, // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    "no-irregular-whitespace": 2, // 禁止在字符串和注释之外不规则的空白
    "no-iterator": 2, // 禁用 __iterator__ 属性
    "no-label-var": 2, // 不允许标签与变量同名
    "no-labels": [
      2,
      {
        // 禁用标签语句
        allowLoop: false,
        allowSwitch: false
      }
    ],
    "no-lone-blocks": 2, // 禁用不必要的嵌套块
    "no-mixed-spaces-and-tabs": 2, // 禁止空格和 tab 的混合缩进
    "no-multi-spaces": 2, // 禁止使用多个空格
    "no-multi-str": 2, // 禁止使用多行字符串
    "no-multiple-empty-lines": [
      2,
      {
        // 禁止出现多行空行
        max: 1
      }
    ],
    "no-global-assign": 2, // 禁止对原生对象或只读的全局对象进行赋值
    "no-unsafe-negation": 2, // 禁止对关系运算符的左操作数使用否定操作符 !(key in object)
    "no-new-object": 2, // 禁用 Object 的构造函数。如：new Object()
    "no-new-require": 2, // 禁止调用 require 时使用 new 操作符
    "no-new-symbol": 2, // 禁止 Symbol 操作符和 new 一起使用
    "no-new-wrappers": 2, // 禁止对 String，Number 和 Boolean 使用 new 操作符
    "no-obj-calls": 2, // 禁止把全局对象作为函数调用。如：Math()
    "no-octal": 2, // 禁用八进制字面量（以 0 开始的数字）
    "no-octal-escape": 2, // 禁止在字符串中使用八进制转义序列。（应该使用 Unicode 转义序列）
    "no-path-concat": 2, // 禁止对 __dirname 和 __filename 进行字符串连接
    "no-proto": 2, // 禁用 __proto__ 属性。（应该使用 getPrototypeOf 方法）
    "no-redeclare": 2, // 禁止多次声明同一变量
    "no-regex-spaces": 2, // 禁止正则表达式字面量中出现多个空格
    "no-return-assign": [2, "except-parens"], // 禁止在 return 语句中使用赋值语句 except-parens|always
    "no-self-assign": 2, // 禁止自我赋值
    "no-self-compare": 2, // 禁止自身比较
    "no-sequences": 2, // 禁用逗号操作符
    "no-shadow-restricted-names": 2, // 禁止将变量定义为关键字
    "func-call-spacing": [2, "never"], // 禁止或要求在函数名和开括号之间有空格 never|always
    "no-sparse-arrays": 2, // 禁用稀疏数组
    "no-this-before-super": 2, // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    "no-throw-literal": 2, // 禁止抛出异常字面量
    "no-trailing-spaces": 2, // 禁用行尾空格
    "no-undef": 2, // 禁用未声明的变量，除非它们在 /* global */ 注释中被提到
    "no-undef-init": 2, // 禁止将变量初始化为 undefined
    "no-unmodified-loop-condition": 2, // 禁用一成不变的循环条件
    "no-unneeded-ternary": 2, // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    "no-unreachable": 2, // 禁止在return、throw、continue 和 break 语句之后出现不可达代码
    "no-unsafe-finally": 2, // 禁止在 finally 语句块中出现控制流语句
    "no-unused-vars": [
      2,
      {
        // 禁止出现未使用过的变量
        vars: "all", // 检测所有变量，包括全局环境中的变量
        args: "none", // 参数可以不使用
        varsIgnorePattern: "Page" // 不需要检测的变量：变量名称匹配正则模式
      }
    ],
    "no-useless-call": 2, // 禁止不必要的 .call() 和 .apply()
    "no-useless-computed-key": 2, // 禁止在对象中使用不必要的计算属性
    "no-useless-constructor": 2, // 禁用不必要的构造函数
    "no-useless-escape": 0, // 禁用不必要的转义字符
    "no-whitespace-before-property": 2, // 禁止属性前有空白
    "no-with": 2, // 禁用 with 语句
    "one-var": [
      2,
      {
        // 强制函数中的变量在一起声明或分开声明 always|never|consecutive
        initialized: "never", // 要求每个作用域的初始化的变量有多个变量声明
        uninitialized: "consecutive" // 对未初始化的变量，要求其连续的变量声明合并为一个声明
      }
    ],
    "operator-linebreak": [
      2,
      "after",
      {
        // 强制操作符使用一致的换行符风格 after|before|none
        overrides: {
          // 盖对指定的操作的全局设置
          "?": "before",
          ":": "before",
          "&&": "before",
          "||": "before"
        }
      }
    ],
    "operator-linebreak": [2, "before"],
    "padded-blocks": [2, "never"], // 禁止或要求块内填充 never|always
    quotes: [
      2,
      "single",
      {
        // 强制使用一致的反勾号、双引号或单引号
        avoidEscape: true, // 允许字符串使用单引号或双引号，只要字符串中包含了一个其它引号，否则需要转义
        allowTemplateLiterals: true // 允许字符串使用反勾号
      }
    ],
    semi: [2, "never"], // 要求或禁止使用分号代替 ASI (always|never)
    "semi-spacing": [
      2,
      {
        // 强制分号之前和之后使用一致的空格。 false: 禁止有空格 | true: 强制有空格
        before: false,
        after: true
      }
    ],
    "space-before-blocks": [2, "always"], // 强制在块之前使用一致的空格
    "space-before-function-paren": [2, "never"], // 强制在 function的左括号之前使用一致的空格
    "space-in-parens": [2, "never"], // 强制在圆括号内使用一致的空格
    "space-infix-ops": 2, // 要求操作符周围有空格
    "space-unary-ops": [
      2,
      {
        // 要求或禁止在一元操作符之前或之后存在空格
        words: true, // 适用于单词类一元操作符，例如：new、delete、typeof、void、yield
        nonwords: false // 适用于这些一元操作符: -、+、--、++、!、!!
      }
    ],
    "spaced-comment": [
      2,
      "always",
      {
        // 强制在注释中 // 或 /* 使用一致的空格
        markers: [
          "global",
          "globals",
          "eslint",
          "eslint-disable",
          "*package",
          "!",
          ","
        ]
      }
    ],
    "template-curly-spacing": [2, "never"], // 要求或禁止模板字符串中的嵌入表达式周围空格的使用 `${}`
    "use-isnan": 2, // 要求使用 isNaN() 检查 NaN
    "valid-typeof": 2, // 强制 typeof 表达式与有效的字符串进行比较
    "wrap-iife": [2, "any"], // 要求 IIFE（立即执行函数）使用括号括起来
    "yield-star-spacing": [2, "both"], // 强制在 yield* 表达式中 * 周围使用空格
    yoda: [2, "never"], // 要求或禁止 Yoda条件（在条件判断中字面量在先而变量在第二的位置）
    "prefer-const": 2, // 要求使用 const 声明那些声明后不再被修改的变量（针对 let 声明）
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "object-curly-spacing": [
      2,
      "always",
      {
        // 强制在大括号中使用一致的空格
        objectsInObjects: false // 禁止以对象元素开始或结尾的对象的花括号中有空格
      }
    ],
    "array-bracket-spacing": [2, "never"] // 强制数组方括号中使用一致的空格
  }
};
