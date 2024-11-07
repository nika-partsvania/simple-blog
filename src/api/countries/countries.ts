import { httpClient } from "@/api";
import { CountriesListResponse } from "@/api/countries";

export const getCountries = () => {
  return httpClient.get<CountriesListResponse>("/countries").then((res) => {
    return res.data;
  });
};

export const getSingleCountry = (id: string) => () => {
  return httpClient.get(`/countries/${id}`).then((res) => {
    return res;
  });
};

export const updateCountry = ({ id, payload }: { id: any; payload: any }) => {
  return httpClient.patch(`/countries/${id}`, payload).then((res) => res.data);
};

export const deleteCountry = (id: string | number) => {
  return httpClient.delete(`/countries/${id}`);
};
