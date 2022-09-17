import styled from "styled-components";
import {appColors} from "../../../constants/appColoros";
import {ColumnContainer} from "../../../constants/Layouts/FlexDirection.styles";

export const AddProductContainer = styled(ColumnContainer)`
  overflow: hidden;
  padding: 30px;
  min-height: 60vh;
  position: relative;
`

export const AddProductForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  margin: 10px auto;
  border-radius: 10px;
  background-color: ${appColors.dimBlue};

  & img {
    width: 80px;
    height: 80px;
  }

  & select, option, textarea, input, p, h2 {
    background-color: ${appColors.grandpaOrange};
    font-size: 1.4rem;
    color: ${appColors.primary};
    padding: 5px;
  }

  & h2 {
    text-align: center;
    background-color: transparent;
    font-size: 2.2rem;
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

export const MessageContainer = styled(ColumnContainer)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: lightgreen;
  border-radius: 10px;
  text-align: center;
  padding: 20px;

  & p {
    font-size: 2.5rem;
    background-color: transparent;
    color: ${appColors.primary};
  }


`