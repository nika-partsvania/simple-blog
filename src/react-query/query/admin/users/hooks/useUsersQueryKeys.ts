import { useLangParam } from "@/hooks/useLangParam";
import { USERS_QUERY_KEYS } from "@/react-query/query/admin/users/enum";

export const useUsersQueryKeys = () => {
  const lang = useLangParam();

  return { LIST: lang + USERS_QUERY_KEYS.LIST };
};
