import React from "react";
import {NavLink} from "react-router-dom";
import {IoCreate} from 'react-icons/io5';
import {MdOutlineReviews} from 'react-icons/md'
import {ButtonBox, DetailsContainer, MyProfileContainer} from "./MyProfile.styles";

export const MyProfile = () => {
    return (
        <MyProfileContainer>
            <div>
                <h2>Witaj nazwa uzytkownia</h2>
                <p>Dołączył: data dolączenia</p>
            </div>
            <DetailsContainer>
                <NavLink to='/konto/edytuj'>
                    <ButtonBox>
                        <IoCreate />
                        <p>Edytuj dane</p>
                    </ButtonBox>
                </NavLink>
                <NavLink to='/konto/recenzje'>
                    <ButtonBox>
                        <MdOutlineReviews/>
                        <p>Recenzje</p>
                    </ButtonBox>
                </NavLink>
            </DetailsContainer>
        </MyProfileContainer>
    )
}