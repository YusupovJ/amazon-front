import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { TError, TKeyLocalstorage } from "@/types";
import { toast } from "sonner";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getLocalStorage = (key: TKeyLocalstorage): string | null => {
  return localStorage.getItem(key);
};

export const setLocalStorage = (key: TKeyLocalstorage, value: string): void => {
  localStorage.setItem(key, value);
};

export const delLocalStorage = (...keys: TKeyLocalstorage[]) => {
  keys.forEach((key) => localStorage.removeItem(key));
};

export const clearLocalStorage = (): void => {
  localStorage.clear();
};

export const onError = (error: TError) => {
  toast.error(error.response?.data.message || "Unexpected error");
};
