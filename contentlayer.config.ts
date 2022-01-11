import { defineDocumentType, makeSource } from "contentlayer/source-files";
import mdxOptions from "./config/mdx";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/*.mdx`,
  bodyType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date", required: true },
    draft: { type: "boolean", required: true },
    tags: { type: "json", required: false },
    keywords: { type: "json", required: false },
  },
}));

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/*.mdx`,
  bodyType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
  },
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Post, Page],
  mdx: mdxOptions,
});
