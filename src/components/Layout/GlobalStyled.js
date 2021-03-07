import { createGlobalStyle } from "styled-components"
import { Fonts } from "constants"

export const GlobalStyled = createGlobalStyle`
  body {
    font-family: ${Fonts.Primary};
  }
`
