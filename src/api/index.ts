import axios, { AxiosRequestConfig } from 'axios';

import { handleError } from '@/api/error';

const isDevelopment = () => process.env.NODE_ENV === 'development';
const baseURL = isDevelopment()
  ? process.env.REACT_APP_DEV_API_BASE_URL
  : process.env.REACT_APP_PROD_API_BASE_URL;

const createAxiosInstance = () => axios.create({
  baseURL,
  timeout: 10000,
});

export interface ResponseType<T> {
  status: number;
  message?: string;
  data: T;
}

export const request = {
  axiosInstance: createAxiosInstance(),
  get: async function<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const res = await this.axiosInstance.get(url, config);

      return res.data;
    } catch (error) {
      return handleError(error);
    }
  },
  post: async function<T>(
    url: string,
    data = {},
    config?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const res = await this.axiosInstance.post(url, data, config);

      return res.data;
    } catch (error) {
      return handleError(error);
    }
  },
  put: async function<T>(
    url: string,
    data = {},
    config?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const res = await this.axiosInstance.put(url, data, config);

      return res.data;
    } catch (error) {
      return handleError(error);
    }
  },
  delete: async function<T>(
    url: string,
    data = {},
    config?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const res = await this.axiosInstance({
        method: 'delete',
        url,
        data,
        ...config,
      });

      return res.data;
    } catch (error) {
      return handleError(error);
    }
  },
  patch: async function<T>(
    url: string,
    data = {},
    config?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const res = await this.axiosInstance.patch(url, data, config);

      return res.data;
    } catch (error) {
      return handleError(error);
    }
  },
};
