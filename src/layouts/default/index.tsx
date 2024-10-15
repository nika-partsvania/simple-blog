import { Footer } from "../../components/base/footer/footer";
import { Header } from "../../components/base/header/header";
import { PageContainer } from "../../components/base/page-container/page-container";

import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <Footer />
    </>
  );
};

export default DefaultLayout;
