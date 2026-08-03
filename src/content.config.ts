import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const dae = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/dae' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    weight: z.number(),
  }),
});

export const collections = { dae };
