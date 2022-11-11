import adapter from '@sveltejs/adapter-static';
// import adapter from 'svelte-adapter-github';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],

	kit: {
		adapter: adapter(),
		paths: {
			base: process.env.NODE_ENV === "production" ? "/ukzn_hackathon" : "",
		},
		appDir: 'internal',
	}
};

export default config;
