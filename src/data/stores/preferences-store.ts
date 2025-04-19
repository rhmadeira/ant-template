import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

type TLayoutDataGrid = "table" | "card" | "list";

type TPreferenceStore = {
  isRememberLogin: boolean;
  login: string;
  layoutDataGrid: TLayoutDataGrid;
};

type TActions = {
  setRememberLogin: (bool: boolean) => void;
  setLogin: (login: string) => void;
  setLayoutDataGrid: (layout: TLayoutDataGrid) => void;
};

const store: StateCreator<TPreferenceStore & TActions> = (set) => ({
  isRememberLogin: true,
  densityDataGrid: "compact",
  layoutDataGrid: "table",
  login: "",
  setRememberLogin(bool) {
    set({ isRememberLogin: bool });
  },
  setLogin(login) {
    set({ login });
  },
  setLayoutDataGrid(layout) {
    set({ layoutDataGrid: layout });
  },
});

export const usePreferencesStore = create(
  persist(store, {
    name: "preferences-store",
    version: 1,
  })
);
