// import adapter from '@sveltejs/adapter-static';
// import { vitePreprocess } from '@sveltejs/kit/vite';


// const config = {
// 	preprocess: vitePreprocess(),
// 	kit: {
// 		paths: {
// 			base: dev ? '' : process.env.BASE_URL || '/'
// 		},
// 		adapter: adapter()
// 	}
// }
// export default config;

import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	}
};

export default config;