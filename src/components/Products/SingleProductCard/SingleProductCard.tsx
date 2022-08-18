import React from 'react'
import {appColors} from "../../../constants/appColoros";
import StarRatings from "react-star-ratings";
import img from '../../../assets/tea-bag-1324303.jpg'
import {ImgProduct, ProductCardContainer, RatingRowContainer} from "./SingleProductCard.styles";
import {useNavigate} from "react-router";
import {ProductTypes} from "../../../types/product.types";
import {Button} from '../../../Commons/Button/Button';

interface Props {
    product: ProductTypes
}


export const ProductCard = ({product}: Props) => {

    const {name, category, rating, numReviews, _id, price} = product
    const navigate = useNavigate();

    const handleGoToDetailsClick = () => {
        navigate(`/produkty/${_id}`)
    }

    const handleGoToCategoryPageClick = () => {
        navigate(`/kategoria/${category}`)
    };

    return (
        <ProductCardContainer>
            <ImgProduct src={img} alt="product"/>
            <h2>{name}</h2>
            <h4 onClick={handleGoToCategoryPageClick}>{category}</h4>
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
                <Button text="szczegóły" onClick={handleGoToDetailsClick}/>
            </div>
        </ProductCardContainer>
    )
}
