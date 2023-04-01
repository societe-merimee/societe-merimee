'use strict'

// require the Mandelbrot theme module
const mandelbrot = require('@frctl/mandelbrot')

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = (module.exports = require('@frctl/fractal').create())

/* Set the title of the project */
fractal.set('project.title', 'Société Mérimée')

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/style-guide/components')

const nunjucks = require('@frctl/nunjucks')({
	env: {
		// Nunjucks environment opts: https://mozilla.github.io/nunjucks/api.html#configure
	},
	filters: {
		// filter-name: function filterFunc(){}
	},
	globals: {
		tokens: require('./assets/style/settings/tokens.json'),
		box: (styles) => {
			let css = ''
			for (const prop in styles) {
				css += `${prop}:${styles[prop]};`
			}
			return `<div style="${css}">box</div>`
		},
		// global-name: global-val
	},
	extensions: {
		// extension-name: function extensionFunc(){}
	},
})

fractal.components.engine(
	nunjucks
) /* set as the default template engine for components */

fractal.docs.engine(nunjucks)

fractal.components.set('ext', '.njk')

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/style-guide/docs')

// create a new instance with custom config options
const theme = mandelbrot({
	skin: 'black',
	panels: ['html', 'resources', 'notes'],
	lang: 'fr',
	// any other theme configuration values here
})

// tell Fractal to use the configured theme by default
fractal.web.theme(theme)
