import React, {useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {createProductReview} from "../../redux/actions/product.actions";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {SingleReview} from "./SingleReview/SingleReview";
import {Btn} from "../../Commons/Btn/Btn";
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
    const {success} = useSelector((state: RootState) => state.productReview);
    const {reviews} = product;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form, setForm] = useState<ReviewForm>({
        rating: 1,
        comment: "",
    });

    useEffect(() => {
        if (success) {
            navigate(0)
        }
    }, [dispatch, success])

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
    }

    return (
        <ReviewSectionContainer>
            {loading ? <LoadingSpinner/> : (
                <>
                    <SingleReview reviews={reviews} />
                    {userInfo && reviews.find((review) => review.user === userInfo._id)
                        ? <p>Produkt zosta?? ju?? oceniony</p>
                        : (
                            <WriteReviewForm onSubmit={handleSubmit(onSubmit)} noValidate={true}>
                                <h4>Napisz swoj?? recenzj??</h4>
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
                                {comment && <div>{comment.message}</div>}
                                <textarea
                                    value={form.comment}
                                    {...register('comment', {
                                        required: "Opis jest wymagany",
                                        maxLength: {
                                            value: 300,
                                            message: "Opis nie mo??e by?? d??u??szy ni?? 300 znak??w"
                                        },
                                    })}
                                    onChange={e => updateForm('comment', e.target.value)}
                                />

                                 {userInfo && userInfo ? <Btn text='Wy??lij recenzj??'/> :
                                    <Btn text="Musi si?? zalogowa??" disabled/>}
                            </WriteReviewForm>
                        )
                    }
                </>
            )}
        </ReviewSectionContainer>
    )
}