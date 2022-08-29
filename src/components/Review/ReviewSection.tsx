import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {createProductReview} from "../../redux/actions/product.actions";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {SingleReview} from "./SingleReview/SingleReview";
import {Button} from "../../Commons/Button/Button";
import {LoadingSpinner} from "../../Commons/LoadingSpinner/LoadingSpinner";
import {RatingSelectOptions} from "../../constants/Form/ratingSelectOptions";
import {ProductResponseType} from "../../types/product.types";
import {UserLoginResponse} from "../../types/user.type";
import {ReviewSectionContainer, WriteReviewForm} from "./ReviewSection.styles";

type ReviewForm = {
    rating: number,
    comment: string,
}

export const ReviewSection = () => {
    const {loading, product}: ProductResponseType = useSelector((store: RootState) => store.productDetails);
    const {userInfo}: UserLoginResponse = useSelector((store: RootState) => store.userLogin);

    const {reviews} = product;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState<ReviewForm>({
        rating: 1,
        comment: "",
    })

    const {
        register,
        formState: {
            errors: {comment},
        },
        handleSubmit,
    } = useForm<ReviewForm>();

    const updateForm = (key: string, value: string | number) => {
        setForm((form) => ({
            ...form,
            [key]: value,
        }))
    }

    const onSubmit = () => {
        // @ts-ignore
        dispatch(createProductReview(product._id, form))
        navigate(0)
    }

    return (
        <ReviewSectionContainer>
            {loading ? <LoadingSpinner/> : (
                <>
                    <SingleReview reviews={reviews}/>
                    {userInfo && reviews.find((review) => review.user === userInfo._id)
                        ? <p>Produkt został już oceniony</p>
                        : (
                            <WriteReviewForm onSubmit={handleSubmit(onSubmit)} noValidate={true}>
                                <h4>Napisz swoją recenzję</h4>
                                <p>Ocena:</p>
                                <select onChange={e => updateForm('rating', Number(e.target.value))}>
                                    {RatingSelectOptions.map(option => (
                                        <option
                                            key={option.value}
                                            value={option.value}>
                                            {option.text}
                                        </option>
                                    ))}
                                </select>
                                <p>Opis:</p>
                                <textarea
                                    value={form.comment}
                                    {...register('comment', {
                                        maxLength: {
                                            value: 300,
                                            message: "Opis nie może być dłuższy niż 300 znaków"
                                        },
                                    })}
                                    onChange={e => updateForm('comment', e.target.value)}
                                />
                                {comment && <div>{comment.message}</div>}
                                {userInfo ? <Button text='Wyślij recenzję'/> :
                                    <Button text="Musi się zalogować" disabled/>}
                            </WriteReviewForm>
                        )
                    }
                </>
            )}
        </ReviewSectionContainer>
    )
}