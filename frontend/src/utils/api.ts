import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:${import.meta.env.PORT}/api`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Include cookies if using session-based auth
});

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
