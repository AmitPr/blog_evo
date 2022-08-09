<script lang="ts">
	import type { Metadata } from '$lib/types/metadata';

	import TopicTag from './TopicTag.svelte';

	export let post: Metadata;

	export let showTopic: boolean = true;

	let dateObj = new Date(0);
	dateObj.setUTCSeconds(post.date);
	// Format to DD MMM YYYY
	let formattedDate = dateObj.toLocaleDateString('en-GB', {
		day: '2-digit',
		month: 'short',
		year: 'numeric'
	});
</script>

<a
	href="/post/{post.url}"
	class="hover:bg-gray-200 dark:hover:bg-zinc-800 p-2 rounded-lg transition-colors"
>
	<div class="flex flex-col">
		<p class="text-sm italic text-neutral-500">{formattedDate}</p>
		<p class="text-xl font-semibold leading-none mb-1">
			{post.title}
			{#if showTopic}
				<span class="align-top">
					<TopicTag topic={post.topic} compact />
				</span>
			{/if}
		</p>
		{#if post.description}
			<p class="text-lg leading-none text-neutral-600 dark:text-neutral-400 font-extralight">
				{post.description}
			</p>
		{/if}
		<a
			href="/post/{post.url}"
			class="w-min whitespace-nowrap text-blue-500 dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500 transition-colors font-semibold"
		>
			Read more
		</a>
	</div>
</a>
