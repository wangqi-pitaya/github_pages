import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/vite-react-template/',
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
