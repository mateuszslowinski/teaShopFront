import React from 'react'
import {NavLink} from 'react-router-dom'
import {NotFoundContainer} from "./NotFound.styles";

export const NotFoundPage = () => (
    <NotFoundContainer>
        <h2>404.</h2>
        <h3>Oops! Strony nie znaleziono</h3>
        <p>Przeprszamy ale podany adres nie istnieje, spróbuj ponownie</p>
        <NavLink to="/">Powrót na stronę główną</NavLink>
    </NotFoundContainer>
)
