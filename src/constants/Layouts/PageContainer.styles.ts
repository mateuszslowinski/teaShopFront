import styled from "styled-components";
import {appColors} from "../appColoros";
import {screenSize} from "../mediaQueries";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1400px;
  min-height: calc(100vh - 154px);
  margin: 10px auto;
  color: ${appColors.secondary};
  background-color: ${appColors.backColor};

  ${screenSize.lg} {
    width: 90%;
    border-radius: 20px;
  }

`