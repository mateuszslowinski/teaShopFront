export enum OrderConstantsAction {
    ORDER_CREATE_REQUEST = "ORDER_CREATE_REQUEST",
    ORDER_CREATE_SUCCESS = "ORDER_CREATE_SUCCESS",
    ORDER_CREATE_FAIL = "ORDER_CREATE_FAIL",
    ORDER_RESET = "ORDER_RESET",
}

export type OrderActionsType =
    OrderConstantsAction.ORDER_CREATE_REQUEST
    | OrderConstantsAction.ORDER_CREATE_SUCCESS
    | OrderConstantsAction.ORDER_CREATE_FAIL
    | OrderConstantsAction.ORDER_RESET


interface CreateOrderRequest {
    type: OrderConstantsAction.ORDER_CREATE_REQUEST;
    loading: boolean;
}

interface CreateOrderSuccess {
    type: OrderConstantsAction.ORDER_CREATE_SUCCESS;
    loading: boolean;
    success:boolean
    payload:[] ;
}

interface CreateOrderFail {
    type: OrderConstantsAction.ORDER_CREATE_FAIL;
    loading: boolean;
    payload: string;
    error: string
}
interface CreateOrderReset {
    type: OrderConstantsAction.ORDER_RESET;
}

export type ActionForCreateOrder= CreateOrderRequest | CreateOrderSuccess | CreateOrderFail | CreateOrderReset