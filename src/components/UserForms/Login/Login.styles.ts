import styled from "styled-components";
import {ColumnContainer} from "../../../constants/Layouts/FlexDirection.styles";
import {appColors} from "../../../constants/appColoros";

export const LoginContainer = styled(ColumnContainer)`
  overflow: hidden;
  padding: 30px;
  min-height: 60vh;
`

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  border-radius: 10px;
  background-color: ${appColors.dimBlue};

  & input {
    margin: 10px;
    padding: 5px;
    border: none;
    font-size: 1.4rem;
    background-color: ${appColors.grandpaOrange};
    border-radius: 5px;

    &:focus {
      background-color: rgb(256, 256, 256);
    }
  }

  & a {
    align-self: flex-end;
    background-color: transparent;
    color: ${appColors.primary};
    text-decoration: none;
    margin-top: 5px;
  }

  & div {
    background-color: red;
    padding: 5px;
    align-self: center;
    font-size: 0.9rem;
    border-radius: 10px;
  }

  & Button {
    margin-top: 10px;
  }
`