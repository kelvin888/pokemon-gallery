import { QueryClient } from "@tanstack/react-query";
import axios, { type AxiosError, type AxiosRequestConfig } from "axios";
import env from "@/config";

const config: AxiosRequestConfig = {
  baseURL: env.POKEMON_SERVICE_ENDPOINT,
};

const client = axios.create(config);

type ApiClientRead = <T>(
  url: string,
  config?: AxiosRequestConfig,
) => Promise<T>;

type ApiClientWrite = <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
) => Promise<T>;

export interface ApiClientErrorParams<T = any> {
  message?: string | undefined;
  name?: string | undefined;
  stack?: string | undefined;
  userMessage?: string | undefined;
  axiosError?: AxiosError<T>;
  response?: T;
}

export class ApiClientError<T = any> extends Error {
  userMessage: string | undefined;
  axiosError?: AxiosError<T>;
  response?: T | undefined;

  constructor(params?: ApiClientErrorParams<T>) {
    super();
    this.message = params?.message ?? "";
    this.name = params?.name ?? "ApiClientError";
    this.stack = params?.stack;
    this.userMessage = params?.userMessage;
    this.axiosError = params?.axiosError;
    this.response = params?.response;
  }
}

// Refactor the methods to use arrow functions
export const get: ApiClientRead = async (...args) => await client.get(...args);

export const httpDelete: ApiClientRead = async (...args) =>
  await client.delete(...args);

export const post: ApiClientWrite = async (...args) =>
  await client.post(...args);

export const put: ApiClientWrite = async (...args) => await client.put(...args);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
});
