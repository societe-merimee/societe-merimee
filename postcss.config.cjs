const postcssImport = require('postcss-import')
const postcssGlob = require('postcss-import-ext-glob')
const postcssDesignTokens = require('@csstools/postcss-design-tokens')
const postcssPresetEnv = require('postcss-preset-env')

const config = {
	plugins: [
		postcssGlob,
		postcssImport,
		postcssDesignTokens,
		postcssPresetEnv({
			stage: 3,
			features: {
				'nesting-rules': true,
			},
		}),
	],
}

module.exports = config
