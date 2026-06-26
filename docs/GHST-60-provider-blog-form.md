# GHST-60 — Provider blog add/edit form fix

## Root cause

The Add/Edit Blog page rendered the card header but hid the entire form body because
`providerAddBlog.tsx` wrapped fields in a bare `<fieldset>`. Global template CSS in
`_home.scss` sets `fieldset { display: none }` (wizard multi-step forms only show
`#first-field` or `.field-one`). The blog form had neither override, so all inputs
were invisible in production.

## Fix

1. **Visibility:** Added `style={{ display: "block" }}` on the blog form fieldset
   (same pattern as `createServices.tsx` and booking wizards).
2. **Cover image:** `blog_posts.cover_image` already exists in schema (single file,
   jpg/png/webp, ≤5 MB). Wired multipart upload via `pbCreateForm` / `pbUpdateForm`
   in `blog.ts`, with preview and remove in the form UI.
3. **Test IDs:** Added `blog-category`, `blog-service`, `blog-excerpt`,
   `blog-cover-input`, `blog-cover-preview`, `blog-cover-remove` for E2E.

## Files changed

- `src/feature-module/frontend/providers/provider-blog/providerAddBlog.tsx`
- `src/core/api/pocketbase/blog.ts`
- `src/core/api/pocketbase/format.ts` — `pbRecordFileUrl`
- `tests/e2e/blog/provider-blog.spec.ts` — read-only form visibility test

## Verification

```bash
npm run build
npx playwright test --grep @blog
```

No PocketBase schema changes. No deploy/restart.
