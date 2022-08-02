import posts from '$lib/posts';
import type { Post } from '$lib/types/post';
import type { RequestHandler } from './__types/[slug].json.d';

type Output = { post?: Post };

export const GET: RequestHandler<Output> = async ({ params }) => {
	let post = posts.filter((p) => p.metadata.url == params.slug);
	if (post.length == 0) {
		return {
			status: 404,
		};
	}
	return {
		status: 200,
		body: { post: post[0] }
	};
};
