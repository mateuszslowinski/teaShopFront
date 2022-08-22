import React from "react";
import {BasketIcon, HeaderContainer, LinkMenu} from "./Header.style";
import {RowContainer} from "../../constants/Layouts/FlexDirection.styles";
import {Button} from "../../Commons/Button/Button";
import {NavLink} from "react-router-dom";

export const Header = () => (
    <HeaderContainer>
        <ul>
            <li>
                <LinkMenu to="/">Strona główna</LinkMenu>
            </li>
            <li>
                <LinkMenu to="produkty">Produkty</LinkMenu>
            </li>
        </ul>
        <div>
            <label>
                <input placeholder="Szukaj..." type="text"/>
                <Button text="szukaj"/>
            </label>
        </div>
        <RowContainer>
            <NavLink to='/rejestracja'><Button text="Rejestracja"/></NavLink>
            <NavLink to='/zaloguj'><Button text="Logowanie"/> </NavLink>
            <BasketIcon/>
        </RowContainer>
    </HeaderContainer>
)