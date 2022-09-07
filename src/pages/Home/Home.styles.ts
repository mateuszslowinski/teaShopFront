import styled from "styled-components";
import {ColumnContainer} from "../../constants/Layouts/FlexDirection.styles";
import {appColors} from "../../constants/appColoros";

export const HomeContainer = styled(ColumnContainer)`



  & span {
    align-self: flex-start;
    background-color: transparent;
    padding: 10px;
    margin: 30px 10px 0;
    & p {

      color: ${appColors.primary};
    }
  }
`

