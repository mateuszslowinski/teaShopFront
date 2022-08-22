import {UserLoginResponse} from "../../types/user.type";

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

interface UserLogout{
    type: UserLoginConstantsAction.USER_LOGOUT;
    loading: boolean;
    payload: string;
    error: string
}

export type ActionsForLoginUser = UserLoginRequest | UserLoginSuccess | UserLoginFail | UserLogout;

//REGISTER

export enum UserRegisterConstantsAction {
    USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST",
    USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS",
    USER_REGISTER_FAIL = "USER_REGISTER_FAIL",
}

export type UserRegisterConstantsType =
    UserRegisterConstantsAction.USER_REGISTER_REQUEST
    | UserRegisterConstantsAction.USER_REGISTER_SUCCESS
    | UserRegisterConstantsAction.USER_REGISTER_FAIL

