import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";

import {ProductTypes} from "../../types/product.types";
import {ProductsSectionContainer} from './Products.styles';
import {ProductCard} from './SingleProductCard/SingleProductCard';
import {getListProducts} from "../../redux/actions/product.actions";


export const Products = () => {


    const dispatch = useDispatch()
    const {loading, error, products} = useSelector((store: RootState) => store.productList)

    useEffect(() => {
        // @ts-ignore
        dispatch(getListProducts())
    }, [dispatch])


    return (
        <ProductsSectionContainer>
            <h1>Nasze produkty:</h1>
            {loading
                ? <p>Spinner</p>
                : error
                    ? <p>Error: {error}</p>
                    : (
                        <>
                            {products.map((product: ProductTypes) => (
                                <ProductCard key={product.name} {...product}/>
                            ))}
                        </>
                    )
            }


        </ProductsSectionContainer>
    )
}