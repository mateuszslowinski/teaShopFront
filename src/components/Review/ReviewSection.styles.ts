import styled from "styled-components";
import {appColors} from "../../constants/appColoros";
import { RowContainer} from "../../constants/Layouts/FlexDirection.styles";

export const ReviewSectionContainer = styled(RowContainer)`
  justify-content: space-between;
  width: 80%;
`

export const WriteReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: self-start;
  flex-wrap: wrap;
  background-color: ${appColors.dimBlue};
  color: ${appColors.primary};
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 20px;

  & h4 {
    font-size: 1.8rem;
    background-color: transparent;
    margin-bottom: 10px;
  }

  & p {
    font-size: 1.5rem;
    background-color: transparent;
    margin-bottom: 2px;
  }

  & select {
    width: 100%;
    background-color: ${appColors.secondary};
    border: none;
    font-size: 1.5rem;
    margin-bottom: 10px;

    & option {
      background-color: transparent;
      font-size: 1.5rem;
    }
  }

  & textarea {
    background-color: ${appColors.secondary};
    color: ${appColors.primary};
    border: none;
    font-size: 1.5rem;
  }

  & Button {
    width: 100%;
    margin: 10px 0 0;
  }
`
