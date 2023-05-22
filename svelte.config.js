import adapter from '@sveltejs/adapter-auto';

// https://kit.svelte.dev/docs/adapter-static#usage
// npm install --save-dev @sveltejs/adapter-static --verbose
// import adapter from '@sveltejs/adapter-static';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			'$root/*': './src/*',
			'$components/*': 'src/components/*'
		},

		// https://kit.svelte.dev/docs/configuration#csrf
		csrf: {
			// for production this should always be true
			checkOrigin: false
			// checkOrigin: true
		}
	},
	preprocess: vitePreprocess()
};

export default config;
