import {UserDetailsResponse, UserLoginResponse} from "../../types/user.type";

//LOGIN
export enum UserLoginConstantsAction {
    USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST",
    USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS",
    USER_LOGIN_FAIL = "USER_LOGIN_FAIL",
    USER_LOGOUT = "USER_LOGOUT",
}

export type UserLoginConstantsType =
    UserLoginConstantsAction.USER_LOGIN_REQUEST
    | UserLoginConstantsAction.USER_LOGIN_SUCCESS
    | UserLoginConstantsAction.USER_LOGIN_FAIL
    | UserLoginConstantsAction.USER_LOGOUT


interface UserLoginRequest {
    type: UserLoginConstantsAction.USER_LOGIN_REQUEST;
    loading: boolean;
    error: string
}

interface UserLoginSuccess {
    type: UserLoginConstantsAction.USER_LOGIN_SUCCESS;
    loading: boolean;
    payload: UserLoginResponse;
    error: string
}

interface UserLoginFail {
    type: UserLoginConstantsAction.USER_LOGIN_FAIL;
    loading: boolean;
    payload: string;
    error: string
}

interface UserLogout {
    type: UserLoginConstantsAction.USER_LOGOUT;
    loading: boolean;
    payload: string;
    error: string
}

export type ActionsForLoginUser = UserLoginRequest | UserLoginSuccess | UserLoginFail | UserLogout;


//DETAILS
export enum UserDetailsConstantsAction {
    USER_DETAILS_REQUEST = "USER_DETAILS_REQUEST",
    USER_DETAILS_SUCCESS = "USER_DETAILS_SUCCESS",
    USER_DETAILS_FAIL = "USER_DETAILS_FAIL",
    USER_DETAILS_RESET = "USER_DETAILS_RESET",
}
export type UserDetailsConstantsType =
    UserDetailsConstantsAction.USER_DETAILS_REQUEST
    | UserDetailsConstantsAction.USER_DETAILS_SUCCESS
    | UserDetailsConstantsAction.USER_DETAILS_FAIL
    | UserDetailsConstantsAction.USER_DETAILS_RESET



interface UserDetailsRequest {
    type: UserDetailsConstantsAction.USER_DETAILS_REQUEST;
    loading: boolean;
    error: string
}

interface UserDetailsSuccess {
    type: UserDetailsConstantsAction.USER_DETAILS_SUCCESS;
    loading: boolean;
    payload: UserDetailsResponse;
    error: string
}

interface UserDetailsFail {
    type: UserDetailsConstantsAction.USER_DETAILS_FAIL;
    loading: boolean;
    payload: string;
    error: string
}

interface UserDetailsReset {
    type: UserDetailsConstantsAction.USER_DETAILS_RESET;
    loading: boolean;
    payload: string;
    error: string
}

export type ActionsForUserDetails = UserDetailsRequest | UserDetailsSuccess | UserDetailsFail | UserDetailsReset;


