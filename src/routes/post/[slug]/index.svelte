<script lang="ts">
	import TopicTag from '$lib/components/TopicTag.svelte';
	import type { Metadata } from '$lib/types/metadata';
	import PostedDetails from '$lib/components/PostedDetails.svelte';

	export let page: any;
	export let metadata: Metadata;
</script>

<svelte:head>
	<title>{metadata.title} | Amit Prasad</title>
    <meta name="description" content="{metadata.description}" />
	
    <meta property="og:url" content="https://prasad.me/post/{metadata.url}" />
    <meta property="og:title" content="{metadata.title}" />
    <meta property="og:description" content="{metadata.description}" />

    <meta name="twitter:title" content="{metadata.title}" />
    <meta name="twitter:description" content="{metadata.description}" />
    <meta name="twitter:url" content="https://prasad.me/post/{metadata.url}" />
</svelte:head>

<div class="mx-4">
	<div class="mx-auto max-w-prose">
		<article>
			<div class="flex flex-col space-y-1 mt-6 mb-3">
				<h1>{metadata.title}</h1>
				<PostedDetails date={metadata.date} />
				<TopicTag topic={metadata.topic} compact={false} />
			</div>
			<svelte:component this={page} />
		</article>
	</div>
</div>
