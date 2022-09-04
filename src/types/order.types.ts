import {ProductTypes} from "./product.types";
import {DeliveryType} from "./cart.types";

export type OrderType = {
    orderProduct:ProductTypes
    deliveryAddress:DeliveryType
    price:number
}

export interface OrderTypeResponse extends OrderType {
    _id:string
    user:string
    createdAt:Date
    updatedAt:Date
}