<script lang="ts">
	import { topicToColor } from '$lib/colors';

	export let topic: string;

	export let compact: boolean = true;

	let color = topicToColor(topic);
</script>

<div class="w-min {compact ? 'inline-block ml-1' : 'block'}">
	<a
		href="/topic/{topic.toLowerCase()}"
		class="font-serif font-light text-xs not-italic hover:no-underline whitespace-nowrap"
	>
		<div class="{color} rounded-md flex items-center {compact ? 'px-1 py-0.5' : 'px-3 py-1'}">
			{topic}
		</div>
	</a>
</div>
