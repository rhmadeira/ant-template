import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

type TAuthStore = {
  accessToken: string | null;
  login: (accessToken: string) => void;
  logout: () => void;
};

const store: StateCreator<TAuthStore> = (set) => ({
  accessToken: "",
  login: (accessToken: string) => {
    set({ accessToken });
  },
  logout: () => {
    set({ accessToken: null });
  },
});

export const useAuthStore = create(
  persist(store, {
    name: "@Denvio/auth-store",
    version: 2,
  })
);
