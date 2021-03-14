import React from "react"
import { Link } from "gatsby"

import LogoImage from 'images/logo.svg'

import { StyledContainer, StyledLogoContainer, StyledMenuContainer } from "./Header.styled"

function Header(props) {
  return (
    <StyledContainer>
      <StyledLogoContainer>
        <Link to="/">
          <img src={LogoImage} alt="I am Doan Huy" />
        </Link>
      </StyledLogoContainer>

      <StyledMenuContainer>
        <ul>
          <li>
            <Link to="/portfolio">PORTFOLIO</Link>
          </li>
          <li>
            <Link to="/khoa-hoc">KHOÁ HỌC</Link>
          </li>
          <li>
            <Link to="/tai-lieu-mien-phi">TÀI LIỆU MIỄN PHÍ</Link>
          </li>
          <li>
            <Link to="/lien-he">LIÊN HỆ</Link>
          </li>
        </ul>
      </StyledMenuContainer>
    </StyledContainer>
  )
}

export default Header
