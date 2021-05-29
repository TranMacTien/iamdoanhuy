import React from "react"
import { Parallax } from "react-parallax";

import ImageTiktok from "images/logo-tiktok.svg"
import ImageYoutube from "images/logo-youtube.svg"
import ImageFacebook from "images/logo-facebook.svg"
import ImageInsta from "images/logo-insta.svg"
import ImageHome from "images/home.jpeg"
import * as Styled from "../PageIndex.styled"

const IconSocial = [
  {
    name: "Tiktok",
    logo: ImageTiktok,
    url: "https://www.tiktok.com/@iamdoanhuy",
  },
  {
    name: "Youtube",
    logo: ImageYoutube,
    url: "https://www.youtube.com/channel/UCitrOi2Xi4YbsYZ9PUfXuPg",
  },
  {
    name: "Facebook",
    logo: ImageFacebook,
    url: "https://www.facebook.com/iamdoanhuyy",
  },
  {
    name: "Instagram",
    logo: ImageInsta,
    url: "https://www.instagram.com/iamdoanhuy/",
  },
]

function Intro(props) {
  const renderIcon = (icon, index) => (
    <li key={index}>
      <a href={icon.url} target="_blank" rel="noopener">
        <img src={icon.logo} alt={icon.name} />
      </a>
    </li>
  )

  return (
    <Parallax bgImage={ImageHome} strength={250}>
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
    </Parallax>
  )
}

export default Intro
