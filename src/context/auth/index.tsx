import Loader from "@/components/loader/loader";
import { useHttpInterceptor } from "@/hooks/useHttpInterceptor";
import { useGetMe } from "@/react-query/query/auth";
import { createContext, PropsWithChildren } from "react";

type AuthContextType = any;

export const AuthContext = createContext<AuthContextType>(null);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const accessToken = localStorage.getItem("accessToken");

  const { isRefreshLoading } = useHttpInterceptor();
  const { data: user, isFetching: isMeLoading } = useGetMe({
    isEnabled: !!accessToken,
    accessToken,
  });

  console.log(user);

  return (
    <AuthContext.Provider value={{ user }}>
      {isMeLoading || isRefreshLoading ? <Loader /> : children}
    </AuthContext.Provider>
  );
};
