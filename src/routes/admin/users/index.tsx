import { ADMIN_PATHS } from "@/routes/admin/index.enum";
import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";

const UsersListView = lazy(
  () => import("@/pages/test/admin-pages/users/views/list"),
);

const UsersCreateView = lazy(
  () => import("@/pages/test/admin-pages/users/views/create"),
);

const UsersUpdateView = lazy(
  () => import("@/pages/test/admin-pages/users/views/update"),
);

export const USERS_ROUTES = [
  <Route
    path={ADMIN_PATHS.USERS_LIST}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <UsersListView />
      </Suspense>
    }
  />,
  <Route
    path={ADMIN_PATHS.USERS_CREATE}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <UsersCreateView />
      </Suspense>
    }
  />,
  <Route
    path={ADMIN_PATHS.USERS_UPDATE + "/:id"}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <UsersUpdateView />
      </Suspense>
    }
  />,
];
