<script lang="ts" context="module">
	import type { Load } from './__types/__error.d';
	type Input = Record<string, any>;
	type Output = Record<string, any>;
	export const load: Load<Input, Output> = async ({ params, status }) => {
		return {
			props: {
				status: status,
			}
		};
	};
</script>

<script lang="ts">
	export let status: number;
</script>

<svelte:head>
	<title>{status} | Amit Prasad</title>
</svelte:head>

<div class="flex flex-col items-center justify-center overflow-auto m-4 break-all">
	<h1 class="text-9xl">{status}</h1>
	{#if status === 404}
		<h2 class="text-2xl">Page not found</h2>
	{:else}
		<h2 class="text-2xl">Something went wrong</h2>
	{/if}
	<a
		href="/"
		class="text-base text-blue-500 dark:text-blue-400 italic hover:underline hover:text-blue-600 dark:hover:text-blue-500 font-semibold"
	>
		Back Home
	</a>
</div>
