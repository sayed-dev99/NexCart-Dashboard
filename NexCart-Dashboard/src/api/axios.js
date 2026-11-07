// This file configures a shared Axios client for communicating with your backend API.


// Shared Axios client for API requests and authentication.
import axios from "axios";

// const ApiLink = "https://e-commerce-api-3wara.vercel.app/"




// API configuration
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://e-commerce-api-3wara.vercel.app",
  headers: {
    "Content-Type": "application/json",
    timeout: 1000, 
  },
  withCredentials: true,
});

// Attach the authentication token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("dashboard-token");

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Handle unauthorized responses
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("dashboard-token");

      if (!window.location.pathname.startsWith("/login")) {
        window.history.replaceState(null, "", "/login");
      }
    }

    return Promise.reject(error);
  }
);

export default api;