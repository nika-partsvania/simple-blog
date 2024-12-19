import UsersList from "@/pages/test/admin-pages/users/components/list";
import {
  mapUsersListForAdminTable,
  mapUsersListForDropdown,
} from "@/pages/test/api/admin/utils";
import { useGetUsersListInAdmin } from "@/react-query/query/admin/users";
import { Select } from "antd";

const UsersListView = () => {
  const { data: users } = useGetUsersListInAdmin({
    queryOptions: { select: mapUsersListForAdminTable },
  });

  const { data: usersForDropdown } = useGetUsersListInAdmin({
    queryOptions: { select: mapUsersListForDropdown },
  });

  return (
    <>
      <div className="w-full">
        <Select className="w-full" options={usersForDropdown} />
      </div>
      <UsersList users={users || []} />
    </>
  );
};

export default UsersListView;
