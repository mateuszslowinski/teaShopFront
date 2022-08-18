import React, { useState } from 'react'
import { ProductTypes } from '../../types/product.types';
import {DetailsContainer, ImgProduct, ProductDetailsContainer, RowDetails, StockDetails} from "./SingleProducts.styles";
import img from '../../assets/tea-bag-1324303.jpg'
import { useNavigate, useParams } from 'react-router';
import { Button } from '../../Commons/Button/Button';

interface Props {
    product: ProductTypes
    error: string
    loading: boolean
}


export const SingleProducts =  ({product, error, loading}: Props) => {

    const [quantity, setQuantity] = useState<number>(1);
    const navigate = useNavigate()
    const {id} = useParams()

    const handleAddProduct = () => {
        console.log('klik')
        navigate(`/koszyk/${id}?qty=${quantity}`)
    };


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
                                        <select>
                                            {Array.from({length: product.countInStock}, (_, i) => i + 1).map((count: number) => (
                                                <option
                                                    key={count}
                                                    value={count}>
                                                    {count}
                                                </option>)
                                            )}
                                        </select>
                                        <Button text="dodaj do koszyka" onClick={handleAddProduct}/>
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