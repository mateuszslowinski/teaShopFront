import React from 'react'
import StarRatings from "react-star-ratings";
import {Button} from '../../../Commons/Button/Button';
import {appColors} from "../../../constants/appColoros";
import {ProductTypes} from "../../../types/product.types";
import {ImgProduct, NavLinkCon, ProductCardContainer, RatingRowContainer} from "./SingleProductCard.styles";

interface Props {
    product: ProductTypes
}

export const SingleProductCard = ({product}: Props) => {
    const {name, category, rating, numReviews, _id, price, image} = product

    return (
        <ProductCardContainer>
            <ImgProduct src={`/images/${image}`} alt={name}/>
            <h2>{name}</h2>
            <NavLinkCon to={`/kategoria/${category}`}>{category}</NavLinkCon>
            <RatingRowContainer>
                <StarRatings
                    rating={rating}
                    starRatedColor={appColors.electricRed}
                    starEmptyColor={appColors.pageBackgroundColor}
                    starDimension="15px"
                    numberOfStars={5}
                    name="rating"
                />
                <span>
               {numReviews === 0 ? <p>0 ocen</p> : <p>{numReviews} ocen</p>}
            </span>
            </RatingRowContainer>
            <div>
                {price}
                <p>PLN</p>
                <NavLinkCon to={`/produkty/${_id}`}><Button text="szczegóły"/></NavLinkCon>
            </div>
        </ProductCardContainer>
    )
}
