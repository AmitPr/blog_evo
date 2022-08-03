<script lang="ts" context="module">
	import type { Post } from '$lib/types/post';
	import type { Load } from './__types/index.d';

	const allPosts: { [path: string]: Post } = import.meta.glob('$lib/posts/*.md', { eager: true });

	let posts: { [topic: string]: Post[] } = {};

	for (let path in allPosts) {
		const post = allPosts[path];
		const slug = post.metadata.topic.toLowerCase();
		if (posts[slug]) {
			posts[slug].push(post);
		} else {
			posts[slug] = [post];
		}
	}

	type Input = Record<string, any>;
	type Output = Record<string, any>;
	export const load: Load<Input, Output> = async ({ params }) => {
		const filtered = posts[params.slug.toLowerCase()];
		if (!filtered) {
			return {
				status: 404,
				error: `Category not found: "${params.slug}"`
			};
		}

		return {
			props: {
				posts: filtered,
			}
		};
	};
</script>

<script lang="ts">
	export let posts: Post[];
</script>

<div class="mx-4">
    {#each posts as post}
        <a href="/post/{post.metadata.url}">there is a post</a>
    {/each}
</div>
