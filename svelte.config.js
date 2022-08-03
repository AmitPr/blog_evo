import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [preprocess({ postcss: true }), mdsvex({ extensions: [".md"], layout: "src/lib/__md_layout.svelte" })],
	kit: {
		adapter: adapter()
	},
	extensions: [
		".svelte",
		".md"
	]
};

export default config;
