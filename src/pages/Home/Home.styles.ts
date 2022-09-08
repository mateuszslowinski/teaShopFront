import styled from "styled-components";
import {ColumnContainer, RowContainer} from "../../constants/Layouts/FlexDirection.styles";
import {appColors} from "../../constants/appColoros";

export const HomeContainer = styled(ColumnContainer)`

  & span {
    align-self: flex-start;
    background-color: transparent;
    padding: 10px;
    margin: 30px 10px 0;

    & p {
      color: ${appColors.primary};
      background-color: transparent;
      font-size: 1.5rem;
    }
  }

  & h4 {
    width: 100%;
    background-color: ${appColors.iceCold};
    color: ${appColors.primary};
    text-align: center;
    padding: 5px;
    font-size: 2rem;
  }
`

export const ResultsContainer = styled(RowContainer)`
  margin: 10px auto;
  width: 100%;
  justify-content: space-evenly;
`
