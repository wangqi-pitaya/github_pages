module.exports = {
	// 规定一个环境定义了一组预定义的全局变量
	// https://eslint.bootcss.com/docs/user-guide/configuring#specifying-environments
	env: {
		browser: true,
		es2021: true,
	},
	// 继承其他模块相关的eslint配置
	// https://eslint.bootcss.com/docs/user-guide/configuring#extending-configuration-files
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	// eslint的解析器
	parser: '@typescript-eslint/parser',
	// 配置当前JavaScript语言的支持环境，默认是 ECMAScript 5 语法。该配置可以覆盖原有配置，以启用对 ECMAScript 其它版本和 JSX 的支持
	// https://eslint.bootcss.com/docs/user-guide/configuring#specifying-parser-options
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	// 以插件的模式进行复用第三方的eslint配置依赖包
	// https://eslint.bootcss.com/docs/user-guide/configuring#configuring-plugins
	plugins: ['react-hooks'],
	// 文件添加共享设置，或者自定义规则而且使它们可以访问到相同的信息
	// https://eslint.bootcss.com/docs/user-guide/configuring#adding-shared-settings
	settings: {
		react: {
			version: 'detect',
		},
	},
	// 自定义eslint规则覆盖或者关闭原有相关配置
	// https://eslint.bootcss.com/docs/user-guide/configuring#configuring-rules
	rules: {
		'prettier/prettier': 'error',

		// https://eslint.bootcss.com/docs/rules/ 基本规则参考文档地址
		'no-console': 'off', // 允许使用 console
		radix: 'off', // parseInt方法不强制使用第二个参数
		'linebreak-style': ['error', 'unix'], // 强制使用Linux的LF换行符
		'guard-for-in': 'off', // 关闭要求 for-in 循环中有一个 if 语句
		'no-return-await': 'off', // 允许直接返回 await 结果
		'prefer-promise-reject-errors': 'off', // 不求使用 Error 对象作为 Promise 拒绝的原因
		'no-continue': 'off', // 允许使用 continue
		'spaced-comment': ['error', 'always'], // 注释必须有空格
		'no-restricted-syntax': [
			// 不允许使用的语法
			'error',
			{
				selector: 'ForOfStatement',
				message: '不允许使用 for of  语法',
			},
			{
				selector: 'LabeledStatement',
				message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
			},
			{
				selector: 'WithStatement',
				message: '不允许使用 with 语法',
			},
		],
		'new-cap': 'error', // 函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
		camelcase: [
			'warn',
			{
				// 强制使用驼峰拼写法命名约定
				properties: 'always',
			},
		],
		'max-params': ['error', 3], // 函数最多四个参数
		'no-underscore-dangle': 'off', // 标识符可以_开头或结尾
		'no-nested-ternary': 'error', // 禁止使用嵌套的三元表达式,避免代码难以理解
		'no-useless-constructor': 'error', // 关闭禁止不必要的构造函数
		'no-plusplus': 'off', // 关闭禁止使用++，--
		'no-unreachable': 'error', // 禁止有不能执行的代码
		'no-control-regex': 'off', // 关闭禁止在正则表达式中使用控制字符
		'class-methods-use-this': 'off', // 关闭强制类方法使用 this
		'no-use-before-define': 'off', // 关闭未定义前不能使用
		'no-shadow': 'error', // 关闭外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
		'no-extra-semi': 'error', // 禁止多余的分号
		eqeqeq: ['error', 'always'], // 要求使用 === 和 !==
		'jsx-quotes': ['error', 'prefer-double'], // 强制在 JSX 属性中一致地使用双引号

		// 相关文档地址：https://www.npmjs.com/package/eslint-plugin-react reactEsllint配置参考地址
		'react/react-in-jsx-scope': 'off',
		'react/no-multi-comp': [
			'error',
			{
				// 禁止单个文件有多个组件定义, 允许多个无状态组件
				ignoreStateless: true,
			},
		],
		'react/no-array-index-key': 'warn', // 禁止使用数据索引作为元素的key值
		'react/jsx-pascal-case': ['error'], // 为用户定义的 JSX 组件强制使用 PascalCase
		'react/no-unknown-property': [
			'error',
			{
				// 禁止使用未知的DOM属性
				ignore: ['crossOrigin'],
			},
		],
		'react/jsx-filename-extension': [
			'error',
			{
				// 限制可能包含JSX的文件扩展名
				extensions: ['.tsx', '.jsx', '.js'],
			},
		],
		'react/prop-types': 'error', // 防止React组件定义中缺少道具验证
		'react/static-property-placement': 'off', // 不限制静态属性书写位置
		'react/destructuring-assignment': 'off', // 关闭执行支持、状态和上下文的解构赋值的一致使用,
		'react/prefer-stateless-function': 'off', // 关闭强制将无状态组件编写为纯函数,
		// 相关文档地址：https://www.npmjs.com/package/eslint-plugin-import
		'import/prefer-default-export': 'off', // 关闭单个导出时必须使用默认导出

		// 相关文档地址：https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-vars': 'error', // 不允许未使用的变量
		'@typescript-eslint/explicit-member-accessibility': 'off', // 关闭要求类属性和方法上的显式可访问性修饰符
		'@typescript-eslint/no-object-literal-type-assertion': 'off', // 关闭禁止对象字面值出现在类型断言表达式中(来自TSLint的no-object-literal-type-assertion)
		'@typescript-eslint/explicit-function-return-type': 'off', // 关闭要求函数和类方法的显式返回类型
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off', // 关闭在导出的函数和类的公共类方法上要求显式的返回和参数类型
		'@typescript-eslint/no-use-before-define': ['error'], // 禁止在定义变量之前使用变量
		'@typescript-eslint/no-shadow': ['error'], // 禁止变量声明隐藏在外部作用域中声明的变量
		'@typescript-eslint/no-var-requires': 0, // 除了在import语句中，禁止使用require语句
	},
	// 添加该环境下的自定义的全局变量的变量名以防止eslint 报错
	// https://eslint.bootcss.com/docs/user-guide/configuring#specifying-globals
	globals: {
		module: 'readonly',
	},
};
