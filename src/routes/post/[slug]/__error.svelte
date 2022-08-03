<script lang="ts" context="module">
	import type { Load } from './__types/__error.d';
	type Input = Record<string, any>;
	type Output = Record<string, any>;
	export const load: Load<Input, Output> = async ({ params, status }) => {
		return {
			props: {
				status: status,
				slug: params.slug
			}
		};
	};
</script>

<script lang="ts">
	export let status: number;
	export let slug: string;
</script>

<div class="flex flex-col items-center justify-center w-screen h-screen overflow-auto">
	<h1>{status}</h1>
	<h2>"{slug}" not found</h2>
	<a href="/">Back Home</a>
</div>

<style>
	h1 {
		@apply text-9xl;
	}
	h2 {
		@apply text-2xl;
	}
	a {
		@apply text-xl;
	}
</style>
