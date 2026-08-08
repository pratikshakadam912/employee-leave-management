import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const storedAuth = localStorage.getItem("auth");

    if (storedAuth) {
      try {
        const auth = JSON.parse(storedAuth);

        if (auth?.token) {
          config.headers.Authorization = `Bearer ${auth.token}`;
        }
      } catch (error) {
        console.error("Invalid auth data:", error);
        localStorage.removeItem("auth");
      }
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default api;
