import { createGlobalStyle } from "styled-components"
import { Fonts } from "constants/Fonts"

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
  }
`
