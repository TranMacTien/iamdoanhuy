import React from "react"
import { Link } from "gatsby"

import LogoImage from 'images/logo-2.svg'

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
            <Link activeClassName="active" to="/khoa-hoc">Khoá học</Link>
          </li>
          {/* <li>
            <Link activeClassName="active" to="/khoa-hoc-online">Khoá học online</Link>
          </li> */}
          <li>
            <Link activeClassName="active" to="/artwork">Artwork</Link>
          </li>
          {/* <li>
            <Link activeClassName="active" to="/blog">Blog</Link>
          </li> */}
          {/* <li>
            <Link activeClassName="active" to="/tai-mien-phi">Tải miễn phí</Link>
          </li> */}
          {/* <li>
            <Link activeClassName="active" to="/lien-he">About</Link>
          </li> */}
        </ul>
      </StyledMenuContainer>
    </StyledContainer>
  )
}

export default Header
