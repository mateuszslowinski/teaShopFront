import React, {useState} from 'react'
import {ProductTypes} from '../../types/product.types';
import {DetailsContainer, ImgProduct, ProductDetailsContainer, RowDetails, StockDetails} from "./SingleProducts.styles";
import img from '../../assets/1.png'
import {useParams} from 'react-router';
import {Button} from '../../Commons/Button/Button';
import {NavLink} from "react-router-dom";

interface Props {
    product: ProductTypes
    error: string
    loading: boolean
}


export const SingleProducts = ({product, error, loading}: Props) => {

    const [quantity, setQuantity] = useState<number>(1);
    const {id} = useParams()

    if (product === undefined) return <p>Error.. {error}</p>
    return (
        <ProductDetailsContainer>
            {loading ? (
                <p>Wczytywanie...</p>
            ) : (
                <>
                    <ImgProduct
                        src={img}
                        alt="product"/>
                    <DetailsContainer>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <StockDetails>
                            <RowDetails>
                                <p>Cena:</p>
                                <span>{product.price} PLN</span>
                            </RowDetails>
                            <RowDetails>
                                <p>Status:</p>
                                {product.countInStock > 0 ? (
                                    <>
                                        <span>Dostępne</span>
                                        <span>Ilość:</span>
                                        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                                            {Array.from({length: product.countInStock}, (_, i) => i + 1).map((count: number) => (
                                                <option
                                                    key={count}
                                                    value={count}>
                                                    {count}
                                                </option>)
                                            )}
                                        </select>
                                        <NavLink to={`/koszyk/${id}?qty=${quantity}`}><Button text="dodaj do koszyka"/></NavLink>
                                    </>
                                ) : (
                                    <span>Brak w sklepie</span>
                                )}

                            </RowDetails>
                        </StockDetails>
                    </DetailsContainer>
                </>
            )}
        </ProductDetailsContainer>
    )
}