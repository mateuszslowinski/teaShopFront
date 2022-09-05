import React, {useState} from 'react';
import {SingleProductCard} from './SingleProductCard/SingleProductCard';
import {ProductTypes} from "../../types/product.types";
import {ProductsSectionContainer} from './Products.styles';
import {LoadingSpinner} from "../../Commons/LoadingSpinner/LoadingSpinner";

import {Pagination} from "../../Commons/Pagination/Pagination";
import {ColumnContainer} from "../../constants/Layouts/FlexDirection.styles";

interface Props {
    products: ProductTypes[] | [],
    error: string | undefined,
    loading: boolean
}

export const Products = ({products, error, loading}: Props) => {
    const [pageNumber, setPageNumber] = useState<number>(0);
    const productsPerPage = 2;
    const pagesVisited = pageNumber * productsPerPage;
    const pageCount = Math.ceil(products.length / productsPerPage)

    const changePage = ({selected}: { selected: number }): void => {
        setPageNumber(selected);
    };
    return (
        <ProductsSectionContainer>
            <h1>Nasze produkty:</h1>
            {loading
                ? <LoadingSpinner/>
                : error
                    ? <p>Error: {error}</p>
                    : (
                        <ColumnContainer>
                            <ProductsSectionContainer>
                                {products.slice(pagesVisited, pagesVisited + productsPerPage).map((product: ProductTypes) => (
                                    <SingleProductCard key={product._id} product={product}/>
                                ))}
                            </ProductsSectionContainer>
                            <Pagination pageCount={pageCount} onChange={changePage}/>
                        </ColumnContainer>
                    )
            }
        </ProductsSectionContainer>
    )
}