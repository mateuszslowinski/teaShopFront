import React, { useState} from "react";
import {EditMyProfileContainer} from "./EditMyProfile.styles";
import {Button} from "../../../Commons/Button/Button";
import {useForm} from "react-hook-form";
import {emailValidate} from "../../../constants/validation.patterns";

type Edit ={
    username:string,
    email: string
    password: string,
    confirmPassword:string
}

export const EditMyProfile = () => {
    const [errorMessage, setErrorMessage] = useState('');

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: '',
        confirmPassword: ''
    });

    const {
        handleSubmit,
        register,
        formState: {
            errors: {email, password, username, confirmPassword},
        },
    } = useForm<Edit>();


    const onSubmit = async () => {

        if (form.password === form.confirmPassword) {
            console.log('zmiana danych')
        } else {
            setErrorMessage('Hasła musza być identyczne')
        }
    }

    const updateForm = (key: string, value: string) => {
        setForm((form) => ({
            ...form,
            [key]: value,
        }))
    }


    return (
        <EditMyProfileContainer>

            <form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
                <h2>Edtuj swoje dane</h2>
                {errorMessage && <div>{errorMessage}</div>}
                <p>Nazwa użytkownika:</p>
                <input
                    type="text"
                    placeholder="Nazwa uzytkownika..."
                    value={form.username}
                    onChange={(e) => updateForm('username', e.target.value)}
                />

                <p>Email:</p>
                <input
                    type="email"
                    placeholder="Email..."
                    value={form.email}
                    {...register('email', {
                        pattern: {
                            value: emailValidate,
                            message: `Email musi zawierać @`,
                        },
                    })}
                    onChange={(e) => updateForm('email', e.target.value)}
                />
                {email && <div>{email.message}</div>}
                <p>Hasło:</p>
                <input
                    type="password"
                    placeholder="Hasło..."
                    value={form.password}
                    onChange={(e) => updateForm('password', e.target.value)}
                />
                <p>Potwierdz hasło:</p>
                <input
                    type="password"
                    placeholder="Potwórz hasło..."
                    value={form.confirmPassword}
                    onChange={(e) => updateForm('confirmPassword', e.target.value)}
                />
                <Button text='wyślij'/>
            </form>
        </EditMyProfileContainer>
    )
}