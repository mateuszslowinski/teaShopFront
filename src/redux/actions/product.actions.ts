import axios from "axios";
import {ProductConstantsAction, ProductConstantsActionType} from "../constatns/product.constants";

interface DispatchInter {
    type:ProductConstantsActionType
    payload?:any
}

export const getListProducts = () => async (dispatch: (arg:DispatchInter) => (DispatchInter)) => {
    try {
        dispatch({type: ProductConstantsAction.PRODUCT_LIST_REQUEST});

        const {data} = await axios.get('http://localhost:3001/api/products');
        dispatch({type: ProductConstantsAction.PRODUCT_LIST_SUCCESS, payload: data});
    } catch (e: any) {
        dispatch({
            type: ProductConstantsAction.PRODUCT_LIST_FAIL,
            payload: e.response && e.response.data.message
                ? e.response.data.message
                : e.message
        })
    }
}