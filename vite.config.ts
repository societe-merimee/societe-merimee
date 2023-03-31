// vite.config.ts
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
	resolve: {
		alias: {
			'@helpers': path.resolve(__dirname, './src/ts/helpers'),
			'@components': path.resolve(__dirname, './style-guide/components'),
		},
	},
})
