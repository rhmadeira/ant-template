import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

type TThemeStore = {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
};

const store: StateCreator<TThemeStore> = (set) => ({
  theme: "light",
  setTheme: (theme) => set(() => ({ theme })),
});

export const useThemeStore = create(
  persist(store, {
    name: "@gmill:theme",
  })
);
