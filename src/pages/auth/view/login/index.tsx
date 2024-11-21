import { login } from "@/supabase/auth";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginView = () => {
  const navigate = useNavigate();
  const [loginPayload, setLoginPayload] = useState({
    email: "",
    password: "",
  });

  const { mutate: handleLogin } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: () => {
      navigate("/ka/articles");
    },
  });

  const handleSubmit = () => {
    const isEmailFilled = !!loginPayload.email;
    const isPasswordFilled = !!loginPayload.password;

    if (isEmailFilled && isPasswordFilled) {
      handleLogin(loginPayload);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <label>Email</label>
      <input
        className="border border-black"
        name="email"
        value={loginPayload.email}
        onChange={(e) => {
          setLoginPayload({
            email: e.target.value,
            password: loginPayload.password,
          });
        }}
      />
      <label>Password</label>
      <input
        type="password"
        className="border border-black"
        name="password"
        value={loginPayload.password}
        onChange={(e) => {
          setLoginPayload({
            email: loginPayload.email,
            password: e.target.value,
          });
        }}
      />

      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
};

export default LoginView;
