import { updateUserInAdmin } from "@/pages/test/api/admin";
import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useNavigate, useParams } from "react-router-dom";

const { Item } = Form;

type InitialValues = { email: string; phone: string };

const UsersCreateUpdateForm: React.FC<{
  // submitCallbackFn: any,
  initialValues?: InitialValues;
}> = ({ initialValues }) => {
  const { id } = useParams();
  const [form] = useForm<InitialValues>();
  const navigate = useNavigate();

  const handleSubmit = (values: { email: string; phone: string }) => {
    updateUserInAdmin(id as string, values);

    navigate("/ka/admin/test");
  };

  return (
    <Form<InitialValues>
      initialValues={initialValues}
      form={form}
      onFinish={handleSubmit}
      style={{ maxWidth: 600 }}
    >
      <Item label="Phone Number" name="phone" rules={[{ required: true }]}>
        <Input placeholder="Enter Phone Number" />
      </Item>

      <Item label="Email" name="email" rules={[{ required: true }]}>
        <Input placeholder="Enter Email" />
      </Item>

      <Item label=" ">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Item>
    </Form>
  );
};

export default UsersCreateUpdateForm;
