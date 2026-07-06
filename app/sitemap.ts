import { execSync } from "child_process";
import { MetadataRoute } from "next";
import { allKtis, allPages, allPosts } from "contentlayer/generated";
import { absoluteUrl } from "./seo";

export const dynamic = "force-static";

// Static routes have no frontmatter date, so pull the real last-edited date
// from git history instead of stamping every one with the build time —
// accurate lastmod values are a genuine freshness signal for crawlers.
function lastCommitDate(sourceFile: string): Date | undefined {
  try {
    const iso = execSync(`git log -1 --format=%cI -- "${sourceFile}"`, {
      cwd: process.cwd(),
      encoding: "utf8",
    }).trim();
    return iso ? new Date(iso) : undefined;
  } catch {
    return undefined;
  }
}

interface StaticRoute {
  path: string;
  sourceFile: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}

const STATIC_ROUTES: StaticRoute[] = [
  { path: "/", sourceFile: "app/page.tsx", changeFrequency: "weekly", priority: 1 },
  { path: "/services", sourceFile: "app/services/page.tsx", changeFrequency: "weekly", priority: 0.9 },
  { path: "/mail", sourceFile: "app/mail/page.tsx", changeFrequency: "weekly", priority: 0.9 },
  { path: "/auth", sourceFile: "app/auth/page.tsx", changeFrequency: "weekly", priority: 0.9 },
  { path: "/posts", sourceFile: "app/posts/page.tsx", changeFrequency: "weekly", priority: 0.8 },
  { path: "/kti", sourceFile: "app/kti/page.tsx", changeFrequency: "weekly", priority: 0.8 },
  { path: "/heroku-alternative", sourceFile: "app/heroku-alternative/page.tsx", changeFrequency: "weekly", priority: 0.8 },
  { path: "/railway-alternative", sourceFile: "app/railway-alternative/page.tsx", changeFrequency: "weekly", priority: 0.8 },
  { path: "/resend-alternative", sourceFile: "app/resend-alternative/page.tsx", changeFrequency: "weekly", priority: 0.8 },
  { path: "/usesend-alternative", sourceFile: "app/usesend-alternative/page.tsx", changeFrequency: "weekly", priority: 0.8 },
  { path: "/sendgrid-alternative", sourceFile: "app/sendgrid-alternative/page.tsx", changeFrequency: "weekly", priority: 0.8 },
  { path: "/auth0-alternative", sourceFile: "app/auth0-alternative/page.tsx", changeFrequency: "weekly", priority: 0.8 },
  { path: "/clerk-alternative", sourceFile: "app/clerk-alternative/page.tsx", changeFrequency: "weekly", priority: 0.8 },
  { path: "/supabase-alternative", sourceFile: "app/supabase-alternative/page.tsx", changeFrequency: "weekly", priority: 0.8 },
  { path: "/neon-alternative", sourceFile: "app/neon-alternative/page.tsx", changeFrequency: "weekly", priority: 0.8 },
  { path: "/planetscale-alternative", sourceFile: "app/planetscale-alternative/page.tsx", changeFrequency: "weekly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: lastCommitDate(route.sourceFile),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const postRoutes: MetadataRoute.Sitemap = allPosts
    .filter((post) => post.published)
    .map((post) => ({
      url: absoluteUrl(post.slug),
      lastModified: post.lastmod || post.date,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  const pageRoutes: MetadataRoute.Sitemap = allPages.map((page) => ({
    url: absoluteUrl(`/${page.slugAsParams}`),
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
