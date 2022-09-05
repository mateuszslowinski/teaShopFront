import {ActionForCreateOrder, OrderConstantsAction} from "../constatns/order.constants";
import {OrderType} from "../../types/order.types";

//CREATE ORDER
interface CreateOrderState {
    order:   OrderType | null,
    loading: boolean
    error?: string
}

const initialStateForCreateOrder: CreateOrderState = {
    order: null,
    loading: true,
}

export const createOrderReducer = (
    state: CreateOrderState = initialStateForCreateOrder,
    action:ActionForCreateOrder
) => {
    switch (action.type) {
        case OrderConstantsAction.ORDER_CREATE_REQUEST:
            return {
                loading: true
            };
        case OrderConstantsAction.ORDER_CREATE_SUCCESS:
            return {
                loading: false,
                success:true,
                order: action.payload
            };
        case OrderConstantsAction.ORDER_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case OrderConstantsAction.ORDER_RESET:
            return {};
        default:
            return state
    }
};
