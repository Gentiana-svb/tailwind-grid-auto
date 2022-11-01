import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		trailingSlash: 'always',
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/tailwind-grid-auto' : ''
		}
	}
}

export default config
