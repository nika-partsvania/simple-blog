import { supabase } from "@/supabase";

export const register = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return supabase.auth.signUp({ email, password });
};

export const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return supabase.auth.signInWithPassword({ email, password }).then((res) => {
    if (res?.error) {
      throw res?.error;
    }

    return res;
  });
};

export const logout = () => {
  return supabase.auth.signOut();
};
