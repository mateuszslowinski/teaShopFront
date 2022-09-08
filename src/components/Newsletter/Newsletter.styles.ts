import styled from "styled-components";
import {ColumnContainer, RowContainer} from "../../constants/Layouts/FlexDirection.styles";
import {appColors} from "../../constants/appColoros";

export const SendEmailContainer = styled(RowContainer)`
  width: 100%;
  background-color: ${appColors.iceCold};
  border-top: 1px solid ${appColors.primary};
  border-bottom: 1px solid ${appColors.primary};
  padding: 10px;

  & p {
    background-color: transparent;
    color: ${appColors.primary};
    font-size: 1.8rem;
    margin-right: 10px;
  }

  & form {
    background-color: transparent;
  }

  & input {
    background-color: ${appColors.secondary};
    font-size: 1.4rem;
    padding: 5px;
    border-radius: 5px;
  }
`

export const ConfirmMessage = styled(ColumnContainer)`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  background-color: rgba(240,236,235,0.9);

  & p {
    font-size: 2rem;
  }

  & Button {
    margin-top: 20px;
    width: 50%;
    background-color: ${appColors.brutalBlue};
    color: ${appColors.secondary};
  }
`
export const ErrorMessage = styled(ColumnContainer)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  background-color: ${appColors.electricRed};
  & p {
    color: ${appColors.secondary};
    padding: 5px;
    font-size: 2.2rem;
  }

  & Button {
    margin-top: 20px;
    width: 80%;
    background-color: ${appColors.iceCold};;
  }
`