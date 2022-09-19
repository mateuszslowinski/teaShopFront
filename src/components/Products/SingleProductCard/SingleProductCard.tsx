import React from 'react'
import StarRatings from "react-star-ratings";
import {Btn} from '../../../Commons/Btn/Btn';
import {appColors} from "../../../constants/appColoros";
import {ProductTypes} from "../../../types/product.types";
import {ImgProduct, ProductCardContainer} from "./SingleProductCard.styles";
import {NavLink} from "react-router-dom";

interface Props {
    product: ProductTypes
}

export const SingleProductCard = ({product}: Props) => {
    const {name, category, rating, numReviews, _id, price, image} = product

    return (
        <ProductCardContainer>
            <ImgProduct src={`/images/${image}`} alt={name}/>
            <h2>{name}</h2>
            <NavLink to={`/kategoria/${category}`}>{category}</NavLink>
            <div>
                <StarRatings
                    rating={rating}
                    starRatedColor={appColors.electricRed}
                    starEmptyColor={appColors.pageBackgroundColor}
                    starDimension="15px"
                    numberOfStars={5}
                    name="rating"
                />
                <span>
                    <p>{numReviews === 0 ? 0 : numReviews} ocen</p>
                </span>
            </div>
            <div>
                <p>{price} PLN</p>
                <NavLink to={`/produkty/${_id}`}><Btn text="szczegóły"/></NavLink>
            </div>
        </ProductCardContainer>
    )
}
