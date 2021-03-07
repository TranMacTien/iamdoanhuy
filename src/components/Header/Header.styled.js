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
  padding: 0 4vw;
`

export const StyledLogoContainer = styled.div`
  img {
    width: 74px;
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
    padding-right: 50px;
  }

  a {
    display: block;
    color: white;
    text-decoration: none;
  }
`