import styled from "styled-components";
import {appColors} from "../../constants/appColoros";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${appColors.primary};
  text-align: center;
  padding: 10px 0 ;
  margin: 0 auto;
  
  & p {
    color: ${appColors.secondary};
    background-color: transparent;
    font-size: 1.2rem;
  }
`