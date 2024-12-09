import axios, { CreateAxiosDefaults } from "axios";

const axiosConfig: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_BASE_URL,
  // withCredentials: true,
};

export const httpClient = axios.create(axiosConfig);

export const setAuthorizationHeader = (accessToken: string) => {
  httpClient.defaults.headers["Authorization"] = accessToken;
};

// APP -> Request -> Interceptor -> Backend -> Response -> APP

// APP -> Request -> Backend -> Response -> Interceptor -> APP

// CORS -

// www.raghaca.com
// www.sxvaraghaca.com/api - ბექმა უნდა დაამატოს whitelist - www.raghaca.com / *
