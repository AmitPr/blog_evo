import type { Metadata } from '$lib/types/metadata';
import type { Post } from '$lib/types/post';
import type { RequestHandler } from './__types/index.d';

const allPosts: { [path: string]: Post } = import.meta.glob('$lib/posts/*.md', { eager: true });

let posts: { [topic: string]: Metadata[] } = {};

for (let path in allPosts) {
	const post = allPosts[path];
	const slug = post.metadata.topic.toLowerCase();
	if (posts[slug]) {
		posts[slug].push(post.metadata);
	} else {
		posts[slug] = [post.metadata];
	}
}

Object.keys(posts).forEach((topic) => {
	posts[topic].sort((a, b) => {
		return b.date - a.date;
	});
});

export const GET: RequestHandler = ({ params }) => {
	const filtered = posts[params.slug.toLowerCase()];
	if (!filtered) {
		return {
			status: 404,
			body:{error: `Category not found: "${params.slug}"`}
		};
	}

	return {
		status: 200,
		body: {
			posts: filtered,
			topic: params.slug.toLowerCase()
		}
	};
};
