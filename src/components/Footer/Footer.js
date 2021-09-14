import React from "react"
import { Link } from "gatsby"

import Logo from "images/logo-2.svg"
import LogoYoutube from "images/logo-youtube.svg"
import LogoFacebook from "images/logo-facebook.svg"
import LogoTiktok from "images/logo-tiktok.svg"
import LogoInsta from "images/logo-insta.svg"

import * as Styled from "./Footer.styled"

function Footer(props) {
  return (
    <Styled.Container>
      <Styled.SectionTop>
        <div>
          <Styled.LogoImage src={Logo} alt="I AM DOAN HUY" />
          <Styled.SocialList>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCitrOi2Xi4YbsYZ9PUfXuPg">
                <img src={LogoYoutube} alt="youtube" />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/doanhuyposter">
                <img src={LogoFacebook} alt="facebook" />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@iamdoanhuy">
                <img src={LogoTiktok} alt="tiktok" />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/iamdoanhuy/">
                <img src={LogoInsta} alt="instagram" />
              </a>
            </li>
          </Styled.SocialList>
        </div>
        <div>
          <Styled.FooterTitle>KHOÁ HỌC</Styled.FooterTitle>
          <Styled.FooterList>
            <Styled.FooterListItem>
              <Link to="/khoa-hoc-offline">Khoá học Offline</Link>
            </Styled.FooterListItem>
            <Styled.FooterListItem>
              <Link to="/khoa-hoc-online">Khoá học Online</Link>
            </Styled.FooterListItem>
          </Styled.FooterList>
        </div>
        <div>
          <Styled.FooterTitle>LIÊN HỆ</Styled.FooterTitle>
          <Styled.FooterList>
            <Styled.FooterListItem>
              <a href="tel: 0968 573 574">Số điện thoại: 0968 573 574</a>
            </Styled.FooterListItem>
            <Styled.FooterListItem>
              <a href="mailto: huyposter.ps@gmail.com">
                Gmail: huyposter.ps@gmail.com
              </a>
            </Styled.FooterListItem>
          </Styled.FooterList>
        </div>
      </Styled.SectionTop>
      <p style={{ color: "white", margin: 0, textAlign: "center" }}>
        ©{new Date().getFullYear()} Huy Poster
      </p>
    </Styled.Container>
  )
}

export default Footer
