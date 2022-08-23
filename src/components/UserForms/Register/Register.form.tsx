import React, {useState} from "react";
import {FormRegister, RegisterContainer} from "./Register.styles";
import {emailValidate} from "../../../constants/validation.patterns";
import {Button} from "../../../Commons/Button/Button";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {api} from "../../../utils/axios";
import {Message} from "../../../Commons/Message/Message";


type Register = {
    username: string
    email: string
    password: string
}

export const RegisterForm = () => {
    const navigate = useNavigate();
    const [openMessage, setOpenMessage] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const {
        handleSubmit,
        register,
        formState: {
            errors: {email, password, username},
        },
    } = useForm<Register>();

    const onSubmit = async ({username, email, password}: Register) => {
        try {
            const res = await api.post('/users', ({username, email, password}), {
                headers: {
                    "Content-Type": "application/json"
                },
            })
            if (res.status === 201) {
                setOpenMessage(true);
                setTimeout(() => {
                    setOpenMessage(false)
                    navigate('/zaloguj')
                }, 500);
            }
        } catch (error: any) {
            setErrorMessage(error.response?.data.message)
        }
    }

    const handleChange = () => {
        setErrorMessage(null)
    };

    return (
        <RegisterContainer>
            <h3>Rejestracja</h3>
            {openMessage && <Message text="Zostałeś zarejstrowany!"/>}
            <FormRegister onSubmit={handleSubmit(onSubmit)} noValidate={true}>
                {errorMessage && <div>{errorMessage}</div>}
                <input
                    type="text"
                    {...register('username', {
                        required: "Nazwa użytkownika jest wymagana",
                    })}
                    placeholder="Nazwa użytkownika..."
                />
                {username && <div>{username.message}</div>}
                <input
                    type="email"
                    {...register('email', {
                        required: "Email jest wymagany",
                        pattern: {
                            value: emailValidate,
                            message: `Email musi zawierać @`,
                        },
                    })}
                   onChange={handleChange}
                    placeholder="Email..."
                />
                {email && <div>{email.message}</div>}
                <input
                    type="password"
                    {...register('password', {
                        required: `Hasło jest wymagane`,
                    })}
                    placeholder="Hasło..."
                />
                {password && <div>{password.message}</div>}
                <Button text="Zarejestruj"/>
            </FormRegister>
        </RegisterContainer>
    )
}