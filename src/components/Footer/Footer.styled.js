import styled from "styled-components"
import media from "styled-media-query"

import { Fonts, Colors } from "@constants"

export const Container = styled.footer`
  padding: 32px 6vw;
  ${media.greaterThan("medium")`
    padding: 50px calc((100vw - 1200px) / 2);
  `}
`

export const SectionTop = styled.div`
  margin-bottom: 80px;
  ${media.greaterThan("medium")`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    align-items: flex-start;
  `}
`

export const SocialList = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  margin: 36px 0;
  ${media.greaterThan("medium")`
    margin: 36px 0 0;
  `}
  a {
    display: block;
    height: 24px;
    margin-right: 24px;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale3d(1.1, 1.1, 1);
    }
    ${media.greaterThan("medium")`
      margin-right: 32px;
      height: 36px;
    `}
  }
  img {
    height: 100%;
    display: block;
  }
`

export const LogoImage = styled.img`
  width: 200px;
  display: block;
  ${media.greaterThan("medium")`
    width: 270px;
  `}
`

export const FooterTitle = styled.h2`
  font-family: ${Fonts.Primary};
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;
  color: ${Colors.TextPrimary};
  position: relative;
  padding-bottom: 16px;
  font-size: 18px;
  margin: 0 0 16px 0;
  ${media.greaterThan("medium")`
    margin: 0 0 32px 0;
    font-size: 36px;
  `}
  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 5px;
    background: ${Colors.TextPrimary};
  }
`

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
  ${media.greaterThan("medium")`
    margin: 0;
  `}
`

export const FooterListItem = styled.li`
  a {
    font-family: ${Fonts.Primary};
    font-style: normal;
    font-weight: normal;
    line-height: 1.25;
    color: ${Colors.TextPrimary};
    text-decoration: none;
    margin-bottom: 24px;
    display: inline-block;
    font-size: 16px;
    ${media.greaterThan("medium")`
      font-size: 18px;
    `}
  }
`
