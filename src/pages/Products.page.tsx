import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {getListProducts} from "../redux/actions/product.actions";
import {Products} from "../components/Products/Products";


export const ProductsPage = () => {
    const {loading, error, products} = useSelector((store: RootState) => store.productList);

    const dispatch = useDispatch()
    useEffect(() => {
        // @ts-ignore
        dispatch(getListProducts())
    }, [dispatch]);

    return (
        <Products products={products} loading={loading} error={error}/>
    )
}