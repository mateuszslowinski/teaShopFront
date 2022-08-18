import React from 'react'
import StarRatings from "react-star-ratings";
import {Button} from '../../../Commons/Button/Button';
import img from '../../../assets/tea-bag-1324303.jpg'
import {ImgProduct, NavLinkCon, ProductCardContainer, RatingRowContainer} from "./SingleProductCard.styles";
import {appColors} from "../../../constants/appColoros";
import {ProductTypes} from "../../../types/product.types";


interface Props {
    product: ProductTypes
}

export const ProductCard = ({product}: Props) => {
    const {name, category, rating, numReviews, _id, price} = product

    return (
        <ProductCardContainer>
            <ImgProduct src={img} alt="product"/>
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
               {numReviews === 0 ? <p>0 ocen</p> : <p>oceny</p>}
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
