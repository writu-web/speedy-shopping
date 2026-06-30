import axios, { type InternalAxiosRequestConfig } from "axios";

const apiClient = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
});
apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
    return Promise.reject(error);
  },
);

export default apiClient;
