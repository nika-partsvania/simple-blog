import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DefaultLayout from "./layouts/default";
import AboutView from "./pages/about/views/about";
import NotFoundPage from "./pages/404";
import ContactInformationView from "@/pages/contact/views/contact";
import SingleArticleView from "@/pages/articles/views/single";
import CountriesListView from "@/pages/test";
import SingleCountryView from "@/pages/test/single-test";
import LoginView from "@/pages/auth/view/login";
import { supabase } from "@/supabase";
import AuthGuard from "@/components/route-guards/auth";
import { useSetAtom } from "jotai";
import { userAtom } from "@/store/auth";
import ProfileView from "@/pages/account/view/profile";

const ArticlesListView = lazy(() => import("./pages/articles/views/list"));

function App() {
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
      <Route path="/:lang" element={<DefaultLayout />}>
        <Route
          path="articles"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ArticlesListView />
            </Suspense>
          }
        />
        <Route path="articles/:id" element={<SingleArticleView />} />
        <Route
          path="about"
          element={
            <AuthGuard>
              <AboutView />
            </AuthGuard>
          }
        />
        <Route path="contact" element={<ContactInformationView />} />
        <Route path="login" element={<LoginView />} />
        <Route path="profile" element={<ProfileView />} />
        <Route path="test" element={<CountriesListView />} />
        <Route path="test/:id" element={<SingleCountryView />} />
      </Route>
      <Route path="/" element={<Navigate to="/ka/articles" />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
