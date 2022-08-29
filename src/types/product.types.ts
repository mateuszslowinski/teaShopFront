export type ProductTypes = {
    _id: string
    name: string,
    image: string,
    category: string,
    description: string,
    reviews: ReviewProductType[],
    rating: number,
    numReviews: number,
    price: number,
    countInStock: number
    createdAt: Date,
    updatedAt: Date,
}
export type ProductResponseType = {
    product: ProductTypes,
    loading: boolean,
    error: string
}

export type SingleProductCartTypes = {
    _id: string
    name: string,
    image: string,
    category: string,
    price: number,
    quantity: number,
    countInStock: number
}

export type ReviewProductType = {
    _id: string,
    username: string,
    rating: number,
    comment: string,
    user: string,
    createdAt: Date,
    updatedAt: Date
}