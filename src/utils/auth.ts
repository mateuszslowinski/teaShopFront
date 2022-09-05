import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import { UserLoginResponse} from "../types/user.type";

export const useAdminAuth = (): boolean => {
    const {userInfo}:UserLoginResponse = useSelector((store: RootState) => store.userLogin)
    return !userInfo ? false : userInfo.isAdmin;
};

export const useUserAuth = (): boolean => {
    const {userInfo} = useSelector((store: RootState) => store.userLogin)
    return userInfo;
}