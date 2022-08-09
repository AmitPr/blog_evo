import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

import { mdsvex } from "mdsvex";

const h1FrontmatterPreprocessor = {
	markup: ({ content, filename }) => {
		if (filename.endsWith('.md')) {
			let firstH1 = /^#\s(.*?)$/gm.exec(content);
			if (firstH1) {
				// remove the first h1 from the content
				content = content.replace(firstH1[0], '');
				firstH1 = firstH1[1];
				//add to the frontmatter at the top of the file
				let frontmatterStartIndex = content.indexOf('---\n');
				content = content.slice(0, frontmatterStartIndex + 4) + `title: "${firstH1}"\n` + content.slice(frontmatterStartIndex + 4);
			}
			return {
				code: content
			};
		}
	}
}
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({ postcss: true }),
		h1FrontmatterPreprocessor,
		mdsvex({
			extensions: [".md"],
			layout: "src/lib/__md_layout.svelte",
		})
	],
	kit: {
		adapter: adapter(),
		browser: {
			router: false,
		},
	},
	extensions: [
		".svelte",
		".md"
	]
};

export default config;
