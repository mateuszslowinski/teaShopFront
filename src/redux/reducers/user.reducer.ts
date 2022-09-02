import {
    ActionsForLoginUser, ActionsForUserDetails, ActionsForUserUpdateProfile, UserDetailsConstantsAction,
    UserLoginConstantsAction, UserUpdateProfileConstantsAction,
} from "../constatns/user.constants";
import {
    UpdateProfileResponse,
    UserDetailsResponse,
    UserLoginResponse
} from "../../types/user.type";

//LOGIN
interface UserLoginState {
    userInfo: UserLoginResponse | null,
    loading: boolean
    error?: string
}
const userFromLocalStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo') || '')
    : null;

const initialStateForUserLogin: UserLoginState = {
    userInfo: userFromLocalStorage,
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
            };
        case USER_LOGIN_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload
            };
        case USER_LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
};

//USER DETAILS
interface UserDetailsState {
    user: UserDetailsResponse | {},
    loading: boolean
    error?: string
}

const initialStateForDetailsUser: UserDetailsState = {
    user: {},
    loading: true,
}

export const userDetailsReducer = (
    state: UserDetailsState = initialStateForDetailsUser,
    action: ActionsForUserDetails
) => {
    switch (action.type) {
        case UserDetailsConstantsAction.USER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case UserDetailsConstantsAction.USER_DETAILS_SUCCESS:
            return {
                loading: false,
                user: action.payload
            };
        case UserDetailsConstantsAction.USER_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case UserDetailsConstantsAction.USER_DETAILS_RESET:
            return {
                user: {}
            };
        default:
            return state
    }
};

//UPDATED PROFILE
interface UpdateUserProfileState {
    userInfo: UpdateProfileResponse | {},
    loading: boolean
    error?: string
}

const initialStateForUpdatedProfilesUser: UpdateUserProfileState = {
    userInfo: {},
    loading: true,
}

export const updateUserProfileReducer = (
    state: UpdateUserProfileState = initialStateForUpdatedProfilesUser,
    action: ActionsForUserUpdateProfile
) => {
    switch (action.type) {
        case UserUpdateProfileConstantsAction.USER_UPDATE_PROFILE_REQUEST:
            return {
                loading: true
            };
        case UserUpdateProfileConstantsAction.USER_UPDATE_PROFILE_SUCCESS:
            return {
                loading: false,
                success: true,
                userInfo: action.payload
            };
        case UserUpdateProfileConstantsAction.USER_UPDATE_PROFILE_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state
    }
};