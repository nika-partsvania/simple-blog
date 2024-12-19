import IsAuthorizedGuard from "@/components/route-guards/is-authorized";
import IsUnauthorizedGuard from "@/components/route-guards/is-unauthorized";
import AdminLayout from "@/layouts/admin-layout";
import AuthLayout from "@/layouts/auth";
import DashboardLayout from "@/layouts/default";
import RootLayout from "@/layouts/root";
import NotFoundPage from "@/pages/404";
import LoginView from "@/pages/auth/view/login";
import RegisterView from "@/pages/auth/view/register";
import SingleCountryView from "@/pages/test/single-test";
import { ADMIN_ROUTES } from "@/routes/admin";
import { ADMIN_PATHS } from "@/routes/admin/index.enum";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/:lang">
          <Route
            path="auth"
            element={
              <IsAuthorizedGuard>
                <AuthLayout />
              </IsAuthorizedGuard>
            }
          >
            <Route path="login" element={<LoginView />} />
            <Route path="register" element={<RegisterView />} />
          </Route>

          <Route path={ADMIN_PATHS.ADMIN} element={<AdminLayout />}>
            {ADMIN_ROUTES}
          </Route>

          <Route
            path="dashboard"
            element={
              <IsUnauthorizedGuard>
                <DashboardLayout />
              </IsUnauthorizedGuard>
            }
          >
            <Route path="contact" element={<div>Contact View</div>} />
            <Route path="test/:id" element={<SingleCountryView />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
