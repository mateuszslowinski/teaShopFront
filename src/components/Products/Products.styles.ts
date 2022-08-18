import styled from "styled-components";
import {RowContainer} from "../../constants/Layouts/FlexDirection.styles";
import {appColors} from "../../constants/appColoros";


export const ProductsSectionContainer = styled(RowContainer)`
    
    & h1 {
      width: 100%;
      text-align: center;
      font-size: 2.5rem;
      background-color: transparent;
      color: ${appColors.primary};
    }
    
`