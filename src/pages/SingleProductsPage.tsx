import React, {useEffect} from 'react';
import {SingleProducts} from "../components/SingleProducts/SingleProducts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {useParams} from "react-router";
import { getOneProduct } from '../redux/actions/product.actions';


export const SingleProductsPage = () => {
    const {loading, error, product} = useSelector((store: RootState) => store.productDetails)
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        // @ts-ignore
        dispatch(getOneProduct(id))
    }, [dispatch, id])

    return (
          <SingleProducts product={product} error={error} loading={loading}/>
    )
}