import { MetadataRoute } from 'next'
import { allPages, allPosts } from 'contentlayer/generated'
import siteMetadata from '@/content/siteMetadata'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  const postRoutes = allPosts
    .filter((post) => post.published)
    .map((post) => ({
      url: `${siteUrl}/${post.slug}`,
      lastModified: post.lastmod || post.date,
    }))

  const pageRoutes = allPages
    .map((page) => ({
      url: `${siteUrl}/${page.slug}`,
      lastModified: page.lastmod,
    }))

  return [...pageRoutes, ...postRoutes]
}
