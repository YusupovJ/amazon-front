import { loginSchema, registerSchema, verifySchema } from "@/lib/schema";
import { QueryKey, useMutation, useQuery, UseQueryOptions } from "react-query";
import { z } from "zod";
import "axios";

declare module "axios" {
  export interface AxiosResponse<T = any> {
    data: T;
    date: string;
    pagination: IPagination | null;
    status: number;
  }

  export interface InternalAxiosRequestConfig {
    isRetry?: boolean;
  }
}

export interface IError {
  error: string;
  message: string;
  statusCode: number;
}

export type TKeyLocalstorage = "accessToken" | "refreshToken" | "email";
export type TError = AxiosError<IError>;
export type TRole = "vendor" | "admin" | "user";
export type IQueryOptions = Omit<UseQueryOptions<IUser, AxiosError<IError>, IUser, QueryKey>, "queryKey" | "queryFn">;

export type TLoginSchema = z.infer<typeof loginSchema>;
export type TRegisterSchema = z.infer<typeof registerSchema>;
export type TVerifySchema = z.infer<typeof verifySchema>;

export interface IPagination {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  offset: number;
}

export interface IApiResponse<T> {
  data: T;
  status: number;
  pagination: IPagination;
  date: string;
}

export interface IAuth {
  id: number;
  createdAt: string;
  updatedAt: string;
  email: string;
  role: TRole;
  firstName: string;
  isVerified: boolean;
  accessToken: string;
  refreshToken: string;
  lastName?: string;
}

export interface IUser {
  id: number;
  createdAt: string;
  updatedAt: string;
  email: string;
  role: TRole;
  firstName: string;
  isVerified: boolean;
  lastName?: string;
}

export interface TVerifyData {
  otp: number;
  email: string;
}
