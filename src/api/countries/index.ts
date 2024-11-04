import { httpClient } from "@/api";

export const getCountries = () => {
  return httpClient.get("/countries").then((res) => {
    return res.data;
  });
};

export const updateCountry = ({ id, payload }: { id: any; payload: any }) => {
  return httpClient.patch(`/countries/${id}`, payload).then((res) => res.data);
};

export const deleteCountry = (id: string | number) => {
  return httpClient.delete(`/countries/${id}`);
};
