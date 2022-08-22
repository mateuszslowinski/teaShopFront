import {UserLoginResponse} from "../../types/user.type";

export enum UserConstantsAction {
    USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST",
    USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS",
    USER_LOGIN_FAIL = "USER_LOGIN_FAIL",
    USER_LOGOUT = "USER_LOGOUT",
}

export type UserConstantsType =
    UserConstantsAction.USER_LOGIN_REQUEST
    | UserConstantsAction.USER_LOGIN_SUCCESS
    | UserConstantsAction.USER_LOGIN_FAIL
    | UserConstantsAction.USER_LOGOUT


interface UserLoginRequest {
    type: UserConstantsAction.USER_LOGIN_REQUEST;
    loading: boolean;
    error: string
}

interface UserLoginSuccess {
    type: UserConstantsAction.USER_LOGIN_SUCCESS;
    loading: boolean;
    payload: UserLoginResponse;
    error: string
}

interface UserLoginFail {
    type: UserConstantsAction.USER_LOGIN_FAIL;
    loading: boolean;
    payload: string;
    error: string
}

interface UserLogout{
    type: UserConstantsAction.USER_LOGOUT;
    loading: boolean;
    payload: string;
    error: string
}

export type ActionsForUser = UserLoginRequest | UserLoginSuccess | UserLoginFail | UserLogout;