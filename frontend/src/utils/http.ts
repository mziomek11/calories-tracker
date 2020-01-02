import axios, { AxiosRequestConfig } from "axios";

import { Token } from "../context/token";

function authRouteConfig(token: Token): AxiosRequestConfig {
  return {
    headers: {
      authorization: `Bearer ${token}`
    }
  };
}

export function authGet(path: string, token: Token) {
  return axios.get(path, authRouteConfig(token));
}

export function authPost(path: string, token: Token, data: any = {}) {
  return axios.post(path, data, authRouteConfig(token));
}

export function authPut(path: string, token: Token, data: any = {}) {
  return axios.put(path, data, authRouteConfig(token));
}

export function authDelete(path: string, token: Token) {
  return axios.delete(path, authRouteConfig(token));
}

export function hasValidationErrors(err: any): boolean {
  return err && err.response && err.response.data && err.response.data.errors;
}

export function hasAuthError(err: any): boolean {
  return hasValidationErrors(err) && err.response.data.errors["authorization"];
}
