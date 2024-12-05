import Loader from "@/components/loader/loader";
import { useAuthContext } from "@/context/auth/hooks/useAuthContext";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const { isMeLoading, isRefreshLoading } = useAuthContext();

  return <>{isMeLoading || isRefreshLoading ? <Loader /> : <Outlet />}</>;
};

export default RootLayout;
