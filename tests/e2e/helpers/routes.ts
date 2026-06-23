/** MVP public routes for smoke and discovery tests */
export const PUBLIC_SMOKE_ROUTES = [
  { path: "/index", title: /lif3line|home|service/i },
  { path: "/authentication/login", heading: /welcome/i },
  { path: "/authentication/user-signup", heading: /user signup/i },
  { path: "/authentication/provider-signup", heading: /provider signup/i },
  { path: "/services/search", heading: /search|service/i },
  { path: "/services/service-grid", heading: /service/i },
  { path: "/services/providers/provider-list", text: /providers/i },
] as const;

export const CUSTOMER_PROTECTED = "/customers/customer-dashboard";
export const PROVIDER_PROTECTED = "/providers/dashboard";
