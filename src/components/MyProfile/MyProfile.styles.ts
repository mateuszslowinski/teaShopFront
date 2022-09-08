import styled from "styled-components";
import {appColors} from "../../constants/appColoros";
import {ColumnContainer, RowContainer} from "../../constants/Layouts/FlexDirection.styles";

export const MyProfileContainer = styled(ColumnContainer)`
  width: 50%;
  padding: 20px;
  margin:30px auto;
  min-height: 60vh;
  text-align: center;


  & div {
    padding: 30px;
    background-color: ${appColors.dimBlue};
    border-radius: 10px;
  }

  & h2 {
    font-size: 3.5rem;
    background-color: transparent;
    color: ${appColors.primary}
  }

  & p {
    background-color: transparent;
    color: ${appColors.primary};
    padding: 10px;
    font-size: 1.4rem;
  }
`

export const DetailsContainer = styled(RowContainer)`
  margin-top: 40px;
  justify-content: space-evenly;
  align-self: center;
  width: 100%;
  border-radius: 10px;

  & a {
    text-decoration: none;
  
  }
`

export const ButtonBox = styled.button`
  width: 160px;
  height: 160px;
  cursor: pointer;
  display: flex;
  background-color: ${appColors.grandpaOrange};
  align-items: center;
  overflow: hidden;
  margin: 10px;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  transition: 0.5s;

  :hover {
    background-color: ${appColors.primary};
    color: ${appColors.secondary};
    & p{
      color: ${appColors.secondary};
    }
  }

  & svg {
    width: 50px;
    height: 50px;
    background-color: transparent;
  }

  & p {
    font-size: 1.5rem;
    color: ${appColors.primary};
    font-weight: 520;
  }



`