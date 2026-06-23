# Entrypoint flow graph (GHST-35)

Visualizes how the mapped entrypoints (GHST-31/32/33) connect surfaces → destinations → PocketBase collections, and where flows are broken or out-of-scope.

Inputs: `homepage-entrypoints.md`, `customer-dashboard-entrypoints.md`, `provider-dashboard-entrypoints.md`, `entrypoint-classification-summary.md`. Machine-readable version: `entrypoint-flow-graph.json`.

**Edge legend**
- solid `-->` = working navigation/action (keep)
- `-.->` = needs wiring to an existing collection (wire)
- `==>` broken/no-op or cross-role leak (fix)
- dashed to `((later))` = out-of-MVP-scope destination (hide/delete-later)

---

## 1. Top-level surface map

```mermaid
flowchart LR
  Guest([Guest visitor]) --> Home[/index home/]
  Home -->|Sign In| Login[/authentication/login/]
  Home -->|Join Us / Become Provider| Signup[/choose signup/]
  Login --> RoleRedirect{role}
  RoleRedirect -->|customer| CDash[/customers/customer-dashboard/]
  RoleRedirect -->|provider| PDash[/providers/dashboard/]
  CDash -->|Logout header| Login
  PDash -->|Logout header| Login
  CDash ==>|Logout sidebar no PB clear| Login
  PDash ==>|Logout sidebar no PB clear| Login
```

## 2. Home page entrypoint flow

```mermaid
flowchart TD
  H[/index/]

  subgraph Live[Working / PocketBase-backed]
    H --> Cat[Category grid View All] -.-> SR1[(services)]
    H --> Feat[Featured/Popular services] -.-> SR1
    H --> Prov[Popular providers] -.-> PP[(provider_profiles)]
    H --> Test[Testimonials] -.-> RV[(reviews)]
    H --> Cities[Cities in Canada] -.-> CT[(cities)]
    H --> Nav[Header Services/Pages nav] --> Search[/services/search,grid,list/]
    Search -.-> SR1
  end

  subgraph Broken[Broken / needs fix]
    H ==> Hero[Hero search inputs + button] 
    Hero ==> Search
    H ==> JoinBody[Body Join Us CTAs to hash]
    H ==> CityLinks[City/profession links to hash]
    H ==> Foot[Footer Terms/Privacy/social to hash]
  end

  subgraph Scope[Out of MVP scope]
    H -.-> Blog((blog later))
    H -.-> Fav((favorites later))
    H -.-> News((newsletter later))
    H -.-> Tmpl((template pages: details/categories/booking/error/pricing))
    H -.-> Modals((orphaned #quote_modal / #provider))
  end
```

## 3. Customer dashboard entrypoint flow

```mermaid
flowchart TD
  CD[/customers/customer-dashboard/]

  subgraph CNav[Navigation - works]
    CD --> CLogo[Logo/Home]
    CD --> CProfile[Profile menu > My Profile]
    CD --> CLogoutH[Logout header] --> Auth1[(users auth: logout)]
  end

  subgraph CWire[Sidebar - wire to existing collections]
    CD -.-> CCreate[Create Job] -.-> SRq[(service_requests)]
    CD -.-> CJobs[Jobs] -.-> SRq
    CD -.-> CQuote[Quote Comparison] -.-> Qt[(quotes)]
    CD -.-> CRev[Reviews] -.-> Rv[(reviews)]
    CD -.-> CAcct[Account Settings] -.-> Usr[(users)]
  end

  subgraph CFix[Body actions - broken/core]
    CD ==> CAccept[Accept/Decline proposals] 
    CAccept -.-> Qt
    CAccept -.-> AQ{{accept-quote hook ✅ implemented}}
    CD ==> CPostCTA[Post a Job / Review Proposals CTAs]
    CPostCTA -.-> SRq
    CD ==> CLogoutS[Logout sidebar] ==> Auth1
  end

  subgraph CScope[Static / out of scope]
    CD -.-> CMetrics((metric cards))
    CD -.-> CBook((Recent Booking + Cancel -> bookings later))
    CD -.-> CTxn((Recent Transaction -> payments later))
    CD -.-> CAct((Recent Activities))
    CD -.-> CNotif((header notifications -> notifications later))
    CD -.-> CDel((orphaned #del-account))
  end
```

