import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { getLeetCodeCollection } from "./components/leetcode/utils";

const posts = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      published: z.coerce.date(),
      // updated: z.coerce.date().optional(),
      draft: z.boolean().optional().default(false),
      description: z.string().optional(),
      author: z.string().optional(),
      series: z.string().optional(),
      tags: z.array(z.string()).optional().default([]),
      coverImage: z
        .strictObject({
          src: image(),
          alt: z.string(),
        })
        .optional(),
      toc: z.boolean().optional().default(true),
    }),
});

const home = defineCollection({
  loader: glob({ pattern: ["home.md", "home.mdx"], base: "./src/content" }),
  schema: ({ image }) =>
    z.object({
      avatarImage: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
      githubCalendar: z.string().optional(), // GitHub username for calendar
    }),
});

const addendum = defineCollection({
  loader: glob({
    pattern: ["addendum.md", "addendum.mdx"],
    base: "./src/content",
  }),
  schema: ({ image }) =>
    z.object({
      avatarImage: z
        .object({
          src: image(),
          alt: z.string().optional().default("My avatar"),
        })
        .optional(),
    }),
});

const leetcode = defineCollection({
  loader: glob({ base: "./src/content/leetcode", pattern: "**/*.{md,mdx}" }),
  schema: () =>
    z.object({
      difficulty: z.enum(["Easy", "Medium", "Hard"]),
    }),
});

export const collections = { posts, home, addendum, leetcode };
