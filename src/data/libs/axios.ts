import axios from "axios";
import Cookies from "universal-cookie";
import { EnumAuth } from "@/shared/enums/auth";

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});
const cookies = new Cookies();

api.interceptors.request.use(
  (config) => {
    const token = cookies.get(EnumAuth.jwt);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
