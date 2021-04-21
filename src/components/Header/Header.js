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
            <Link to="/">Trang chu</Link>
          </li>
          <li>
            <Link to="/khoa-hoc">Khoa hoc</Link>
          </li>
          <li>
            <Link to="/artwork">Artwork</Link>
          </li>
          <li>
            <Link to="/video">Video</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/tai-mien-phi">Tai mien phi</Link>
          </li>
          <li>
            <Link to="/lien-he">Lien he</Link>
          </li>
        </ul>
      </StyledMenuContainer>
    </StyledContainer>
  )
}

export default Header
