import { NavLink} from "react-router-dom";
import styled from "styled-components";
import {appColors} from "../../constants/appColoros";
import {ColumnContainer} from "../../constants/Layouts/FlexDirection.styles";
import {screenSize} from "../../constants/mediaQueries";
import {FaShoppingBag} from 'react-icons/fa'


export const HeaderContainer = styled(ColumnContainer)`
  width: 100%;
  background-color: ${appColors.dimBlue};
  border-radius: 10px;
  padding: 5px;
  margin: 20px auto 0;
  
  ${screenSize.sm} {
    flex-direction: row;
    justify-content: space-between;
  }

  ${screenSize.md} {
      width: 90%;
  }
  
  & ul {
    display: flex;
    margin: 10px;
    list-style: none;
    background-color: transparent;
  }

  & li {
    margin-right: 5px;
    background-color: transparent;
  }

  & div,label,form {
    margin: 5px;
    background-color: transparent;
  }
  

  & input {
    margin-right: 5px;
    padding: 5px;
    border: none;
    color: ${appColors.primary};
    border-radius: 5px;
    font-size: 1.6rem;
    background-color: ${appColors.secondary};
  }
`
export const LinkMenu = styled(NavLink)`
  background-color: transparent;
  color: ${appColors.primary};
  font-size: 1.6rem;
  margin: 5px;
  text-decoration: none;
  transition: .4s;

  &:hover {
    color: ${appColors.electricRed};
    border-bottom: 1px solid ${appColors.electricRed};
  }
`

export const BasketIcon = styled(FaShoppingBag)`
  margin-left: 5px;
  color: ${appColors.primary};
  font-size: 2rem;
  background-color: transparent;
`