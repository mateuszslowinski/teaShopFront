import styled from "styled-components";
import { RowContainer} from "../../constants/Layouts/FlexDirection.styles";
import {appColors} from "../../constants/appColoros";


export const ProductsSectionContainer = styled(RowContainer)`
  margin-bottom: 20px;
  width: 100%;

  
  & h1 {
    width: 100%;
    text-align: center;
    margin-top: 20px;
    font-size: 2.5rem;
    background-color: transparent;
    color: ${appColors.primary};
  }
`
