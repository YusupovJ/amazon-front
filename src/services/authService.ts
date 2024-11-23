import { api } from "@/lib/api";
import { baseURL, urls } from "@/lib/urls";
import { IApiResponse, IAuth, IUser, TLoginSchema, TRegisterSchema, TVerifyData } from "@/types";
import axios from "axios";

export const fetchRegister = async (registerData: TRegisterSchema) => {
  const { data } = await api.post<string>(urls.auth.register, registerData);
  return data;
};

export const fetchLogin = async (loginData: TLoginSchema) => {
  const { data } = await api.post<IAuth | string>(urls.auth.login, loginData);
  return data;
};

export const fetchLogout = async () => {
  const { data } = await api.post<string>(urls.auth.logout);
  return data;
};

export const fetchMe = async () => {
  const { data } = await api.get<IUser>(urls.auth.me);
  return data;
};

export const fetchVerify = async (verifyData: TVerifyData) => {
  const { data } = await api.post<IAuth>(urls.auth.verify, verifyData);
  return data;
};

export const fetchRefresh = async (refreshToken: string) => {
  const { data } = await axios.post<IApiResponse<IAuth>>(baseURL + urls.auth.refresh, {
    refreshToken,
  });

  return data;
};
