import {ActionForCarts, CartConstantsAction} from "../constatns/cart.constants";
import {SingleProductCartTypes} from "../../types/product.types";
import {DeliveryType} from "../../types/cart.types";

export const cartReducer = (state: { cartItems: SingleProductCartTypes[], deliveryAddress: DeliveryType | null } = {
    cartItems: [],
    deliveryAddress: null
}, action: ActionForCarts) => {
    switch (action.type) {
        case CartConstantsAction.CART_ADD_ITEM:
            const item = action.payload
            const existItem = state.cartItems.find((x) => x._id === item._id)

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => x._id === existItem._id ? item : x),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }
        case CartConstantsAction.CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x._id !== action.payload)
            };
        case CartConstantsAction.CART_DELIVERY_ADDRESS:
            return {
                ...state,
                deliveryAddress: action.payload
            };
        case CartConstantsAction.CART_CLEAR :
            return {
                ...state,
                cartItems: [],
            }
        default:
            return state;
    }
}