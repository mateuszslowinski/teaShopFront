import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {ProductsPage} from "./pages/Products.page";
import {SingleProductsPage} from "./pages/SingleProductsPage";



export const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/produkty' element={<ProductsPage/>}/>
            <Route path='/produkty/:id' element={<SingleProductsPage/>}/>
        </Routes>
    </BrowserRouter>
);


