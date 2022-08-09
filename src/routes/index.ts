import type { Metadata } from '$lib/types/metadata';
import type { Post } from '$lib/types/post';

const allPosts: { [path: string]: Post } = import.meta.glob('$lib/posts/*.md', { eager: true });

let posts: Metadata[] = Object.values(allPosts).map((post) => post.metadata);
posts.sort((a, b) => b.date - a.date);

export function GET() {
	return {
        status: 200,
		body: {
			posts: posts
		}
	};
}
