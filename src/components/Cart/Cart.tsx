import React from "react";
import {CartContainer, DetailsProduct, DetailsProductContainer, ImgProduct, Order} from "./Cart.styles";
import {Button} from "../../Commons/Button/Button";
import img from '../../assets/tea-bag-1324303.jpg'


export const Cart = () => {
    return (
        <CartContainer>
            <DetailsProductContainer>
                <h3>Koszyk (1 art.)</h3>
                <div>
                    <p>wyslyka</p>
                    <p>7.90 PLN</p>
                </div>
                <DetailsProduct>
                    <div>
                        <ImgProduct
                            src={img}
                            alt="product"/>
                        <span>
                        <p>Nazwa produktu</p>
                        <p>herbata zielona</p>
                        </span>
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                    <div>
                        <Button text='Usuń'/>
                        <p>120.22 PLN</p>
                    </div>
                </DetailsProduct>


            </DetailsProductContainer>
            <Order>
                <h3>Do zapłaty</h3>
                <div>
                    <span>Wartość produtków:</span>
                    <p>23.45 PLN</p>
                </div>
                <div>
                    <span>Przysyłka: </span>
                    <p>6.70 PLN</p>
                </div>
                <div>
                    <h4>Wartość do zapłaty: </h4>
                    <p>67.99 PLN</p>
                </div>
                <Button text='Przejdź do kasy'/>
            </Order>
        </CartContainer>
    )
}