import styled from "styled-components"
import { Colors } from "@constants"

export const StyledContainer = styled.footer`
  background: ${Colors.Primary};
  padding: 50px calc((100vw - 950px) / 2) 140px;
`

export const StyledSectionTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 80px;
`

export const StyledSectionBottom = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
`

export const StyledSectionBottomItem = styled.li`
  a {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: white;
    text-decoration: none;
  }
`

export const StyledSocialList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(3, 1fr);
  a {
    display: block;
  }
  img {
    display: block;
  }
`