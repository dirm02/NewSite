/// <reference path="../pb_data/types.d.ts" />

/**
 * GHST-48 — Provider-owned blog schema.
 *
 * Moves blog content from an admin/template-only model to provider-owned posts
 * with admin moderation. Two collections:
 *   - blog_categories (admin-managed taxonomy, public read)
 *   - blog_posts      (provider-authored, admin-moderated, public reads published)
 *
 * No blog comments / ratings / reviews collections are added (by design).
 * Status lifecycle + access rules are documented in docs/provider-blog-flow.md.
 * Status-transition integrity for non-admins is enforced in
 * pocketbase/pb_hooks/20_lif3line_blog.pb.js.
 *
 * This migration is committed to the repo and is ready for VM application; it is
 * NOT applied/deployed here.
 */
migrate(
  (app) => {
    const usersCol = app.findCollectionByNameOrId("users");
    const providersCol = app.findCollectionByNameOrId("provider_profiles");
    const servicesCol = app.findCollectionByNameOrId("services");

    // -------------------------------------------------------------------------
    // 1. blog_categories (admin-managed taxonomy)
    // -------------------------------------------------------------------------
    const blogCategories = new Collection({
      name: "blog_categories",
      type: "base",
      listRule: "",
      viewRule: "",
      createRule: '@request.auth.role = "admin"',
      updateRule: '@request.auth.role = "admin"',
      deleteRule: '@request.auth.role = "admin"',
      fields: [
        { name: "name", type: "text", required: true, min: 1, max: 120 },
        { name: "slug", type: "text", required: true, min: 1, max: 120 },
        { name: "sort_order", type: "number", required: false, min: 0 },
        {
          name: "status",
          type: "select",
          required: true,
          maxSelect: 1,
          values: ["active", "inactive"],
        },
      ],
      indexes: [
        "CREATE UNIQUE INDEX idx_blog_categories_slug ON blog_categories (slug)",
        "CREATE INDEX idx_blog_categories_status ON blog_categories (status)",
      ],
    });
    app.save(blogCategories);

    const blogCategoriesCol = app.findCollectionByNameOrId("blog_categories");

    // -------------------------------------------------------------------------
    // 2. blog_posts (provider-authored, admin-moderated)
    // -------------------------------------------------------------------------
    const blogPosts = new Collection({
      name: "blog_posts",
      type: "base",
      // Public reads only published posts; providers read their own posts in any
      // status; admin reads everything.
      listRule:
        'status = "published" || provider.user = @request.auth.id || @request.auth.role = "admin"',
      viewRule:
        'status = "published" || provider.user = @request.auth.id || @request.auth.role = "admin"',
      // Providers create posts they own and author.
      createRule:
        '@request.auth.id != "" && @request.auth.role = "provider" && provider.user = @request.auth.id && author = @request.auth.id',
      // Providers may edit their own posts only while draft/rejected/submitted;
      // approved/published posts are admin-only. (Status transition values for
      // non-admins are further restricted by the blog hook.)
      updateRule:
        '(provider.user = @request.auth.id && (status = "draft" || status = "rejected" || status = "submitted")) || @request.auth.role = "admin"',
      // Providers may delete only their own drafts; admin can delete any.
      deleteRule:
        '(provider.user = @request.auth.id && status = "draft") || @request.auth.role = "admin"',
      fields: [
        {
          name: "provider",
          type: "relation",
          required: true,
          maxSelect: 1,
          collectionId: providersCol.id,
          cascadeDelete: true,
        },
        {
          name: "author",
          type: "relation",
          required: true,
          maxSelect: 1,
          collectionId: usersCol.id,
          cascadeDelete: false,
        },
        {
          name: "service",
          type: "relation",
          required: false,
          maxSelect: 1,
          collectionId: servicesCol.id,
          cascadeDelete: false,
        },
        {
          name: "category",
          type: "relation",
          required: false,
          maxSelect: 1,
          collectionId: blogCategoriesCol.id,
          cascadeDelete: false,
        },
        { name: "title", type: "text", required: true, min: 1, max: 200 },
        { name: "slug", type: "text", required: true, min: 1, max: 220 },
        { name: "excerpt", type: "text", required: false, max: 500 },
        { name: "content", type: "editor", required: false },
        {
          name: "cover_image",
          type: "file",
          required: false,
          maxSelect: 1,
          maxSize: 5242880,
          mimeTypes: ["image/jpeg", "image/png", "image/webp"],
        },
        {
          name: "status",
          type: "select",
          required: true,
          maxSelect: 1,
          values: ["draft", "submitted", "approved", "rejected", "published"],
        },
        { name: "rejection_reason", type: "text", required: false, max: 1000 },
        { name: "published_at", type: "date", required: false },
        { name: "seo_title", type: "text", required: false, max: 200 },
        { name: "seo_description", type: "text", required: false, max: 300 },
      ],
      indexes: [
        "CREATE UNIQUE INDEX idx_blog_posts_slug ON blog_posts (slug)",
        "CREATE INDEX idx_blog_posts_status ON blog_posts (status)",
        "CREATE INDEX idx_blog_posts_provider ON blog_posts (provider)",
        "CREATE INDEX idx_blog_posts_category ON blog_posts (category)",
        "CREATE INDEX idx_blog_posts_published_at ON blog_posts (published_at)",
      ],
    });
    app.save(blogPosts);
  },
  (app) => {
    const deleteOrder = ["blog_posts", "blog_categories"];
    for (const name of deleteOrder) {
      try {
        const collection = app.findCollectionByNameOrId(name);
        app.delete(collection);
      } catch (_) {
        // collection may not exist if partial apply
      }
    }
  }
);
