import posts from '$lib/posts';
import type { Post } from '$lib/types/post';
import type { RequestHandler } from './__types/index.d';

type Output = { post: Post };
export const GET: RequestHandler<Output> = async ({ params }) => {
	let post = posts.find((p) => p.metadata.url == params.slug);
	if (!post) {
		return {
			status: 404,
			error: `Not found: /${params.slug}`
		};
	}
	return {
		status: 200,
		body: { post }
	};
};
