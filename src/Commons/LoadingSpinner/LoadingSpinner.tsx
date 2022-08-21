import React from 'react';
import {
    BlueSpinnerSection, GreenSpinnerSection, LoadingSpinnerContainer,
    RedSpinnerSection,
    Spinner,
} from "./LoadingSpinner.styles";

export const LoadingSpinner = ()=> (
    <LoadingSpinnerContainer>
        <Spinner>
            Wczytywanie danych....
            <RedSpinnerSection />
            <BlueSpinnerSection />
            <GreenSpinnerSection/>
        </Spinner>
    </LoadingSpinnerContainer>
)