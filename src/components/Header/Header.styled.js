import styled from "styled-components"

export const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  padding: 24px 6vw 0;
`

export const StyledLogoContainer = styled.div`
  img {
    width: 160px;
  }
`

export const StyledMenuContainer = styled.div`
  display: flex;
  align-items: center;
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li:not(:last-child) {
    padding-right: 66px;
  }

  a {
    display: block;
    color: white;
    text-decoration: none;
    font-size: 16px;
  }
`