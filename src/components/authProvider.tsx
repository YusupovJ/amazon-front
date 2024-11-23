import { useMe } from "@/hooks/useAuth";
import { delLocalStorage, getLocalStorage, onError } from "@/lib/utils";
import { useAuthStore } from "@/store/authStore";
import { PropsWithChildren } from "react";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const accessToken = getLocalStorage("accessToken");
  const { setUser, authenticate, logout } = useAuthStore();

  useMe({
    onSuccess(data) {
      setUser(data);
      authenticate();
    },
    onError(error) {
      setUser(null);
      logout();
      delLocalStorage("accessToken", "refreshToken");
      onError(error);
    },
    enabled: !!accessToken,
  });

  return children;
};
