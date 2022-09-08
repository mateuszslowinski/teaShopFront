import React, {useState} from "react";

import {Button} from "../../Commons/Button/Button";
import {ConfirmMessage, ErrorMessage, SendEmailContainer} from "./Newsletter.styles";
import {useForm} from "react-hook-form";
import {emailValidate} from "../../constants/Form/validation.patterns";
import {api} from "../../utils/axios";

type NewsletterType = {
    email: string
}
export const Newsletter = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [openMessage, setOpenMessage] = useState<boolean>(false);
    const {
        handleSubmit,
        reset,
        register,
        formState: {
            errors: {email},
        },
    } = useForm<NewsletterType>();


    const onSubmit = async ({email}: NewsletterType) => {
        try {

            const res = await api.post('/email', ({email}), {
                headers: {
                    "Content-Type": "application/json"
                },
            });
            if (res.status === 201) {
                reset();
                setOpenMessage(true);
            }
        } catch (error: any) {
            setErrorMessage(error.response?.data.message)
        }
    }

    return (
        <SendEmailContainer>
            {openMessage &&
                <ConfirmMessage>
                    <p>Dziękujemy za zapisanie się do naszego newslletera!</p>
                    <Button text="potwierdzam" onClick={() => setOpenMessage(!openMessage)}/>
                </ConfirmMessage>
            }

            <p>Zapisz się do newslettera by być na bieżąco</p>
            <form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
                <input
                    type="email"
                    placeholder='email...'
                    {...register('email', {
                        required: "Wpisz emial",
                        pattern: {
                            value: emailValidate,
                            message: `Email musi zawierać @`,
                        },
                    })}
                />
                {errorMessage && <ErrorMessage>
                    <p>{errorMessage}</p>
                    <Button text='ok' onClick={() => setErrorMessage(null)}/>
                </ErrorMessage>}
                {email && <ErrorMessage><p>{email.message}</p></ErrorMessage>}
                <Button text="wyślij"/>
            </form>
        </SendEmailContainer>
    )
}