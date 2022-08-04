<script lang="ts" context="module">
	import type { Load } from './__types/index.d';

	const allPosts: { [path: string]: Post } = import.meta.glob('$lib/posts/*.md', { eager: true });

	let posts: { [slug: string]: Post } = {};

	for (let path in allPosts) {
		const post = allPosts[path];
		const slug = post.metadata.url.toLowerCase();
		posts[slug] = post;
	}

	type Input = Record<string, any>;
	type Output = Record<string, any>;
	export const load: Load<Input, Output> = async ({ params, fetch }) => {
		return {
			status: 200,
			props: {
				posts: Object.values(posts)
			}
		};
	};
</script>

<script lang="ts">
	import TopicTag from '$lib/components/TopicTag.svelte';
	import type { Post } from '$lib/types/post';
	import Avatar from '$lib/components/Avatar.svelte';

	export let posts: Post[];
</script>

<div class="m-4">
	<div class="flex flex-col lg:flex-row space-x-2 max-w-4xl mx-auto items-stretch ">
		<div class="w-full flex flex-col sm:flex-row items-center leading-snug lg:flex-col lg:w-72">
			<div>
				<h1 class="text-4xl text-center font-bold">Amit Prasad</h1>
				<Avatar />
			</div>
			<div class="w-full px-4">
				<p class="text-left text-base">Hi! I'm Amit. <br />I am</p>
				<ul class="list-disc list-inside pl-2 leading-none mb-2">
					<li>a CS Student @ University of Illinois Urbana-Champaign</li>
					<li>an Experienced Developer</li>
					<li>a Space Enthusiast</li>
				</ul>
				<p class="text-left text-base">Some of my latest interests include:</p>
				<ul class="list-disc list-inside pl-2 leading-none mb-2">
					<li>Backend Development</li>
					<li>Self-hostable Clouds</li>
					<li>Cryptography</li>
					<li>Machine Learning</li>
				</ul>
				<p class="text-left text-base leading-none">
					This site contains my blog posts and some of my projects, I'd love for you to take a look!
				</p>
				<p class="text-left text-base leading-none my-1">You can reach me on:</p>
				<div class="flex space-x-2" id="socials">
					<a href="https://twitter.com/const_amit">
						<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="twitter">
							<path
								d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
							/>
						</svg>
					</a>
					<a href="https://github.com/AmitPr">
						<svg role="img" viewBox="0 0 24 24" id="github" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
							/>
						</svg>
					</a>
					<a href="https://www.linkedin.com/in/amit-prasad-715021178/">
						<svg role="img" viewBox="0 0 24 24" id="linkedin" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
							/>
						</svg>
					</a>
					<a href="mailto:amit@prasad.me">
						<svg xmlns="http://www.w3.org/2000/svg" id="email" viewBox="0 0 16 16">
							<path
								d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM0 13.373l5.693-3.163L0 6.873v6.5Z"
							/> />
						</svg>
					</a>
				</div>
				<p class="text-left text-base leading-none my-1">Shoot me a message!</p>
			</div>
		</div>
		<div class="flex-grow">
			<h1 class="text-2xl font-semibold mt-2">Recent Posts</h1>
			<hr class="mb-2" />
			<div class="flex flex-col">
				{#each posts as post}
					<div>
						<div class="text-xl">
							<a href="/post/{post.metadata.url}">{post.metadata.title}</a>
						</div>
						<TopicTag topic={post.metadata.topic} />
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	#socials > a > svg {
		@apply w-5 h-5 fill-stone-800 dark:fill-gray-300 transition-colors;

		&#twitter {
			@apply hover:fill-twitter;
		}

		&#github {
			@apply hover:fill-github-light dark:hover:fill-github-dark;
		}

		&#linkedin {
			@apply hover:fill-linkedin;
		}

		&#email {
			@apply hover:fill-email;
		}
	}
</style>
