import styled from "styled-components";
import {ColumnContainer} from "../../../constants/Layouts/FlexDirection.styles";
import {appColors} from "../../../constants/appColoros";

export const ShowsReviewSection = styled(ColumnContainer)`
  background-color: ${appColors.dimBlue};
  align-items: self-start;
  padding: 20px;
  flex-wrap: wrap;
  margin: 5px;
  width: 50%;
  border-radius: 20px;


  & h5, p, div, h6 {
    font-size: 1.4rem;
    color: ${appColors.primary};
    background-color: transparent;
  }

  & h5 {
    font-size: 1.7rem;
    margin-top: 10px;
  }

  & h6 {
    font-size: 1.2rem;
    margin-bottom: 4px;
  }
}

& p {
  margin-bottom: 5px
}

p {
  background-color: ${appColors.grandpaOrange};
  padding: 5px;
  margin-top: 5px;
  border-radius: 10px;
}

& .star-container {
  padding: 0 !important;
  margin: 0;

  & svg {
    background-color: transparent;
  }
`