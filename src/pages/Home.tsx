import {useEffect} from "react";
import {getListProducts} from "../redux/actions/product.actions";
import {useDispatch} from "react-redux";


export const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        // @ts-ignore
        dispatch(getListProducts())
    }, [dispatch])
    return (
        <div>czesc główna</div>
    )
}
