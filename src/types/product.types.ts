
export interface ProductInterface{
    _id:string
    name: string,
    image: string,
    category: string,
    description: string,
    reviews: {},
    rating: number,
    numReviews: number,
    price: number,
    countInStock: number
}

export type ProductTypes = {
    _id:string
    name: string,
    image: string,
    category: string,
    description: string,
    reviews: {},
    rating: number,
    numReviews: number,
    price: number,
    countInStock: number
}