import React, {useEffect} from "react";
import {NewProductContainer, NewProductPageContainer} from "./NewProductPage.styles";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {LoadingSpinner} from "../../Commons/LoadingSpinner/LoadingSpinner";

import {SingleProductCard} from "../../components/Products/SingleProductCard/SingleProductCard";
import {getListProducts} from "../../redux/actions/product.actions";


export const NewProductsPage = () => {
    const {loading, error, products} = useSelector((store: RootState) => store.productList);
    const dispatch = useDispatch();


    useEffect(() => {
        // @ts-ignore
        dispatch(getListProducts());
    }, [dispatch]);

    return (
        <NewProductPageContainer>
            <h2>Nowości jesień 2022</h2>
            <p>Oto nasz nowości na nadchodzącą jesień:</p>
                {loading
                    ? <LoadingSpinner/>
                    : error
                        ? <p>Error: {error}</p>
                        : <NewProductContainer>
                            {products.sort((a, b) => Number(b.createdAt) - Number(a.createdAt)).slice(0, 8).map(product => (
                                <SingleProductCard product={product}/>
                            ))}
                        </NewProductContainer>
                }

        </NewProductPageContainer>
    )
}