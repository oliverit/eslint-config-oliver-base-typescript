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
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/indent': ['error', 'tab', {
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
		'@typescript-eslint/member-delimiter-style': ['error', {
			multiline: {
				delimiter: 'comma',
				requireLast: false
			},
			singleline: {
				delimiter: 'comma',
				requireLast: false
			}
		}],
		'@typescript-eslint/naming-convention': ['error', {
			selector: 'default',
			format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
			leadingUnderscore: 'forbid',
			trailingUnderscore: 'forbid',
			filter: {
				// Exclude names that require quotes because they contain a '-' and/or a space, for example 'Content-Type'
				// Exclude '_id' or 'xxx._id' (used by MongoDB)
				regex: '[- ]|^(_id)$|(._id)$',
				match: false
			}
		}, {
			// Enum members must be PascalCase instead of camelCase
			selector: 'enumMember',
			format: ['PascalCase'],
			leadingUnderscore: 'forbid',
			trailingUnderscore: 'forbid'
		}, {
			// Types must be PascalCase instead of camelCase
			selector: 'typeLike',
			format: ['PascalCase'],
			leadingUnderscore: 'forbid',
			trailingUnderscore: 'forbid'
		}],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-floating-promises': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-return': 'off',
		'@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
		'@typescript-eslint/restrict-template-expressions': 'off',
		'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
		camelcase: 'off',
		'class-methods-use-this': 'off',
		'comma-dangle': ['error', 'never'],
		'import/extensions': ['error', 'ignorePackages', {
			js: 'never',
			mjs: 'never',
			jsx: 'never',
			ts: 'never',
			tsx: 'never'
		}],
		'import/prefer-default-export': 'off',
		indent: 'off',
		'max-len': 'off',
		'no-await-in-loop': 'off',
		'no-new': 'off',
		'no-param-reassign': ['error', { props: false }],
		'no-restricted-syntax': [
			'error',
			{
				selector: 'ForInStatement',
				message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
			},
			{
				selector: 'LabeledStatement',
				message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
			},
			{
				selector: 'WithStatement',
				message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
			}
		],
		'no-shadow': 'off',
		'no-tabs': 'off',
		'no-underscore-dangle': ['error', { allow: ['_id'] }],
		'no-unused-vars': 'off',
		'no-use-before-define': 'off',
		'object-curly-newline': 'off',
		'prefer-destructuring': 'off',
		semi: ['error', 'never']
	}
}
