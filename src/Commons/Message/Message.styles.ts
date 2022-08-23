import styled from "styled-components";
import {ColumnContainer} from "../../constants/Layouts/FlexDirection.styles";
import {appColors} from "../../constants/appColoros";

export const MessageContainer = styled(ColumnContainer)`
  position: absolute;
  width: 60%;
  top: 15%;
  height: 50%;
  border-radius: 10px;
  margin-top: 30px;
  background-color: ${appColors.deepGreen};

  & p {
    font-size: 4rem;
    background-color: ${appColors.deepGreen};
    color: ${appColors.primary};
  }
`



