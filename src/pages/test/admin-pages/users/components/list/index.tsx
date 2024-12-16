import { Button, Table } from "antd";
import React from "react";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Column } = Table;

type User = {
  email: string;
  createdAt: string;
  phone: string;
  lastSignIn: string;
  id: string | number;
};

const UsersList: React.FC<{
  users: User[];
}> = ({ users }) => {
  const navigate = useNavigate();

  const handleNavigateToUserEdit = (id: string | number) => {
    navigate(`/ka/admin/test/update/${id}`);
  };

  return (
    <Table
      title={() => (
        <Button type="primary" icon={<PlusOutlined />}>
          Create User
        </Button>
      )}
      bordered
      dataSource={users}
    >
      <Column<User> title="Email" dataIndex="email" />
      <Column<User> title="Created At" dataIndex="createdAt" />
      <Column<User> title="Phone" dataIndex="phone" />
      <Column<User> title="Last Sign In" dataIndex="lastSignIn" />
      <Column<User>
        title="Actions"
        render={(_, row) => {
          return (
            <EditOutlined
              className="cursor-pointer text-xl text-amber-500"
              onClick={() => {
                handleNavigateToUserEdit(row?.id);
              }}
            />
          );
        }}
      />
    </Table>
  );
};

export default UsersList;
