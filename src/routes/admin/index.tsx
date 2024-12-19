import { TEST_ROUTES } from "@/routes/admin/test";
import { USERS_ROUTES } from "@/routes/admin/users";

export const ADMIN_ROUTES = [...TEST_ROUTES, ...USERS_ROUTES];
