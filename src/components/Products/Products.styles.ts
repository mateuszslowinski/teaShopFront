import styled from "styled-components";
import {ColumnContainer} from "../../constants/Layouts/FlexDirection.styles";
import {appColors} from "../../constants/appColoros";


export const ProductsContainer = styled(ColumnContainer)`
  min-height: calc(100vh - 154px);
  padding: 0 10px ;
  justify-content: space-between;
  
  & h1 {
    width: 100%;
    text-align: center;
    margin-top: 20px;
    font-size: 2.5rem;
    background-color: transparent;
    color: ${appColors.primary};
  }
`

export const ProductsSectionContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: transparent;
  margin-bottom: 20px;
  width: 100%;
`
