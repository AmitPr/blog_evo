<script lang="ts">
	export let topic: string;

	export let compact: boolean = false;

	function hash(input: string): number {
		var hash = -1;
		for (var i = 0; i < input.length; i++) {
			var char = input.charCodeAt(i);
			hash = (hash << 5) - hash + char;
			hash = hash & hash; // Convert to 32bit integer
		}
		return hash;
	}

	let colors = [
		'bg-red-400/40 dark:bg-red-800/40 text-red-800 dark:text-red-400 hover:bg-red-300/90 dark:hover:bg-red-700/70',
		'bg-green-400/40 dark:bg-green-800/40 text-green-800 dark:text-green-400 hover:bg-green-300/90 dark:hover:bg-green-700/70',
		'bg-emerald-400/40 dark:bg-emerald-800/40 text-emerald-800 dark:text-emerald-400 hover:bg-emerald-300/90 dark:hover:bg-emerald-700/70',
		'bg-cyan-400/40 dark:bg-cyan-800/40 text-cyan-800 dark:text-cyan-400 hover:bg-cyan-300/90 dark:hover:bg-cyan-700/70',
		'bg-sky-400/40 dark:bg-sky-800/40 text-sky-800 dark:text-sky-400 hover:bg-sky-300/90 dark:hover:bg-sky-700/70',
		'bg-blue-400/40 dark:bg-blue-800/40 text-blue-800 dark:text-blue-400 hover:bg-blue-300/90 dark:hover:bg-blue-700/70',
		'bg-fuchsia-400/40 dark:bg-fuchsia-800/40 text-fuchsia-800 dark:text-fuchsia-400 hover:bg-fuchsia-300/90 dark:hover:bg-fuchsia-700/70',
	];

	let color = colors[Math.abs(hash(topic)) % colors.length];
</script>

<div class="w-min {compact ? 'inline-block ml-1' : 'block'}">
	<a href="/topic/{topic.toLowerCase()}" class="font-serif font-light text-xs not-italic whitespace-nowrap">
		<div class="{color} rounded-md flex items-center {compact ? 'px-1 py-0.5' : 'px-3 py-1'}">
			{topic}
		</div>
	</a>
</div>
