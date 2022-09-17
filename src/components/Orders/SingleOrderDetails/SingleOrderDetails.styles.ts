import styled from "styled-components";
import {appColors} from "../../../constants/appColoros";
import {ColumnContainer, RowContainer} from "../../../constants/Layouts/FlexDirection.styles";

export const SingleOrderContainer = styled(RowContainer)`
  color: ${appColors.primary};
  justify-content: space-around;
  width: 100%;
  margin: 50px;


  & span, p, div, h3 {
    background-color: ${appColors.dimWhite};
    color: ${appColors.primary};
    font-size: 1.5rem;
    text-align: center;
  }
`
export const ProductsContainer = styled(ColumnContainer)`
  gap: 10px;
  padding: 20px;

  & h3 {
    background-color: transparent;
    font-size: 2.2rem;
    margin-top: 10px;
  }

  & img {
    width: 50px;
    height: 50px;
  }
`

export const SingleProductContainer = styled(RowContainer)`
  gap: 10px;
  margin: 5px;
  padding: 20px;
  background-color: ${appColors.dimWhite};
  border: 1px solid ${appColors.primary};
`

export const InformationContainer = styled(ColumnContainer)`
  gap: 10px;
  padding: 20px;

  & div:first-child {
    margin: 10px;
    padding: 15px;
    border: 1px solid ${appColors.primary};

    & span {
      font-size: 1.4rem;
    }

    & p {
      font-size: 1.8rem;
      margin-bottom: 5px;
    }
  }

  & div:last-child {
    border: 1px solid ${appColors.primary};
    padding: 10px;
  }

`

export const DeliveryContainer = styled(ColumnContainer)`
  border: 1px solid ${appColors.primary};
  padding: 10px;

  & h3 {
    font-size: 2rem;
    margin: 10px;
  }

  & span {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  & p {
    margin-left: 20px;
  }
`