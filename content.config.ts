import { defineContentConfig, defineCollection, z } from '@nuxt/content'
import { defineRobotsSchema } from '@nuxtjs/robots/content'
import { defineSitemapSchema } from '@nuxtjs/sitemap/content'
import { defineOgImageSchema } from 'nuxt-og-image/content'
import { defineSchemaOrgSchema } from 'nuxt-schema-org/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection(
      {
        type: 'page',
        source: 'blog/**/*.md',
        schema: z.object({
          title: z.string(),
          description: z.string(),
          image: z.string().optional(),
          date: z.string(),
          tags: z.array(z.string()),
          robots: defineRobotsSchema(),
          sitemap: defineSitemapSchema(),
          ogImage: defineOgImageSchema(),
          schemaOrg: defineSchemaOrgSchema()
        })
      }
    )
  }
})
