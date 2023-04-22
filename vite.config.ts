import { defineConfig } from 'vite'
import path from 'path'
import { dedale } from 'vite-plugin-dedale'
import { routes } from './ssg'

export default defineConfig({
	plugins: [
		dedale({
			contentDir: 'content',
			templateDir: 'templates',
			templateEngine: 'nunjucks',
			routes: routes(),
		}),
	],
	resolve: {
		alias: {
			'@helpers': path.resolve(__dirname, './assets/ts/helpers'),
			'@components': path.resolve(__dirname, './style-guide/components'),
		},
	},
})
