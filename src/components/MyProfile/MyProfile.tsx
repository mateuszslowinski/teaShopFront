import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import {IoCreate} from 'react-icons/io5';
import {MdOutlineReviews} from 'react-icons/md'
import {ButtonBox, DetailsContainer, MyProfileContainer} from "./MyProfile.styles";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import moment from "moment";
import 'moment/locale/pl'
import {UserDetailsResponse, UserLoginResponse} from "../../types/user.type";
import {getUserDetails} from "../../redux/actions/user.actions";
import {IoMdAdd} from 'react-icons/io'

moment.locale('pl')


export const MyProfile = () => {
    const dispatch = useDispatch();
    const {user}: UserDetailsResponse = useSelector((state: RootState) => state.userDetails);
    const {userInfo: {isAdmin}}: UserLoginResponse = useSelector((state: RootState) => state.userLogin);

    useEffect(() => {
        // @ts-ignore
        dispatch(getUserDetails())
    }, [dispatch])

    return (
        <MyProfileContainer>
            <div>
                <h2>Witaj {user.username}</h2>
                <p>Dołączył(a) : {moment(user.createdAt).format('LL')}</p>
            </div>
            <DetailsContainer>
                <NavLink to='/konto/edytuj'>
                    <ButtonBox>
                        <IoCreate/>
                        <p>Edytuj dane</p>
                    </ButtonBox>
                </NavLink>
                {isAdmin ? (
                    <>
                    <NavLink to='/admin/produkty/dodaj'>
                        <ButtonBox>
                            <IoMdAdd/>
                            <p>Dodaj produkt</p>
                        </ButtonBox>
                    </NavLink>
                    <NavLink to='/admin/uzytkownicy'>
                        <ButtonBox>
                            <MdOutlineReviews/>
                            <p>Lista uzytkowników</p>
                        </ButtonBox>
                    </NavLink>
                    </>
                ) : (
                    <NavLink to='/konto/recenzje'>
                        <ButtonBox>
                            <MdOutlineReviews/>
                            <p>Recenzje</p>
                        </ButtonBox>
                    </NavLink>
                )}

            </DetailsContainer>
        </MyProfileContainer>
    )
}