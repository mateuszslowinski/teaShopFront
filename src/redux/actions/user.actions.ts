import {api} from "../../utils/axios";
import {RootState} from "../store";
import {
    UserDetailsConstantsAction,
    UserDetailsConstantsType,
    UserLoginConstantsAction,
    UserLoginConstantsType, UserUpdateProfileConstantsAction, UserUpdateProfileConstantsType,
} from "../constatns/user.constants";
import {UpdateProfileType, UserDetailsType, UserLoginDetailsType,} from "../../types/user.type";

const {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT} = UserLoginConstantsAction

//LOGIN
interface DispatchInterfaceForLoginUser {
    type: UserLoginConstantsType
    payload?: UserLoginDetailsType | string
}

type loginType = (email: string, password: string) => (dispatch: (arg: DispatchInterfaceForLoginUser) => DispatchInterfaceForLoginUser) => Promise<void>

export const login: loginType = (email, password) => async (dispatch) => {
    try {
        dispatch({type: USER_LOGIN_REQUEST});

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const {data} = await api.post('/users/login', {email, password}, config);
        dispatch({type: USER_LOGIN_SUCCESS, payload: data})

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (e: any) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: e.response && e.response.data.message
                ? e.response.data.message
                : e.message
        })
    }
}

//LOGOUT
interface DispatchInterfaceForLogoutUser {
    type: UserLoginConstantsType | UserDetailsConstantsType
}

type logoutType = () => (dispatch: (arg: DispatchInterfaceForLogoutUser) => DispatchInterfaceForLogoutUser) => void

export const logout: logoutType = () => (dispatch) => {
    dispatch({type: USER_LOGOUT});
    dispatch({type: UserDetailsConstantsAction.USER_DETAILS_RESET})
}

//USER DETAILS
interface DispatchInterfaceForUserDetails {
    type: UserDetailsConstantsType
    payload?: UserDetailsType | string
}

type getUserDetailsType = (id: string) => (dispatch: (arg: DispatchInterfaceForUserDetails) => DispatchInterfaceForUserDetails, getState: ()=> RootState) => Promise<void>

export const getUserDetails: getUserDetailsType = () => async (dispatch, getState) => {
    try {
        dispatch({type: UserDetailsConstantsAction.USER_DETAILS_REQUEST});
        const {userLogin: {userInfo: {token}}} = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const {data} = await api.get(`/users/profile`, config);

        dispatch({type: UserDetailsConstantsAction.USER_DETAILS_SUCCESS, payload: data})

    } catch (e: any) {
        dispatch({
            type: UserDetailsConstantsAction.USER_DETAILS_FAIL,
            payload: e.response && e.response.data.message
                ? e.response.data.message
                : e.message
        })
    }
}


//UPDATE PROFILE
interface DispatchUpdateUserProfile {
    type: UserUpdateProfileConstantsType | UserLoginConstantsType
    payload?: UpdateProfileType | string
}

type UpdateUserProfileType = (user: UpdateProfileType) => (dispatch: (arg: DispatchUpdateUserProfile) => DispatchUpdateUserProfile, getState: ()=> RootState) => Promise<void>

export const updateUserProfile: UpdateUserProfileType = (user) => async (dispatch, getState) => {

    try {
        dispatch({type: UserUpdateProfileConstantsAction.USER_UPDATE_PROFILE_REQUEST});
        const {userLogin: {userInfo: {token}}} = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token} `,
            },
        };

        const {data} = await api.put(`/users/profile/${user.id}`, user, config)

        dispatch({type: UserUpdateProfileConstantsAction.USER_UPDATE_PROFILE_SUCCESS, payload: data})
        dispatch({type: UserLoginConstantsAction.USER_LOGIN_SUCCESS, payload: data})

    } catch (e: any) {
        dispatch({
            type: UserUpdateProfileConstantsAction.USER_UPDATE_PROFILE_FAIL,
            payload: e.response && e.response.data.message
                ? e.response.data.message
                : e.message
        })
    }

}
