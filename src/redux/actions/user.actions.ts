import axios from "axios";
import {UserConstantsAction, UserConstantsType} from "../constatns/user.constants";


//LOGIN
interface DispatchInterfaceForLoginUser {
    type: UserConstantsType
    payload?: null
}
type loginType = (email: string, password: string) => (dispatch: (arg: DispatchInterfaceForLoginUser) => DispatchInterfaceForLoginUser) => Promise<void>

export const login: loginType = (email, password) => async (dispatch) => {
    try {
        dispatch({type: UserConstantsAction.USER_LOGIN_REQUEST});

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const {data} = await axios.post('http://localhost:3001/api/users/login', {email, password}, config);
        dispatch({type: UserConstantsAction.USER_LOGIN_SUCCESS, payload: data})

    } catch (e: any) {
        dispatch({
            type: UserConstantsAction.USER_LOGIN_FAIL,
            payload: e.response && e.response.data.message
                ? e.response.data.message
                : e.message
        })
    }
}

//LOGOUT
interface DispatchInterfaceForLogoutUser {
    type: UserConstantsType
}
type logoutType =  ()=> (dispatch: (arg: DispatchInterfaceForLogoutUser) => DispatchInterfaceForLogoutUser) => void

export const logout:logoutType = () => (dispatch) => {
    dispatch({type: UserConstantsAction.USER_LOGOUT});
}