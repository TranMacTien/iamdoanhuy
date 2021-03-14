import React from "react"

import Logo from "images/logo-2.svg"
import LogoYoutube from "images/logo-youtube.svg"
import LogoFacebook from "images/logo-facebook.svg"
import LogoTiktok from "images/logo-tiktok.svg"
import {
  StyledContainer,
  StyledSectionBottom,
  StyledSectionBottomItem,
  StyledSectionTop,
  StyledSocialList,
} from "./Footer.styled"

function Footer(props) {
  return (
    <StyledContainer>
      <StyledSectionTop>
        <div>
          <img src={Logo} alt="I AM DOAN HUY" />
        </div>
        <div>
          <StyledSocialList>
            <li>
              <a href="">
                <img src={LogoYoutube} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={LogoFacebook} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={LogoTiktok} alt="" />
              </a>
            </li>
          </StyledSocialList>
        </div>
      </StyledSectionTop>
      <div>
        <StyledSectionBottom>
          <StyledSectionBottomItem>
            <a href="mailto: huydoan9825@gmail.com">
              Email: huydoan9825@gmail.com
            </a>
          </StyledSectionBottomItem>
          <StyledSectionBottomItem>
            <a href="tel: 0968573574">Số điện thoại: 0968.573.574</a>
          </StyledSectionBottomItem>
          <StyledSectionBottomItem>
            <a href="https://www.facebook.com/iamdoanhuy" target="_blank">
              Facebook: https://www.facebook.com/iamdoanhuy
            </a>
          </StyledSectionBottomItem>
        </StyledSectionBottom>
      </div>
    </StyledContainer>
  )
}

export default Footer
