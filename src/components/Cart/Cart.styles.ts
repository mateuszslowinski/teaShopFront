import styled from "styled-components";
import {ColumnContainer, RowContainer} from "../../constants/Layouts/FlexDirection.styles";
import {appColors} from "../../constants/appColoros";


export const CartContainer = styled(RowContainer)`
  width: 100%;
  padding: 10px;
  align-items: flex-start;
  gap: 20px;

  & Button {
    align-self: center;
    background-color: ${appColors.dimWhite};
  }
`


export const DetailsProductContainer = styled(ColumnContainer)`
  background-color: ${appColors.dimBlue};
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  align-items: flex-start;
  gap: 10px;


  & h3, p, div {
    font-size: 1.4rem;
    color: ${appColors.primary};
    background-color: transparent;

  }

  & div {
    display: flex;
    width: 100%;
    background-color: transparent;
    justify-content: space-between;
    align-items: center;
  }

  & span {
    padding: 10px;
    background-color: ${appColors.secondary};
    align-self: flex-start;

  }

`

export const DetailsProduct = styled(RowContainer)`
  padding: 5px;
  border: 1px solid ${appColors.primary};
  background-color: ${appColors.dimWhite};


  & select {
    border-radius: 4px;
    font-size: 1.2rem;
    border: none;
    background-color: ${appColors.secondary};
    color: ${appColors.primary};
    
    & option {
      font-size: 1.2rem;
      color: ${appColors.primary};
      background-color: transparent;
    }
  }
`

export const ImgProduct = styled.img`
  width: 60px;
  height: 60px;



`
export const Order = styled(ColumnContainer)`
  align-items: flex-start;
  padding: 10px;
  margin: 20px;
  border-radius: 5px;
  background-color: ${appColors.dimBlue};

  & span, p, h3, h4 {
    background-color: ${appColors.secondary};
    color: ${appColors.primary};
    font-size: 1.4rem;
  }

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;
    background-color: ${appColors.secondary};

    :last-of-type {
      border-top: 1px solid ${appColors.primary};
      margin-top: 5px;
    }
  }

  & p {
    margin-left: 10px;

  }

  & h3 {
    font-size: 1.8rem;
    padding: 5px;
    margin-bottom: 10px;
  }

  & h4 {
    font-size: 1.4rem;
  }

  & a {
    width: 100%;
    text-align: center;
    background-color: transparent;
    :first-of-type {
      margin-top: 10px;
    }
  }
`