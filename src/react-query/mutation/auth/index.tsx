import { refresh, signIn, signOut, signUp } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

export const useSignIn = () => {
  return useMutation({ mutationKey: ["sign-in"], mutationFn: signIn });
};

export const useSignUp = () => {
  return useMutation<any, any, any>({
    mutationKey: ["sign-up"],
    mutationFn: signUp,
  });
};

export const useSignOut = () => {
  return useMutation({ mutationKey: ["sign-out"], mutationFn: signOut });
};

export const useRefresh = () => {
  return useMutation({ mutationKey: ["refresh"], mutationFn: refresh });
};
