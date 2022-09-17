import React, {ChangeEvent,  useState} from "react";
import {AddProductForm, ErrorMessage, MessageContainer} from "../AddProduct/AddProduct.styles";
import {CategorySelectOptions} from "../../../constants/Form/categorySelectOptions";
import {Button} from "../../../Commons/Button/Button";
import {useForm} from "react-hook-form";
import {ProductTypes} from "../../../types/product.types";
import {api} from "../../../utils/axios";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {useParams} from "react-router";

type EditProduct = {
    productName: string
    category: string,
    image: any
    description: string,
    price: number,
    countInStock: number
}

interface Props {
    product: ProductTypes
}

export const EditProduct = ({product}: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [form, setForm] = useState<EditProduct>({
        productName: product.name,
        category: product.category,
        image: product.image,
        description: product.description,
        price: product.price,
        countInStock: product.countInStock
    });
    const [errorMessage, setErrorMessage] = useState('');
    const {userInfo: {token}} = useSelector((store: RootState) => store.userLogin);
    const {id} = useParams();

    const {
        handleSubmit,
        register,
        reset,
        formState: {
            errors: {productName, description, price, countInStock},
        },
    } = useForm<EditProduct>();


    const onSubmit = async ({productName, description, price, countInStock, image, category}: EditProduct) => {
        const {name} = image[0] ?? product.image;
        try {
            setIsOpen(true)
            setTimeout(() => {
                setIsOpen(false);
                reset();
            }, 1000)

            await api.put(`/products/${id}`, {productName, description, price, name, countInStock, category}, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token} `,
                },
            })
        } catch (e) {
            setErrorMessage((e as Error).message)
        }
    }

    const updateForm = (key: string, value: string | number) => {
        setForm((form) => ({
            ...form,
            [key]: value,
        }))
    }

    const updatedImage = (value: any) => {
        setForm((form) => ({
            ...form,
            image: value.name
        }))
    }

    return (
        <>
            {isOpen &&
                <MessageContainer>
                    <p>Produkt zedytowano!</p>
                </MessageContainer>}
            <AddProductForm onSubmit={handleSubmit(onSubmit)} noValidate={true}>
                {errorMessage && <p>{errorMessage}</p>}
                <h2>Edytuj produkt:</h2>
                <div>
                    <p>Nazwa produktu:</p>
                    <input
                        type="text"
                        placeholder='Nazwa produktu'
                        value={form.productName}
                        {...register('productName', {
                            required: "Nazwa produktu jest wymagana",
                            maxLength: {
                                value: 30,
                                message: "Nazwa nie może być dłuższa niż 30 znaków"
                            },
                        })}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateForm('productName', e.target.value)}
                    />
                    {productName && <ErrorMessage>{productName.message}</ErrorMessage>}
                </div>
                <div>
                    <p>Kateforia produktu:</p>
                    <select
                        value={form.category}
                        {...register('category')}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => updateForm('category', e.target.value)}
                    >
                        {CategorySelectOptions.map(option => (
                            <option
                                key=
                                    {option.value}
                                value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <p>Zdjęcie produktu:</p>
                    <div>
                        <img src={`/images/${form.image}`} alt="zdjecie produktu"/>
                    </div>
                    <input
                        type="file"
                        {...register('image')}
                        onChange={(e: any) => updatedImage(e.target.files[0])}
                    />
                </div>
                <div>
                    <p>Opis produktu:</p>
                    <textarea
                        value={form.description}
                        {...register('description', {
                            maxLength: {
                                value: 800,
                                message: "Opis nie może być dłuższa niż 800 znaków"
                            }
                        })}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => updateForm('description', e.target.value)}
                    />
                    {description && <ErrorMessage>{description.message}</ErrorMessage>}
                </div>
                <div>
                    <p>Cena:</p>
                    <input
                        type="number"
                        value={form.price}
                        min={0}
                        {...register('price', {
                            required: "Cena produktu jest wymagana",
                        })}
                        placeholder='Cena produktu'
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateForm('price', e.target.value)}
                    />

                    {price && <ErrorMessage>{price.message}</ErrorMessage>}
                </div>
                <div>
                    <p>Dostępna ilość:</p>
                    <input
                        type="number"
                        min={0}
                        value={form.countInStock}
                        {...register('countInStock', {
                            required: "Ilośc dostępna produktu jest wymagana i musi być liczbą",
                        })}
                        placeholder='Dostępna ilość'
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateForm('countInStock', e.target.value)}
                    />
                    {countInStock && <ErrorMessage>{countInStock.message}</ErrorMessage>}
                </div>
                <Button text='Edytuj produkt'/>
            </AddProductForm>
        </>
    )
}