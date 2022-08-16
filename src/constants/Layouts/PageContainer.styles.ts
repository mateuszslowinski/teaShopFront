import styled from "styled-components";
import {appColors} from "../appColoros";

export const PageContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   max-width: 1200px;
   margin: 20px auto;
   color: ${appColors.secondary};
   padding: 5px;
  background-color: ${appColors.backColor};
  
`