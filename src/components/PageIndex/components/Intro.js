import React from "react"

import ImageTiktok from "images/logo-tiktok.svg"
import ImageYoutube from "images/logo-youtube.svg"
import ImageFacebook from "images/logo-facebook.svg"
import ImageInsta from "images/logo-insta.svg"
import * as Styled from "../PageIndex.styled"

const IconSocial = [
  {
    name: "Tiktok",
    logo: ImageTiktok,
    url: "",
  },
  {
    name: "Youtube",
    logo: ImageYoutube,
    url: "",
  },
  {
    name: "Facebook",
    logo: ImageFacebook,
    url: "",
  },
  {
    name: "Instagram",
    logo: ImageInsta,
    url: "",
  },
]

function Intro(props) {
  const renderIcon = (icon, index) => (
    <li key={index}>
      <a href={icon.url} target="_blank">
        <img src={icon.logo} alt={icon.name} />
      </a>
    </li>
  )

  return (
    <Styled.IntroContainer>
      <div>
        <Styled.IntroTitle>- Iamdoanhuy -</Styled.IntroTitle>
        <Styled.IntroSlogan>
          <span>Create</span>
          <br />
          <span>Share</span>
        </Styled.IntroSlogan>
        <Styled.IntroDesc as="h2">
          <span>- graphic -</span>
          <br />
          <span>- designer -</span>
        </Styled.IntroDesc>

        <Styled.IntroSocialListWrapper>
          <Styled.IntroSocialList>
            {IconSocial.map(renderIcon)}
          </Styled.IntroSocialList>
        </Styled.IntroSocialListWrapper>
      </div>
    </Styled.IntroContainer>
  )
}

export default Intro
