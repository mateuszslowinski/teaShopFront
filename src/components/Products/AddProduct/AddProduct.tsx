import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {api} from '../../../utils/axios';
import {Button} from '../../../Commons/Button/Button';
import {CategorySelectOptions} from "../../../constants/Form/categorySelectOptions";
import {AddProductContainer, AddProductForm, ErrorMessage, MessageContainer} from "./AddProduct.styles";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";

type AddProduct = {
    productName: string
    category: string,
    image: File[],
    description: string,
    price: number,
    countInStock: number
}

export const AddProduct = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const {
        handleSubmit,
        register,
        reset,
        formState: {
            errors: {productName, description, price, countInStock},
        },
    } = useForm<AddProduct>();

    const {userInfo:{token}} =  useSelector((store: RootState) => store.userLogin);

    const onSubmit = async ({productName, category, image, description, price, countInStock}: AddProduct) => {
        const {name} = image[0];
        setIsOpen(true)
        try {
            setTimeout(() => {
                setIsOpen(false);
                reset();
            }, 1000)



                await api.post('/products', ({productName, category, name, description, price, countInStock}), {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token} `,
                },
            })
        } catch (e) {
            setErrorMessage((e as Error).message)
        }
    }

    return (
        <AddProductContainer>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            {isOpen &&
                <MessageContainer>
                    <p>Produkt dodano!</p>
                </MessageContainer>}
            <AddProductForm onSubmit={handleSubmit(onSubmit)} noValidate={true}>
                <h2>Dodaj nowy produkt:</h2>
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
                        {...register('description', {
                            maxLength: {
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