// This file configures a shared Axios client for communicating with your backend API.

import axios from "axios";

// const ApiLink = "https://e-commerce-api-3wara.vercel.app/"

// const api = axios

export const api = axios.create({
  baseURL: "https://e-commerce-api-3wara.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("dashboard-token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");

      if (!window.location.pathname.startsWith("/login")) {
        window.history.replaceState(null, "", "/login");
      }
    }

    return Promise.reject(error);
  }
);
