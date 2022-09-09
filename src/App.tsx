import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home/Home';
import {ProductsPage} from "./pages/Products.page";
import {SingleProductsPage} from "./pages/SingleProducts.page";
import {Layout} from "./components/Layout/Layout";
import {Header} from './components/Header/Header';
import {CartPage} from "./pages/Cart.page";
import {LoginPage} from "./pages/Login.page";
import {RegisterPage} from "./pages/Register.page";
import {MyProfilePage} from "./pages/MyProfile.page";
import {EditMyProfile} from "./components/MyProfile/EditMyProfile/EditMyProfile";
import {AdminProtectedRoutes} from "./utils/AdminProtectedRoutes";
import {NotFoundPage} from "./pages/NotFound/NotFound.page";
import {AddProductPage} from "./pages/AdminPages/AddProduct.page";
import {AllProductListPage} from "./pages/AdminPages/AllProductList.page";
import {EditProductPage} from "./pages/AdminPages/EditProduct.page";
import {AllUsersListPage} from "./pages/AdminPages/AllUsersList.page";
import {UserAddressPage} from "./pages/UserAddress.page";
import {OrderPage} from "./pages/Order.page";
import {OrderHistoryPage} from "./pages/OrderHistory.page";
import {SingleOrderDetailsPage} from "./pages/SingleOrderDetails.page";
import {SearchPage} from "./pages/Search.page";
import {UserProtectedRoutes} from "./utils/UserProtectedRoutes";
import {Footer} from "./components/Footer/Footer";
import {CategoryProductPage} from "./pages/CategoryProduct.page";
import {NewProductsPage} from "./pages/NewProductsPage/NewProducts.page";

export const App = () => {

    const header = <Header/>
    const footer = <Footer/>

    const content = (
        <Routes>
            <Route element={<AdminProtectedRoutes/>}>
                <Route path='/admin/produkty' element={<AllProductListPage/>}/>
                <Route path='/admin/produkty/dodaj' element={<AddProductPage/>}/>
                <Route path='/admin/produkty/edytuj/:id' element={<EditProductPage/>}/>
                <Route path="/admin/uzytkownicy" element={<AllUsersListPage/>}/>
            </Route>
            <Route element={<UserProtectedRoutes/>}>
                <Route path='konto' element={<MyProfilePage/>}/>
                <Route path='/konto/edytuj' element={<EditMyProfile/>}/>
                <Route path='/konto/zamowienia' element={<OrderHistoryPage/>}/>
                <Route path='/konto/zamowienia/:id' element={<SingleOrderDetailsPage/>}/>
                <Route path="/koszyk" element={<CartPage/>}/>
                <Route path="/koszyk/:id" element={<CartPage/>}/>
                <Route path="/adres" element={<UserAddressPage/>}/>
                <Route path="/zamowienie" element={<OrderPage/>}/>
            </Route>
            <Route path='/' element={<Home/>}/>
            <Route path='/zaloguj' element={<LoginPage/>}/>
            <Route path="/rejestracja" element={<RegisterPage/>}/>
            <Route path='/produkty' element={<ProductsPage/>}/>
            <Route path='/produkty/nowosci' element={<NewProductsPage/>}/>
            <Route path='/produkty/:id' element={<SingleProductsPage/>}/>
            <Route path='/kategoria/:name' element={<CategoryProductPage/>}/>
            <Route path='/wyszukaj/:term' element={<SearchPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    )

    return (
        <BrowserRouter>
            <Layout
                header={header}
                content={content}
                footer={footer}
            />
        </BrowserRouter>
    );
}

