import styled from "styled-components";
import {appColors} from "../../../constants/appColoros";

export const FormContainer = styled.form`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 10px;
  margin: 30px auto;
  width: 40%;
  background-color: ${appColors.dimBlue};
  
  & p, input, h2, label {
    background-color: ${appColors.dimWhite};
    color: ${appColors.primary};
  }

  & h2 {
    font-size: 2.5rem;
    text-align: center;
    margin: 5px;
    padding: 5px;
  }

  & label {
    margin: 10px;
    padding: 10px;
  }

  & p {
    font-size: 1.4rem;
  }

  & input {
    font-size: 1.8rem;
    padding: 5px;
    border: 1px solid ${appColors.primary};
    :focus {
      background-color: ${appColors.secondary};
    }
  }

  & Button {
    background-color: ${appColors.iceCold};
    margin: 10px;
    width: 50%;
  }
`

export const ErrorMessage = styled.div`
  padding: 4px;
  border: 1px solid red;
  text-align: center;
  margin-top: 4px;
  border-radius: 10px;
  color: ${appColors.primary};
  background-color: ${appColors.electricRed};
  font-size: 1.4rem;
`