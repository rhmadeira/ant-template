import { dark } from "@/shared/theme/dark";
import { light } from "@/shared/theme/light";
import { ThemeConfig } from "antd";
import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

type TTheme = ThemeConfig;

type TThemeStore = {
  currentTheme: "light" | "dark";
  theme: TTheme;
  setThemeCurrentTheme: (theme: "light" | "dark") => void;
};

const store: StateCreator<TThemeStore> = (set) => ({
  currentTheme: "light",
  theme: light,
  setThemeCurrentTheme: (theme) =>
    set(() => {
      const newTheme = theme === "dark" ? dark : light;
      return {
        currentTheme: theme,
        theme: newTheme,
      };
    }),
});

export const useThemeStore = create(
  persist(store, {
    version: 1,
    name: "@Denvio/theme-store",
  })
);
