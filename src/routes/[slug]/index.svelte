<script lang="ts">
	import type { Post } from '$lib/types/post';

	export let post: Post;
</script>

<div class="mx-4">
	<div class="mx-auto max-w-prose">
		<svelte:component this={post.component} />
	</div>
</div>
