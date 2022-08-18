import React from 'react';
import {PageContainer} from '../constants/Layouts/PageContainer.styles';
import {Header} from "../components/Header/Header";
import {SingleProducts} from "../components/SingleProducts/SingleProducts";


export const SingleProductsPage = () => {
    return (
        <PageContainer>
            <Header/>
          <SingleProducts/>
        </PageContainer>
    )
}