import styled from "styled-components";
import {RowContainer} from "../../constants/Layouts/FlexDirection.styles";
import {appColors} from "../../constants/appColoros";

export const SearchContainer = styled(RowContainer)`
& h2 {
    width: 100%;
    text-align: center;
    margin-top: 20px;
    font-size: 2.5rem;
    background-color: transparent;
    color: ${appColors.primary};
}
`
export const SearchMessage = styled.div`
  font-size: 2rem;
  color: ${appColors.primary};
  background-color: transparent;
  padding: 40px;
  margin: 10px auto;
  height: 50vh;
`