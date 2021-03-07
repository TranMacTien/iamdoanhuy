import React from "react"
import { Link } from "gatsby"

import { StyledContainer, StyledLogoContainer, StyledMenuContainer } from "./Header.styled"

function Header(props) {
  return (
    <StyledContainer>
      <StyledLogoContainer>
        <img src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="" />
      </StyledLogoContainer>

      <StyledMenuContainer>
        <ul>
          <li>
            <Link to="/portfolio">PORTFOLIO</Link>
          </li>
          <li>
            <Link to="/khoa-hoc">KHOA HOC</Link>
          </li>
          <li>
            <Link to="/tai-lieu-mien-phi">TAI LIEU MIEN PHI</Link>
          </li>
          <li>
            <Link to="/lien-he">LIEN HE</Link>
          </li>
        </ul>
      </StyledMenuContainer>
    </StyledContainer>
  )
}

export default Header
