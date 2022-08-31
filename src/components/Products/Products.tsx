import React from 'react'
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {SingleProductCard} from './SingleProductCard/SingleProductCard';
import {ProductTypes} from "../../types/product.types";
import {ProductsSectionContainer} from './Products.styles';
import {LoadingSpinner} from "../../Commons/LoadingSpinner/LoadingSpinner";


export const Products = () => {
    const {loading, error, products} = useSelector((store: RootState) => store.productList)


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