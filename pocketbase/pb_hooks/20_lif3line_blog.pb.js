/// <reference path="../pb_data/types.d.ts" />

/**
 * GHST-48 — Provider blog moderation integrity.
 *
 * The blog_posts collection access rules already restrict WHO can read/write a
 * post. These hooks restrict WHICH status a non-admin may set, so a provider
 * cannot self-approve or self-publish by sending a crafted status value:
 *
 *   - Providers may only create/save posts as "draft" or "submitted".
 *   - Only an admin may set "approved", "rejected", "published" (unpublish =
 *     admin sets status back to "approved"/"draft").
 *   - When an admin publishes a post and published_at is empty, it is stamped.
 *
 * No deploy/restart is performed by committing this file.
 */

var BLOG_PROVIDER_STATUSES = ["draft", "submitted"];

onRecordCreateRequest((e) => {
  if (e.auth && e.auth.get("role") === "admin") {
    return e.next();
  }

  var status = e.record.get("status");
  if (!status) {
    e.record.set("status", "draft");
  } else if (BLOG_PROVIDER_STATUSES.indexOf(status) === -1) {
    throw new BadRequestError(
      "New blog posts can only be saved as a draft or submitted for approval.",
    );
  }

  e.next();
}, "blog_posts");

onRecordUpdateRequest((e) => {
  var nextStatus = e.record.get("status");

  if (e.auth && e.auth.get("role") === "admin") {
    if (nextStatus === "published" && !e.record.get("published_at")) {
      e.record.set("published_at", new Date().toISOString());
    }
    return e.next();
  }

  if (BLOG_PROVIDER_STATUSES.indexOf(nextStatus) === -1) {
    throw new ForbiddenError(
      "Only an admin can approve, reject, publish, or unpublish a blog post.",
    );
  }

  e.next();
}, "blog_posts");
