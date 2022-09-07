import {useEffect} from "react";
import {getListProducts} from "../../redux/actions/product.actions";
import {useDispatch, useSelector} from "react-redux";
import {HomeContainer, ResultsContainer} from "./Home.styles";
import {ImagesSlider} from "../../Commons/ImagesSlider/ImagesSlider";
import {ImagesForHomeSlides} from "../../constants/images/images";
import {RootState} from "../../redux/store";
import {SingleProductCard} from "../../components/Products/SingleProductCard/SingleProductCard";
import {AboutShopDesc} from "../../constants/descriptions/homePage.descriptions";


export const Home = () => {
    const dispatch = useDispatch();
    const {products} = useSelector((state: RootState) => state.productList)
    useEffect(() => {
        // @ts-ignore
        dispatch(getListProducts());
    }, [dispatch]);


    return (
        <HomeContainer>
            <ImagesSlider slides={ImagesForHomeSlides}/>
            <span>
                <p>{AboutShopDesc}</p>
            </span>
            <h4>Najlepiej oceniane produkty:</h4>
            <ResultsContainer>
                {products.sort((a, b) => b.rating - a.rating).slice(0, 3).map(product => (
                    <SingleProductCard product={product}/>
                ))}
            </ ResultsContainer>
        </HomeContainer>
    )
}
