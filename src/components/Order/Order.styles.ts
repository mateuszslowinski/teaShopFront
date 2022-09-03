import styled from "styled-components";
import {ColumnContainer, RowContainer} from "../../constants/Layouts/FlexDirection.styles";
import {appColors} from "../../constants/appColoros";

export const OrderContainer = styled(RowContainer)`
  gap: 20px;
  width: 100%;
  padding: 20px;
`
export const ProductsContainer = styled.div`
  background-color: transparent;
  align-self: flex-start;
  padding: 10px;
`
export const DetailsProduct = styled(RowContainer)`
  padding: 10px;
  margin: 10px;
  border: 1px solid ${appColors.primary};
  background-color: ${appColors.dimWhite};
  text-align: center;

  & img {
    width: 60px;
    height: 60px;
  }

  & p, span {
    font-size: 1.6rem;
    padding: 5px;
    color: ${appColors.primary};
  }

  & span {
    background-color: ${appColors.dimBlue};
    margin: 10px;

  }

  & p {
    background-color: transparent;
  }
`


export const UserDetailsContainer = styled(ColumnContainer)`
  background-color: ${appColors.dimBlue};
  padding: 20px;
  
  & div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: transparent;
  }

  & span, p {
    color: ${appColors.primary};
    background-color: transparent;
    font-size: 1.5rem;
  }



  & Button {
    width: 100%;
    margin: 5px 0 0;
  }
`

export const DeliveryContainer = styled(ColumnContainer)`
  background-color: ${appColors.dimBlue};

  & span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: ${appColors.primary};
    font-size: 1.2rem;
    padding: 5px;
    margin: 5px;
    border: 1px solid ${appColors.primary};
    background-color: transparent;
  }

  & h3, p {
    background-color: transparent;
    color: ${appColors.primary};
  }

  & h3 {
    font-size: 2rem;
    margin-bottom: 10px;

  }

  & p {
    font-size: 1.5rem;
  }


`