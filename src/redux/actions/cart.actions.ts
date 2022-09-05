import {api} from "../../utils/axios";
import {CartConstantsAction, CartConstantsActionType} from "../constatns/cart.constants";
import {SingleProductCartTypes} from "../../types/product.types";
import {DeliveryType} from "../../types/cart.types";

//ADD PRODUCT TO CART
interface DispatchInterfaceForAddToCart {
    type: CartConstantsActionType
    payload: SingleProductCartTypes
}

type addForCartType = (id: string, quantity: number) => (dispatch: (arg: DispatchInterfaceForAddToCart) => DispatchInterfaceForAddToCart) => Promise<any>

export const addToCart: addForCartType = (id, quantity) => async dispatch => {
    const {data} = await api.get(`/products/${id}`);
    dispatch({
        type: CartConstantsAction.CART_ADD_ITEM,
        payload: {
            _id: data._id,
            name: data.name,
            image: data.image,
            category: data.category,
            price: data.price,
            countInStock: data.countInStock,
            quantity,
        },
    });
}

//REMOVE PRODUCT FORM CART
interface DispatchInterfaceForRemoveFormCart {
    type: CartConstantsActionType
    payload: string
}

type removeForCartType = (id: string) => (dispatch: (arg: DispatchInterfaceForRemoveFormCart) => DispatchInterfaceForRemoveFormCart) => void

export const removeFromCart: removeForCartType = (id: string) => dispatch => {
    dispatch({
        type: CartConstantsAction.CART_REMOVE_ITEM,
        payload: id,
    });
}

// ADD DELIVERY ADDRESS
interface DispatchInterfaceForAddDelivery {
    type: CartConstantsActionType
    payload: DeliveryType
}

type addDeliveryType = (data: DeliveryType) => (dispatch: (arg: DispatchInterfaceForAddDelivery) => DispatchInterfaceForAddDelivery) => void

export const addDeliveryAddress: addDeliveryType = data => dispatch => {
    dispatch({
        type: CartConstantsAction.CART_DELIVERY_ADDRESS,
        payload: data,
    });
}