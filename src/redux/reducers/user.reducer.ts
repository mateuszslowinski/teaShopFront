import {ActionsForUser, UserConstantsAction} from "../constatns/user.constants";
import {UserLoginResponse} from "../../types/user.type";

interface UserLoginState {
    userInfo: UserLoginResponse | null,
    loading: boolean
    error?: string
}

const initialStateForUserLogin: UserLoginState = {
    userInfo: null,
    loading: true,
}

//LOGIN
export const userLoginReducer = (
    state: UserLoginState = initialStateForUserLogin,
    action: ActionsForUser
) => {
    switch (action.type) {
        case UserConstantsAction.USER_LOGIN_REQUEST:
            return {
                loading: true
            }
        case UserConstantsAction.USER_LOGIN_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }
        case UserConstantsAction.USER_LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case UserConstantsAction.USER_LOGOUT:
            return {}

        default:
            return state
    }
};
