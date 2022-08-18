import {Header} from "../components/Header/Header";
import {PageContainer} from "../constants/Layouts/PageContainer.styles";
import {Products} from "../components/Products/Products";


export const ProductsPage = () => {
    return (
        <PageContainer>
            <Header/>
            <Products/>
        </PageContainer>
    )
}