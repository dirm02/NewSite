import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  createProviderProfile,
  loginWithPassword,
  requestEmailVerification,
  refreshAuth,
  signupUser,
  type SignupInput,
} from "../api/pocketbase/auth";
import {
  clearAuthSession,
  loadAuthSession,
  saveAuthSession,
} from "../api/pocketbase/auth-storage";
import type { PbUser, PbUserRole } from "../api/pocketbase/types";
import { dashboardPathForRole } from "./roleRoutes";

interface AuthContextValue {
  user: PbUser | null;
  token: string | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<PbUser>;
  signupCustomer: (input: Omit<SignupInput, "role">) => Promise<PbUser>;
  signupProvider: (
    input: Omit<SignupInput, "role"> & { businessName?: string },
  ) => Promise<{ user: PbUser; profileCreated: boolean; profileError?: string }>;
  logout: () => void;
  hasRole: (role: PbUserRole | PbUserRole[]) => boolean;
  dashboardPath: string | null;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<PbUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const applySession = useCallback((nextToken: string, nextUser: PbUser) => {
    setToken(nextToken);
    setUser(nextUser);
    saveAuthSession({ token: nextToken, record: nextUser });
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    clearAuthSession();
  }, []);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const stored = loadAuthSession();
      if (!stored) {
        if (!cancelled) setLoading(false);
        return;
      }

      try {
        const refreshed = await refreshAuth(stored.token);
        if (!cancelled) {
          applySession(refreshed.token, refreshed.record);
        }
      } catch {
        if (!cancelled) logout();
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [applySession, logout]);

  const login = useCallback(
    async (email: string, password: string) => {
      const session = await loginWithPassword(email, password);
      applySession(session.token, session.record);
      return session.record;
    },
    [applySession],
  );

  const signupCustomer = useCallback(
    async (input: Omit<SignupInput, "role">) => {
      await signupUser({ ...input, role: "customer" });
      void requestEmailVerification(input.email).catch(() => undefined);
      const session = await loginWithPassword(input.email, input.password);
      applySession(session.token, session.record);
      return session.record;
    },
    [applySession],
  );

  const signupProvider = useCallback(
    async (input: Omit<SignupInput, "role"> & { businessName?: string }) => {
      await signupUser({ ...input, role: "provider" });
      void requestEmailVerification(input.email).catch(() => undefined);
      const session = await loginWithPassword(input.email, input.password);

      let profileCreated = false;
      let profileError: string | undefined;

      try {
        await createProviderProfile(
          session.token,
          session.record.id,
          input.businessName?.trim() || input.name?.trim() || "My Business",
        );
        profileCreated = true;
      } catch (err) {
        profileError =
          err instanceof Error
            ? err.message
            : "Provider profile could not be created";
      }

      applySession(session.token, session.record);
      return {
        user: session.record,
        profileCreated,
        profileError,
      };
    },
    [applySession],
  );

  const hasRole = useCallback(
    (role: PbUserRole | PbUserRole[]) => {
      if (!user) return false;
      const roles = Array.isArray(role) ? role : [role];
      return roles.includes(user.role);
    },
    [user],
  );

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      token,
      loading,
      isAuthenticated: !!user && !!token,
      login,
      signupCustomer,
      signupProvider,
      logout,
      hasRole,
      dashboardPath: user ? dashboardPathForRole(user.role) : null,
    }),
    [
      user,
      token,
      loading,
      login,
      signupCustomer,
      signupProvider,
      logout,
      hasRole,
    ],
  );

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}
