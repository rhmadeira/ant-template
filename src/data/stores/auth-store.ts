import { create, StateCreator } from "zustand";
import Cookies from "universal-cookie";
import { EnumAuth } from "@/shared/enums/auth";
const cookies = new Cookies();

type TAuthStore = {
  accessToken: string | null;
};

type TActions = {
  login: (accessToken: string) => void;
  logout: () => void;
};

const store: StateCreator<TAuthStore & TActions> = (set) => ({
  accessToken: cookies.get(EnumAuth.jwt) || null,
  login(accessToken) {
    set({ accessToken });
    cookies.set(EnumAuth.jwt, accessToken, {
      // domain: `${import.meta.env.VITE_DOMAIN}`,
      maxAge: 60 * 60 * 7,
      expires: new Date(new Date().getTime() + 60 * 60 * 7),
    });
  },
  logout() {
    set({ accessToken: null });
    cookies.remove(EnumAuth.jwt, {
      // domain: `${import.meta.env.VITE_DOMAIN}`,
    });
  },
});

export const useAuthStore = create(store);
