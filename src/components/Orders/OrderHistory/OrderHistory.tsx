import React, {useEffect, useState} from "react";
import {Button} from "../../../Commons/Button/Button";
import {OrderContainer, OrderHistoryContainer} from "./OrderHistory.styles";
import {api} from "../../../utils/axios";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {LoadingSpinner} from "../../../Commons/LoadingSpinner/LoadingSpinner";
import {OrderTypeResponse} from "../../../types/order.types";
import {NavLink} from "react-router-dom";
import moment from "moment";
import 'moment/locale/pl'

moment.locale('pl')

export const OrderHistory = () => {
    const [orders, setOrders] = useState<OrderTypeResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const {userInfo: {token}} = useSelector((store: RootState) => store.userLogin);
    const {userInfo} = useSelector((state: RootState) => state.userLogin);
    const {_id} = userInfo;

    useEffect(() => {
        (async () => {
            const res = await api.get(`/orders/user/${_id}`,{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token} `,
                },
            });
            setOrders(res.data);
            setLoading(false)
        })()
    }, [])

    if (loading) return <LoadingSpinner/>
    return (
        <OrderHistoryContainer>
            <h3>Historia twoich zamówień:</h3>
            {orders.length === 0 ? <h4>Brak dotychczas zamówień</h4> : (
                orders.map((order) => (
                    <OrderContainer key={order._id}>
                        <div>
                            <span>Numer zamówienia:</span>
                            <p>{order._id}</p>
                        </div>
                        <div>
                            <span>Data zamówienia:</span>
                            <p> {moment(order.createdAt).format('LL')}</p>
                        </div>
                        <div>
                            <span>Wartość zamówienia:</span>
                            <p>{order.price} PLN</p>
                        </div>
                        <NavLink to={`/konto/zamowienia/${order._id}`}><Button text='szczegóły'/></NavLink>
                    </OrderContainer>
                ))
            )}
        </OrderHistoryContainer>
    )
}