import styled from "styled-components";
import {ColumnContainer, RowContainer} from "../../../constants/Layouts/FlexDirection.styles";
import {appColors} from "../../../constants/appColoros";

export const OrderHistoryContainer = styled(ColumnContainer)`
  padding: 20px;

  & h3, h4 {
    margin: 10px;
    background-color: transparent;
    color: ${appColors.primary};
    font-size: 2.4rem;
  }
`

export const OrderContainer = styled(RowContainer)`
  justify-content: space-evenly;
  margin-top: 10px;
  width: 100%;
  padding: 5px;
  background-color: ${appColors.dimWhite};

  & span, p, div {
    background-color: ${appColors.dimWhite};
    color: ${appColors.primary};
    font-size: 1.5rem;
  }
& div {
  margin: 10px;
  text-align: center;
  padding: 5px;
}

`