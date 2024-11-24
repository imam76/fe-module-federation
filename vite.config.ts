import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import { normalizePath } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { defineConfig } from "vitest/config";
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		viteStaticCopy({
			targets: [
				{
					src: normalizePath(path.resolve('./src/assets/locales')),
					dest: normalizePath(path.resolve('./dist'))
				}
			]
		}),
		federation({
			name: 'modules',
			filename: 'remoteEntry.js',
			exposes: {
				'./Contact': './src/modules/Contacts/Contacts.tsx',
			},
			shared: ['react', 'react-dom'],
		}),
	],
	resolve: {
		alias: {
			'@common': path.resolve(__dirname, 'src/common'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@hook': path.resolve(__dirname, 'src/hook'),
			'@lib': path.resolve(__dirname, 'src/lib'),
			'@modules': path.resolve(__dirname, 'src/modules'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@store': path.resolve(__dirname, 'src/store')
		}
	},
	server: {
		host: true,
		strictPort: true,
	},
	test: {
		environment: "jsdom",
		setupFiles: ["./vitest.setup.ts"],
		css: true,
	},
	build: {
		target: "ES2022"
	},
	preview: {
		host: "localhost",
		port: 5001,
		strictPort: true,
		headers: {
			"Access-Control-Allow-Origin": "*",
		},
	},
});
