import styled from "styled-components";
import {ColumnContainer} from "../../../constants/Layouts/FlexDirection.styles";
import {appColors} from "../../../constants/appColoros";


export const EditMyProfileContainer = styled(ColumnContainer)`
  width: 100%;
  height: 70%;
  padding: 40px;
  overflow: hidden;
  border-radius: 20px;
  


  & p {
    background-color: transparent;
    margin-top: 5px;
    font-size: 1.3rem;
    margin-left: 5px;
    color: ${appColors.primary}
  }

  & div {
    font-size: 1.6rem;
    background-color: ${appColors.electricRed};
    color: ${appColors.primary};
    text-align: center;
    padding: 5px;
    margin-bottom: 5px;
    border-radius: 10px;
  }

  & h2 {
    font-size: 2.5rem;
    color: ${appColors.primary};
    background-color: ${appColors.iceCold};
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 20px;
    text-align: center;
  }

  & form {
    display: flex;
    background-color: ${appColors.dimBlue};
    flex-direction: column;
    padding: 40px;
    border-radius: 20px;
  }

  & input {
    border-radius: 10px;
    padding: 5px;
    font-size: 1.5rem;
    background-color: ${appColors.secondary};

    &:focus {
      border: 1px solid ${appColors.primary};
    }
  }

  & Button {
    background-color: ${appColors.iceCold};
    border-radius: 20px;
    margin-top: 15px;
    font-size: 1.8rem;
  }
`

export const MessageContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 40%;
  left: 1%;
  padding: 40px;
  text-align: center;
  background-color: lightgreen;
  border-radius: 10px;
  
  & p {
    background-color: lightgreen;
    font-size: 1.8rem;
    color: ${appColors.primary};
    padding: 20px;
  }
`