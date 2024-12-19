import { useEffect } from "react";
import { supabase } from "@/supabase";
import { useSetAtom } from "jotai";
import { userAtom } from "@/store/auth";
import AppRoutes from "@/routes";

function App() {
  const setUser = useSetAtom(userAtom);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        supabase.auth.signInWithPassword({
          email: "nika.partsvania22@gmail.com",
          password: "Randompassword12#",
        });
      }
      setUser(session);
    });

    return () => subscription.unsubscribe();
  }, [setUser]);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
