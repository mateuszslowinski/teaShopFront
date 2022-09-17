import React, {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {logout} from "../../redux/actions/user.actions";
import {Button} from "../../Commons/Button/Button";
import {RowContainer} from "../../constants/Layouts/FlexDirection.styles";
import {BasketIcon, HeaderContainer, LinkMenu} from "./Header.style";
import {UserLoginResponse} from "../../types/user.type";
import {CategorySelectOptions} from "../../constants/Form/categorySelectOptions";
import {AiOutlineArrowDown} from 'react-icons/ai'


export const Header = () => {
    const [term, setTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const {userInfo}: UserLoginResponse = useSelector((state: RootState) => (state.userLogin));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        // @ts-ignore
        dispatch(logout())
        navigate('/zaloguj')
    }

    const search = (e: any) => {
        e.preventDefault();
        navigate(`/wyszukaj/${term}`)
    };

    return (
        <HeaderContainer isOpen={isOpen}>
            <ul>
                <li>
                    <LinkMenu to="/">Strona główna</LinkMenu>
                </li>
                <li>
                    <LinkMenu to="produkty">Produkty</LinkMenu>
                </li>

                <li onClick={() => setIsOpen(!isOpen)}>
                    <button>Kategorie</button>
                    <AiOutlineArrowDown/>
                    {isOpen && (
                        <div>
                            {CategorySelectOptions.map(link => (
                                    <li>
                                        <LinkMenu to={`kategoria/${link.value}`}>{link.text}</LinkMenu>
                                    </li>
                                ))}
                        </div>
                    )}
                </li>
                <li>
                    <LinkMenu to="/produkty/nowosci ">Nowości</LinkMenu>
                </li>
            </ul>
            <div>
                <form onSubmit={search}>
                    <input
                        placeholder="Szukaj..."
                        type="text"
                        required
                        onChange={e => setTerm(e.target.value)}
                    />
                    <Button
                        text="szukaj"
                    />
                </form>
            </div>
            <RowContainer>
                {userInfo ? (
                    <>
                        <NavLink to='/konto'><Button text='Moje konto'/></NavLink>
                        <Button text='Wyloguj' onClick={handleLogout}/>
                        <NavLink to='/koszyk'><BasketIcon/></NavLink>
                    </>
                ) : (
                    <>
                        <NavLink to='/rejestracja'><Button text="Rejestracja"/></NavLink>
                        <NavLink to='/zaloguj'><Button text="Logowanie"/> </NavLink>
                    </>
                )}
            </RowContainer>
        </HeaderContainer>
    )

}
