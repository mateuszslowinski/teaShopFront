import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {useForm} from 'react-hook-form'
import {login} from "../../../redux/actions/user.actions";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {Button} from "../../../Commons/Button/Button";
import {emailValidate} from "../../../constants/validation.patterns";
import {Form, LoginContainer} from "./Login.styles";

type Login = {
    email: string
    password: string
}

export const LoginForm = () => {
    const {error, user} = useSelector((state: RootState) => state.userLogin);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        handleSubmit,
        register,
        formState: {
            errors: {email, password},
        },
    } = useForm<Login>();

    const onSubmit = ({email, password}: Login) => {
        // @ts-ignore
        dispatch(login(email, password));
    }

    if (user) {
        navigate('/');
    }

    return (
        <LoginContainer>
            <Form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
                {error && <div>{error}</div>}
                <input
                    type="email"
                    {...register('email', {
                        required: "Email jest wymagany",
                        pattern: {
                            value: emailValidate,
                            message: `Email musi zawierać @`,
                        },
                    })}
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
                <Button text="Zaloguj"/>
                <NavLink to='/rejestracja'>Nie masz konta? Założ je</NavLink>
            </Form>
        </LoginContainer>
    )
}