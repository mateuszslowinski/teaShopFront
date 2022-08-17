import {ImgProduct, ProductCardContainer, RatingRowContainer} from "./ProductCard.styles"
import StarRatings from "react-star-ratings";
import {appColors} from "../../constants/appColoros";
import img from '../../assets/tea-bag-1324303.jpg'


export const ProductCard = () => (

    <ProductCardContainer>
        <ImgProduct src={img} alt="product"/>
        <h2>nazwa produktu</h2>
        <h4>kategoria produktu</h4>
        <RatingRowContainer>
            <StarRatings
                rating={3}
                starRatedColor={appColors.electricRed}
                starEmptyColor={appColors.pageBackgroundColor}
                starDimension="15px"
                numberOfStars={5}
                name="rating"
            />
            <span>
                2
                <p>oceny</p>
            </span>

        </RatingRowContainer>
            <div>
                10
                <p>PLN</p>
            </div>


    </ProductCardContainer>
)