import styled from "styled-components"
import { rgba } from "polished"

import { Colors, Fonts } from "@constants"

export const Container = styled.div`
  background: ${Colors.Haity};
  img {
    display: block;
  }
`

export const Header = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: stretch;
  align-items: center;
`

export const PosterTextBg = styled.div`
  width: 60%;
  position: absolute;
  z-index: 1;
  user-select: none;
  top: 90px;
  left: 16px;
`

export const PhotoshopTextBg = styled.div`
  width: 80%;
  position: absolute;
  z-index: 1;
  user-select: none;
  bottom: 90px;
  right: 16px;
`

export const IntroLeft = styled.div`
  width: 50%;
  padding-left: 5%;
`

export const IntroRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  position: relative;
`

export const Avatar = styled.div`
  width: 70%;
  img {
    width: 100%;
  }
`

export const Square = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  border: 4px solid ${props => props.borderColor || "#5087f7"};
  border-radius: 4px;
  background: ${rgba("white", 0.08)};
  backdrop-filter: blur(4px);
`

export const Circle = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  border: 4px solid #e6606c;
  border-radius: 999px;
  background: ${rgba("white", 0.08)};
  backdrop-filter: blur(4px);
`

export const SquareGradient = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  background: linear-gradient(270deg, #6357f6 0%, #e6606c 100%),
    linear-gradient(180deg, #4d4f95 0%, #2b2d66 100%);
  box-sizing: border-box;
  box-shadow: 0px 24px 48px rgba(0, 1, 44, 0.16);
  border-radius: 8px;
`

export const PlusFilled = styled.div`
  position: relative;
  width: ${props => props.size};
  height: ${props => props.size};
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
  margin-left: 20%;
  display: inline-block;
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
