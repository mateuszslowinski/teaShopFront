import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getListProducts} from "../../redux/actions/product.actions";
import {RootState} from "../../redux/store";
import {useParams} from "react-router-dom";
import {SingleProductCard} from "../Products/SingleProductCard/SingleProductCard";
import {LoadingSpinner} from "../../Commons/LoadingSpinner/LoadingSpinner";
import {ProductTypes} from "../../types/product.types";
import {SearchContainer, SearchMessage} from "./Search.styles";


export const Search = () => {
    const dispatch = useDispatch();
    const {term} = useParams();
    const [filterProducts, setFilterProducts] = useState<ProductTypes[]>([]);
    const {loading, error, products} = useSelector((store: RootState) => store.productList)

    const search = () => {
        // @ts-ignore
        dispatch(getListProducts())
        const newProducts = (products.filter(product => product.name.includes(term as string)))
            setFilterProducts(newProducts)
    }

    useEffect(() => {
        search();
    }, [term])

    if (filterProducts.length === 0) return <SearchMessage>Brak wyników wyszukiwania!</SearchMessage>
    return (
        <SearchContainer>
            <h2>Wyniki wyszukiwania dla {term}:</h2>
            {loading
                ? <LoadingSpinner/>
                : error
                    ? <p>Error: {error}</p>
                    : (
                        filterProducts.map((product: ProductTypes) => (
                            <SingleProductCard key={product.name} product={product}/>))
                    )
            }
        </SearchContainer>
    )
}