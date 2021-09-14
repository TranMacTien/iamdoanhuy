import React from "react"
import { Link } from "gatsby"

import LogoImage from 'images/logo-2.svg'
import MenuMobile from 'components/MenuMobile'

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
            <Link activeClassName="active" to="/">Trang chủ</Link>
          </li>
          <li>
            <Link activeClassName="active" to="/khoa-hoc-offline">Khoá học Offline</Link>
          </li>
          <li>
            <Link activeClassName="active" to="/khoa-hoc-online">Khoá học Online</Link>
          </li>
          <li>
            <Link activeClassName="active" to="/artwork">Artwork</Link>
          </li>
        </ul>
      </StyledMenuContainer>
      <MenuMobile />
    </StyledContainer>
  )
}

export default Header
