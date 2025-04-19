import { EnumPermission } from "@/shared/enums/permission";
import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";
import { loginService } from "../services/login";
import Cookies from "universal-cookie";
import { EnumAuth } from "@/shared/enums/auth";
import { useAuthStore } from "./auth-store";
import { toast } from "react-toastify";

type TPermissionStore = {
  permission: string[];
};

type TActions = {
  getPermission: () => void;
  setPermission: (permission: string[]) => void;
  checkHasPermission: (permission: EnumPermission) => boolean;
};

const store: StateCreator<TPermissionStore & TActions> = (set, get) => ({
  permission: [],
  async getPermission() {
    try {
      const data = await loginService.getUserPermission();
      const permission = data.value.map((x) => x.permissao.nome);
      set({ permission });
    } catch (error) {
      set({ permission: [] });
      useAuthStore.getState().logout();
      toast.error("Erro ao buscar permissões, faça login novamente.");
    }
  },
  setPermission(permission) {
    set({ permission });
  },
  checkHasPermission(permission) {
    return get().permission.includes(permission);
  },
});

export const usePermissionStore = create(
  persist(store, {
    name: "gmill-permission",
    version: 3,
  })
);
