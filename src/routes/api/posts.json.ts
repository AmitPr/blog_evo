import { posts } from '$lib/posts';
import type { PostObject } from '$lib/types/post';
import type { RequestHandler } from './__types/posts.json.d';

type Output = { posts: PostObject[] };

export const GET: RequestHandler<Output> = async ({ params }) => {
	return {
		status: 200,
		body: {
			posts: Object.keys(posts).map((slug) => {
				let post = posts[slug];
				let url = `/post/${slug}`;
				return {
					url,
					metadata: post.metadata
				};
			})
		}
	};
};
