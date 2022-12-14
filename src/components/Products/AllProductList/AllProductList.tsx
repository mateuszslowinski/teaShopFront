import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {useEffect, useState} from "react";
import {getListProducts} from "../../../redux/actions/product.actions";
import {AllProductListContainer, MessageContainer, SingleProductContainer} from "./AllProductList.styles";
import {Btn} from "../../../Commons/Btn/Btn";
import {NavLink} from "react-router-dom";
import {api} from "../../../utils/axios";


export const AllProductList = () => {
    const {userInfo: {token}} = useSelector((store: RootState) => store.userLogin);
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [removeProductId, setRemoveProductId] = useState('');

    useEffect(() => {
        // @ts-ignore
        dispatch(getListProducts())
    }, [dispatch])
    const {products} = useSelector((store: RootState) => store.productList)


    const handleRemoveProductClick = (id: string) => {
        setRemoveProductId(id)
        setIsOpen(true)
    }

    const handleConfirmProductClick = async () => {
        try {
            await api.delete(`/products/${removeProductId}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token} `,
                },
            })
            setIsOpen(false)
            // @ts-ignore
            dispatch(getListProducts())
        } catch (e) {
            setErrorMessage((e as Error).message)
        }
    };

    return (
        <AllProductListContainer>
            <h2>Lista produktów:</h2>
            {errorMessage && <p>{errorMessage}</p>}
            {isOpen &&
                <MessageContainer>
                    <p>Czy napewno chcesz usunąc ten produkt?</p>
                    <Btn text='tak' onClick={handleConfirmProductClick}/>
                    <Btn text='nie' onClick={() => setIsOpen(false)}/>
                </MessageContainer>}
            {products.map(product => (
                <SingleProductContainer>
                    <h3> {product.name}</h3>
                    <Btn text="usuń" onClick={() => handleRemoveProductClick(product._id)}/>
                    <NavLink to={`/admin/produkty/edytuj/${product._id}`}><Btn text="edytuj"/></NavLink>
                    <NavLink to={`/produkty/${product._id}`}><Btn text="szczegóły"/></NavLink>
                </SingleProductContainer>
            ))}
        </AllProductListContainer>
    )
}
