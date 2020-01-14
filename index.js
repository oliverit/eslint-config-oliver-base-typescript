module.exports = {
	extends: [
		'airbnb-base',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking'
	],
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint'
	],
	rules: {
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/camelcase': ['error', { properties: 'never', ignoreDestructuring: false }],
		'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
		'class-methods-use-this': 'off',
		'comma-dangle': ['error', 'never'],
		'import/extensions': ['error', 'ignorePackages', {
			js: 'never',
			mjs: 'never',
			jsx: 'never',
			ts: 'never',
			tsx: 'never'
		}],
		indent: ['error', 'tab', {
			SwitchCase: 1,
			VariableDeclarator: 1,
			outerIIFEBody: 1,
			FunctionDeclaration: {
				parameters: 1,
				body: 1
			},
			FunctionExpression: {
				parameters: 1,
				body: 1
			}
		}],
		'max-len': 'off',
		'no-new': 'off',
		'no-param-reassign': ['error', { props: false }],
		'no-tabs': 'off',
		'no-underscore-dangle': ['error', { allow: ['_id'] }],
		'object-curly-newline': 'off',
		'prefer-destructuring': 'off',
		semi: ['error', 'never']
	}
}
