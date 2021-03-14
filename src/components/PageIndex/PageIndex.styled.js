import { Colors } from "constants"
import styled from "styled-components"

export const StyledIntroContainer = styled.section`
  background: ${Colors.Primary};
  min-height: 100vh;
  display: flex;
  align-items: center;
  color: white;
  padding: 0 6vw;
  font-size: 60px;
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    line-height: 78px;
    letter-spacing: -0.02em;
    margin: 0 0 20px 0;
  }

  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 100px;
    line-height: 130px;
    letter-spacing: -0.02em;
    margin: 0;
  }
`

export const StyledPortfolioContainer = styled.section`
  padding: 32px 6vw;
  background: ${Colors.Primary};
`

export const StyledPortfolioWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 32px -12px;
  width: calc(100% + 24px);
`

export const StyledPortfolioItemWrapper = styled.div`
  width: calc(100% / 3);
  padding: 12px;
  box-sizing: border-box;
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
