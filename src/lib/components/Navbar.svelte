<script lang="ts">
	import { page } from '$app/stores';
	import { getActiveSection } from '$lib/nav_routes';

	let active = getActiveSection($page.url.pathname);
	$: active = getActiveSection($page.url.pathname);
</script>

<nav class=" top-0 z-10 text-inherit">
	<div class="max-w-3xl mx-auto px-4">
		<div class="flex items-center justify-between h-16">
			<a class="text-2xl font-semibold" href="/">Amit Prasad</a>
			<div class="flex space-x-4">
				<a href="/" class:underline={active === 'blog' || active==='home'} class="nav-link">Blog</a>
				<a href="/about" class:underline={active === 'about'} class="nav-link" >About</a>
				<a href="/contact" class:underline={active === 'contact'} class="nav-link">Contact</a>
				<!-- TODO -->
			</div>
		</div>
	</div>
</nav>

<style>
	.nav-link {
		@apply decoration-2 decoration-sky-400 dark:decoration-sky-600 hover:underline hover:text-blue-600 dark:hover:text-blue-500 font-light;
	}
</style>
