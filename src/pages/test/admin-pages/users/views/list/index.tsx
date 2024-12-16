import UsersList from "@/pages/test/admin-pages/users/components/list";
import { getUsersListInAdmin } from "@/pages/test/api/admin";
import { mapUsersListForAdmin } from "@/pages/test/api/admin/utils";
import { useEffect, useState } from "react";

const UsersListView = () => {
  const [users, setUsers] = useState<
    {
      email: string;
      createdAt: string;
      phone: string;
      lastSignIn: string;
      id: string;
    }[]
  >([
    {
      email: "johntsaava@gmail.com",
      createdAt: "2024-12-09T15:41:44.976105Z",
      phone: "555888999",
      lastSignIn: "2024-12-09T15:41:44.976105Z",
      id: "raghac id",
    },
  ]);

  useEffect(() => {
    getUsersListInAdmin().then((users) => {
      const mappedUsers = mapUsersListForAdmin(users);

      setUsers((prev) => {
        return [...prev, ...mappedUsers];
      });
    });
  }, []);

  return <UsersList users={users} />;
};

export default UsersListView;
