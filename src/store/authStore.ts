import { IAuth } from "@/types";
import { create } from "zustand";

export interface IAuthStore {
  user: IAuth | null;
  isAuth: boolean;
  setUser: (user: IAuth | null) => void;
  authenticate: () => void;
  logout: () => void;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  user: null,
  isAuth: false,
  setUser: (user: IAuth | null) => set(() => ({ user })),
  authenticate: () => set(() => ({ isAuth: true })),
  logout: () => set(() => ({ isAuth: false })),
}));
