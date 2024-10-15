import HeroSection from "../../components/list/hero-section";

import { lazy } from "react";

const LazyArticleList = lazy(
  () => import("../../components/list/article-list/article-list")
);

const ArticlesListView = () => {
  return (
    <>
      <HeroSection />
      <LazyArticleList />
    </>
  );
};

export default ArticlesListView;
