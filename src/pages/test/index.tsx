import { getCountries } from "@/api/countries";
import CountryItem from "@/pages/test/country";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const TestView = () => {
  const {
    data: countriesList,
    isLoading: areCountriesLoading,
    isError: areCountriesErrored,
    // refetch: refetchCountries,
  } = useQuery({
    queryKey: ["countries-list"],
    queryFn: getCountries,
    gcTime: 1000 * 5,
    staleTime: 1000 * 5,
    retry: 0,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {}, []);

  return (
    <>
      <div style={{ margin: 48, fontSize: 48 }}>
        {areCountriesLoading ? "Loading ...." : null}
        {areCountriesErrored ? "Error" : null}
        {countriesList?.map((country) => {
          return (
            <CountryItem
              key={country.id}
              id={country.id}
              countryName={country.name}
            />
          );
        })}
      </div>
    </>
  );
};

export default TestView;
