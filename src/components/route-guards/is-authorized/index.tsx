import { useGetMe } from "@/react-query/query/auth";

import { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";

const IsAuthorizedGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const { data: user } = useGetMe({ accessToken: "", isEnabled: false });

  if (user) {
    return <Navigate to="/ka/dashboard/test" />;
  }

  return children || <Outlet />;
};

export default IsAuthorizedGuard;
