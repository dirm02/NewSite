import {
  pbCreate,
  pbCreateForm,
  pbGetOneAuth,
  pbListAuth,
  pbUpdate,
  pbUpdateForm,
} from "./client";
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
  /** New cover image file, or `null` to remove an existing cover. */
  cover_image?: File | null;
}

function appendBlogFields(form: FormData, input: BlogPostInput): void {
  form.set("title", input.title);
  form.set("slug", input.slug);
  form.set("excerpt", input.excerpt ?? "");
  form.set("content", input.content ?? "");
  if (input.category) form.set("category", input.category);
  if (input.service) form.set("service", input.service);
  if (input.seo_title) form.set("seo_title", input.seo_title);
  if (input.seo_description) form.set("seo_description", input.seo_description);
  if (input.status) form.set("status", input.status);
  if (input.cover_image instanceof File) {
    form.set("cover_image", input.cover_image);
  } else if (input.cover_image === null) {
    form.set("cover_image", "");
  }
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

function blogJsonPayload(
  input: BlogPostInput,
  extras?: Record<string, string>,
): Record<string, unknown> {
  return {
    title: input.title,
    slug: input.slug,
    excerpt: input.excerpt ?? "",
    content: input.content ?? "",
    category: input.category || undefined,
    service: input.service || undefined,
    seo_title: input.seo_title || undefined,
    seo_description: input.seo_description || undefined,
    status: input.status,
    ...extras,
  };
}

/**
 * Create a provider blog post. The PocketBase create rule restricts authorship
 * to the signed-in provider; the GHST-48 blog hook forces non-admin status to
 * draft/submitted. Multipart is used only when a cover image is included.
 */
export async function createBlogPost(
  token: string,
  providerId: string,
  authorId: string,
  input: BlogPostInput,
): Promise<PbBlogPost> {
  if (input.cover_image instanceof File) {
    const form = new FormData();
    form.set("provider", providerId);
    form.set("author", authorId);
    form.set("status", input.status ?? "draft");
    appendBlogFields(form, input);
    return pbCreateForm<PbBlogPost>("blog_posts", token, form);
  }

  return pbCreate<PbBlogPost>(
    "blog_posts",
    token,
    blogJsonPayload(input, {
      provider: providerId,
      author: authorId,
      status: input.status ?? "draft",
    }),
  );
}

/**
 * Update an owned blog post. PB update rule only allows owner edits while the
 * post is draft/rejected/submitted; the blog hook keeps non-admin status within
 * draft/submitted. Multipart is used when uploading or removing a cover image.
 */
export async function updateBlogPost(
  token: string,
  id: string,
  input: BlogPostInput,
): Promise<PbBlogPost> {
  if (input.cover_image instanceof File || input.cover_image === null) {
    const form = new FormData();
    appendBlogFields(form, input);
    return pbUpdateForm<PbBlogPost>("blog_posts", id, token, form);
  }

  return pbUpdate<PbBlogPost>("blog_posts", id, token, blogJsonPayload(input));
}
