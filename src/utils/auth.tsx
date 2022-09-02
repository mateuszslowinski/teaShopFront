import {useSelector} from "react-redux";
import {RootState} from "../redux/store";

export const useAuth = (): boolean => {
    const {userInfo: {isAdmin}} = useSelector((store: RootState) => store.userLogin)
    return isAdmin;
};

