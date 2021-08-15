import styled, { css } from "styled-components"
import media from "styled-media-query"

import { desktopUp, tabletUp } from "utils/media"
import { ButtonBase } from "components/Common.styled"
import BackgroundMobile1 from "images/background-wave-mobile.svg"
import BackgroundMobile2 from "images/background-wave-mobile-2.svg"
import BackgroundMobile3 from "images/background-wave-mobile-3.svg"

export const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`

export const Title = styled.h2`
  color: #858de3;
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
  margin: 0 0 8px 0;
  text-align: center;
  ${tabletUp`
    text-align: left;
  `}
`
export const SubTitle = styled.h3`
  color: white;
  font-weight: bold;
  font-size: 28px;
  line-height: 150%;
  text-align: center;
  padding-bottom: 16px;
  margin: 0 0 16px 0;
  position: relative;
  ${tabletUp`
    text-align: left;
    font-size: 32px;
  `}
  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 64px;
    margin-left: -32px;
    height: 1px;
    background: #b93975;
    ${tabletUp`
      left: 0;
      margin-left: 0;
    `}
  }
`

export const Text = css`
  color: white;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  margin: 0 0 1rem 0;
  ${tabletUp`
    font-size: 18px;
  `}
`

export const Desc = styled.p`
  ${Text}
`

export const CtaButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  ${tabletUp`
    justify-content: flex-start;
  `}
`

export const CtaButton = styled(ButtonBase)`
  margin-top: 24px;
`

export const List = styled.ul`
  margin: 0;
  padding: 0 0 0 1rem;
  li {
    ${Text}
  }
`

export const Group = styled.div`
  padding: 0 24px;
  ${tabletUp`
    padding: 40px 24px 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    &>* {
      max-width: 600px;
      width: 50%;
    }
  `}
`

export const GroupFirst = styled(Group)`
  background: url("${BackgroundMobile1}") bottom center no-repeat;
  background-size: 100% auto;
`

export const GroupTextWrapper = styled.div`
  ${tabletUp`
    order: ${props => props.order || 1};
    margin-right: ${props => props.gap?.md || 0}px;
  `}
`

export const GroupSecond = styled(Group)`
  background: url("${BackgroundMobile3}") bottom center no-repeat;
  background-size: 100% auto;
`

export const GroupThird = styled(Group)`
  background: url("${BackgroundMobile2}") bottom center no-repeat;
  background-size: 100% auto;
`

export const GroupWrapper1 = styled.div`
  padding: 100px 0 80px;
  ${tabletUp`
    order: 1;
    padding: 0;
  `}

  ${desktopUp`
    display: flex;
    flex-wrap: wrap;
    padding-right: 76px;
    gap: 24px;
    &>* {
      width: calc(50% - 24px);
    }
  `}
`

export const GroupWrapper2 = styled.div`
  padding: 80px 0 60px;
  ${tabletUp`
    order: 2;
    padding: 0;
  `}
`

export const GroupWrapper3 = styled.div`
  padding: 80px 0 60px;
  ${tabletUp`
    order: 1;
    padding: 0;
  `}
`

export const ImageGroupFirst = styled.div`
  position: relative;
  ${tabletUp`
    max-width: 80%;
  `}
  ${desktopUp`
    margin-bottom: 48px;
    ${props =>
      props.secondary &&
      css`
        transform: translateY(120px);
      `}
  `}
  ${media.lessThan("large")`
    ${props =>
      props.secondary &&
      css`
        display: none;
      `}
  `}
  img {
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.29);
  }
`

export const ImageGroupSecond = styled(ImageGroupFirst)`
  ${tabletUp`
    max-width: 100%;
  `}
`

export const ImageGroupThird = styled(ImageGroupFirst)``

export const PosterChi = styled.div`
  position: absolute;
  top: -10%;
  left: 40%;
  width: 60%;
  ${desktopUp`
    width: 100%;
    position: static;
  `}
`

export const PosterBMT = styled.div`
  width: 60%;
  ${desktopUp`
    width: 100%;
    margin-bottom: 24px;
  `}
`

export const PosterSonTung = styled.div`
  width: 52%;
  padding-top: 40%;
  padding-bottom: 30%;
  position: relative;
  z-index: 2;
`
export const PosterDenVau = styled.div`
  position: absolute;
  top: 0%;
  left: 30%;
  width: 52%;
  z-index: 1;
`
export const PosterJack = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 52%;
  z-index: 3;
`

export const PosterNeymar = styled.div`
  position: absolute;
  bottom: 0;
  left: 35%;
  width: 55%;
  z-index: 3;
`

export const PosterMessi = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 55%;
  z-index: 1;
`

export const PosterRonaldo = styled.div`
  width: 55%;
  padding-top: 40%;
  padding-bottom: 30%;
  position: relative;
  z-index: 2;
`
