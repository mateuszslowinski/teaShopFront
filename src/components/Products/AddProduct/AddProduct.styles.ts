import styled from "styled-components";
import {appColors} from "../../../constants/appColoros";
import {ColumnContainer} from "../../../constants/Layouts/FlexDirection.styles";

export const AddProductContainer = styled(ColumnContainer)`
  overflow: hidden;
  padding: 30px;
  min-height: 60vh;
`

export const AddProductForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  border-radius: 10px;
  background-color: ${appColors.dimBlue};
  
  & select, option,textarea,input,p {
    background-color: ${appColors.grandpaOrange};
    font-size: 1.4rem;
    color: ${appColors.primary};
    padding: 5px;
  }

  & input {
    padding: 5px;
    border: none;
    font-size: 1.8rem;;
    border-radius: 5px;

    &:focus {
      background-color: rgb(256, 256, 256);
    }
  }
  
  & div {
    background-color: transparent;
    margin: 5px;

    & p {
      background-color: transparent;
    }
  }

  & Button {
    margin-top: 10px;
  }
`
export const ErrorMessage = styled.div`
  padding: 4px;
  border: 1px solid red;
  text-align: center;
  color: ${appColors.electricRed};
  background-color: ${appColors.electricRed};
  font-size: 1.2rem;
`