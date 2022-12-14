import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {api} from '../../../utils/axios';
import {Btn} from '../../../Commons/Btn/Btn';
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

    const {userInfo: {token}} = useSelector((store: RootState) => store.userLogin);

    const onSubmit = async ({productName, category, image, description, price, countInStock}: AddProduct) => {
        const {name} = image[0];
        try {
            setIsOpen(true)
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
                                message: "Nazwa nie mo??e by?? d??u??sza ni?? 30 znak??w"
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
                    <p>Zdj??cie produktu:</p>
                    <input type="file" {...register('image')}/>
                </div>
                <div>
                    <p>Opis produktu:</p>
                    <textarea
                        {...register('description', {
                            maxLength: {
                                value: 800,
                                message: "Opis nie mo??e by?? d??u??sza ni?? 800 znak??w"
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
                    <p>Dost??pna ilo????:</p>
                    <input
                        type="number"
                        min={0}
                        {...register('countInStock', {
                            required: "Ilo??c dost??pna produktu jest wymagana i musi by?? liczb??",
                        })}
                        placeholder='Dost??pna ilo????'/>
                    {countInStock && <ErrorMessage>{countInStock.message}</ErrorMessage>}
                </div>
                <Btn text='dodaj produkt'/>
            </AddProductForm>
        </AddProductContainer>

    )
}