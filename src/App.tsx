import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {ProductsPage} from "./pages/Products.page";
import {SingleProductsPage} from "./pages/SingleProducts.page";
import {Layout} from "./components/Layout/Layout";
import {Header} from './components/Header/Header';
import {CartPage} from "./pages/Cart.page";
import {LoginPage} from "./pages/Login.page";
import {RegisterPage} from "./pages/Register.page";
import {MyProfilePage} from "./pages/MyProfile.page";
import {EditMyProfile} from "./components/MyProfile/EditMyProfile/EditMyProfile";


export const App = () => {

    const header = <Header/>
    const footer = (<div>footer</div>)
    const content = (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/zaloguj' element={<LoginPage/>}/>
            <Route path="/rejestracja" element={<RegisterPage/>}/>
            <Route path='konto' element={<MyProfilePage/>}/>
            <Route path='/konto/edytuj' element={<EditMyProfile/>}/>
            <Route path='/produkty' element={<ProductsPage/>}/>
            <Route path='/produkty/:id' element={<SingleProductsPage/>}/>
            <Route path="/koszyk" element={<CartPage/>}/>
            <Route path="/koszyk/:id" element={<CartPage/>}/>
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

