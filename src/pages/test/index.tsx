import { Button } from "@/components/common/button";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import qs from "qs";
import { useSearchParams } from "react-router-dom";

type CountriesListFilterValues = {
  name: string;
  capital: string;
  population: string;
  food: string[];
};

const CountriesListFilterFormDefaultValues = {
  name: "",
  capital: "",
  population: "",
  food: [],
};

const TestView = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const parsedQueryParams = {
    ...CountriesListFilterFormDefaultValues,
    ...qs.parse(searchParams.toString()),
  };

  console.log(parsedQueryParams);

  const { control, handleSubmit } = useForm<CountriesListFilterValues>({
    defaultValues: parsedQueryParams,
  });

  const onSubmit = (formValues: CountriesListFilterValues) => {
    setSearchParams(
      qs.stringify(formValues, {
        skipNulls: true,
        filter: (_, value) => {
          return value || undefined;
        },
      }),
    );
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <div className="flex w-96 flex-col items-center justify-center gap-y-4">
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => {
            return (
              <Input onChange={onChange} value={value} placeholder="Name" />
            );
          }}
        />
        <Controller
          control={control}
          name="capital"
          render={({ field: { onChange, value } }) => {
            return (
              <Input onChange={onChange} value={value} placeholder="Capital" />
            );
          }}
        />
        <Controller
          control={control}
          name="population"
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                onChange={onChange}
                value={value}
                placeholder="Population"
              />
            );
          }}
        />
        <Controller
          control={control}
          name="food.0"
          render={({ field: { onChange, value } }) => {
            return (
              <Input onChange={onChange} value={value} placeholder="Food 1" />
            );
          }}
        />
        <Controller
          control={control}
          name="food.1"
          render={({ field: { onChange, value } }) => {
            return (
              <Input onChange={onChange} value={value} placeholder="Food 2" />
            );
          }}
        />
        <Button onClick={handleSubmit(onSubmit)}>Filter</Button>
      </div>
    </div>
  );
};

export default TestView;

// import { setAuthorizationHeader } from "@/api";
// import { updateCountry } from "@/api/countries";
// import { Button } from "@/components/common/button";
// import { fakeLogin } from "@/pages/test/utils/fake-login";

// const TestView = () => {
//   const handleLogin = () => {
//     fakeLogin().then((res: any) => {
//       console.log(res);
//       localStorage.setItem("accessToken", res.accessToken);

//       setAuthorizationHeader(res.accessToken);
//     });
//   };

//   const handleCreateCounty = () => {
//     updateCountry({ id: 1, payload: {} });
//   };

//   return (
//     <div className="flex flex-col items-center justify-center gap-6">
//       <Button onClick={handleLogin}>Login</Button>
//       <Button onClick={handleCreateCounty}>Update Country</Button>
//     </div>
//   );
// };

// export default TestView;
