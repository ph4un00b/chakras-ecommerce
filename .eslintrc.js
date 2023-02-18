module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react-hooks/recommended",
		// "plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		/**
		 * if problems you might use
		 * @see https://www.npmjs.com/package/@react-native-community/eslint-plugin
		 */
		"universe/native",
	],
	overrides: [
		{
			files: ["*.ts", "*.tsx", "*.d.ts"],
			parserOptions: {
				project: "./tsconfig.json",
			},
		},
	],
	settings: {
		// "import/ignore": ["node_modules/react-native/index\\.js$"],
		"import/ignore": ["react-native"],
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint", "react-hooks"],
	rules: {
		// indent: ["error", 2],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-return-await": "error",
		eqeqeq: ["off", "smart"],
		"react/no-unescaped-entities": ["warn", { forbid: ["'"] }],
		"react-hooks/exhaustive-deps": "error",
		"@typescript-eslint/no-non-null-assertion": "off",
		"no-labels": ["off"],
		"no-unused-labels": ["error"],
		"@typescript-eslint/ban-ts-comment": ["off"],
		"prettier/prettier": ["off"],
		"@typescript-eslint/no-var-requires": ["error"],
		"import/order": ["error"],
	},
};
