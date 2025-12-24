import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    articulos: defineCollection({
      type: 'page',
      source: 'articulos/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        published: z.string().optional(),
        slug: z.string().optional(),
      })
    }),
    proyectos: defineCollection({
      type: 'data',
      source: 'proyectos/**/*.json',
      schema: z.object({
        name: z.string(),
        description: z.string().optional(),
        url: z.string().optional(),
        thumbnail: z.string().optional(),
        status: z.string().optional(),
      })
    }),
    experiencia: defineCollection({
      type: 'data',
      source: 'experiencia/**/*.json',
      schema: z.object({
        name: z.string(),
        title: z.string().optional(),
        url: z.string().optional(),
        description: z.string().optional(),
        thumbnail: z.string().optional(),
        date: z.string().optional(),
      })
    }),
    lab: defineCollection({
      type: 'page',
      source: 'lab/**/*.md',
    }),
    uses: defineCollection({
      type: 'data',
      source: 'uses/**/*.json',
      schema: z.object({
        name: z.string(),
        description: z.string().optional(),
        url: z.string().optional(),
        category: z.string().optional(),
        thumbnail: z.string().optional(),
      })
    })
  }
})
