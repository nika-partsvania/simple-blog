import { SignUpPayload } from "@/api/auth/index.types";
import { Button } from "@/components/common/button";
import { Input } from "@/components/ui/input";
import { SignUpSchema } from "@/pages/auth/view/register/schema";
import { useSignUp } from "@/react-query/mutation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type SignUpFormValues = SignUpPayload["payload"];

const signUpFormDefaultValues: SignUpFormValues = {
  email: "",
  fullName: "",
  password: "",
};

const RegisterView = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    defaultValues: signUpFormDefaultValues,
    resolver: zodResolver(SignUpSchema),
  });

  const { mutate: handleSignUp } = useSignUp();

  console.log(errors);

  const onSubmit = (signUpPayload: SignUpFormValues) => {
    handleSignUp(
      { payload: signUpPayload },
      {
        onSuccess: () => {
          navigate("/ka/login");
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
        <Controller
          control={control}
          name="fullName"
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                onChange={onChange}
                value={value}
                placeholder="Full Name"
              />
            );
          }}
        />
        <Button onClick={handleSubmit(onSubmit)}>Sign Up</Button>
      </div>
    </div>
  );
};

export default RegisterView;
