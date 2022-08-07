<script>
	import '../app.css';
	let include_analytics = process.env.NODE_ENV !== 'development';
</script>

<svelte:head>
	{#if include_analytics}
		<script
			async
			defer
			data-website-id="ff352f3c-3995-4d85-b079-e3d41bf591a9"
			src="https://a.amitprasad.dev/u.js"></script>
	{/if}
</svelte:head>

<slot />
