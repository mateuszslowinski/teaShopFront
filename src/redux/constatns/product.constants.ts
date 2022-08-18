import {ProductTypes} from "../../types/product.types";


// TYPES FOR LISTS OF PRODUCTS
export enum ProductConstantsAction {
    PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST",
    PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS",
    PRODUCT_LIST_FAIL = "PRODUCT_LIST_FAIL",
}

export type ProductConstantsActionType =
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

export type ActionForProducts = ProductListRequest | ProductListSuccess | ProductListFail


// TYPES FOR ONE PRODUCT

export enum ProductDetailsConstantsAction {
    PRODUCT_DETAILS_REQUEST = "PRODUCT_DETAILS_REQUEST",
    PRODUCT_DETAILS_SUCCESS = "PRODUCT_DETAILS_SUCCESS",
    PRODUCT_DETAILS_FAIL = "PRODUCT_DETAILS_FAIL",
}

export type ProductDetailsConstantsActionType =
    ProductDetailsConstantsAction.PRODUCT_DETAILS_REQUEST
    | ProductDetailsConstantsAction.PRODUCT_DETAILS_SUCCESS
    | ProductDetailsConstantsAction.PRODUCT_DETAILS_FAIL



interface ProductDetailsRequest {
    type: ProductDetailsConstantsAction.PRODUCT_DETAILS_REQUEST;
    loading: boolean;
    error: string
}

interface ProductDetailsSuccess {
    type: ProductDetailsConstantsAction.PRODUCT_DETAILS_SUCCESS;
    loading: boolean;
    payload: ProductTypes[];
    error: string
}

interface ProductDetailsFail {
    type: ProductDetailsConstantsAction.PRODUCT_DETAILS_FAIL;
    loading: boolean;
    payload: string;
    error: string
}


export type ActionForDetailsProducts = ProductDetailsRequest | ProductDetailsSuccess | ProductDetailsFail