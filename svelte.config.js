import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-static';


import { join } from 'path';
import { readFileSync } from 'fs';
import { cwd } from 'process';

const pkg = JSON.parse(readFileSync(join(cwd(), 'package.json')));


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			defaults: {
				style: "postcss"
			},
			postcss: true
		}),
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null,
		}),
		vite: {
			ssr: {
			noExternal: Object.keys(pkg.dependencies || {})
			},
			optimizeDeps: {
				include: ["d3"]
			}
		}
	}
};

export default config;


