import React from "react";
import StarRatings from "react-star-ratings";
import moment from "moment";
import 'moment/locale/pl'
import {ReviewProductType} from "../../../types/product.types";
import {appColors} from "../../../constants/appColoros";
import {ShowsReviewSection} from "./SingleReview.styles";

moment.locale('pl')

interface Props {
    reviews: ReviewProductType[]
}

export const SingleReview = ({reviews}: Props) => (
    <ShowsReviewSection>
        {reviews.length === 0
            ? <div>Brak ocen</div>
            : (
                reviews.map(review => (
                    <div>
                        <h5>{review.username}</h5>
                        <h6>Dodano {moment(review.createdAt).format('LL')}</h6>
                        <StarRatings
                            rating={review.rating}
                            starRatedColor={appColors.electricRed}
                            starEmptyColor={appColors.pageBackgroundColor}
                            starDimension="15px"
                            numberOfStars={5}
                            name="rating"/>
                        {review.comment && <p>{review.comment}</p>}
                    </div>
                ))
            )}
    </ShowsReviewSection>
)