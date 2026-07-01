import type { Metadata } from "next";
import siteMetadata from "@/content/siteMetadata";

interface PageSEOProps extends Omit<
  Metadata,
  "title" | "description" | "alternates" | "openGraph" | "twitter"
> {
  title: string;
  description?: string;
  image?: string;
  path?: string;
  locale?: string;
  type?: "website" | "article";
  alternates?: Metadata["alternates"];
  openGraph?: NonNullable<Metadata["openGraph"]>;
  twitter?: NonNullable<Metadata["twitter"]>;
}

export function absoluteUrl(path = "/") {
  return new URL(path, siteMetadata.siteUrl).toString();
}

function formatTitle(title: string) {
  return title === siteMetadata.title
    ? title
    : `${title} | ${siteMetadata.title}`;
}

export function genPageMetadata({
  title,
  description,
  image,
  path = "/",
  locale = "en_US",
  type = "website",
  alternates,
  openGraph,
  twitter,
  ...rest
}: PageSEOProps): Metadata {
  const pageDescription = description || siteMetadata.description;
  const pageUrl = absoluteUrl(path);
  const socialImage = absoluteUrl(image || siteMetadata.socialBanner);

  return {
    title,
    description: pageDescription,
    alternates: {
      canonical: pageUrl,
      ...alternates,
    },
    openGraph: {
      title: formatTitle(title),
      description: pageDescription,
      url: pageUrl,
      siteName: siteMetadata.title,
      images: [socialImage],
      locale,
      type,
      ...openGraph,
    },
    twitter: {
      title: formatTitle(title),
      description: pageDescription,
      card: "summary_large_image",
      images: [socialImage],
      ...twitter,
    },
    ...rest,
  };
}
