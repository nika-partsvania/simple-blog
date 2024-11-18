import axios, { CreateAxiosDefaults } from "axios";

const axiosConfig: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_BASE_URL,
  // withCredentials: true,
};

export const httpClient = axios.create(axiosConfig);

httpClient.interceptors.request.use((req) => {
  const accessToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.MW-----yKxaFL3B3mJinypUdkCQIPTuHIR63Wj73azgHaQ";

  req.headers.Authorization = accessToken;

  console.log("ეს არის Request-ის გასვლის წერტილი");

  console.log(req);

  return req;
});

httpClient.interceptors.response.use((res) => {
  return res;
});

// APP -> Request -> Interceptor -> Backend -> Response -> APP

// APP -> Request -> Backend -> Response -> Interceptor -> APP
