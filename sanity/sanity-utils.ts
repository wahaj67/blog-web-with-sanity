import ImageUrlBuilder from "@sanity/image-url";
import { createClient, type QueryParams } from "next-sanity";
import { config } from "../sanity/config/client-config";
import { postQuery, postQueryBySlug } from "./sanity-query";
import { Blog } from "./types/blog";

if (!config.projectId) {
    throw new Error("NEXT_PUBLIC_SANITY_PROJECT_ID environment variable is not set");
  }
  export const client = createClient(config);
  export function imageBuilder(source: string) {
    return ImageUrlBuilder(config).image(source);
  }
  
  export async function sanityFetch<QueryResponse>({
    query,
    qParams,
    tags,
  }: {
    query: string,
    qParams: QueryParams,
    tags: string[],
}): Promise<QueryResponse> {
  return (
    client.fetch <
    QueryResponse >
    (query,
    qParams,
    {
      cache: "force-cache",
      next: { tags },
    })
  );
}

export const getPosts = async () => {
  const data: Blog[] = await sanityFetch({
    query: postQuery,
    qParams: {},
    tags: ["post", "author", "category"],
  });
  return data;
};

export const getPostBySlug = async (slug: string) => {
  const data: Blog = await sanityFetch({
    query: postQueryBySlug,
    qParams: { slug },
    tags: ["post", "author", "category"],
  });

  return data;
};