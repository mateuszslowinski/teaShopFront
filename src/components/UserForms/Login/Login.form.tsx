import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {useForm} from 'react-hook-form'
import {login} from "../../../redux/actions/user.actions";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {Btn} from "../../../Commons/Btn/Btn";
import {FormLogin, LoginContainer} from "./Login.styles";
import {emailValidate} from "../../../constants/Form/validation.patterns";
import {UserLoginResponse} from "../../../types/user.type";

type Login = {
    email: string
    password: string
}

export const LoginForm = () => {

    const {error, userInfo}:UserLoginResponse = useSelector((state: RootState) => state.userLogin);
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

    if (userInfo) {
        navigate('/');
    }

    return (
        <LoginContainer>
            <FormLogin onSubmit={handleSubmit(onSubmit)} noValidate={true}>
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
                        maxLength: {
                            value: 15,
                            message: "Hasło nie może być dłuższe niż 15 znaków"
                        },
                    })}
                    placeholder="Hasło..."
                />
                {password && <div>{password.message}</div>}
                <Btn text="Zaloguj"/>
                <NavLink to='/rejestracja'>Nie masz konta? Założ je</NavLink>
            </FormLogin>
        </LoginContainer>
    )
}