import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {ProductsPage} from "./pages/Products.page";
import {SingleProductsPage} from "./pages/SingleProductsPage";
import {Layout} from "./components/Layout/Layout";
import { Header } from './components/Header/Header';


export const App = () =>{

    const header=<Header/>
    const footer= (<div>footer</div>)
    const content=(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/produkty' element={<ProductsPage/>}/>
            <Route path='/produkty/:id' element={<SingleProductsPage/>}/>
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

