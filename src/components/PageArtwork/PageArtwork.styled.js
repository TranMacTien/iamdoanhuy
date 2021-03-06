import styled from "styled-components"
import media from "styled-media-query"
import { rgba } from "polished"

import { Fonts, Colors } from "@constants"

export const Title = styled.h1`
  font-family: ${Fonts.Primary};
  font-style: normal;
  font-weight: 800;
  color: ${Colors.TextPrimary};
  margin: 0;
  font-size: 48px;
  line-height: 1.3;
  ${media.greaterThan("medium")`
    font-size: 90px;
  `}
`

export const SubTitle = styled.h2`
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  margin: 32px 0 0;
  color: ${Colors.TextPrimary};
  max-width: 614px;
  font-size: 14px;
  ${media.greaterThan("medium")`
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
export const SliderImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: all 0.6s ease;
    z-index: 2;
    display: block;
  }
  .gatsby-image-wrapper {
    transition: all 0.6s ease;
    will-change: transform;
  }
  &:hover {
    &:after {
      background: ${rgba(Colors.Primary, 0.6)};
    }
    .gatsby-image-wrapper {
      transform: scale3d(1.05, 1.05, 1);
    }
  }
`
