# Entrypoint table template

Copy this table into each surface audit. One row per visible entrypoint. Column order is fixed (see `../README.md` §2).

## <Surface> — <Area>

| ID | Surface | Area | Label / icon | Selector / identifying text | Action type | href / route / action | Auth | What happens | Destination | Backend dep | Classification | PB need | Notes / evidence |
|----|---------|------|--------------|-----------------------------|-------------|-----------------------|------|--------------|-------------|-------------|----------------|---------|------------------|
| HOME-HDR-01 | Home | Header | Logo | `.navbar-brand.logo` | nav-link | `/index` | guest | Navigates home | `NewHome` | none | duplicate | — | self-link; `SiteHeader.tsx:130` |
| EXAMPLE-02 |  |  |  |  |  |  |  |  |  |  |  |  |  |

### Classification tally (fill per surface)

| Classification | Count |
|----------------|-------|
| MVP-live |  |
| MVP-needs-backend |  |
| demo-later |  |
| broken |  |
| duplicate |  |
| external/static |  |
| auth-only |  |
| unknown |  |

### Action-type tally

| Action type | Count |
|-------------|-------|
| nav-link |  |
| button-action |  |
| dropdown-toggle |  |
| modal-trigger |  |
| form-submit |  |
| external |  |
| no-op |  |
