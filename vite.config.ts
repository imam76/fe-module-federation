import { TanStackRouterVite } from "@tanstack/router-plugin/vite"
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
		TanStackRouterVite(),
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
