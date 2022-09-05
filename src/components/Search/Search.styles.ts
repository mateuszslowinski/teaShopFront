import styled from "styled-components";
import {RowContainer} from "../../constants/Layouts/FlexDirection.styles";
import {appColors} from "../../constants/appColoros";

export const SearchContainer = styled(RowContainer)`


`

export const SearchMessage = styled.div`
  font-size: 2rem;
  color: ${appColors.primary};
  background-color: transparent;
  padding: 40px;
  margin: 10px;
  height: 50vh;
`