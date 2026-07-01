import { defineDocumentType, makeSource } from "contentlayer2/source-files";

/** @type {import('contentlayer2/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

const ktiComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/kti/apa-itu-${doc._raw.flattenedPath.split("/").pop()}`,
  },
  term: {
    type: "string",
    resolve: (doc) => `apa-itu-${doc._raw.flattenedPath.split("/").pop()}`,
  },
};

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    lastmod: {
      type: "date",
      required: true,
    },
  },
  computedFields,
}));

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    lastmod: {
      type: "date",
      required: true,
    },
    published: {
      type: "boolean",
      required: true,
    },
  },
  computedFields,
}));

export const Kti = defineDocumentType(() => ({
  name: "Kti",
  filePathPattern: `kti/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    term: {
      type: "string",
      required: true,
    },
    category: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: false,
    },
    description: {
      type: "string",
      required: true,
    },
    englishTerm: {
      type: "string",
      required: false,
    },
    acronym: {
      type: "string",
      required: false,
    },
    relatedTerms: {
      type: "list",
      of: { type: "string" },
      required: false,
    },
    difficulty: {
      type: "enum",
      options: ["pemula", "menengah", "lanjut"],
      required: true,
    },
    lastmod: {
      type: "date",
      required: true,
    },
    published: {
      type: "boolean",
      required: true,
    },
  },
  computedFields: ktiComputedFields,
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post, Page, Kti],
});
