import { create } from "zustand";

type GlobalStore = {
  authToken: string | null;
  userId: number | null;
  setAuthToken: (token: string) => void;
  setUserId: (id: number) => void;
  clearAuth: () => void;
};

export const useGlobalStore = create<GlobalStore>((set) => ({
  authToken: null,
  userId: null,
  setAuthToken: (token) => set({ authToken: token }),
  setUserId: (id) => set({ userId: id }),
  clearAuth: () => set({ authToken: null, userId: null }),
}));
