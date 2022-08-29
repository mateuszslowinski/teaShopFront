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
}

interface ProductDetailsFail {
    type: ProductDetailsConstantsAction.PRODUCT_DETAILS_FAIL;
    loading: boolean;
    payload: string;
    error: string
}

export type ActionForDetailsProducts = ProductDetailsRequest | ProductDetailsSuccess | ProductDetailsFail

// TYPES REVIEW PRODUCT
export enum ReviewProductConstantsAction {
    PRODUCT_REVIEW_REQUEST = "PRODUCT_REVIEW_REQUEST",
    PRODUCT_REVIEW_SUCCESS = "PRODUCT_REVIEW_SUCCESS",
    PRODUCT_REVIEW_FAIL = "PRODUCT_REVIEW_FAIL",
    PRODUCT_REVIEW_RESET = "PRODUCT_REVIEW_RESET",
}

export type ProductReviewConstantsActionType =
    ReviewProductConstantsAction.PRODUCT_REVIEW_REQUEST
    | ReviewProductConstantsAction.PRODUCT_REVIEW_SUCCESS
    | ReviewProductConstantsAction.PRODUCT_REVIEW_FAIL
    | ReviewProductConstantsAction.PRODUCT_REVIEW_RESET

interface ProductReviewRequest {
    type: ReviewProductConstantsAction.PRODUCT_REVIEW_REQUEST;
    loading: boolean;
}

interface ProductReviewSuccess {
    type: ReviewProductConstantsAction.PRODUCT_REVIEW_SUCCESS;
    loading: boolean;
    success: boolean;
}

interface ProductReviewFail {
    type: ReviewProductConstantsAction.PRODUCT_REVIEW_FAIL;
    loading: boolean;
    payload: string;
    error: string
}
interface ProductReviewReset {
    type:ReviewProductConstantsAction.PRODUCT_REVIEW_RESET
}

export type ActionForReviewProducts = ProductReviewRequest | ProductReviewSuccess | ProductReviewFail | ProductReviewReset