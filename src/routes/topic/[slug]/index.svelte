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
				topic: params.slug.toLowerCase()
			}
		};
	};
</script>

<script lang="ts">
	import PostPreview from '$lib/components/PostPreview.svelte';

	export let posts: Post[];
	export let topic: string;
</script>

<div class="mx-4">
	<div class="flex flex-col max-w-2xl mx-auto">
		<h1 class="text-3xl font-bold text-left">
			Posts in topic "{topic.charAt(0).toUpperCase() + topic.slice(1)}"
		</h1>
		<hr class="my-2 border-gray-300 dark:border-zinc-700" />
		{#each posts as post}
			<PostPreview {post} showTopic={false} />
		{/each}
	</div>
</div>
