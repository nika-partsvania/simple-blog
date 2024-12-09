// import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/default";
import NotFoundPage from "./pages/404";
import TestView from "@/pages/test";
import SingleCountryView from "@/pages/test/single-test";
import LoginView from "@/pages/auth/view/login";
// import { supabase } from "@/supabase";
// import { useSetAtom } from "jotai";
// import { userAtom } from "@/store/auth";
import { FormProvider, useForm } from "react-hook-form";
import RegisterView from "@/pages/auth/view/register";
import AuthLayout from "@/layouts/auth";
import IsUnauthorizedGuard from "@/components/route-guards/is-unauthorized";
import IsAuthorizedGuard from "@/components/route-guards/is-authorized";
import RootLayout from "@/layouts/root";
import { useEffect } from "react";
import { supabase } from "@/supabase";
import { useSetAtom } from "jotai";
import { userAtom } from "@/store/auth";

function App() {
  const formMethods = useForm();

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
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/:lang">
            <Route
              path="auth"
              element={
                <IsAuthorizedGuard>
                  <AuthLayout />
                </IsAuthorizedGuard>
              }
            >
              <Route path="login" element={<LoginView />} />
              <Route path="register" element={<RegisterView />} />
            </Route>

            <Route
              path="dashboard"
              element={
                <IsUnauthorizedGuard>
                  <DashboardLayout />
                </IsUnauthorizedGuard>
              }
            >
              <Route
                path="test"
                element={
                  <FormProvider {...formMethods}>
                    <TestView />
                  </FormProvider>
                }
              />
              <Route path="contact" element={<div>Contact View</div>} />
              <Route path="test/:id" element={<SingleCountryView />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
