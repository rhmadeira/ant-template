import { create, StateCreator } from "zustand";

interface SideStore {
  collapsed: boolean;
  toggleCollapse?: () => void;
}

const store: StateCreator<SideStore> = (set) => ({
  collapsed: false,
  toggleCollapse: () =>
    set((state) => ({
      collapsed: !state.collapsed,
    })),
});

export const useSideStore = create<SideStore>(store);
