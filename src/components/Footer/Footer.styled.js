import styled from "styled-components"
import { Fonts } from "@constants"

export const Container = styled.footer`
  padding: 50px calc((100vw - 1200px) / 2);
`

export const SectionTop = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 80px;
`

export const SocialList = styled.ul`
  padding: 0;
  margin: 36px 0 0;
  list-style: none;
  display: flex;
  column-gap: 32px;
  a {
    display: block;
  }
  img {
    display: block;
  }
`

export const LogoImage = styled.img`
  width: 270px;
  display: block;
`

export const FooterTitle = styled.h2`
  font-family: ${Fonts.Secondary};
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.25;
  color: white;
  position: relative;
  margin: 0 0 32px 0;
  padding-bottom: 16px;
  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 5px;
    background: white;
  }
`

export const FooterList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const FooterListItem = styled.li`
  a {
    font-family: ${Fonts.Secondary};
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 1.25;
    color: white;
    text-decoration: none;
    margin-bottom: 24px;
    display: inline-block;
  }
`
