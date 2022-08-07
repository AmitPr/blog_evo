---
date: 1659888595
topic: Projects
description: Trying out Svelte by migrating this blog over to a SvelteKit powered static-site.
url: svelte-blog-exploration
---

# Revisiting Web-Development as a Backend Developer with Svelte and SvelteKit

Although the only [post](/post/dart-site-gen) on this blog under the topic "Projects" was the one I wrote about using Dart to generate the static content for this blog, I actually quite dislike web-development. Most of my developer experience concentrates on the backend, and every time I end up meddling with frontend code, I end up with a javascript-induced and bundler-fueled headache. Recently, I was forced to face the challenge of creating a simple frontend, and since I'd been hearing lots about this newfangled web-framework "Svelte", I decided to check out whether the hype was overblown, or deserved.

## A Toy Project

To take Svelte out for a test-drive, I decided to try rewriting my existing blog website using Svelte. Here's a spoiler: you're looking at the result right now! I decided to use [SvelteKit](https://kit.svelte.dev), a _beta_ applications framework for Svelte. More on why using the "beta" framework introduced some (completely understandable) pain-points later. My main project requirements were relatively light, focusing on preserving features from my existing system, and adding some useful new ones:

- Markdown files as a content source
- Embeddable customizable components within posts
- Ability to view the recent posts and filter by topic

## Markdown with SvelteKit

Let's address these requirements one by one, starting with markdown in Svelte. For this, I found [mdsvex](https://mdsvex.pngwn.io/), a markdown renderer for Svelte. The nice thing about mdsvex is that it support YAML frontmatter in markdown, allowing me to attach metadata to each post:

```yaml
# The metadata for this post, as YAML frontmatter:
---
date: 1659888595
topic: Projects
description: Trying out Svelte by migrating this blog over to a SvelteKit powered static-site.
url: svelte-blog-exploration
---
```

It also supports custom remark/rehype plugins, allowing me to [parse metadata](https://github.com/AmitPr/blog_evo/blob/c5f42f2659600aa0961680e939f6fa67389fdf14/svelte.config.js#L6-L23) from the post content itself. This allowed me to create "Post" objects that I could throw around in my application, and use them to render both the post previews and content. While writing it, SvelteKit's model eased the experience, making an intuitive use of component "props" that were much more ergonomic than what I've experienced before in other framework such as React.

## Custom Components and Widgets

One reason why I settled on mdsvex instead of just using a generic markdown renderer is that mdsvex supports embedded Svelte components in your markdown. This is a great feature and I'm sure that I'll find it useful in the future, but for now, mdsvex with custom components is pretty rudimentary and feels very much like a beta library. For example, many of the components I've tried out have had a `<Component> is not a valid SSR component` error, and other oddities such as being unable to override the components from code blocks ended up wasting a considerable amount of time. Again, more on this later.

## Automatically Generated Post Filtering
SvelteKit also made it very easy to use custom `/post/[slug]` routes for each post, whilst also dynamically importing all the `.md` files to provide the "Recent Posts" and `/topics/[topic]` pages. This was a huge improvement in usability that was made pretty easy by Svelte and SvelteKit.

## The "Beta" Elephant in the Room
Whether I like it or not, SvelteKit is still a Beta framework. What this means is that there is:
1. Limited adoption, meaning that there are many components, usecases, and features that are not well documented, or just completely untested.
2. Changing APIs. This is a minor inconvenience at best, but can be a major headache. I'm all for making the best product, and I came in with the expectation that I would have to accomodate changes to the framework, but it's definitely not yet ready for any production-critical usecases that require no large surprises every week.

On the other hand, the strong TypeScript support and already-ergonomic API that Svelte and SvelteKit have provided made the development of this blog a pretty smooth experience. By no means has it turned me into a web-development fan, as there's still *way* too much friction introduced from all the moving parts of a modern JavaScript / Web framework, but Svelte undeniably lightens the mental overload that I often experience when opening up any component of any old React application.  

I'm glad that I gave Svelte a try, but I'm also glad that I (hopefully) won't be returning to my personal web-development hell for the forseeable future.