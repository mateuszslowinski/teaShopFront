import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    DeliveryContainer,
    DetailsProduct, Message,
    OrderContainer,
    ProductsContainer,
    UserDetailsContainer
} from "./ConfirmOrder.styles";
import {RootState} from "../../../redux/store";
import {DeliveryTypeResponse} from "../../../types/cart.types";
import {Btn} from '../../../Commons/Btn/Btn';
import {DELIVER_PRICE} from "../../Cart/Cart";
import {createOrder} from "../../../redux/actions/order.actions";
import {useNavigate} from "react-router-dom";
import {OrderConstantsAction} from "../../../redux/constatns/order.constants";
import {LoadingSpinner} from "../../../Commons/LoadingSpinner/LoadingSpinner";

export const ConfirmOrder = () => {
    const dispatch = useDispatch()
    const [loading,setLoading]= useState(true)
    const [isOpen, setIsOpen] = useState(false);
    const {userInfo} = useSelector((state: RootState) => state.userLogin);
    const {success} = useSelector((state: RootState) => state.createOrder);
    const {cartItems, deliveryAddress}: DeliveryTypeResponse = useSelector((state: RootState) => state.cart);
    const navigate = useNavigate();
    const totalProductPrice = cartItems.reduce((prev, curr) => prev + curr.quantity * curr.price, 0).toFixed(2);
    const totalPrice = (Number(totalProductPrice) + DELIVER_PRICE).toFixed(2);

    useEffect(() => {
        setLoading(false)
        if (success) {
            dispatch({type: OrderConstantsAction.ORDER_RESET})
            setIsOpen(true)
            setTimeout(() => {
                setIsOpen(false)
                navigate('/produkty')
            }, 2000)
        }
    }, [dispatch, success])

    const handleOrderConfirmClick = () => {
        // @ts-ignore
        dispatch(createOrder({user: userInfo._id, cartItems, deliveryAddress, totalPrice}))
    };
    const {name, zipCode, city, street, buildingNumber} = deliveryAddress;

    return (
        <>
            {loading
                ? <LoadingSpinner/>
                : (
                    <OrderContainer>
                        {isOpen && <Message>
                            <p> Zam??wienie zosta??o zrealizowane pomy??lnie!</p>
                        </Message>}
                        <ProductsContainer>
                            {cartItems.map((product) => (
                                <DetailsProduct key={product._id}>
                                    <img  src={`/images/${product.image}`} alt={product.name}/>
                                    <span> Nazwa produktu:<p>{product.name}</p></span>
                                    <span>Ilo????:<p>{product.quantity}</p> </span>
                                    <span>Cena:<p>{product.price} PLN</p> </span>
                                </DetailsProduct>
                            ))}
                        </ProductsContainer>
                        <UserDetailsContainer>
                            <DeliveryContainer>
                                <h3>Adres do wysy??ki:</h3>
                                <span>Imi?? i nazwisko:<p>{name}</p></span>
                                <span>Ulica: <p>{street}</p></span>
                                <span>Numer budynku: <p>{buildingNumber}</p></span>
                                <span>Kod pocztowy: <p>{zipCode}</p></span>
                                <span>Miasto: <p>{city}</p></span>
                            </DeliveryContainer>
                            <div>
                                <span>Przesy??ka:</span>
                                <p>{DELIVER_PRICE} PLN</p>
                            </div>
                            <div>
                                <span>Do zap??aty:</span>
                                <p>{totalPrice}PLN</p>
                            </div>
                            <Btn text='zamawiam' onClick={handleOrderConfirmClick}/>
                        </UserDetailsContainer>
                    </OrderContainer>
            ) }
        </>
    )
}