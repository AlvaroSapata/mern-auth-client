import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// Indicar al FE, que en todas las llamadas al backend, deben buscar un token y pasarlo
// Añade algo a la llamada justo antes de que se procese
service.interceptors.request.use((config) => {
  const authToken = localStorage.getItem("authToken");

  if (authToken) {
    config.headers.authorization = `Bearer ${authToken}`;
  }

  return config;
});

export default service;
