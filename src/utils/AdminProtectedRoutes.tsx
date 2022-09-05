import { Outlet } from "react-router-dom";
import { useAdminAuth } from "./auth";
import {NotAuthorized} from "../pages/NotAuthorized/NotAuthorized";

export const AdminProtectedRoutes = () => {
    const isAuth = useAdminAuth();
    return isAuth ? <Outlet /> : <NotAuthorized />;
};
