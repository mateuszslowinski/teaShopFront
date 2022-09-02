import styled from "styled-components";
import {ColumnContainer, RowContainer} from "../../../constants/Layouts/FlexDirection.styles";
import {appColors} from "../../../constants/appColoros";

export const AllProductListContainer = styled(ColumnContainer)`
  position: relative;
  padding: 20px;

  & h2, h3, p {
    background-color: transparent;
    color: ${appColors.primary};
    font-size: 2rem;
  }

  & h2 {
    margin: 10px 0;
  }

  & p {
    padding: 5px;
    margin: 5px;
    color: ${appColors.primary};
    background-color: ${appColors.electricRed};
  }
`

export const SingleProductContainer = styled(RowContainer)`
  & h3 {
    margin-top: 5px;
    font-size: 1.6rem;
  }
`
export const MessageContainer = styled(ColumnContainer)`
  position: absolute;
  background-color: ${appColors.iceCold};
  text-align: center;
  padding: 10px;

  & p {
    background-color: transparent;
  }

  & Button {
    width: 50%;
  }
`