import { clearToken, saveToken } from "@/utils/storage";
import { refreshAccessToken } from "./auth";
import api from ".";

export const setupInterceptors = (
  getRefreshToken: () => string | null,
  setAuthToken: (token: string) => void,
  setRefreshToken: (token: string) => void,
  logout: () => void
) => {
  const interceptor = api.interceptors.response.use(
    res => res,
    async err => {
      const originalRequest = err.config;

      if (
        err.response?.status === 401 &&
        !(originalRequest as any)._retry &&
        getRefreshToken()
      ) {
        console.log("🔁 401 caught, refreshing token...");

        (originalRequest as any)._retry = true;

        try {
          const res = await refreshAccessToken({
            refresh_token: getRefreshToken()!,
          });

          const newAccess = res.access_token;
          const newRefresh = res.refresh_token;

          await saveToken(newAccess, newRefresh);
          setAuthToken(newAccess);
          setRefreshToken(newRefresh);

          originalRequest.headers = {
            ...originalRequest.headers,
            Authorization: `Bearer ${newAccess}`,
          };

          console.log("✅ Retrying original request:", originalRequest.url);
          return api(originalRequest); // retry
        } catch (err) {
          console.log("❌ Refresh token failed. Logging out.");
          await clearToken();
          logout();
        }
      }

      return Promise.reject(err);
    }
  );

  return () => api.interceptors.response.eject(interceptor);
};

