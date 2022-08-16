import React from "react";
import {BasketIcon, HeaderContainer, LinkMenu} from "./Header.style";
import {Button} from "../../Commons/Button/Button";
import {RowContainer} from "../../constants/Layouts/FlexDirection.styles";


export const Header = () => (

    <HeaderContainer>
        <ul>
            <li>
                <LinkMenu to="/">Strona główna</LinkMenu>
            </li>
            <li>
                <LinkMenu to="#">Produkty</LinkMenu>
            </li>
        </ul>
        <div>
            <label>
                <input placeholder="Szukaj..." type="text"/>
                <Button text="szukaj"/>
            </label>
        </div>
        <RowContainer>
            <Button text="Rejestracja"/>
            <Button text="Logowanie"/>
            <BasketIcon/>
        </RowContainer>
    </HeaderContainer>
)