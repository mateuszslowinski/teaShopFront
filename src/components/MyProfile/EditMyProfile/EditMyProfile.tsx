import React, {ChangeEvent, useEffect, useState} from "react";
import {EditMyProfileContainer} from "./EditMyProfile.styles";
import {Button} from "../../../Commons/Button/Button";
import {useForm} from "react-hook-form";
import {emailValidate} from "../../../constants/Form/validation.patterns";
import {UpdateProfileResponse, UserDetailsResponse} from "../../../types/user.type";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {updateUserProfile} from "../../../redux/actions/user.actions";


type EditForm = {
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

    const [errorMessage, setErrorMessage] = useState('');
    const [form, setForm] = useState<EditForm>({
        username: user.username,
        email: user.email,
        password: '',
        confirmPassword: ''
    });

    useEffect(() => {
    }, [dispatch, userInfo])

    const {
        handleSubmit,
        register,
        formState: {
            errors: {email, password, username,},
        },
    } = useForm<EditForm>();

    const onSubmit = async () => {
        const {username, email, password,} = form;

        try {
            if (form.password === form.confirmPassword) {
                // @ts-ignore
                dispatch(updateUserProfile({id: user._id, username, email, password}, user._id));


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
                {username && <div>{username.message}</div>}
                <input
                    type="text"
                    placeholder="Nazwa uzytkownika..."
                    value={form.username}
                    {...register('username',
                        {maxLength: {value: 20, message: "Nazwa użytkownika nie może być dłuższa niż 20 znaków"}})}
                    onChange={(e:ChangeEvent<HTMLInputElement>) => updateForm('username', e.target.value)}
                />
                <p>Email:</p>
                {email && <div>{email.message}</div>}
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
                    onChange={(e:ChangeEvent<HTMLInputElement>) => updateForm('email', e.target.value)}
                />
                <p>Nowe hasło:</p>
                {password && <div>{password.message}</div>}
                <input
                    type="password"
                    placeholder="Nowe hasło..."
                    value={form.password}
                    {...register('password',
                        {maxLength: {value: 15, message: "Hasło nie może być dłuższe niż 15 znaków"}})}
                    onChange={(e:ChangeEvent<HTMLInputElement>) => updateForm('password', e.target.value)}
                />
                <p>Potwierdz hasło:</p>
                <input
                    type="password"
                    placeholder="Potwórz hasło..."
                    value={form.confirmPassword}
                    onChange={(e:ChangeEvent<HTMLInputElement>) => updateForm('confirmPassword', e.target.value)}
                />
                <Button text='edytuj'/>
            </form>
        </EditMyProfileContainer>
    )
}