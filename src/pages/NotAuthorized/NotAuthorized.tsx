import React from "react";
import {NotAuthorizedContainer} from "./NotAuthorized.styles";
import {NavLink} from "react-router-dom";

export const NotAuthorized = () => (
    <NotAuthorizedContainer>
        <h2>403.</h2>
        <h3>Brak dostępu!</h3>
        <p>Nie masz dostępu do tej strony</p>
        <NavLink to="/">Powrót na stronę główną</NavLink>
    </NotAuthorizedContainer>
)
