import type { Post } from "./types/post";

const imports = import.meta.glob('../posts/*.md', { eager: true });

let posts: Post[] = Object.values(imports).map((post: any) => {
	let content = post.default.render().html;
	return { metadata: post.metadata, content, component: post.default};
});

export default posts;
