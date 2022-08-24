import React, {useEffect, useState} from "react";
import {EditMyProfileContainer} from "./EditMyProfile.styles";
import {Button} from "../../../Commons/Button/Button";

import {useForm} from "react-hook-form";
import {emailValidate} from "../../../constants/validation.patterns";
import {UpdateProfileResponse, UserDetailsResponse} from "../../../types/user.type";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {updateUserProfile} from "../../../redux/actions/user.actions";
import {useNavigate} from "react-router-dom";

type Edit = {
    username: string,
    email: string
    password: string,
    confirmPassword: string
}

export const EditMyProfile = () => {
    const {user}: UserDetailsResponse = useSelector((state: RootState) => state.userDetails);
    const {
        userInfo,
    }: UpdateProfileResponse = useSelector((state: RootState) => state.userUpdateProfile);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState('');
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: '',
        confirmPassword: ''
    });

    useEffect(() => {
    }, [dispatch,userInfo])

    const {
        handleSubmit,
        register,
        formState: {
            errors: {email},
        },
    } = useForm<Edit>();


    const onSubmit = async () => {
        const {username, email, password,} = form;

        try {
            if (form.password === form.confirmPassword) {
                // @ts-ignore
                dispatch(updateUserProfile({id: user._id, username, email, password}, user._id));
                navigate('/konto');
            } else {
                setErrorMessage('Hasła musza być identyczne')
            }
        } catch (error: any) {
            setErrorMessage(error.response?.data.message)
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