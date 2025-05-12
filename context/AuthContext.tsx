// context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { getToken, saveToken, clearToken } from "@/utils/storage";
import { refreshAccessToken } from "@/lib/api/auth";
import { decodeJWT } from "@/utils/jwt";
import { setupInterceptors } from "@/lib/api/interceptor";
import { useGlobalStore, useUserStore } from "@/stores";

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: any) => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    const initializeAuth = async () => {
      const { access_token, refresh_token } = await getToken();

      console.log("Init Access token: ", access_token);
      console.log("Init Refresh token: ", refresh_token);
      
      if (!refresh_token) {
        console.log("❗No refresh tokenn");
        setLoading(false);
        return;
      }

      let finalAccessToken = access_token;
      let finalRefreshToken = refresh_token;

      try {
        const res = await refreshAccessToken( refresh_token );
        finalAccessToken = res.access_token;
        finalRefreshToken = res.refresh_token;
        await saveToken(finalAccessToken, finalRefreshToken);
        console.log("Access token refreshed: ", finalAccessToken);
        console.log("Refresh token refreshed: ", finalRefreshToken);
        const decoded = decodeJWT(finalAccessToken);
        if (decoded) {
          setUserId(decoded.id);
          useGlobalStore.getState().setUserId(decoded.id);
          useGlobalStore.getState().setAuthToken(finalAccessToken);
        }
        console.log("✅ Token refreshed");
      } catch (err:any) {
        console.error("❌ Refresh failed: ", err);
        if (err.response) {
          console.error("Server response:", err.response.data);
        } else {
          console.error("Error messaga:", err.message);
        }
        await clearToken();
        setLoading(false);
        return;
      }

      setAuthToken(finalAccessToken);
      setRefreshToken(finalRefreshToken);

      const decoded = decodeJWT(finalAccessToken);
      if (decoded) {
        setUserId(decoded.id);
      }

      setLoading(false); // next useEffect will mount interceptor & fetch user
    };

    initializeAuth();
  }, []);

  useEffect(() => {
    if (loading) return;

    if (!authToken || !refreshToken) {
      console.log("❗Skip interceptor: token not ready");
      return;
    }

    const eject = setupInterceptors(
      () => refreshToken,
      (newToken) => setAuthToken(newToken),
      (newRefreshToken) => setRefreshToken(newRefreshToken),
      logout
    );

    console.log("✅ Interceptor mounted");

    if (userId) {
      useUserStore
        .getState()
        .fetchUser(userId)
        .catch((err) => {
          console.error("❌ Failed to fetch user:", err);
          if (err.response) {
            console.error("Server response:", err.response.data);
          }
        });
    }

    return () => {
      console.log("🧼 Interceptor ejected");
      eject();
    };
  }, [authToken, refreshToken, userId, loading]);

  const login = async (token: string, refreshToken: string) => {
    // console.log("Login token: ", token);
    // console.log("Login refresh token: ", refreshToken);
    if (!token || !refreshToken) {
      console.error("Invalid token or refresh toke");
      return;
    }
    await saveToken(token, refreshToken);
    setAuthToken(token);
    setRefreshToken(refreshToken);

    const decodedToken = decodeJWT(token);
    if (decodedToken) {
      setUserId(decodedToken.id);
      await useUserStore.getState().fetchUser(decodedToken.id);
      useGlobalStore.getState().setUserId(decodedToken.id);
      useGlobalStore.getState().setAuthToken(token);
    } else {
      console.error("Failed to decode token");
    }
  };

  const logout = async () => {
    await clearToken();
    setAuthToken(null);
    setRefreshToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ authToken, refreshToken, userId, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
