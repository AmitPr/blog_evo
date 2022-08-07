<script lang="ts">
	import About from "$lib/components/About.svelte";
import Navbar from "$lib/components/Navbar.svelte";
</script>

<svelte:head>
	<title>About | Amit Prasad</title>
	
    <meta property="og:url" content="https://amitprasad.dev/about" />
    <meta property="og:title" content="About | Amit Prasad" />
    <meta property="og:description" content="About Amit Prasad" />

    <meta name="twitter:title" content="About | Amit Prasad" />
    <meta name="twitter:description" content="About Amit Prasad" />
    <meta name="twitter:url" content="https://amitprasad.dev/about" />
</svelte:head>

<Navbar />
<div class="m-4">
	<div class="flex flex-col lg:flex-row space-x-2 max-w-4xl mx-auto items-stretch ">
		<About />
	</div>
</div>
