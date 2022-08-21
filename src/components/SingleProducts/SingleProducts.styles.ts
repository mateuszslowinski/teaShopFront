import styled from 'styled-components'
import {ColumnContainer, RowContainer} from "../../constants/Layouts/FlexDirection.styles";
import {screenSize} from '../../constants/mediaQueries';
import {appColors} from "../../constants/appColoros";

export const ProductDetailsContainer = styled(RowContainer)`
  margin: 30px auto;
  min-height: 50vh;
  width: 100%;
  align-items: flex-start;
  
  ${screenSize.md} {
    justify-content: space-evenly;
    align-items: center;
  }

  & h2 {
    background-color: transparent;
    font-size: 2.5rem;
    color: ${appColors.primary};
  }

  & p {
    background-color: transparent;
    font-size: 1.6rem;
    color: ${appColors.primary};
  }
  
  & span {
    background-color: transparent;
    font-size: 1.6rem;
    color: ${appColors.primary};
  }
`

export const ImgProduct = styled.img`
  width: 200px;
  height: 180px;

  ${screenSize.md} {
    width: 400px;
    height: 300px;
  }
`

export const DetailsContainer = styled(ColumnContainer)`
  align-items: self-start;
  gap: 30px;
`

export const RowDetails = styled(RowContainer)`
  align-self: flex-start;
  width: 100%;
  gap: 10px;
  & a {
    background-color: transparent;
  }
`

export const StockDetails = styled(ColumnContainer)`
  align-self: center;
  gap: 5px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${appColors.grandpaOrange};
  width: 60%;

  
  & select{
    border-radius: 4px;
    font-size: 1.2rem;
    border: none;
    background-color: ${appColors.grandpaOrange};
    color: ${appColors.primary};
  }
  
  & option{
    font-size: 1.2rem;
    color: ${appColors.primary};
    background-color: ${appColors.grandpaOrange};
  }

  & Button {
    align-self: flex-end;
    justify-self: center;
    margin: 0 auto;
    width: 100%;
  }
`
