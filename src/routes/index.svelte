<script lang="ts" context="module">
	import type { Load } from './__types/index.d';

	const allPosts: { [path: string]: Post } = import.meta.glob('$lib/posts/*.md', { eager: true });

	let posts: Post[] = Object.values(allPosts);
	posts.sort((a, b) => b.metadata.date - a.metadata.date);

	type Input = Record<string, any>;
	type Output = Record<string, any>;
	export const load: Load<Input, Output> = async ({ params, fetch }) => {
		return {
			status: 200,
			props: {
				posts: posts
			}
		};
	};
</script>

<script lang="ts">
	import type { Post } from '$lib/types/post';

	import PostPreview from '$lib/components/PostPreview.svelte';
	import About from '$lib/components/About.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	export let posts: Post[];
</script>

<svelte:head>
	<title>Amit Prasad's Site</title>
    <meta name="description" content="Amit Prasad's homepage on the web." />

    <meta property="og:url" content="https://prasad.me/" />
    <meta property="og:title" content="Amit Prasad's Site" />
    <meta property="og:description" content="Amit Prasad's homepage on the web." />

    <meta name="twitter:title" content="Amit Prasad's Site" />
    <meta name="twitter:description" content="Amit Prasad's homepage on the web." />
    <meta name="twitter:url" content="https://prasad.me/" />
</svelte:head>

<div class="mx-4 mb-4">
	<Navbar wide/>
	<div class="flex flex-col lg:flex-row space-x-2 max-w-4xl mx-auto items-stretch ">
		<About compact />
		<div class="flex-grow">
			<h1 class="text-2xl font-semibold mt-2">Recent Posts</h1>
			<hr class="mb-2 border-gray-300 dark:border-zinc-700" />
			<div class="flex flex-col">
				{#each posts as post}
					<PostPreview {post} />
				{/each}
			</div>
		</div>
	</div>
</div>
