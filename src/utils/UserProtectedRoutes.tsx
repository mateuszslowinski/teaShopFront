import {Outlet} from "react-router-dom";
import {useUserAuth} from "./auth";
import {LoginPage} from "../pages/Login.page";

export const UserProtectedRoutes = () => {
    const isAuth = useUserAuth();
    return isAuth ? <Outlet /> : <LoginPage />;
};