import axios, { AxiosError, AxiosInstance } from "axios";
import { store } from "../../store";
import { API_URL } from "../api-constants";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use(
  config => {
    const token = store.getState().auth?.user?.token;

    if (token) {
      config.headers.Accept = "application/json";
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      config.headers.Accept = "application/json";
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

//This allows you to intercept the response and check the status and error messages and if ncessary reject the promise.
axiosInstance.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    if (error.response && error.response.data) {
      return Promise.reject(error);
    }

    return error;
  },
);

export default axiosInstance;
