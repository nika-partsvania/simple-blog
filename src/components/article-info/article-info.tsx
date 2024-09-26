import classes from "./article-info.module.css";

export const ArticleInfo: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <div className={classes.root}>{children}</div>;
};
