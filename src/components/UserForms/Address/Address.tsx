import React from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addDeliveryAddress} from "../../../redux/actions/cart.actions";
import {RootState} from "../../../redux/store";
import {Button} from "../../../Commons/Button/Button";
import {LoginPage} from "../../../pages/Login.page";
import {DeliveryType, DeliveryTypeResponse} from "../../../types/cart.types";
import {ErrorMessage, FormContainer} from "./Address.styles";
import {ConfirmOrder} from "../../Orders/ConfirmOrder/ConfirmOrder";


export const Address = () => {
    const {userInfo} = useSelector((state: RootState) => state.userLogin);
    const {deliveryAddress}: DeliveryTypeResponse = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        handleSubmit,
        register,
        formState: {
            errors: {name, street, buildingNumber, zipCode, city},
        },
    } = useForm<DeliveryType>();

    const onSubmit = ({name, street, buildingNumber, zipCode, city}: DeliveryType) => {
        // @ts-ignore
        dispatch(addDeliveryAddress({name, street, buildingNumber, zipCode, city}))
        navigate('/zamowienie')
    }
    if (deliveryAddress) return <ConfirmOrder/>
    return (
        <>
            {
                userInfo ? (
                    <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate={true}>
                        <h2>Adres dostawy:</h2>
                        <label>
                            <p>Imię i nazwisko:</p>
                            <input
                                type="text"
                                placeholder='Imię i nazwisko'
                                {...register('name', {
                                    required: "Imię i nazwisko jest wymagane",
                                })}
                            />
                            {name && <ErrorMessage>{name.message}</ErrorMessage>}
                        </label>

                        <label>
                            <p>Ulica:</p>
                            <input
                                type="text"
                                placeholder='Ulica'
                                {...register('street', {
                                    required: "Nazwa ulicy jest wymagana",
                                })}
                            />
                            {street && <ErrorMessage>{street.message}</ErrorMessage>}
                        </label>
                        <label>
                            <p>Numer mieszkania:</p>
                            <input
                                type="text"
                                placeholder='Number mieszkania'
                                {...register('buildingNumber', {
                                    required: "Numer mieszkania jest wymagany",
                                })}
                            />
                            {buildingNumber && <ErrorMessage>{buildingNumber.message}</ErrorMessage>}
                        </label>
                        <label>
                            <p>Kod pocztowy</p>
                            <input
                                type="text"
                                placeholder='Kod pocztowy'
                                {...register('zipCode', {
                                    required: "Kod pocztowy jest wymagany",
                                })}
                            />
                            {zipCode && <ErrorMessage>{zipCode.message}</ErrorMessage>}
                        </label>
                        <label>
                            <p>Miasto</p>
                            <input
                                type="text"
                                placeholder='Miasto'
                                {...register('city', {
                                    required: "Miasto jest wymagane",
                                })}
                            />
                            {city && <ErrorMessage>{city.message}</ErrorMessage>}
                        </label>
                        <Button text="Potwierdź"/>
                    </FormContainer>
                ) : <LoginPage/>
            }
        </>
    )
}
