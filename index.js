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
			selector: 'default', // Matches all selectors
			format: ['camelCase'],
			leadingUnderscore: 'forbid',
			trailingUnderscore: 'forbid'
		}, {
			selector: 'variable', // Allow uppercased variable names
			format: ['camelCase', 'UPPER_CASE'],
			leadingUnderscore: 'forbid',
			trailingUnderscore: 'forbid',
			filter: {
				regex: '^(_id)$', // Exclude variables with name '_id' (used by MongoDB)
				match: false
			}
		}, {
			selector: 'enumMember', // Enum members must be PascalCase instead of camelCase
			format: ['PascalCase'],
			leadingUnderscore: 'forbid',
			trailingUnderscore: 'forbid'
		}, {
			selector: 'typeLike', // Types must be PascalCase instead of camelCase
			format: ['PascalCase'],
			leadingUnderscore: 'forbid',
			trailingUnderscore: 'forbid'
		}, {
			selector: 'property', // Exclude properties which require quotes for example 'Content-Type'
			format: ['camelCase'],
			filter: {
				regex: '[- ]', // Property name contains a '-' and/or a space
				match: false
			}
		}],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
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
			// eslint-disable-next-line @typescript-eslint/naming-convention
			SwitchCase: 1,
			// eslint-disable-next-line @typescript-eslint/naming-convention
			VariableDeclarator: 1,
			outerIIFEBody: 1,
			// eslint-disable-next-line @typescript-eslint/naming-convention
			FunctionDeclaration: {
				parameters: 1,
				body: 1
			},
			// eslint-disable-next-line @typescript-eslint/naming-convention
			FunctionExpression: {
				parameters: 1,
				body: 1
			}
		}],
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
		'no-tabs': 'off',
		'no-underscore-dangle': ['error', { allow: ['_id'] }],
		'object-curly-newline': 'off',
		'prefer-destructuring': 'off',
		semi: ['error', 'never']
	}
}
