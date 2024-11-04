import { httpClient } from "@/api";

export const getCities = () => {
  return httpClient.get("/cities").then((res) => res.data);
};
