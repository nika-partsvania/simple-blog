import { getCountries, updateCountry } from "@/api/countries";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const TestView = () => {
  const {
    data: countriesList,
    isLoading: areCountriesLoading,
    isError: areCountriesErrored,
    refetch: refetchCountries,
  } = useQuery({
    queryKey: ["countries-list"],
    queryFn: getCountries,
    gcTime: 1000 * 5,
    staleTime: 1000 * 5,
    retry: 0,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {}, []);

  const { mutate } = useMutation({ mutationFn: updateCountry });

  return (
    <div style={{ margin: 48, fontSize: 48 }}>
      <button
        onClick={() => {
          mutate(
            { id: 1, payload: { visited: true } },
            {
              onSuccess: () => {
                refetchCountries();
              },
            },
          );
        }}
      >
        Update Italy
      </button>
      {areCountriesLoading ? "Loading ...." : null}
      {areCountriesErrored ? "Error" : null}
      {countriesList?.map((country: any) => {
        return (
          <div>
            {country.name} - {country.visited ? " Visited" : " Not Visited"}
          </div>
        );
      })}
    </div>
  );
};

export default TestView;
