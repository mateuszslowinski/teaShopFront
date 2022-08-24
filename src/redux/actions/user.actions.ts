import {api} from "../../utils/axios";
import {
    UserDetailsConstantsAction,
    UserDetailsConstantsType,
    UserLoginConstantsAction,
    UserLoginConstantsType,
} from "../constatns/user.constants";

const {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT} = UserLoginConstantsAction

//LOGIN
interface DispatchInterfaceForLoginUser {
    type: UserLoginConstantsType
    payload?: null
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
    payload?: null
}

type getUserDetailsType = (id: string) => (dispatch: (arg: DispatchInterfaceForUserDetails,getState:any) => DispatchInterfaceForUserDetails) => Promise<void>

// @ts-ignore
export const getUserDetails: getUserDetailsType = (id) => async (dispatch,getState) => {
    try {
        dispatch({type: UserDetailsConstantsAction.USER_DETAILS_REQUEST});
        const {userLogin: {user}} = getState()

        console.log(user, 'dane')

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };

        const {data} = await api.get(`/users/profile/${id}`, config);

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


