import { api } from "../../utils/axios";
import {CartConstantsAction, CartConstantsActionType} from "../constatns/cart.constants";
import {SingleProductCartTypes} from "../../types/product.types";


interface DispatchInterfaceForAddToCart {
    type: CartConstantsActionType
    payload: SingleProductCartTypes
}

type addForCartType = (id: string, quantity:number) => (dispatch: (arg: DispatchInterfaceForAddToCart) => DispatchInterfaceForAddToCart) => Promise<any>

export const addToCart:addForCartType = (id, quantity) => async dispatch => {
    const {data} = await api.get(`/products/${id}`);
    dispatch({
        type: CartConstantsAction.CART_ADD_ITEM,
        payload: {
            _id: data._id,
            name: data.name,
            image:data.image,
            category:data.category,
            price:data.price,
            countInStock:data.countInStock,
            quantity,},
    });
}


interface DispatchInterfaceForRemoveFormCart {
    type: CartConstantsActionType
    payload: string
}

type removeForCartType = (id: string) => (dispatch: (arg: DispatchInterfaceForRemoveFormCart) => DispatchInterfaceForRemoveFormCart) => Promise<void>

export const removeFromCart:removeForCartType = (id:string) => async dispatch => {
    dispatch({
        type: CartConstantsAction.CART_REMOVE_ITEM,
        payload:id,
    });
}
