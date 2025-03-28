import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';


const config = {
	preprocess: vitePreprocess(),
	kit: {
		paths: {
			base: dev ? '' : process.env.BASE_URL || '/'
		},
		adapter: adapter()
	}
}
export default config;