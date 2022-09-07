import styled from "styled-components";
import {appColors} from "../../constants/appColoros";


export const SliderImagesContainer = styled.div`
  margin: 10px auto 0;
  width: 800px;
  height: 480px;
;
`

export const ImagesContainer = styled.div`
  height: 100%;
  position: relative;
  
  & h3{
    position: absolute;
    background-color: ${appColors.dimWhite};
    padding: 5px 10px;
    top:10px;
    left: 10px  ;
    color:${appColors.primary};
    font-size: 2rem;
    
  }

  & svg {
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
    background-color: transparent;
    font-size: 4.5rem;
    cursor: pointer;
    z-index: 1;
  }

  & svg:nth-of-type(1) {
    left: 32px;

  }

  & svg:nth-of-type(2) {
    right: 32px;
  }
  
`

interface Props {
    url: string
}

export const Images = styled.div<Props>`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.url});
  border-bottom: 10px;
  background-size: cover;
 
`

interface DotProps {
    index: number
}

export const DotContainer = styled.div<DotProps>`
  display: flex;
  justify-content: center;
  background-color: transparent;
  cursor: pointer;

  & svg {
    margin: 3px 1px;
    background-color: transparent;
    color: ${appColors.primary};
    font-size: 2.5rem;
  }

  & svg:nth-child(${props => props.index}) {
    border: 1px solid ${appColors.primary};
    border-radius: 25px;
  }
`