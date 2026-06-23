import { all_routes } from "../data/routes/all_routes";
import type { PbUserRole } from "../api/pocketbase/types";

/** Post-auth redirect targets by role — GHST-11 */
export function dashboardPathForRole(role: PbUserRole): string {
  switch (role) {
    case "provider":
      return all_routes.providerDashboard;
    case "admin":
      return all_routes.adminDashboard;
    case "customer":
    default:
      return all_routes.customerDashboard;
  }
}
