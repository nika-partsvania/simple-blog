import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/default";
import NotFoundPage from "./pages/404";
import TestView from "@/pages/test";
import SingleCountryView from "@/pages/test/single-test";
import LoginView from "@/pages/auth/view/login";
import { supabase } from "@/supabase";
import { useSetAtom } from "jotai";
import { userAtom } from "@/store/auth";
import { FormProvider, useForm } from "react-hook-form";
import RegisterView from "@/pages/auth/view/register";
import AuthLayout from "@/layouts/auth";

function App() {
  const formMethods = useForm();

  // const [, setUser] = useSetAtom(userAtom);
  const setUser = useSetAtom(userAtom);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
    });

    return () => subscription.unsubscribe();
  }, [setUser]);

  return (
    <Routes>
      <Route path="/:lang">
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginView />} />
          <Route path="register" element={<RegisterView />} />
        </Route>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route
            path="test"
            element={
              <FormProvider {...formMethods}>
                <TestView />
              </FormProvider>
            }
          />
          <Route path="test/:id" element={<SingleCountryView />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
