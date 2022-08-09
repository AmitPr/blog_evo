<script lang="ts">
	import PostPreview from '$lib/components/PostPreview.svelte';
	import type { Metadata } from '$lib/types/metadata';

	export let posts: Metadata[];
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
