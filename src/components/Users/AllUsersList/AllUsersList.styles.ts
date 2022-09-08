import styled from "styled-components";
import {ColumnContainer, RowContainer} from "../../../constants/Layouts/FlexDirection.styles";
import {appColors} from "../../../constants/appColoros";

export const AllUsersListContainer = styled(ColumnContainer)`
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

export const SingleUserContainer = styled(RowContainer)`
  border-bottom: 1px solid ${appColors.primary};
  padding: 5px;
  width: 35%;
  margin-bottom: 5px;
  & p {
    background-color: transparent;
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
