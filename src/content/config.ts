import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.boolean().default(true),
    date: z.coerce.date(),
    author: z.string().default('amirdaraee'),
    photo: z.string().optional(),
    imgCredit: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    language: z.string().default('en'),
  }),
});

export const collections = { blog };
