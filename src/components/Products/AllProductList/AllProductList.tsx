import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {useEffect, useState} from "react";
import {getListProducts} from "../../../redux/actions/product.actions";
import {AllProductListContainer, MessageContainer, SingleProductContainer} from "./AllProductList.styles";
import {Button} from "../../../Commons/Button/Button";
import {NavLink} from "react-router-dom";
import {api} from "../../../utils/axios";


export const AllProductList = () => {
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [removeProductId, setRemoveProductId] = useState('');

    useEffect(() => {
        // @ts-ignore
        dispatch(getListProducts())
    }, [dispatch])
    const {products} = useSelector((store: RootState) => store.productList)


    const handleRemoveProductClick =(id:string) =>{
        setRemoveProductId(id)
        setIsOpen(true)
    }


    const handleConfirmProductClick = async () => {
        try {
            await api.delete(`/products/${removeProductId}`)
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
                    <Button text='tak' onClick={handleConfirmProductClick}/>
                    <Button text='nie' onClick={() => setIsOpen(false)}/>
                </MessageContainer>}
            {products.map(product => (
                <SingleProductContainer>
                    <h3> {product.name}</h3>
                    <Button text="usuń" onClick={()=>handleRemoveProductClick(product._id)}/>
                    <NavLink to="/admin/produkty/edytuj"><Button text="edytuj"/></NavLink>
                    <NavLink to={`/produkty/${product._id}`}><Button text="szczegóły"/></NavLink>
                </SingleProductContainer>
            ))}
        </AllProductListContainer>
    )
}
