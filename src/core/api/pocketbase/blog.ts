import { pbCreate, pbGetOneAuth, pbListAuth, pbUpdate } from "./client";
import type { PbBlogPost } from "./types";

const BLOG_EXPAND = "provider,author,category,service";

export interface BlogPostInput {
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  category?: string;
  service?: string;
  /** Only "draft" or "submitted" allowed for providers (enforced by hook). */
  status?: string;
  seo_title?: string;
  seo_description?: string;
}

/** All blog posts owned by a provider profile (any status). */
export async function fetchProviderBlogPosts(
  token: string,
  providerId: string,
  options?: { perPage?: number },
) {
  return pbListAuth<PbBlogPost>("blog_posts", token, {
    filter: `(provider='${providerId}')`,
    sort: "-@rowid",
    expand: BLOG_EXPAND,
    perPage: String(options?.perPage ?? 100),
  });
}

/** Single owned blog post (auth-scoped) for the edit screen. */
export async function fetchProviderBlogPost(
  token: string,
  id: string,
): Promise<PbBlogPost> {
  return pbGetOneAuth<PbBlogPost>("blog_posts", id, token, BLOG_EXPAND);
}

/**
 * Create a provider blog post. The PocketBase create rule restricts authorship
 * to the signed-in provider; the GHST-48 blog hook forces non-admin status to
 * draft/submitted.
 */
export async function createBlogPost(
  token: string,
  providerId: string,
  authorId: string,
  input: BlogPostInput,
): Promise<PbBlogPost> {
  return pbCreate<PbBlogPost>("blog_posts", token, {
    provider: providerId,
    author: authorId,
    title: input.title,
    slug: input.slug,
    excerpt: input.excerpt ?? "",
    content: input.content ?? "",
    category: input.category || undefined,
    service: input.service || undefined,
    seo_title: input.seo_title || undefined,
    seo_description: input.seo_description || undefined,
    status: input.status ?? "draft",
  });
}

/**
 * Update an owned blog post. PB update rule only allows owner edits while the
 * post is draft/rejected/submitted; the blog hook keeps non-admin status within
 * draft/submitted.
 */
export async function updateBlogPost(
  token: string,
  id: string,
  input: BlogPostInput,
): Promise<PbBlogPost> {
  return pbUpdate<PbBlogPost>("blog_posts", id, token, {
    title: input.title,
    slug: input.slug,
    excerpt: input.excerpt ?? "",
    content: input.content ?? "",
    category: input.category || undefined,
    service: input.service || undefined,
    seo_title: input.seo_title || undefined,
    seo_description: input.seo_description || undefined,
    status: input.status,
  });
}
