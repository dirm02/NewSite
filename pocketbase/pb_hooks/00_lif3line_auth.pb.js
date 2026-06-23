/// <reference path="../pb_data/types.d.ts" />

/**
 * GHST-12 — Auth guards on public signup.
 * - Block role=admin from public registration
 * - Default missing role to customer
 */
onRecordCreateRequest((e) => {
  const role = e.record.get("role");

  if (role === "admin") {
    throw new ForbiddenError("Admin accounts cannot be created via public signup.");
  }

  if (!role || role === "") {
    e.record.set("role", "customer");
  }

  if (role === "provider") {
    const name = e.record.get("name");
    if (!name || String(name).trim() === "") {
      throw new BadRequestError("Provider signup requires a display name.");
    }
  }

  e.next();
}, "users");

/// Prevent non-admins from elevating role on profile update.
onRecordUpdateRequest((e) => {
  if (e.auth && e.auth.get("role") === "admin") {
    return e.next();
  }

  const nextRole = e.record.get("role");
  let originalRole = nextRole;
  try {
    const original = e.record.originalCopy();
    if (original) {
      originalRole = original.get("role");
    }
  } catch (err) {
    // fallback — still block admin assignment
  }

  if (nextRole === "admin") {
    throw new ForbiddenError("Cannot assign admin role.");
  }

  if (nextRole !== originalRole) {
    throw new ForbiddenError("Role changes are not allowed via profile update.");
  }

  e.next();
}, "users");
