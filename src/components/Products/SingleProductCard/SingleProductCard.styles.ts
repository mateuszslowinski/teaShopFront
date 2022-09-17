import styled from "styled-components";
import {appColors} from "../../../constants/appColoros";
import {ColumnContainer,} from "../../../constants/Layouts/FlexDirection.styles";

export const ProductCardContainer = styled(ColumnContainer)`
  background-color: ${appColors.secondary};
  margin: 10px;
  padding: 10px;
  width: 20%;

  & a {
    text-decoration: none;
    margin: 4px;

    :first-letter {
      text-transform: uppercase;
    }
  }

  & h2, div, span, p, a {
    background-color: transparent;
    color: ${appColors.primary};
    font-size: 1.6rem;
  }

  & h2 {
    margin: 5px;
    font-size: 1.8rem;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  & span {
    padding: 0;
    margin: 0 0 0 10px;
  }

  & :first-of-type div {
    align-self: center;
  }

  & div {
    display: flex;
    justify-content: center;

    & p {
      align-self: center;
      font-size: 1.5rem;
    }
  }

  & div.star-container {
    padding: 0 !important;
    margin: 0 !important;

    & svg {
      background-color: transparent;
    }
  }
`

export const ImgProduct = styled.img`
  width: 220px;
  height: 160px;
`

