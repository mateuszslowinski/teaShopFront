import React, {useEffect, useState} from 'react';
import {Search} from "../components/Search/Search";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {ProductTypes} from "../types/product.types";
import {RootState} from "../redux/store";
import {getListProducts} from "../redux/actions/product.actions";

export const SearchPage = () => {
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

    if(!term) return <div>cos tam</div>
    return (
        <Search products={filterProducts} error={error} loading={loading} term={term}/>
    )
}