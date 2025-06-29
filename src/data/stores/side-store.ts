import { create, StateCreator } from "zustand";

interface SideStore {
  collapsed: boolean;
  selectedKey: string[];
  toggleCollapse?: () => void;
  setSelectedKey: (key: string[]) => void;
}

const store: StateCreator<SideStore> = (set) => ({
  collapsed: true,
  selectedKey: [],
  setSelectedKey: (key) =>
    set(() => ({
      selectedKey: key,
    })),
  toggleCollapse: () =>
    set((state) => ({
      collapsed: !state.collapsed,
    })),
});

export const useSideStore = create<SideStore>(store);
