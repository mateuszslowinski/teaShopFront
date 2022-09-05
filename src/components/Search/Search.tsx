import React, { useState} from 'react';
import {SingleProductCard} from "../Products/SingleProductCard/SingleProductCard";
import {LoadingSpinner} from "../../Commons/LoadingSpinner/LoadingSpinner";
import {ProductTypes} from "../../types/product.types";
import {SearchContainer, SearchMessage} from "./Search.styles";
import {Pagination} from "../../Commons/Pagination/Pagination";
import {ProductsSectionContainer} from "../Products/Products.styles";

interface Props {
    products: ProductTypes[],
    term: string,
    loading: boolean,
    error: string | undefined,
}

export const Search = ({products, term, loading, error}: Props) => {
    const [pageNumber, setPageNumber] = useState<number>(0);
    const productsPerPage = 3;
    const pagesVisited = pageNumber * productsPerPage;
    const pageCount = Math.ceil(products.length / productsPerPage)

    const changePage = ({selected}: { selected: number }): void => {
        setPageNumber(selected);
    };

    if (products.length === 0) return <SearchMessage>Brak wyników wyszukiwania!</SearchMessage>
    return (
        <SearchContainer>
            <h2>Wyniki wyszukiwania dla {term}:</h2>
            {loading
                ? <LoadingSpinner/>
                : error
                    ? <p>Error: {error}</p>
                    : (
                        <>
                            <ProductsSectionContainer>
                                {
                                    products.slice(pagesVisited, pagesVisited + productsPerPage).map((product: ProductTypes) => (
                                        <SingleProductCard key={product._id} product={product}/>))
                                }
                            </ProductsSectionContainer>
                            <Pagination pageCount={pageCount} onChange={changePage}/>
                        </>
                    )
            }
        </SearchContainer>
    )
}