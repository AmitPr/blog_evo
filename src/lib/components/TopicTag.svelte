<script lang="ts">
	export let topic: string;

	function hash(input: string): number {
		var hash = 0;
		for (var i = 0; i < input.length; i++) {
			var char = input.charCodeAt(i);
			hash = (hash << 5) - hash + char;
			hash = hash & hash; // Convert to 32bit integer
		}
		return hash;
	}

	let colors = [
		'bg-red-400/40 dark:bg-red-800/40 text-red-800 dark:text-red-400 hover:bg-red-400/40',
		'bg-green-400/40 dark:bg-green-800/40 text-green-800 dark:text-green-400 hover:bg-green-400/40',
		'bg-emerald-400/40 dark:bg-emerald-800/40 text-emerald-800 dark:text-emerald-400 hover:bg-emerald-400/40',
		'bg-cyan-400/40 dark:bg-cyan-800/40 text-cyan-800 dark:text-cyan-400 hover:bg-cyan-400/40',
		'bg-sky-400/40 dark:bg-sky-800/40 text-sky-800 dark:text-sky-400 hover:bg-sky-400/40',
		'bg-blue-400/40 dark:bg-blue-800/40 text-blue-800 dark:text-blue-400 hover:bg-blue-400/40',
		'bg-fuchsia-400/40 dark:bg-fuchsia-800/40 text-fuchsia-800 dark:text-fuchsia-400 hover:bg-fuchsia-400/40'
	];

	let color = colors[Math.abs(hash(topic)) % colors.length];
</script>

<div class="w-min">
	<a href="/topic/{topic.toLowerCase()}" class="font-sans font-light text-xs">
		<div class="px-3 py-1 {color} rounded-md flex items-center">
			{topic}
		</div>
	</a>
</div>
