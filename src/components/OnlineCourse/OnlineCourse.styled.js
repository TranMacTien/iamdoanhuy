import styled, { css } from "styled-components"
import { rgba } from "polished"
import media from "styled-media-query"

import { Colors, Fonts } from "@constants"

const getPartialSize = props => {
  return css`
    width: ${props.size.sm};
    height: ${props.size.sm};
    ${media.greaterThan("medium")`
      width: ${props.size.md};
      height: ${props.size.md};
    `}
    ${media.greaterThan("large")`
      width: ${props.size.lg};
      height: ${props.size.lg};
    `}
  `
}

export const Container = styled.div`
  background: ${Colors.Haity};
  img {
    display: block;
  }
`

export const Header = styled.section`
  position: relative;
  padding: 90px 24px;
  ${media.greaterThan("medium")`
    padding: 0;
    display: flex;
    justify-content: stretch;
    align-items: center;
    min-height: 60vh;
  `}
  ${media.greaterThan("large")`
    min-height: 100vh;
  `}
`

export const PosterTextBg = styled.div`
  position: absolute;
  z-index: 1;
  user-select: none;
  top: 90px;
  left: 16px;
  width: 80%;
  ${media.greaterThan("medium")`
    width: 60%;
  `}
`

export const PhotoshopTextBg = styled.div`
  width: 100%;
  position: absolute;
  z-index: 1;
  user-select: none;
  bottom: 30px;
  left: 0;
  padding: 24px;
  ${media.greaterThan("medium")`
    padding: 0;
    left: auto;
    right: 16px;
    bottom: 90px;
    width: 80%;
  `}
`

export const IntroLeft = styled.div`
  position: relative;
  z-index: 2;
  ${media.greaterThan("medium")`
    order: 1;
    padding-left: 5%;
    width: 50%;
  `}
`

export const IntroRight = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  margin: 0 -24px;
  ${media.greaterThan("medium")`
    margin: 0;
    order: 2;
    width: 50%;
  `}
  [class^="anime-intro"] {
    opacity: 0;
  }
`

export const Avatar = styled.div`
  width: 70%;
  ${media.greaterThan("medium")`
    width: 70%;
  `}
  &>img {
    width: 100%;
  }
`

export const Square = styled.div`
  ${getPartialSize}
  border: 4px solid ${props => props.borderColor || "#5087f7"};
  border-radius: 4px;
  background: ${rgba("white", 0.08)};
  backdrop-filter: blur(4px);
`

export const Circle = styled.div`
  ${getPartialSize}
  border: 4px solid #e6606c;
  border-radius: 999px;
  background: ${rgba("white", 0.08)};
  backdrop-filter: blur(4px);
  overflow: hidden;
`

export const PlusFilled = styled.div`
  position: relative;
  ${getPartialSize}
  &:before,
  &:after {
    content: "";
    display: block;
    width: 8px;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    background: #ad47bf;
  }
  &:after {
    transform: translate(-50%, -50%);
  }
  &:before {
    transform: translate(-50%, -50%) rotate(90deg);
  }
`

export const CTABlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  ${media.greaterThan("medium")`
    margin-left: 20%;
    display: inline-block;
  `}
`

export const Pricing = styled.p`
  font-size: 18px;
  color: white;
  font-family: ${Fonts.Secondary};
  del {
    font-weight: 300;
    opacity: 0.6;
    font-size: 80%;
  }
  span {
    font-weight: 700;
  }
`

export const MainSubTitle = styled.img`
  width: 80%;
  margin-bottom: 16px;
  opacity: 0;
  ${media.greaterThan("medium")`
    width: 40%;
  `}
`

export const SubTitle = styled.img`
  margin-left: 20%;
  opacity: 0;
  width: 80%;
  margin-bottom: 24;
  ${media.greaterThan("medium")`
    width: 60%;
    margin-bottom: 54;
  `}
`

export const PartialTriangle = styled.img`
  width: 9vw;
  ${media.greaterThan("medium")`
    width: 6vw;
  `}
  ${media.greaterThan("large")`
    width: 3vw;
  `}
`

export const PartialPlus = styled.img`
  width: 9vw;
  ${media.greaterThan("medium")`
    width: 6vw;
  `}
  ${media.greaterThan("large")`
    width: 1.5vw;
  `}
`

export const SquareGradient = styled.img`
  width: 10vw;
  ${media.greaterThan("medium")`
    width: 6vw;
  `}
  ${media.greaterThan("large")`
    width: 6vw;
  `}
`
