import styled from 'styled-components'
import {appColors} from "../../constants/appColoros";


export const PrimaryButton = styled.button`
   color: ${appColors.primary};
   background-color: ${appColors.grandpaOrange};
   border: 1px solid transparent;
   border-radius: 5px;
   padding: 5px 10px;
   margin: 5px;
   cursor: pointer;
   transition: 0.3s;
   font-size: 1.4rem;

   &:hover {
      border-color: ${appColors.primary};
   }

   &::first-letter {
      text-transform: uppercase;
   }
`