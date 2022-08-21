import styled from "styled-components";
import {appColors} from "../../constants/appColoros";

export const LoadingSpinnerContainer = styled.div`
  width: 100%;
  min-height: 70vh;
  background-color: ${appColors.dimBlue};
  display: flex;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`

export const Spinner = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  overflow: hidden;
  background-color: transparent;
  color: ${appColors.primary};
  position: relative;
  animation: text-color 2s ease-in-out infinite;

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes text-color {
    0%, 100% {
      color: rgb(0, 0, 0, 1);
    }
    25%, 75% {
      color: rgb(0, 0, 0, .5);
    }
    50% {
      color: rgb(0, 0, 0, .1);
    }
`

export const SpinnerSector = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 15px solid transparent;
  mix-blend-mode: overlay;
  animation: rotate var(--duration) var(--timing) infinite;
  pointer-events: none;
`

export const RedSpinnerSection = styled(SpinnerSector)`
  border-top-color: ${appColors.electricRed};
  --duration: 1.5s;
  --timing: ease-in-out;
`
export const BlueSpinnerSection = styled(SpinnerSector)`
  border-left-color: ${appColors.brutalBlue};
  --duration: 2s;
  --timing: ease-in;
`
export const GreenSpinnerSection = styled(SpinnerSector)`
  border-right-color: ${appColors.deepGreen};
  --duration: 2.5s;
  --timing: ease-out;
`