import {api} from "../../utils/axios";
import {
    ProductConstantsAction,
    ProductConstantsActionType,
    ProductDetailsConstantsAction, ProductDetailsConstantsActionType, ReviewProductConstantsAction
} from "../constatns/product.constants";
import {RootState} from "../store";
import {ReviewProductType} from "../../types/product.types";

// LIST PRODUCTS
interface DispatchInterfaceForListProducts {
    type: ProductConstantsActionType
    payload?: {}
}

type getListProductType = () => (dispatch: (arg: DispatchInterfaceForListProducts) => DispatchInterfaceForListProducts) => Promise<void>

const {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL} = ProductConstantsAction

export const getListProducts: getListProductType = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST});

        const {data} = await api.get('/products');
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
    } catch (e: any) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: e.response && e.response.data.message
                ? e.response.data.message
                : e.message
        })
    }
}

// SINGLE PRODUCT
interface DispatchInterfaceForOneProduct {
    type: ProductDetailsConstantsActionType
    payload?: {}
}

type getOneProductType = (id: string) => (dispatch: (arg: DispatchInterfaceForOneProduct) => DispatchInterfaceForOneProduct) => Promise<void>

const {PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL} = ProductDetailsConstantsAction;

export const getOneProduct: getOneProductType = (id: string) => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST});

        const {data} = await api.get(`/products/${id}`);
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data});
    } catch (e: any) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: e.response && e.response.data.message
                ? e.response.data.message
                : e.message
        })
    }
}

//CREATE REVIEW PRODUCT
interface DispatchInterfaceForCreateProductReview {
    type: ReviewProductConstantsAction
    payload?: string
}

type createProductReviewType = (productId: string, review: ReviewProductType) => (dispatch: (arg: DispatchInterfaceForCreateProductReview) => DispatchInterfaceForCreateProductReview, getState: () => RootState) => Promise<void>

export const createProductReview: createProductReviewType = (productId, review) => async (dispatch, getState) => {
    try {
        dispatch({type: ReviewProductConstantsAction.PRODUCT_REVIEW_REQUEST});

        const {userLogin: {userInfo: {token}}} = getState();
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        await api.post(`/reviews/${productId}`, review, config);
        dispatch({type: ReviewProductConstantsAction.PRODUCT_REVIEW_SUCCESS});

    } catch (e: any) {
        dispatch({
            type: ReviewProductConstantsAction.PRODUCT_REVIEW_FAIL,
            payload: e.response && e.response.data.message
                ? e.response.data.message
                : e.message
        });
    }
}