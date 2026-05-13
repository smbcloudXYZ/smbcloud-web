import { MetadataRoute } from "next";
import { allKtis, allPages, allPosts } from "contentlayer/generated";
import { absoluteUrl } from "./seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/services"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/mail"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/posts"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/kti"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/heroku-alternative"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/railway-alternative"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/resend-alternative"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/usesend-alternative"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/sendgrid-alternative"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const postRoutes: MetadataRoute.Sitemap = allPosts
    .filter((post) => post.published)
    .map((post) => ({
      url: absoluteUrl(post.slug),
      lastModified: post.lastmod || post.date,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  const pageRoutes: MetadataRoute.Sitemap = allPages.map((page) => ({
    url: absoluteUrl(page.slug),
    lastModified: page.lastmod,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  const ktiRoutes: MetadataRoute.Sitemap = allKtis
    .filter((kti) => kti.published)
    .map((kti) => ({
      url: absoluteUrl(kti.slug),
      lastModified: kti.lastmod,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  return [...staticRoutes, ...pageRoutes, ...postRoutes, ...ktiRoutes];
}
