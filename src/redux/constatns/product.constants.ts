import {ProductTypes} from "../../types/product.types";

export enum ProductConstantsAction {
    PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST",
    PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS",
    PRODUCT_LIST_FAIL = "PRODUCT_LIST_FAIL",
}

export  type ProductConstantsActionType =
    ProductConstantsAction.PRODUCT_LIST_REQUEST
    | ProductConstantsAction.PRODUCT_LIST_SUCCESS
    | ProductConstantsAction.PRODUCT_LIST_FAIL


interface ProductListRequest {
    type: ProductConstantsAction.PRODUCT_LIST_REQUEST;
    loading: boolean;
    error: string
}

interface ProductListSuccess {
    type: ProductConstantsAction.PRODUCT_LIST_SUCCESS;
    loading: boolean;
    payload: ProductTypes[];
    error: string
}

interface ProductListFail {
    type: ProductConstantsAction.PRODUCT_LIST_FAIL;
    loading: boolean;
    payload: string;
    error: string
}


export type Action = ProductListRequest | ProductListSuccess | ProductListFail