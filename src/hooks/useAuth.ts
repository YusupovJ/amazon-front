import { LOGIN_KEY, LOGOUT_KEY, ME_KEY, REGISTER_KEY, VERIFY_KEY } from "@/lib/consts";
import { fetchLogin, fetchLogout, fetchMe, fetchRegister, fetchVerify } from "@/services/authService";
import { IAuth, IQueryOptions, IUser, TError, TLoginSchema, TRegisterSchema, TVerifyData } from "@/types";
import { useMutation, useQuery } from "react-query";

export const useLogin = () => {
  return useMutation<IAuth | string, TError, TLoginSchema>(LOGIN_KEY, fetchLogin);
};

export const useRegister = () => {
  return useMutation<string, TError, TRegisterSchema>(REGISTER_KEY, fetchRegister);
};

export const useLogout = () => {
  return useMutation<string, TError, null>(LOGOUT_KEY, fetchLogout);
};

export const useMe = (options?: IQueryOptions) => {
  return useQuery<IUser, TError>(ME_KEY, fetchMe, options);
};

export const useVerify = () => {
  return useMutation<IAuth, TError, TVerifyData>(VERIFY_KEY, fetchVerify);
};