## 4. Provider dashboard entrypoint flow

```mermaid
flowchart TD
  PD[/providers/dashboard/]

  subgraph PNav[Navigation - works]
    PD --> PLogo[Logo/Home, toggles, dark mode]
    PD --> PLogoutH[Logout header] --> Auth2[(users auth: logout)]
  end

  subgraph PWire[Sidebar - wire to existing collections]
    PD -.-> PFeed[Job Feed] -.-> SRq2[(service_requests)]
    PD -.-> PProp[Proposals] -.-> Qt2[(quotes)]
    PD -.-> PMyJobs[My Jobs] -.-> SRq2
    PD -.-> PSvc[My Services] -.-> Svc[(services)]
    PD -.-> PRev[Reviews] -.-> Rv2[(reviews)]
    PD -.-> PAcct[Settings > Account] -.-> PPf[(provider_profiles)]
  end

  subgraph PFix[Broken / leaks]
    PD ==> PNotif[Notification items] ==>|cross-role leak| CustNotif[/customers/notification/]
    PD ==> PSearch[Header search to hash]
    PD ==> PLogoutS[Logout sidebar] ==> Auth2
    PD ==> PTopSvc[Top Services rows] ==>|mis-targeted| SD1[/service-details1/]
  end

  subgraph PScope[Static / later provider-ops]
    PD -.-> PAppt((appointments/earnings/subscription))
    PD -.-> PBook((Bookings calendar -> bookings later))
    PD -.-> PLoc((Top Locations: non-Canada))
    PD -.-> PStaff((Staffs / Add Staff -> staff later))
    PD -.-> POps((Payout/Holidays/Coupons/Offers/Enquiries/Chat))
  end
```

## 5. Canonical MVP workflow (target wiring)

The job → quote → review loop spanning both roles, using **existing collections only**:

```mermaid
flowchart LR
  CCreate[Customer: Create Job] -.-> SRq[(service_requests<br/>status=open)]
  SRq -.-> PFeed[Provider: Job Feed]
  PFeed -.-> PSubmit[Provider: Submit Proposal] -.-> Qt[(quotes)]
  Qt -.-> CCompare[Customer: Quote Comparison]
  CCompare -.-> CAccept[Customer: Accept]
  CAccept -.-> AQ{{accept-quote hook ✅:<br/>quote=accepted, others rejected,<br/>request=in_progress}}
  AQ -.-> PMyJobs[Provider: My Jobs]
  PMyJobs -.-> CJob{{complete-request hook ✅:<br/>request=completed}}
  CJob -.-> CReview[Customer: leave Review] -.-> Rv[(reviews ✅ validation hook)]
  Rv -.-> RAgg{{rating aggregate recompute<br/>⏳ deferred}}
  RAgg -.-> PPf[(provider_profiles.rating)]
```

> Every node in §5 maps to a collection that **already exists** (`service_requests`, `quotes`, `reviews`, `provider_profiles`). Hook status (GHST-12): `accept-quote`, `complete-request`, `cancel-request`, and review validation are **implemented ✅**; only the **rating-aggregate recompute is deferred ⏳**. Remaining MVP work = frontend wiring to these existing hooks/collections. See `pocketbase-backlog-from-entrypoints.md` Tier 1.

---

## How to read these graphs

- **Solid edges** are safe to demo today.
- **Dotted edges into collection nodes** `[( )]` are the MVP wiring backlog (Tier 1).
- **`==>` edges** are the broken/leak fixes to do before any demo.
- **`(( ))` nodes** are out-of-scope; hide their entrypoints from nav (don't delete) per `demo-cleanup-candidates.md`.

A machine-readable node/edge listing is in `entrypoint-flow-graph.json` (nodes carry `surface`, `classification`, `decision`, `pb`; edges carry `kind` = nav | wire | broken | scope).
