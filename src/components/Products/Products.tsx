import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {SingleProductCard} from './SingleProductCard/SingleProductCard';
import {ProductTypes} from "../../types/product.types";
import {ProductsSectionContainer} from './Products.styles';
import {LoadingSpinner} from "../../Commons/LoadingSpinner/LoadingSpinner";
import {getListProducts} from "../../redux/actions/product.actions";


export const Products = () => {
    const {loading, error, products} = useSelector((store: RootState) => store.productList)
    const dispatch = useDispatch()
    useEffect(() => {
        // @ts-ignore
        dispatch(getListProducts())
    }, [dispatch])

    return (
        <ProductsSectionContainer>
            <h1>Nasze produkty:</h1>
            {loading
                ? <LoadingSpinner/>
                : error
                    ? <p>Error: {error}</p>
                    : (
                        <>
                            {products.map((product: ProductTypes) => (
                                <SingleProductCard key={product.name} product={product}/>
                            ))}
                        </>
                    )
            }
        </ProductsSectionContainer>
    )
}