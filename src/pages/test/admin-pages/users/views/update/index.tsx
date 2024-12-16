import UsersCreateUpdateForm from "@/pages/test/admin-pages/users/components/form/create-update";
import UsersCreateUpdateFormSkeleton from "@/pages/test/admin-pages/users/components/form/create-update/skeleton";
import { getSingleUserInAdmin } from "@/pages/test/api/admin";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UsersUpdateView = () => {
  const { id } = useParams();

  const [user, setUser] = useState<{ email: string; phone: string }>({
    email: "",
    phone: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSingleUserInAdmin(id as string)
      .then((res) => {
        setUser({ email: res?.email || "", phone: res?.phone || "" });
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <UsersCreateUpdateFormSkeleton />
      ) : (
        <UsersCreateUpdateForm initialValues={user} />
      )}
    </>
  );
};

export default UsersUpdateView;
