import React, {useEffect, useState} from "react";
import {homeSlidesType} from "../../types/images.types";
import {DotContainer, Images, ImagesContainer, SliderImagesContainer,} from "./ImagesSlider.styles";
import {BiLeftArrow, BiRightArrow} from 'react-icons/bi';
import {BsDot} from 'react-icons/bs';
import { NavLink } from "react-router-dom";

interface Props {
    slides: homeSlidesType[],
}

export const ImagesSlider = ({slides}: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    useEffect(()=>{
        const toggle = setInterval(() => {
            setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
        }, 3000);
        return () => clearInterval(toggle);
    },[currentIndex]);



    return (
        <SliderImagesContainer>
            <ImagesContainer>
                <BiLeftArrow onClick={goToPrevious}/>
                <BiRightArrow onClick={goToNext}/>
                <NavLink to={`${slides[currentIndex].url}`}><h3>{slides[currentIndex].title}</h3></NavLink>
                <Images url={`${slides[currentIndex].image}`}/>
            </ImagesContainer>
            <DotContainer index={currentIndex + 1}>
                {slides.map((slide, index) => (
                    <BsDot key={slide.url} onClick={() => goToSlide(index)}/>
                ))}
            </DotContainer>
        </SliderImagesContainer>
    )
}