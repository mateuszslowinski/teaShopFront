import React, {useEffect, useState} from 'react'
import {DetailsContainer, ImgProduct, ProductDetailsContainer, RowDetails, StockDetails} from "./SingleProducts.styles";
import {useParams} from 'react-router';
import {Button} from '../../Commons/Button/Button';
import {NavLink} from "react-router-dom";
import {LoadingSpinner} from "../../Commons/LoadingSpinner/LoadingSpinner";
import {ReviewSection} from "../Review/ReviewSection";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {getOneProduct} from "../../redux/actions/product.actions";
import {ProductResponseType} from "../../types/product.types";
import { appColors } from '../../constants/appColoros';




export const SingleProducts = () => {
    const [quantity, setQuantity] = useState<number>(1);

    const {loading, error, product}:ProductResponseType = useSelector((store: RootState) => store.productDetails)
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        // @ts-ignore
        dispatch(getOneProduct(id))
    }, [dispatch, id])


    if (product === undefined) return <p>Error.. {error}</p>
    return (
        <>
            <ProductDetailsContainer>
                {loading ? (
                    <LoadingSpinner/>
                ) : (
                    <>
                        <ImgProduct
                            src={`/images/${product.image}`}
                            alt={product.name}
                           />
                        <StockDetails>
                            <RowDetails>
                                <p>Cena:</p>
                                <span>{product.price} PLN</span>
                            </RowDetails>
                            <RowDetails>
                                <span>Status:</span>
                                {product.countInStock > 0 ? (
                                    <>
                                        <p>Dostępne</p>
                                        <span>Ilość:</span>
                                        <select value={quantity}
                                                onChange={(e) => setQuantity(Number(e.target.value))}>
                                            {Array.from({length: product.countInStock}, (_, i) => i + 1).map((count: number) => (
                                                <option
                                                    key={count}
                                                    value={count}>
                                                    {count}
                                                </option>)
                                            )}
                                        </select>
                                        <NavLink to={`/koszyk/${id}?qty=${quantity}`}><Button
                                            text="dodaj do koszyka"/></NavLink>
                                    </>
                                ) : (
                                    <p style={{backgroundColor: `${appColors.electricRed}`}}>Brak w sklepie</p>
                                )}
                            </RowDetails>
                        </StockDetails>
                        <DetailsContainer>
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>

                        </DetailsContainer>
                        <ReviewSection />
                    </>
                )}
            </ProductDetailsContainer>
        </>
    )
}