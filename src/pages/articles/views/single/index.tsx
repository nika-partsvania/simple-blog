import SingleArticle from "@/pages/articles/components/single";
// import { useParams } from "react-router-dom";

const SingleArticleView = () => {
  // const { id } = useParams();

  // const articleInfo = articlesList.find((article) => article.id == id);

  // const articleDoesntExist = !articleInfo;

  // if (articleDoesntExist) {
  //   return <div>Article Not Found</div>;
  // }

  return (
    <>
      <SingleArticle />
    </>
  );
};

export default SingleArticleView;
