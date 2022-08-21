import {SingleProductCartTypes} from "../../types/product.types";

export enum CartConstantsAction {
    CART_ADD_ITEM = "CART_ADD_ITEM",
    CART_REMOVE_ITEM = "CART-REMOVE_ITEM",
}

export type CartConstantsActionType =
    CartConstantsAction.CART_REMOVE_ITEM
    | CartConstantsAction.CART_ADD_ITEM


interface addToCart {
    type: CartConstantsAction.CART_ADD_ITEM
    payload: SingleProductCartTypes
}

interface removeFromCart {
    type: CartConstantsAction.CART_REMOVE_ITEM,
    payload: {}
}

export type ActionForCarts = addToCart | removeFromCart