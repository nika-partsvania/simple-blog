type ArticlesReducerInitialState = {
  imageSrc: string;
  title: string;
  description: string;
  id: string;
  vote: number;
}[];

type ArticlesReducerAction = {
  type: "upvote" | "sort" | "create" | "delete";
  payload: any;
};

const handleUpvoteArticle = (articlesList: any, id: any) => {
  return articlesList.map((article: any) => {
    if (article.id === id) {
      return { ...article, vote: article.vote + 1 };
    }

    return { ...article };
  });
};

export const articlesReducer = (
  articlesList: ArticlesReducerInitialState,
  action: ArticlesReducerAction,
) => {
  if (action.type === "upvote") {
    return handleUpvoteArticle(articlesList, action.payload.id);
  }

  if (action.type === "sort") {
    return [...articlesList].sort((a, b) => {
      return action.payload.sortType === "asc"
        ? a.vote - b.vote
        : b.vote - a.vote;
    });
  }

  if (action.type === "create") {
    const updatedArticlesList = [
      ...articlesList,
      {
        ...action.payload.articleFields,
        imageSrc: "https://via.placeholder.com/300",
        vote: 0,
        id: (Number(articlesList.at(-1)?.id) + 1).toString(),
      },
    ];

    return updatedArticlesList;
  }

  if (action.type === "delete") {
    const filteredArticlesList = articlesList.filter((article) => {
      return article.id !== action.payload.id;
    });

    return filteredArticlesList;
  }

  return articlesList;
};
