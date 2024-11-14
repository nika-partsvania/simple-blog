import i18n from "i18next";
import { useTranslation } from "react-i18next";

const TestView = () => {
  const { t } = useTranslation();

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <button onClick={() => handleChangeLanguage("ka")}>GEO</button>
        <button onClick={() => handleChangeLanguage("en")}>ENG</button>
        <div>{t("test-page.lang-version")}</div>
      </div>
    </>
  );
};

export default TestView;
