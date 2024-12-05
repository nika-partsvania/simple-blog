import { SignInPayload } from "@/api/auth/index.types";
import { Button } from "@/components/common/button";
import { Input } from "@/components/ui/input";
import { queryClient } from "@/main";
import { SignInSchema } from "@/pages/auth/view/login/schema";
import { afterSignInSuccess } from "@/pages/auth/view/login/utils";
import { useSignIn } from "@/react-query/mutation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

type SignInFormValues = SignInPayload["payload"];

const signInFormDefaultValues: SignInFormValues = {
  email: "",
  password: "",
};

const LoginView = () => {
  const location = useLocation();

  const toNavigate =
    location?.state?.from?.pathname + location?.state?.from?.search ||
    "/ka/dashboard/test";

  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<SignInFormValues>({
    defaultValues: signInFormDefaultValues,
    resolver: zodResolver(SignInSchema),
  });

  const { mutate: handleSignIn } = useSignIn();

  const onSubmit = (signInPayload: SignInFormValues) => {
    handleSignIn(
      { payload: signInPayload },
      {
        onSuccess: (res) => {
          afterSignInSuccess({
            accessToken: res.accessToken,
            refreshToken: res.refreshToken,
          });

          navigate(toNavigate);

          queryClient.invalidateQueries({ queryKey: ["me"] });
        },
      },
    );
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <div className="flex w-96 flex-col items-center justify-center gap-y-4">
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => {
            return (
              <Input onChange={onChange} value={value} placeholder="Email" />
            );
          }}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => {
            return (
              <Input onChange={onChange} value={value} placeholder="Password" />
            );
          }}
        />

        <Button onClick={handleSubmit(onSubmit)}>Sign In</Button>
      </div>
    </div>
  );
};

export default LoginView;
