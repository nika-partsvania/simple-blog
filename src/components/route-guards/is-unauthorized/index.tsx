import { useGetMe } from "@/react-query/query/auth";

import { PropsWithChildren } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const IsUnauthorizedGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const { data: user } = useGetMe({ accessToken: "", isEnabled: false });

  if (!user) {
    return <Navigate state={{ from: location }} to="/ka/auth/login" />;
  }

  return children || <Outlet />;
};

export default IsUnauthorizedGuard;
