import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/default";
import AboutView from "./pages/about/views/about";
import NotFoundPage from "./pages/404";
import { lazy, Suspense } from "react";
import ContactInformationView from "@/pages/contact/views/contact";
import SingleArticleView from "@/pages/articles/views/single";
import TestView from "@/pages/test";

const ArticlesListView = lazy(() => import("./pages/articles/views/list"));

function App() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<div>Landing</div>} />
          <Route
            path="articles"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ArticlesListView />
              </Suspense>
            }
          />
          <Route path="articles/:id" element={<SingleArticleView />} />
          <Route path="about" element={<AboutView />} />
          <Route path="contact" element={<ContactInformationView />} />
          <Route path="test" element={<TestView />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
