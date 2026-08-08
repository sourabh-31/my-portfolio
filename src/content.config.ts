import { z } from "astro/zod";
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/blog",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.string(),
      draft: z.boolean().default(false),
      cover: image().optional(),
      readingTime: z.number(),
      tags: z.array(z.string()),
    }),
});

export const collections = {
  blog,
};
