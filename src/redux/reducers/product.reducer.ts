import {
    Action,
    ProductConstantsAction
} from "../constatns/product.constants";
import {ProductTypes} from "../../types/product.types";

interface ProductListState {
    products: ProductTypes[] | [],
    loading: boolean
    error: string
}

const initialState: ProductListState = {
    products: [],
    loading: true,
    error: ''
}



export const productListReducer = (state: ProductListState = initialState, action: Action) => {
    switch (action.type) {
        case ProductConstantsAction.PRODUCT_LIST_REQUEST:
            return {
                loading: true,
                products: [],
                error: ''
            };
        case ProductConstantsAction.PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload,
                error: ''
            };
        case ProductConstantsAction.PRODUCT_LIST_FAIL:
            return {
                loading: false,
                products: [],
                error: action.payload
            };
        default:
            return state;
    }
};