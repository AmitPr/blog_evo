import type { Post } from '$lib/types/post';

const allPosts: { [path: string]: Post } = import.meta.glob('$lib/posts/*.md', { eager: true });

export const posts: { [slug: string]: Post } = {};

for (const path in allPosts) {
	const post = allPosts[path];
	const slug = post.metadata.url.toLowerCase();
	posts[slug] = post;
}