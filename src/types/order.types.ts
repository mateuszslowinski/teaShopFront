import {ProductTypes} from "./product.types";
import {DeliveryType} from "./cart.types";

export type OrderType = {
    orderProduct: ProductTypes
    deliveryAddress: DeliveryType
    price: number
}
export type orderItemsType = {
    "name": string,
    "price": number,
    "quantity": number,
    "image": string,
    "_id":string
}

export type userType ={
    "_id": string,
    "username": string,
    "email": string
}

export interface OrderTypeResponse {
    _id: string
    user: userType
    orderItems: orderItemsType[]
    shippingAddress: DeliveryType
    price: number
    createdAt: string
    updatedAt: string
}
