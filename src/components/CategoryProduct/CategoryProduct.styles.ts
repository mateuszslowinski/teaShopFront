import styled from "styled-components";
import {appColors} from "../../constants/appColoros";
import {ColumnContainer} from "../../constants/Layouts/FlexDirection.styles";

export const CategoryProductContainer = styled(ColumnContainer)`
  min-height: calc(100vh - 154px);
  justify-content: space-between;
  width: 100%;
  
  & p {
    color: ${appColors.primary};
    text-align: center;
    font-size: 2.5rem;
    background-color: transparent;

    &::first-letter {
      text-transform: uppercase;
    }
  }
`

export const ContentContainer = styled.div`
  background-color: transparent;
  width: 100%;

`

export const DescriptionContainer = styled.div`
  margin-top: 10px;
  background-color: transparent;
  text-align: center;
  
  & h2, p {
    color: ${appColors.primary};

  }

  & h2 {
    font-size: 2.2rem;
    background-color: transparent;
    padding:5px;
    margin:10px 0;

    :first-letter {
      text-transform: uppercase;
    }
  }

  & p {
    padding: 30px;
    margin: 0 20px;
    background-color: ${appColors.dimBlue};
    font-size: 1.6rem;
  }
`