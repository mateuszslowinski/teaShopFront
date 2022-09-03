import {ProductTypes} from "./product.types";
import {DeliveryType} from "./cart.types";

export type OrderType = {
    orderProduct:ProductTypes
    deliveryAddress:DeliveryType
    price:number
}

