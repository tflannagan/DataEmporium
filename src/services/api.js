// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://your-api-endpoint.com/api",
  headers: {
    "Content-Type": "application/json",
    // Additional headers like Authorization can be added here
  },
});

export default api;
