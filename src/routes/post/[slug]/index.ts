import type { Post } from '$lib/types/post';
import type { RequestHandler } from './__types/index.d';

const allPosts: { [path: string]: Post } = import.meta.glob('$lib/posts/*.md', { eager: true });

let posts: { [slug: string]: Post } = {};

for (let path in allPosts) {
	const post = allPosts[path];
	const slug = post.metadata.url.toLowerCase();
	posts[slug] = post;
}

export const GET: RequestHandler = ({ params }) => {
	const post = posts[params.slug.toLowerCase()];
	if (!post) {
		return {
			status: 404,
			error: `Not found: /${params.slug}`
		};
	}

	return {
		status: 200,
		body: {
			page: post.default,
			metadata: post.metadata
		}
	};
};
