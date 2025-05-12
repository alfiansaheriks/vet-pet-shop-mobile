import * as SecureStore from "expo-secure-store";

export const saveToken = async (token: string, refresh_token: string) => {
  try {
    await SecureStore.setItemAsync("access_token", token);
    await SecureStore.setItemAsync("refresh_token", refresh_token);
  } catch (error) {
    console.error("Error saving token:", error);
  }
};

export const getToken = async () => {
  // return auth and refresh token
  const access_token = await SecureStore.getItemAsync("access_token");
  const refresh_token = await SecureStore.getItemAsync("refresh_token");
  return { access_token, refresh_token };
};

export const clearToken = async () => {
  await SecureStore.deleteItemAsync("access_token");
  await SecureStore.deleteItemAsync("refresh_token");
};
