<script lang="ts">
	export let date: number;

	let dateObj = new Date(0);
	dateObj.setUTCSeconds(date);
	// Format to DD MMM YYYY
	let formatted = dateObj.toLocaleDateString('en-GB', {
		day: '2-digit',
		month: 'short',
		year: 'numeric'
	});
</script>

<div class="font-light flex items-center space-x-1 italic">
	<a href="/" class="text-base font-normal"> Amit </a>
	<span class="text-sm text-neutral-500">
		/ {formatted}
	</span>
</div>
