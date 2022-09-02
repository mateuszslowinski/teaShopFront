import React, {useEffect} from 'react';
import {EditProduct} from "../../components/Products/EditProduct/EditProduct";
import {useParams} from "react-router";
import {ProductResponseType} from "../../types/product.types";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {getOneProduct} from "../../redux/actions/product.actions";
import {LoadingSpinner} from "../../Commons/LoadingSpinner/LoadingSpinner";

export const EditProductPage = () => {
    const {loading, product}: ProductResponseType = useSelector((store: RootState) => store.productDetails)
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(getOneProduct(id))
    }, [])
    const {id} = useParams();
    return (
        <>
            {loading ? <LoadingSpinner/> : <EditProduct product={product}/>}
        </>

    )
}