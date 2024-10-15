import classes from "./hero-section.module.css";

const HeroSection: React.FC = () => {
  return (
    <section className={classes.root}>
      <h2 className={classes.title}>Welcome to My Blog</h2>
      <p>Sharing thoughts, stories, and experiences</p>
    </section>
  );
};

export default HeroSection;
