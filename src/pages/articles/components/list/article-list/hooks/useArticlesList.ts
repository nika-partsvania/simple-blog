import { articlesReducer } from "@/pages/articles/components/list/article-list/reducer/reducer";
import { articlesInitialState } from "@/pages/articles/components/list/article-list/reducer/state";
import { MouseEvent, useReducer, useState } from "react";

export const useArticlesList = () => {
  const [formValidationErrorMsg, setFormValidationErrorMsg] = useState("");
  const [articlesList, dispatch] = useReducer(
    articlesReducer,
    articlesInitialState,
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

  const handleCreateArticle = (articleFields: {
    title: string;
    description: string;
  }) => {
    if (articleFields.title.length > 8) {
      setFormValidationErrorMsg(
        "სათაური უნდა შეიცავდეს 8-ზე ნაკლებ სიმბოლოს !",
      );
    }

    dispatch({ type: "create", payload: { articleFields } });
  };

  const handleArticleDelete = (e: MouseEvent, id: string) => {
    e.preventDefault();

    dispatch({ type: "delete", payload: { id } });
  };

  return {
    articlesList,
    formValidationErrorMsg,
    handleArticleUpvote,
    handleArticlesSortByLikes,
    handleCreateArticle,
    handleArticleDelete,
  };
};
