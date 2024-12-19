import { useParams } from "react-router-dom";

export const useLangParam = () => {
  const { lang } = useParams();

  return lang || "ka";
};
