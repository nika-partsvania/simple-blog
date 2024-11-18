import { register } from "@/supabase/auth";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const TestView = () => {
  const [registerPayload, setRegisterPayload] = useState({
    email: "",
    password: "",
  });

  const { mutate: handleRegister } = useMutation({
    mutationKey: ["register"],
    mutationFn: register,
  });

  const handleSubmit = () => {
    const isEmailFilled = !!registerPayload.email;
    const isPasswordFilled = !!registerPayload.password;

    if (isEmailFilled && isPasswordFilled) {
      handleRegister(registerPayload);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <label>Email</label>
      <input
        className="border border-black"
        name="email"
        value={registerPayload.email}
        onChange={(e) => {
          setRegisterPayload({
            email: e.target.value,
            password: registerPayload.password,
          });
        }}
      />
      <label>Password</label>
      <input
        type="password"
        className="border border-black"
        name="password"
        value={registerPayload.password}
        onChange={(e) => {
          setRegisterPayload({
            email: registerPayload.email,
            password: e.target.value,
          });
        }}
      />

      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
};

export default TestView;
