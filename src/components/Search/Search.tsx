import React, {useEffect, useState} from 'react';
import {ProductTypes} from "../../types/product.types";
import {SingleProductCard} from "../Products/SingleProductCard/SingleProductCard";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {LoadingSpinner} from "../../Commons/LoadingSpinner/LoadingSpinner";
import {getListProducts} from "../../redux/actions/product.actions";
import {SearchContainer, SearchMessage} from "./Search.styles";



export const Search = () => {
    const dispatch = useDispatch();
    const {term} = useParams();
    const [filterProducts, setFilterProducts] = useState([]);
    const {loading, error, products} = useSelector((store: RootState) => store.productList)

    const search = () => {
        // @ts-ignore
        dispatch(getListProducts())
        const newProducts = (products.filter(product => product.name.includes(term as string)));
        // @ts-ignore
        setFilterProducts(newProducts)
    }

    useEffect(() => {
        search();
    }, [term])

    if (filterProducts.length === 0) return <SearchMessage>Brak wyników wyszukiwania!</SearchMessage>
    return (
        <SearchContainer>
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
// )