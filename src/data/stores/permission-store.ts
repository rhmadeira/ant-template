import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

type TPermissionsMeStore = {
  permissions: string[];
  lastUpdate: string | null;
  setPermissions: (permissions: string[]) => void;
  getPermissions: () => string[];
  hasPermission: (permission: string) => boolean;
  hasAnyPermission: (permissions: string[]) => boolean;
  reset: () => void;
};

const store: StateCreator<TPermissionsMeStore> = (set, get) => ({
  permissions: [],
  lastUpdate: null,
  setPermissions: (permissions) => {
    const currentTime = new Date().toISOString();
    set({
      permissions,
      lastUpdate: currentTime,
    });
  },
  getPermissions: () => {
    return get().permissions;
  },
  hasPermission: (permission) => {
    return get().permissions.includes(permission);
  },
  hasAnyPermission: (permissions) => {
    return permissions.some((permission) =>
      get().permissions.includes(permission)
    );
  },
  reset: () => {
    set({
      permissions: [],
      lastUpdate: null,
    });
  },
});

export const usePermissionsStore = create(
  persist(store, { name: "@gmill-vendas-permissions", version: 10 })
);
