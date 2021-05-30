import { createGlobalStyle } from "styled-components"
import { Fonts } from "@constants/Fonts"

export const GlobalStyled = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    font-family: ${Fonts.Primary};
    margin: 0;
    padding: 0;
    max-width: 100%;
    overflow-x: hidden;
    font-smooth: always;
    -webkit-text-size-adjust: 100%;
    font-weight: 400;
    background: black;
    font-size: 18px;
    letter-spacing: 0.3px;
    font-size: 18px;
    &.noscroll {
      overflow: hidden;
    }
  }
  .react-parallax-bgimage {
    will-change: transform;
  }
`
