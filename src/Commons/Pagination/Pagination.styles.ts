import styled from "styled-components";
import {appColors} from "../../constants/appColoros";


export const StyledPaginateContainer = styled.div`
  background-color: ${appColors.iceCold};
  width: 50vw;
  padding: 10px;
  margin: 10px;

  & ul {
    display: flex;
    justify-content: center;
    background-color: ${appColors.iceCold};
    list-style: none;
  }

  & a {
    padding: 10px;
    margin: 8px;
    border-radius: 5px;

    color: ${appColors.primary};
    font-size: 2rem;
    cursor: pointer;

    :hover {
      color:${appColors.primary};
      background-color: ${appColors.secondary};
    }
  }

  & li {
    background-color: transparent;
  }

  .paginationActive a {
    color:${appColors.primary};
    background-color: ${appColors.secondary};
  }
`