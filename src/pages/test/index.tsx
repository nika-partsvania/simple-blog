import Card from "@/pages/test/card";

const TestView = () => {
  // const handleToggleTheme = () => {
  //   const html = document.querySelector("html");
  //   html?.classList.toggle("dark");
  // };

  return (
    <>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card type="vertical" />
      <Card />
      <Card type="vertical" />
    </>
  );
};

export default TestView;
