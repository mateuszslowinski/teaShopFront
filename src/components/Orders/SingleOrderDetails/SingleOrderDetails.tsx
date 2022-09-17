import React, {useEffect, useState} from 'react'
import {useParams} from "react-router";
import {api} from "../../../utils/axios";
import {OrderTypeResponse} from "../../../types/order.types";
import {LoadingSpinner} from "../../../Commons/LoadingSpinner/LoadingSpinner";
import {
    DeliveryContainer,
    InformationContainer,
    ProductsContainer,
    SingleOrderContainer, SingleProductContainer
} from "./SingleOrderDetails.styles";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";


export const SingleOrderDetails = () => {
    const [order, setOrder] = useState<OrderTypeResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const {userInfo: {token}} = useSelector((store: RootState) => store.userLogin);

    const {id} = useParams()

    useEffect(() => {

        (async () => {
            const res = await api.get(`/orders/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token} `,
                },
            });
            setOrder(res.data)
            setLoading(false)
        })()

    }, [])

    if (loading) return <LoadingSpinner/>
    return (
        <>
            {order && (
                <SingleOrderContainer>
                    <ProductsContainer>
                        <h3>Zamówione produkty:</h3>
                        {order.orderItems.map(item => (
                            <SingleProductContainer key={item._id}>
                                <img  src={`/images/${item.image}`} alt={item.name}/>
                                <div>
                                    <span>Nazwa produktu:</span>
                                    <p>{item.name}</p>
                                </div>
                                <div>
                                    <span>Ilość:</span>
                                    <p>{item.quantity}</p>
                                </div>
                                <div>
                                    <span>Cena:</span>
                                    <p>{item.price} PLN</p>
                                </div>
                            </SingleProductContainer>
                        ))}
                    </ProductsContainer>
                    <InformationContainer>
                        <div>
                            <span>Nazwa użytkownika:  <p>{order.user.username}</p></span>
                            <span>Email:<p>{order.user.email}</p></span>
                        </div>
                        <DeliveryContainer>
                            <h3>Adres wysyłki:</h3>
                            <span>Imię i nazwisko:<p>{order.shippingAddress.name}</p></span>
                            <span>Ulica: <p>{order.shippingAddress.street}</p></span>
                            <span>Numer budynku: <p>{order.shippingAddress.buildingNumber}</p></span>
                            <span>Kod pocztowy: <p>{order.shippingAddress.zipCode}</p></span>
                            <span>Miasto: <p>{order.shippingAddress.city}</p></span>
                        </DeliveryContainer>
                        <div>
                            <span>Wartość zamówienia:</span>
                            <p>{order.price} PLN</p>
                        </div>
                    </InformationContainer>
                </SingleOrderContainer>
            )
            }
        </>
    )
}