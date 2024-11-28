import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "@/pages/test/schema";
import { useTranslation } from "react-i18next";

type FormValues = {
  username: string;
  password: string;
  tag: string[];
};

const TestView = () => {
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: { username: "", password: "", tag: [] },
  });

  console.log(errors);

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex w-96 flex-col items-center justify-center gap-6">
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, value }, fieldState: { error } }) => {
            return (
              <>
                <Input
                  placeholder="Username"
                  value={value}
                  onChange={onChange}
                />
                {error?.message ? (
                  <span className="text-red-500">
                    {t(`test-page.${error.message}`)}
                  </span>
                ) : null}
              </>
            );
          }}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => {
            return (
              <Input placeholder="Password" value={value} onChange={onChange} />
            );
          }}
        />
        <Controller
          control={control}
          name="tag"
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                placeholder="Tag"
                value={value[0]}
                onChange={(e) => {
                  onChange([e.target.value]);
                }}
              />
            );
          }}
        />
        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
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
