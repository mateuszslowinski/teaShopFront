import React, {useEffect, useState} from "react";
import {ProductTypes} from "../../types/product.types";
import {api} from "../../utils/axios";
import {SingleProductCard} from "../Products/SingleProductCard/SingleProductCard";
import {useParams} from "react-router-dom";
import {
    CategoryProductContainer,
    ContentContainer,
    DescriptionContainer,
    ProductsContainer
} from "./CategoryProduct.styles";
import {Pagination} from "../../Commons/Pagination/Pagination";
import {Message} from "../../Commons/Message/Message";
import {categoryProductDesc} from "../../constants/descriptions";

export const CategoryProduct = () => {
    const [products, setProducts] = useState([])
    const {name} = useParams();
    const [pageNumber, setPageNumber] = useState<number>(0);
    const productsPerPage = 8;
    const pagesVisited = pageNumber * productsPerPage;
    const pageCount = Math.ceil(products.length / productsPerPage)

    const changePage = ({selected}: { selected: number }): void => {
        setPageNumber(selected);
    };

    useEffect(() => {
        (async () => {
            const res = await api.get(`/products/category/${name}`)
            setProducts(res.data);
        })()
    }, [name])


    const productDesc = categoryProductDesc.find(desc => desc.title === name);

    return (
        <CategoryProductContainer>
            <DescriptionContainer>
                <h2>{name}</h2>
                <p>{productDesc?.text}</p>
            </DescriptionContainer>


            {products.length === 0 ? <Message text='Brak produktów'/> : (
                <ContentContainer>
                    <p>Nasze produkty z kategorii {name}</p>
                    <ProductsContainer>
                        {products.slice(pagesVisited, pagesVisited + productsPerPage).map((product: ProductTypes) => (
                            <SingleProductCard key={product._id} product={product}/>
                        ))}
                    </ProductsContainer>
                </ContentContainer>
            )}

            {products.length > 0 && <Pagination pageCount={pageCount} onChange={changePage}/>}

        </CategoryProductContainer>
    )
}