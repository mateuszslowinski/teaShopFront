import React, {useEffect, useState} from "react";
import StarRatings from "react-star-ratings";
import moment from "moment";
import 'moment/locale/pl'
import {ReviewProductType} from "../../../types/product.types";
import {appColors} from "../../../constants/appColoros";
import {ShowsReviewSection} from "./SingleReview.styles";
import {Button} from "../../../Commons/Button/Button";
import {UserLoginResponse} from "../../../types/user.type";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {reviewType} from "../../../types/review.types";
import {api} from "../../../utils/axios";
import {useParams} from "react-router";
import {getOneProduct} from "../../../redux/actions/product.actions";
import {ErrorMessage} from "../../Products/AddProduct/AddProduct.styles";

moment.locale('pl')

interface Props {
    reviews: ReviewProductType[],
}

export const SingleReview = ({reviews}: Props) => {
    const {userInfo: {isAdmin}}: UserLoginResponse = useSelector((state: RootState) => state.userLogin);
    const {userInfo: {token}} = useSelector((store: RootState) => store.userLogin);
    const [errorMessage, setErrorMessage] = useState('');
    const {id} = useParams()
    const dispatch = useDispatch();

    const handleRemoveComment = async ({_id, user, rating}: reviewType) => {
        try {
            const res = await api.put(`review/${id}`, {productId: user, review_id: _id, rating}, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token} `,
                },
            })
            // @ts-ignore
            dispatch(getOneProduct(id))
        } catch (e) {
            setErrorMessage((e as Error).message)
        }
    };

    useEffect(() => {}, [dispatch]);

    return (
        <ShowsReviewSection>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            {reviews.length === 0
                ? <div>Brak ocen</div>
                : (
                    reviews.map(review => (
                        <div key={review._id}>
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
                            {isAdmin && <Button text="usuń komentarz" onClick={() => handleRemoveComment(review)}/>}
                        </div>
                    ))
                )}
        </ShowsReviewSection>
    )
}