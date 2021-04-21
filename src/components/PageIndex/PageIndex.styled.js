import styled from "styled-components"

import { Colors, Fonts } from "@constants"
import HomeImage from "images/home.jpeg"

export const IntroContainer = styled.section`
  background: url(${HomeImage}) center/cover no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
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

export const IntroSocialList = styled.ul`
  margin: 24px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  column-gap: 32px;
  justify-content: flex-end;
  img {
    display: block;
    min-width: 32px;
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
      background: white;
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

export const StyledPortfolioContainer = styled.section`
  padding: 32px 6vw;
  background: ${Colors.Primary};
`

export const StyledCourseSection = styled.section`
  padding: 56px 6vw 90px;
`

export const StyledCourseContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 42px rgba(0, 0, 0, 0.16);
  border-radius: 28px;
  padding: 32px;
  margin: 56px auto 0;
  box-sizing: border-box;
  max-width: 950px;
`

export const StyledCourseWrapper = styled.div``

export const StyledCourseImage = styled.img`
  width: 100%;
`
export const StyledCourseTitle = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 39px;
  color: ${Colors.Primary};
  margin: 44px 0 12px 0;
  text-align: center;
`

export const StyledCourseLink = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  color: ${Colors.Primary};
  text-decoration: none;
`
