import classes from "./header.module.css";

export const Header: React.FC = () => {
  return (
    <header className={classes.root}>
      <h1>Simple blog</h1>
    </header>
  );
};
