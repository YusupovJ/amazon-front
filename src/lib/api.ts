import axios, { AxiosError } from "axios";
import { baseURL } from "./urls";
import { delLocalStorage, getLocalStorage, setLocalStorage } from "./utils";
import { fetchRefresh } from "@/services/authService";

export const api = axios.create({ baseURL });

api.interceptors.request.use((config) => {
  const accessToken = getLocalStorage("accessToken");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

api.interceptors.response.use(
  ({ data, config, headers, statusText }) => ({ ...data, config, headers, statusText }),
  async (error: AxiosError) => {
    const originalConfig = error.config;
    const refreshToken = getLocalStorage("refreshToken");

    if (refreshToken && error.response?.status === 401 && originalConfig && !originalConfig?.isRetry) {
      originalConfig.isRetry = true;

      try {
        const { data } = await fetchRefresh(refreshToken);

        setLocalStorage("accessToken", data.accessToken);
        setLocalStorage("refreshToken", data.refreshToken);
      } catch (error) {
        delLocalStorage("accessToken", "refreshToken");
      }

      return api.request(originalConfig);
    }

    return Promise.reject(error);
  },
);
