import {createGlobalStyle} from "styled-components";
import {appColors} from "./constants/appColoros";


export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
    font-size: 10px;
    background-color: ${appColors.pageBackgroundColor};
  }

  #root {
    margin: 0 auto;
  }
`