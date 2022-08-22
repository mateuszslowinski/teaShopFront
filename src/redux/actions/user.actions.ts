import axios from "axios";
import {UserLoginConstantsAction, UserLoginConstantsType} from "../constatns/user.constants";

const {USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,USER_LOGOUT} = UserLoginConstantsAction

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

        const {data} = await axios.post('http://localhost:3001/api/users/login', {email, password}, config);
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
    type: UserLoginConstantsType
}
type logoutType =  ()=> (dispatch: (arg: DispatchInterfaceForLogoutUser) => DispatchInterfaceForLogoutUser) => void

export const logout:logoutType = () => (dispatch) => {
    dispatch({type: USER_LOGOUT});
}