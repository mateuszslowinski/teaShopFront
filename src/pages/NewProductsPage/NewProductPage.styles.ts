import styled from "styled-components";
import { appColors } from "../../constants/appColoros";
import {ColumnContainer, RowContainer} from "../../constants/Layouts/FlexDirection.styles";

export const NewProductPageContainer = styled(ColumnContainer)`
  padding: 10px;

  & h2, p {
    background-color: transparent;
    color: ${appColors.primary};
  }
 & h2 {
   margin-top: 10px;
   font-size: 3.5rem;
 }
  & p {
   font-size: 2.2rem;
  
  }
`
export const NewProductContainer = styled(RowContainer)`

  width: 100%;
   & h2 {
     font-size: 1.6rem;
   }
 
`