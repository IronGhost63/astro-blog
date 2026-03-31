import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const web = defineCollection({
  loader: async () => {
    const response = await fetch( 'https://wordpress-cloudflare-sync.me-5ef.workers.dev/contents', {
      headers: {
        Authorization: `Bearer ${import.meta.env.CONTENT_API_KEY}`
      }
    });

    const data: any = await response.json();

    return data.posts.map((post: any) => {
      const postData = {
        id: `${post.ID}-${post.slug}`,
        postID: post.ID,
        title: post.title,
        content: post.content,
        excerpt: post.excerpt,
        slug: post.slug,
        datetime: post.datetime,
        categories: post.categories.split(','),
        tags: post.tags.split(','),
        featured_image: post.featured_image,
        modified: post.modified,
      }

      return postData;
    });
  }
});

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

export const collections = { blog, web };
