import axios, { AxiosPromise, AxiosError } from 'axios';
import CONFIG from './config';

const request = axios.create({
  baseURL: CONFIG.BACKEND_BASE_API
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return error;
  }
);

request.interceptors.response.use(
  async (response) => {
    return response?.data;
  },
  (error) => {
    return error;
  }
);

export default request;
export type { AxiosPromise, AxiosError };
