module.exports = {
	// 规定一个环境定义了一组预定义的全局变量
	// https://eslint.bootcss.com/docs/user-guide/configuring#specifying-environments
	env: {
		browser: true,
		es2021: true,
		es6: true,
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
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
	},
	// 添加该环境下的自定义的全局变量的变量名以防止eslint 报错
	// https://eslint.bootcss.com/docs/user-guide/configuring#specifying-globals
	globals: {},
};
