import React, {useState} from 'react';
import {Button} from '../../../Commons/Button/Button';
import {AddProductContainer, AddProductForm, ErrorMessage} from "./AddProduct.styles";
import {useForm} from "react-hook-form";
import {CategorySelectOptions} from "../../../constants/Form/categorySelectOptions";
import {api} from '../../../utils/axios';

type AddProduct = {
    productName: string
    category: string,
    image: any,
    description: string,
    price: number,
    countInStock: number
}

export const AddProduct = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const {
        handleSubmit,
        register,
        formState: {
            errors: {productName, description, price, countInStock},
        },
    } = useForm<AddProduct>();

    const onSubmit = async ({productName, category, image, description, price, countInStock}: AddProduct) => {
        const {name} = image[0];
        console.log(name)

        try {
            const res = await api.post('/products', ({productName, category, name, description, price, countInStock}), {
                headers: {
                    "Content-Type": "application/json"
                },
            })
            if (res.status === 201) {
                console.log('produkt dodano')
            }

        } catch (error: any) {
            setErrorMessage(error.response?.data.message)
            console.log(errorMessage, 'error')
        }

    }

    return (
        <AddProductContainer>
            <AddProductForm onSubmit={handleSubmit(onSubmit)} noValidate={true}>
                <div>
                    <p>Nazwa produktu:</p>
                    <input
                        type="text"
                        placeholder='Nazwa produktu'
                        {...register('productName', {
                            required: "Nazwa produktu jest wymagana",
                            maxLength: {
                                value: 30,
                                message: "Nazwa nie może być dłuższa niż 30 znaków"
                            },
                        })}
                    />
                    {productName && <ErrorMessage>{productName.message}</ErrorMessage>}
                </div>
                <div>
                    <p>Kateforia produktu:</p>
                    <select {...register('category')}>
                        {CategorySelectOptions.map(option => (
                            <option
                                key={option.value}
                                value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <p>Zdjęcie produktu:</p>
                    <input type="file" {...register('image')}/>
                </div>
                <div>
                    <p>Opis produktu:</p>
                    <textarea
                        {...register('description',{
                            maxLength:{
                                value: 800,
                                message: "Opis nie może być dłuższa niż 800 znaków"
                            }
                        })}
                    />
                    {description && <ErrorMessage>{description.message}</ErrorMessage>}
                </div>
                <div>
                    <p>Cena:</p>
                    <input
                        type="number"
                        min={0}
                        {...register('price', {
                            required: "Cena produktu jest wymagana",
                        })}
                        placeholder='Cena produktu'/>
                    {price && <ErrorMessage>{price.message}</ErrorMessage>}
                </div>
                <div>
                    <p>Dostępna ilość:</p>
                    <input
                        type="number"
                        min={0}
                        {...register('countInStock', {
                            required: "Ilośc dostępna produktu jest wymagana i musi być liczbą",
                        })}
                        placeholder='Dostępna ilość'/>
                    {countInStock && <ErrorMessage>{countInStock.message}</ErrorMessage>}
                </div>

                <Button text='dodaj produkt'/>
            </AddProductForm>
        </AddProductContainer>

    )
}