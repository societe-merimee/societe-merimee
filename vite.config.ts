// vite.config.ts
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
	resolve: {
		alias: {
			'@helpers': path.resolve(__dirname, './assets/ts/helpers'),
			'@components': path.resolve(__dirname, './style-guide/components'),
		},
	},
})
