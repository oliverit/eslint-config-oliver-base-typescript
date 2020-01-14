const eslintrc = require('.')

module.exports = {
	...eslintrc,
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json']
	}
}
