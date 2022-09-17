import styled from "styled-components";
import {ColumnContainer} from "../../constants/Layouts/FlexDirection.styles";
import {appColors} from "../../constants/appColoros";

export const MessageContainer = styled(ColumnContainer)`
  width: 60%;
  height: 50vh;
  border-radius: 10px;
  margin: 20px;
  background-color: ${appColors.deepGreen};

  & p {
    font-size: 4rem;
    background-color: ${appColors.deepGreen};
    color: ${appColors.primary};
  }
`



