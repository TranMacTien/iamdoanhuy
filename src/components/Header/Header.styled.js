import styled from "styled-components"
import media from "styled-media-query"

import { Fonts } from "@constants"

export const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  padding: 0 6vw;
  height: 60px;
  ${media.greaterThan("medium")`
    height: 90px;
  `}
`

export const StyledLogoContainer = styled.div`
  img {
    width: 120px;
    ${media.greaterThan("medium")`
      width: 160px;
  `}
  }
`

export const StyledMenuContainer = styled.div`
  display: none;
  ${media.greaterThan("medium")`
    display: flex;
    align-items: center;
    ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      column-gap: 48px;
    }

    a {
      display: block;
      color: white;
      text-decoration: none;
      font-size: 16px;
      font-weight: 500;
      font-family: ${Fonts.Secondary};
      position: relative;
      &.active {
      }
    }
  `}
`
