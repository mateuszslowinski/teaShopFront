import styled from "styled-components";
import {appColors} from "../../../constants/appColoros";
import {FormLogin, LoginContainer} from "../Login/Login.styles";

export const RegisterContainer = styled(LoginContainer)`
    & h3{
      font-size: 2rem;
      background-color: transparent;
      color: ${appColors.primary};
      margin-bottom: 15px;
    }
  & h5 {
    font-size: 5rem;
    color: ${appColors.primary};
  }

`

export const FormRegister = styled(FormLogin)`
  & Button {
    color: ${appColors.secondary};
    background-color: ${appColors.deepGreen};

    &:hover {
      border-color: ${appColors.backColor};
    }
  }
  & div{
    background-color: ${appColors.electricRed};
    color: ${appColors.secondary};
    padding: 5px 10px;
    font-size: 1.2rem;
  }
`