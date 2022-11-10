// @ts-nocheck
import React, {useEffect} from "react";
import {CartContainer, DetailsProduct, DetailsProductContainer, ImgProduct, Order} from "./Cart.styles";
import {Btn} from "../../Commons/Btn/Btn";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart} from "../../redux/actions/cart.actions";
import {RootState} from "../../redux/store";
import {NavLink} from "react-router-dom";
import {DeliveryTypeResponse} from "../../types/cart.types";
import {Message} from "../../Commons/Message/Message";

export const DELIVER_PRICE = 7.99;

export const Cart = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    const quantity = window.location.search ? Number(window.location.search.split('=')[1]) : 1
    const {cartItems}: DeliveryTypeResponse = useSelector((store: RootState) => store.cart)


    const totalProductPrice = cartItems.reduce((prev, curr) => prev + curr.quantity * curr.price, 0).toFixed(2);
    const totalPrice = (Number(totalProductPrice) + DELIVER_PRICE).toFixed(2);


    const removeItemFromBasket = (id: string) => {
        dispatch(removeFromCart(id))
    }

    useEffect(() => {
        if (id) {
            dispatch(addToCart(id, quantity))
        }
    }, [dispatch, id, quantity])

    return (
        <CartContainer>
            {cartItems.length === 0 ? <Message text='Brak produktów w koszyku'/>
                : (
                    <>
                        <DetailsProductContainer>
                            <h3>Koszyk ({cartItems.length} artykuły)</h3>
                            <div>
                                <p>wyslyka</p>
                                <p>{DELIVER_PRICE} PLN</p>
                            </div>
                            {cartItems.map(product => (
                                <DetailsProduct key={product._id}>
                                    <div>
                                        <ImgProduct
                                            src={`/images/${product.image}`}
                                            alt={product.name}/>
                                        <span>
                                       <p>{product.name}</p>
                                         <p>{product.category}</p>
                                         </span>
                                        <select value={product.quantity}
                                                onChange={(e) => dispatch(addToCart(product._id, Number(e.target.value)))}>
                                            {Array.from({length: product.countInStock}, (_, i) => i + 1).map((count: number) => (
                                                <option
                                                    key={count}
                                                    value={count}>
                                                    {count}
                                                </option>)
                                            )}
                                        </select>
                                    </div>
                                    <div>
                                        <Btn text='Usuń' onClick={() => removeItemFromBasket(product._id)}/>
                                        <p>{(product.quantity * product.price).toFixed(2)} PLN</p>
                                    </div>
                                </DetailsProduct>
                            ))}
                        </DetailsProductContainer>
                        <Order>
                            <h3>Do zapłaty</h3>
                            <div>
                                <span>Wartość produtków:</span>
                                <p>{totalProductPrice} PLN</p>
                            </div>
                            <div>
                                <span>Przysyłka: </span>
                                <p>{DELIVER_PRICE} PLN</p>
                            </div>
                            <div>
                                <h4>Wartość do zapłaty: </h4>
                                <p>{totalPrice} PLN</p>
                            </div>
                            <NavLink to='/adres'><Btn text='Przejdź do kasy'/></NavLink>
                            <NavLink to='/produkty'><Btn text="Wróc do zakupów"/></NavLink>
                        </Order>
                    </>
                )}
            )
        </CartContainer>
    )
}