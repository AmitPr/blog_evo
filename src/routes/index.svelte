<script lang="ts" context="module">
	import type { Load } from './__types/index.d';

	const allPosts: { [path: string]: Post } = import.meta.glob('$lib/posts/*.md', { eager: true });

	let posts: { [slug: string]: Post } = {};

	for (let path in allPosts) {
		const post = allPosts[path];
		const slug = post.metadata.url.toLowerCase();
		posts[slug] = post;
	}

	type Input = Record<string, any>;
	type Output = Record<string, any>;
	export const load: Load<Input, Output> = async ({ params, fetch }) => {
		return {
			status: 200,
			props: {
				posts: Object.values(posts)
			}
		};
	};
</script>

<script lang="ts">
	import TopicTag from '$lib/components/TopicTag.svelte';
	import type { Post } from '$lib/types/post';

	export let posts: Post[];
</script>

{#each posts as post}
	<TopicTag topic={post.metadata.topic} />
	<div class="text-xl">
		<a href="/post/{post.metadata.url}">{post.metadata.title}</a>
	</div>
{/each}
