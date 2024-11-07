import Article from "@/pages/articles/components/list/article/article";
import classes from "./article-list.module.css";
import ArticleInfo from "@/pages/articles/components/list/article-info/article-info";
import ArticleTitle from "@/pages/articles/components/list/article-title/article-title";
import ArticleDescription from "@/pages/articles/components/list/article-description/article-description";
import { Link } from "react-router-dom";
import ArticleCreateForm from "@/pages/articles/components/list/article-create-form/article-create-form";
import { useArticlesList } from "@/pages/articles/components/list/article-list/hooks/useArticlesList";

const ArticleList: React.FC = () => {
  const {
    articlesList,
    formValidationErrorMsg,
    handleArticleDelete,
    handleArticleUpvote,
    handleArticlesSortByLikes,
    handleCreateArticle,
  } = useArticlesList();

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ display: "flex", marginLeft: 48, gap: 12 }}>
          <button
            onClick={() => {
              handleArticlesSortByLikes("asc");
            }}
          >
            ASC
          </button>
          <button
            onClick={() => {
              handleArticlesSortByLikes("desc");
            }}
          >
            DESC
          </button>
        </div>
        <ArticleCreateForm
          errorMsg={formValidationErrorMsg}
          onArticleCreate={handleCreateArticle}
        />
      </div>
      <section className={classes.root}>
        {articlesList.map((article: any) => {
          return (
            <Link
              key={article.id}
              style={{
                color: "blue",
                textDecoration: "none",
                fontSize: 24,
              }}
              to={`/articles/${article.id}`}
            >
              <Article>
                <img src={article.imageSrc} alt={article.title} />
                <ArticleInfo>
                  <ArticleTitle
                    onUpVote={handleArticleUpvote(article.id)}
                    voteCount={article.vote}
                  >
                    {article.title}
                  </ArticleTitle>
                  <ArticleDescription>{article.description}</ArticleDescription>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      gap: 16,
                    }}
                  >
                    <span>More Info</span>
                    <span
                      style={{ color: "red" }}
                      onClick={(e) => {
                        handleArticleDelete(e, article.id);
                      }}
                    >
                      DELETE
                    </span>
                  </div>
                </ArticleInfo>
              </Article>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default ArticleList;
