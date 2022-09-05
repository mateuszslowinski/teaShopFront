import {SingleProductCartTypes} from "../../types/product.types";
import {DeliveryType} from "../../types/cart.types";

export enum CartConstantsAction {
    CART_ADD_ITEM = "CART_ADD_ITEM",
    CART_REMOVE_ITEM = "CART-REMOVE_ITEM",
    CART_CLEAR = "CART_CLEAR",
    CART_DELIVERY_ADDRESS = "CART_DELIVERY_ADDRESS",
}

export type CartConstantsActionType =
    CartConstantsAction.CART_REMOVE_ITEM
    | CartConstantsAction.CART_ADD_ITEM
    | CartConstantsAction.CART_DELIVERY_ADDRESS
    | CartConstantsAction.CART_CLEAR


interface addToCart {
    type: CartConstantsAction.CART_ADD_ITEM
    payload: SingleProductCartTypes
}

interface removeFromCart {
    type: CartConstantsAction.CART_REMOVE_ITEM,
    payload: {}
}

interface clearCart {
    type:CartConstantsAction.CART_CLEAR,
    payload:{}
}

interface addDeliveryAddress {
    type: CartConstantsAction.CART_DELIVERY_ADDRESS,
    payload: DeliveryType | {}
}

export type ActionForCarts = addToCart | removeFromCart | clearCart | addDeliveryAddress

