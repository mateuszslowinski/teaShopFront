import styled from 'styled-components'
import {ColumnContainer, RowContainer} from "../../constants/Layouts/FlexDirection.styles";
import {screenSize} from '../../constants/mediaQueries';
import {appColors} from "../../constants/appColoros";

export const ProductDetailsContainer = styled(RowContainer)`
  margin: 30px auto;
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
  padding: 20px;

  & h2 {
    :first-letter {
      text-transform: uppercase;
    }
  }

  & p {
    padding: 10px;
  }
`

export const RowDetails = styled(RowContainer)`
  align-self: flex-start;
  width: 50%;
  margin: 0 auto 10px;
  gap: 10px;

  & a {
    background-color: transparent;
  }
`

export const StockDetails = styled(ColumnContainer) `
  align-self: center;
  padding: 10px;
  border-radius: 10px;
  background-color: ${appColors.dimWhite};
  border: 1px solid ${appColors.grandpaOrange};
  text-align: center;
  
  & :last-of-type p {
  background-color: ${appColors.deepGreen};
  color: ${appColors.secondary};
  width: 100%;
  margin-bottom: 5px;
}

  & select {
    border-radius: 4px;
    font-size: 1.6rem;
    border: none;
    background-color: ${appColors.grandpaOrange};
    color: ${appColors.primary};
  }

  & option {
    font-size: 1.4rem;
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
