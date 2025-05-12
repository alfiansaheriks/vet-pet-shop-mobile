import { create } from "zustand";
import { User, UserUpdateRequest } from "@/lib/api/profile/type";
import { getDataUser, updateProfileUser } from "@/lib/api/profile";
import * as SecureStore from "expo-secure-store";

type UserStore = {
  user: User | null;
  fetchUser: (userId: number) => Promise<void>;
  setUser: (user: User) => void;
  updateUser: (userId: number | null, token:string, data: UserUpdateRequest['data']) => Promise<void>;
  clearUser: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,

  fetchUser: async (userId: number) => {
    const accessToken = await SecureStore.getItemAsync("access_token");
    if (!accessToken) {
      console.error("No access token found");
      return;
    }

    try {
      const res = await getDataUser({ userId, accessToken });
      set({ user: res.data });
    } catch (err:any) {
      console.error("Failed to fetch user:", err);
    //   get response from server
        if (err.response) {
            console.error("Server response:", err.response.data);
        } else {
            console.error("Error message:", err.message);
        }
    }
  },

  setUser: (user) => set({ user }),

  updateUser: async (userId, token, data) => {
    const updatedUser = await updateProfileUser({ userId, accessToken: token, data});
    set({ user: updatedUser.data });
  },

  clearUser: () => set({ user: null }),


}));
