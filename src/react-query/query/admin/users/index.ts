import { getUsersListInAdmin, User } from "@/pages/test/api/admin";
import { useUsersQueryKeys } from "@/react-query/query/admin/users/hooks/useUsersQueryKeys";
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

export const useGetUsersListInAdmin = <T>({
  queryOptions,
}: {
  queryOptions?: Omit<UseQueryOptions<User[], any, T>, "queryKey">;
} = {}): UseQueryResult<T, any> => {
  const { LIST } = useUsersQueryKeys();

  return useQuery<User[], any, T>({
    queryKey: [LIST],
    queryFn: () => getUsersListInAdmin(),
    ...queryOptions,
  });
};
