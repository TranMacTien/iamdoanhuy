import styled, { css } from "styled-components"

import { ButtonBase } from "components/Common.styled"
import { Fonts, Colors } from "@constants"

export const IntroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: ${Colors.TextPrimary};
  padding: 0 6vw 6vw;
  box-sizing: border-box;
`

export const IntroTitle = styled.h1`
  margin: 0;
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1em;
  padding-left: 32px;
`

export const IntroDesc = styled(IntroTitle)`
  margin-left: 20%;
  padding-left: 0;
  span {
    display: inline-block;
    &:last-child {
      transform: translateX(60px);
    }
  }
`

export const IntroSocialListWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const IntroSocialList = styled.ul`
  margin: 24px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  column-gap: 32px;
  justify-content: flex-end;
  position: relative;
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 120px;
    height: 2px;
    background: ${Colors.TextPrimary};
  }
  &:before {
    right: calc(100% + 32px);
    top: 50%;
  }
  &:after {
    transform: rotate(90deg);
    transform-origin: 100% 50%;
    bottom: calc(100% + 32px);
    right: 0;
  }
  img {
    display: block;
    height: 32px;
  }
`

export const IntroSlogan = styled.h2`
  margin: 24px 0;
  span {
    font-family: ${Fonts.Secondary};
    font-style: normal;
    font-weight: 800;
    font-size: 120px;
    line-height: 146px;
    position: relative;
    display: inline-block;
    padding-left: 32px;
    &:before {
      content: "";
      position: absolute;
      display: block;
      width: 6px;
      height: 50%;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      background: ${Colors.TextPrimary};
    }
    &:first-child {
    }
    &:last-child {
      font-size: 150px;
      margin-left: 90px;
      padding-right: 48px;
      &:before {
        top: 60%;
        left: auto;
        right: 0;
      }
    }
  }
`

export const HomeBlockSecondaryContainer = styled.section`
  padding: 100px 6vw;
  background: url(${props => props.background}) center/cover no-repeat;
  display: flex;
  align-items: center;
  column-gap: 32px;
`

export const HomeBlockSecondaryImage = styled.img`
  max-width: ${props => props.imageWidth || 400}px;
  width: 100%;
  display: block;
  margin: 0 auto;
`

export const HomeBlockSecondaryTitle = styled.h2`
  font-family: ${Fonts.Secondary};
  font-style: normal;
  font-weight: 800;
  font-size: 60px;
  line-height: 1.25;
  color: ${Colors.TextPrimary};
  margin: 0 0 32px 0;
  position: relative;
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 5px;
    height: 60%;
    background: ${Colors.TextPrimary};
    top: 50%;
    transform: translateY(-50%);
    ${props =>
      props.type === "primary"
        ? css`
            left: -32px;
          `
        : css`
            right: -32px;
          `}
  }
`

export const HomeBlockSecondaryDesc = styled.div`
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    color: ${Colors.TextPrimary};
    margin: 0 0 1rem 0;
    max-width: 550px;
  }
`

export const HomeBlockLeft = styled.div`
  width: 50%;
  order: ${props => (props.type === "primary" ? 1 : 3)};
`

export const HomeBlockRight = styled.div`
  width: 50%;
  order: 2;
`

export const HomeBlockSecondaryContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props =>
    props.type === "primary" ? "flex-start" : "flex-end"};
  text-align: ${props => (props.type === "primary" ? "left" : "right")};
`

export const HomeBlockSecondaryCTA = styled(ButtonBase)`
  margin-top: 32px;
`

export const SliderContainer = styled.div`
  padding: 20px 0;
`

export const SliderImageWrapper = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 100%;
`

export const SliderImage = styled.img`
  position: absolute;
  width: 100%;
  display: block;
  top: 0;
  left: 0;
  height: 100%;
  object-fit: cover;
`
