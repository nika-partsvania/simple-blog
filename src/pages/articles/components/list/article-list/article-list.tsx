import Article from "@/pages/articles/components/list/article/article";
import classes from "./article-list.module.css";
import ArticleInfo from "@/pages/articles/components/list/article-info/article-info";
import ArticleTitle from "@/pages/articles/components/list/article-title/article-title";
import ArticleDescription from "@/pages/articles/components/list/article-description/article-description";
import { FormEvent, MouseEvent, useReducer } from "react";
import { Link } from "react-router-dom";
import ArticleCreateForm from "@/pages/articles/components/list/article-create-form/article-create-form";
import { articlesInitialState } from "@/pages/articles/components/list/article-list/reducer/state";
import { articlesReducer } from "@/pages/articles/components/list/article-list/reducer/reducer";

const ArticleList: React.FC = () => {
  const [articlesList, dispatch] = useReducer(
    articlesReducer,
    articlesInitialState
  );

  const handleArticleUpvote = (id: string) => {
    return () => {
      dispatch({
        type: "upvote",
        payload: {
          id,
        },
      });
    };
  };

  const handleArticlesSortByLikes = (sortType: "asc" | "desc") => {
    dispatch({ type: "sort", payload: { sortType } });
  };

  const handleCreateArticle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const articleFields: any = {};
    const formData = new FormData(e.currentTarget);

    for (const [key, value] of formData) {
      articleFields[key] = value;
    }

    dispatch({ type: "create", payload: { articleFields } });
  };

  const handleArticleDelete = (e: MouseEvent, id: string) => {
    e.preventDefault();

    dispatch({ type: "delete", payload: { id } });
  };

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
        <ArticleCreateForm onArticleCreate={handleCreateArticle} />
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
