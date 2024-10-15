const ArticleTitle: React.FC<
  React.PropsWithChildren<{ voteCount: number; onUpVote: () => void }>
> = (props) => {
  const { children, voteCount, onUpVote } = props;

  return (
    <h2>
      {children} - {voteCount}{" "}
      <span
        style={{
          color: "green",
          cursor: "pointer",
        }}
        onClick={(e) => {
          e.preventDefault();

          onUpVote();
        }}
      >
        UP
      </span>
    </h2>
  );
};

export default ArticleTitle;
