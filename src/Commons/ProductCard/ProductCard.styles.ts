import styled from "styled-components";
import {appColors} from "../../constants/appColoros";
import {ColumnContainer, RowContainer} from "../../constants/Layouts/FlexDirection.styles";
import {screenSize} from "../../constants/mediaQueries";


export const ProductCardContainer = styled(ColumnContainer)`

  background-color: ${appColors.secondary};
  margin: 10px;
  color: ${appColors.primary};
  padding: 10px;
  border: 1px solid ${appColors.grandpaOrange};

  & h2 {
    align-self: flex-start;
    background-color: transparent;
    font-size: 1.6rem;
    margin: 5px;
  

  }

  & h4 {
    align-self: flex-start;
    font-size: 1.3rem;
    background-color: transparent;
    margin: 0 0 5px 5px;
  }

  & div {
    align-self: self-start;
    display: flex;
    gap: 10px;
    margin-left: 5px;
    
    background-color: transparent;
    font-size: 1.6rem;

    & p {
      align-self: center;
      font-size: 1.6rem;
      background-color: transparent;
    }
  }
`

export const RatingRowContainer = styled(RowContainer)`
  align-self: flex-start;


  & .star-container {
    padding: 0 !important;
    margin: 0;
   & svg{
     background-color: transparent ;
   }
  }
  
  & span {
     align-self: center;
    margin-left: 10px;
    display: flex;
    gap: 5px;
    font-size: 1.6rem;
    background-color: transparent;
  }
`


export const ImgProduct = styled.img`
  width: 64px;
  height: 64px;


  ${screenSize.md} {
    width: 220px;
    height: 160px;
  }


`
