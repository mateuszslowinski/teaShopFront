import {useEffect} from "react";
import {getListProducts} from "../../redux/actions/product.actions";
import {useDispatch} from "react-redux";
import {HomeContainer} from "./Home.styles";
import {ImagesSlider} from "../../Commons/ImagesSlider/ImagesSlider";
import {ImagesForHomeSlides} from "../../constants/images/images";


export const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(getListProducts());
    }, [dispatch]);


    return (
        <HomeContainer>
                <ImagesSlider slides={ImagesForHomeSlides}/>
            <span>
                <p>opis</p>
            </span>

        </HomeContainer>
    )
}
