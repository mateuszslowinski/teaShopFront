
export type ProductInCartType = {
    _id: string,
    name: string,
    image: string,
    category: string,
    price: number,
    countInStock: number,
    quantity: number
}

export type DeliveryType = {
    name: string
    street: string,
    buildingNumber: string,
    zipCode: string,
    city: string,
}
export type DeliveryTypeResponse = {
    deliveryAddress: DeliveryType,
    cartItems: ProductInCartType[]
}