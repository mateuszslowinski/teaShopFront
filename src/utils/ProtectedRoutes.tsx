import { Outlet } from "react-router-dom";
import { useAuth } from "./auth";
import {NotAuthorized} from "../pages/NotAuthorized";

export const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <NotAuthorized />;
};
