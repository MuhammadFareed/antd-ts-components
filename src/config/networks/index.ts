import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { store } from "../../store";
import { API_BASE_URL } from "../api-constants";

const request = async (
  method: string,
  endpoint: string,
  body = {},
  withAuth: boolean,
  headers?: Record<string, string>,
): Promise<AxiosResponse> => {
  const token = store.getState()?.auth?.user?.token;
  const url = `${API_BASE_URL}${endpoint}`;

  const config: AxiosRequestConfig = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (withAuth && token) {
    // @ts-ignore
    config.headers.Authorization = `Bearer ${token}`;
  }

  switch (method) {
    case "get": {
      return axios.get(url, config);
    }
    case "post": {
      return axios.post(url, body, config);
    }
    case "put": {
      return axios.put(url, body, config);
    }
    case "patch": {
      return axios.patch(url, body, config);
    }
    case "delete": {
      // @ts-ignore
      return axios.delete(url, body, config);
    }
    default: {
      return Promise.reject();
    }
  }
};

const getRequest = (endpoint: string, withAuth = true, headers?: Record<string, string>) =>
  request("get", endpoint, {}, withAuth, headers);

const postRequest = (endpoint: string, body = {}, withAuth = true, headers?: Record<string, string>) =>
  request("post", endpoint, body, withAuth, headers);

const putRequest = (endpoint: string, body = {}, withAuth = true, headers?: Record<string, string>) =>
  request("put", endpoint, body, withAuth, headers);

const patchRequest = (endpoint: string, body = {}, withAuth = true, headers?: Record<string, string>) =>
  request("patch", endpoint, body, withAuth, headers);

const deleteRequest = (endpoint: string, body = {}, withAuth = true, headers?: Record<string, string>) =>
  request("delete", endpoint, body, withAuth, headers);

export { getRequest, postRequest, putRequest, patchRequest, deleteRequest };
