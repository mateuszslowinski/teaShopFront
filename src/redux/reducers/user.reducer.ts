import {ActionsForLoginUser, UserLoginConstantsAction} from "../constatns/user.constants";
import {UserLoginResponse} from "../../types/user.type";


//LOGIN
interface UserLoginState {
    userInfo: UserLoginResponse | null,
    loading: boolean
    error?: string
}

const initialStateForUserLogin: UserLoginState = {
    userInfo: null,
    loading: true,
}
const {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT} = UserLoginConstantsAction;

export const userLoginReducer = (
    state: UserLoginState = initialStateForUserLogin,
    action: ActionsForLoginUser
) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                loading: true
            }
        case USER_LOGIN_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }
        case USER_LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case USER_LOGOUT:
            return {}

        default:
            return state
    }
};
