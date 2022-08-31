import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {api} from '../../../utils/axios';
import {RootState} from "../../../redux/store";
import {Button} from "../../../Commons/Button/Button";
import {LoadingSpinner} from "../../../Commons/LoadingSpinner/LoadingSpinner";
import {UserType} from "../../../types/user.type";
import {AllUsersListContainer, SingleUserContainer, MessageContainer} from "./AllUsersList.styles";

export const AllUsersList = () => {
    const {userInfo: {token}} = useSelector((store: RootState) => store.userLogin);
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token} `,
        },
    };

    const [loading, setLoading] = useState(true)
    const [removeUserId, setRemoveUserId] = useState('');
    const [users, setUsers] = useState<UserType[]>([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const res = await api.get('users', config);
                setUsers(res.data);
                setLoading(false)
            } catch (e) {
                setErrorMessage((e as Error).message)
            }
        })();
    }, [isOpen])

    const handleConfirmUserClick = async () => {
        try {
            await api.delete(`/users/${removeUserId}`, config)
            setIsOpen(false)

        } catch (e) {
            setErrorMessage((e as Error).message)
        }
    }

    const handleRemoveUserClick = (id: string) => {
        setRemoveUserId(id)
        setIsOpen(true)
    }

    if (loading) {
        return <LoadingSpinner/>
    }
    return (
        <AllUsersListContainer>
            <h2>Lista wszystkich uzytkowników:</h2>
            {errorMessage && <p>{errorMessage}</p>}
            {isOpen &&
                <MessageContainer>
                    <p>Czy napewno chcesz usunąc tego uzytkownika?</p>
                    <Button text='tak' onClick={handleConfirmUserClick}/>
                    <Button text='nie' onClick={() => setIsOpen(false)}/>
                </MessageContainer>}
            {users.map((user) => (
                <SingleUserContainer>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    {!user.isAdmin && <Button text="usuń" onClick={() => handleRemoveUserClick(user._id)}/>}
                </SingleUserContainer>
            ))}
        </AllUsersListContainer>
    )
}
