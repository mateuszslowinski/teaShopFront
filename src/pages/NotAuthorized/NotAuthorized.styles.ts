import styled from "styled-components";
import { appColors } from "../../constants/appColoros";
import {ColumnContainer} from "../../constants/Layouts/FlexDirection.styles";


export const NotAuthorizedContainer= styled(ColumnContainer)`
  min-width: 100%;
  padding: 20px;
  background-color: transparent;
  
  & h2, h3, p, a {
    background-color: transparent;
    color: ${appColors.primary};
    font-size: 2rem;
  }
  
  & h2 {
    margin-top: 80px;
    font-size: 7rem;
  }

  & p {
    margin-bottom: 10px;
  }

  & a {
    margin: 10px 0 300px;
    text-decoration: none;
    padding: 10px;
    text-align: center;
    background-color: ${appColors.iceCold};
    border-radius: 10px;
    transition: 0.5s;

    :hover {
      background-color: ${appColors.grandpaOrange};
    }
  
`