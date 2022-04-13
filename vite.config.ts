import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/web_space/',
	plugins: [react()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "@/assets/scss/global.scss";',
			},
		},
	},
	resolve: {
		alias: {
			'@': '/src/',
		},
	},
});
