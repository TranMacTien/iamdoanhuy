import styled from "styled-components"
import media from "styled-media-query";

import { Fonts } from "@constants"

export const Title = styled.h1`
  font-family: ${Fonts.Secondary};
  font-style: normal;
  font-weight: 800;
  color: white;
  margin: 0;
  font-size: 48px;
  line-height: 1.3;
  ${media.greaterThan('medium')`
    font-size: 90px;
  `}
`

export const SubTitle = styled.h2`
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  margin: 32px 0 0;
  color: white;
  max-width: 614px;
  font-size: 14px;
  ${media.greaterThan('medium')`
    font-size: 16px;
  `}
`

export const Container = styled.div`
  padding: 90px 6vw 60px;
  position: relative;
  section {
    position: relative;
    z-index: 1;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: rgb(23 0 31 / 60%);
  }
`
