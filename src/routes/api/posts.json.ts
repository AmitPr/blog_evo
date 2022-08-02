import posts from '$lib/posts';
import type { Post } from '$lib/types/post';
import type { RequestHandler } from './__types/posts.json.d';

type Output = { posts: Post[] };

export const GET: RequestHandler<Output> = async ({ params }) => {
	return {
		status: 200,
		body: {
			posts
		}
	};
};
