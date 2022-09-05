import {RootState} from "../store";
import {OrderActionsType, OrderConstantsAction} from "../constatns/order.constants";
import {api} from "../../utils/axios";
import {OrderType} from "../../types/order.types";
import {CartConstantsAction} from "../constatns/cart.constants";


//ORDER DETAILS
interface DispatchInterfaceForCreateOrder {
    type: OrderActionsType | CartConstantsAction
    payload?: string
}

type createOrderType = (order: OrderType) => (dispatch: (arg: DispatchInterfaceForCreateOrder) => DispatchInterfaceForCreateOrder, getState: () => RootState) => Promise<void>

export const createOrder: createOrderType = (order) => async (dispatch, getState) => {
    try {
        dispatch({type: OrderConstantsAction.ORDER_CREATE_REQUEST});
        const {userLogin: {userInfo: {token}}} = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const {data} = await api.post(`/orders`, order, config);

        dispatch({type: OrderConstantsAction.ORDER_CREATE_SUCCESS, payload: data})
        dispatch({type: CartConstantsAction.CART_CLEAR, payload:data})

    } catch (e: any) {
        dispatch({
            type: OrderConstantsAction.ORDER_CREATE_FAIL,
            payload: e.response && e.response.data.message
                ? e.response.data.message
                : e.message
        })
    }
}
