import {
    ActionForDetailsProducts,
    ActionForProducts,
    ActionForReviewProducts,
    ProductConstantsAction,
    ProductDetailsConstantsAction,
    ReviewProductConstantsAction
} from "../constatns/product.constants";
import {ProductTypes} from "../../types/product.types";

interface ProductListState {
    products: ProductTypes[] | [],
    loading: boolean
    error?: string
}

const initialStateForProductsList: ProductListState = {
    products: [],
    loading: true,
}


// PRODUCT LIST
export const productListReducer = (state: ProductListState = initialStateForProductsList, action: ActionForProducts) => {
    switch (action.type) {
        case ProductConstantsAction.PRODUCT_LIST_REQUEST:
            return {
                loading: true,
                products: [],
            };
        case ProductConstantsAction.PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload,

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

// ONE PRODUCT DETAIL
interface DetailsProductState {
    product?: ProductTypes | null
    loading: boolean
    error?: string
}
const initialStateForOneProduct: DetailsProductState = {
    product:null,
    loading: true,
}
export const productDetailReducer = (state: DetailsProductState = initialStateForOneProduct, action: ActionForDetailsProducts) => {
    switch (action.type) {
        case ProductDetailsConstantsAction.PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
            };
        case ProductDetailsConstantsAction.PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload,
            };
        case ProductDetailsConstantsAction.PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                product: null,
                error: action.payload
            };
        default:
            return state;
    }
};

//PRODUCT REVIEW
interface ReviewProductInitialState {
    loading: boolean
}
const initialStateForReviewProduct: ReviewProductInitialState = {
    loading: true,
}
export const reviewProductReducer = (state: ReviewProductInitialState = initialStateForReviewProduct, action: ActionForReviewProducts ) => {
    switch (action.type) {
        case ReviewProductConstantsAction.PRODUCT_REVIEW_REQUEST:
            return {
                loading: true,
            };
        case ReviewProductConstantsAction.PRODUCT_REVIEW_SUCCESS:
            return {
                loading: false,
                success:true,
            };
        case ReviewProductConstantsAction.PRODUCT_REVIEW_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case ReviewProductConstantsAction.PRODUCT_REVIEW_RESET :
            return {}
        default:
            return state;
    }
};