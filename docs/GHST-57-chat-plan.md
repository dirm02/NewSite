# GHST-57 — Customer/provider chat: decision + schema plan

## Audit (verified in code)

- **Pages:** `customers/customer-chat/customer-chat.tsx` and
  `providers/provider-chat/provider-chat.tsx` — each ~700 lines of **static
  template** with hardcoded contacts/messages. No data layer, no submit handler.
- **Backend:** **no** `conversations`/`messages` collections exist in PocketBase
  (verified via API; only services/providers/categories/cities/reviews/
  requests/quotes/blog_* exist). So nothing real backs chat today.
- **Entrypoints (kept visible per product philosophy):**
  - Customer sidebar → Chat (`customerChat`); customer header has no separate
    chat link.
  - Provider sidebar → Chat (`providerChat`).
  - `SiteHeaderRightActions` variant 11 has a mail icon → `customerChat` (a
    template header variant, not the live shells).

## Decision (MVP timing)

**Defer real-time chat to a post-MVP phase. Keep the Chat pages and sidebar
entries visible, but make them honest now** with a "coming soon" state instead
of fake conversations.

Rationale: the MVP loop is request → quote → accept → job → review, and parties
can coordinate via the **job request + quotes + job-details** surfaces (which are
live). Chat adds conversations/messages collections, realtime subscriptions,
unread state, notifications, and moderation — a meaningful build that shouldn't
block MVP. Keeping the surface visible (not hidden/deleted) matches the
"preserve the full feature map" philosophy.

> This document is a **plan only**. No PocketBase collections were created and no
> migration was written — per the task, that happens **only after approval**.

## Done now (honest state, no backend)

- Both chat pages render `FeatureComingSoon` ("Messaging is coming soon") with a
  CTA to a real surface (My Jobs / Job Feed). The original chat template is
  preserved (wrapped in `d-none`) for future wiring — nothing deleted.
- New reusable component `common/state/FeatureComingSoon.tsx`.

## Proposed schema (DRAFT — apply only after approval)

Two collections, mirroring the existing migration/rule conventions
(`pocketbase/pb_migrations/1740523500_lif3line_mvp_schema.js`).

### `conversations`
| Field | Type | Notes |
|---|---|---|
| `customer` | relation → users (req) | the customer participant |
| `provider` | relation → provider_profiles (req) | the provider participant |
| `request` | relation → service_requests (optional) | conversation context |
| `last_message` | text (≤500) | denormalized preview |
| `last_message_at` | date | for sort/unread |
| `customer_unread` | number ≥0 | unread counter |
| `provider_unread` | number ≥0 | unread counter |

Indexes: `(customer)`, `(provider)`, unique `(customer, provider, request)`.

Access rules (participant-scoped):
- list/view: `customer = @request.auth.id || provider.user = @request.auth.id || @request.auth.role = "admin"`
- create: `@request.auth.id != "" && (customer = @request.auth.id || provider.user = @request.auth.id)`
- update: participants or admin (counters/preview via hook only — see below)
- delete: admin only

### `messages`
| Field | Type | Notes |
|---|---|---|
| `conversation` | relation → conversations (req, cascade) | |
| `sender` | relation → users (req) | author |
| `body` | text (1–5000, req) | |
| `read` | bool | per-recipient read flag (or track via conversation counters) |

Indexes: `(conversation)`, `(sender)`, `(conversation, created)`.

Access rules:
- list/view: only if auth is a participant of the parent conversation or admin.
- create: `@request.auth.id != "" && sender = @request.auth.id` **and** auth is a
  participant of `conversation` (enforced in a hook, since rules can't easily
  join to the conversation's participants).
- update/delete: sender (edit window) or admin.

### Hook (`pb_hooks`, after approval)
- `onRecordCreateRequest("messages")`: verify sender is a participant of the
  conversation; reject otherwise. On success, update the parent conversation's
  `last_message`/`last_message_at` and increment the **other** party's unread
  counter. (Mirrors the GHST-12 transition-guard pattern.)
- Optional `onRecordAfterUpdateSuccess` to reset unread when a participant opens
  a conversation.

### Realtime
PocketBase supports realtime subscriptions; the chat UI would subscribe to
`messages` filtered by `conversation`. MVP-lite alternative: poll on an interval.

## Frontend wiring plan (after schema approved)
1. `core/api/pocketbase/chat.ts`: `fetchConversations`, `fetchMessages`,
   `sendMessage`, `markRead`.
2. `core/hooks/useChat.ts`: `useConversations()`, `useMessages(conversationId)`,
   `useChatActions()`.
3. Replace the `d-none` template in both chat pages with live conversation list
   + message thread + composer; honest empty state when no conversations.
4. "Message" buttons that currently link to `#` on job/proposal cards →
   create/open a conversation.
5. E2E: customer↔provider send/receive, participant-only access, unread counts.

## Not done (by design, needs approval)
- No collections created, no migration written, no hook added, no deploy.
