import React, { useEffect, useRef } from "react"
import anime from "animejs"

import ImageAvatar from "images/huy-intro.png"
import ImagePosterText from "images/poster-text-bg.svg"
import ImagePhotoshopText from "images/photoshop-text-bg.png"
import ImageMainSubTitle from "images/khoa-hoc-online-text.png"
import ImageTitle from "images/khoa-hoc-online-text-2.png"
import ImageSubTitle from "images/khoa-hoc-online-text-3.svg"
import ImageTriangle from "images/partials/triangle.svg"
import ImagePlus from "images/partials/plus.svg"
import ImagePhotoshopGradient from "images/partials/photoshop.png"
import { ButtonBase } from "components/Common.styled"
import { MESSENGER } from "constants/urls"

import * as Styled from "./OnlineCourse.styled"

function OnlineCourse(props) {
  const scene = useRef()

  useEffect(() => {
    animeText()
    animeAvatarPartials()
    animeCta()
  }, [])
  return (
    <Styled.Container>
      <Styled.Header>
        <div>
          <Styled.PosterTextBg>
            <img
              src={ImagePosterText}
              width="100%"
              alt="POSTER"
              className="poster-text"
              style={{ opacity: 0 }}
            />
          </Styled.PosterTextBg>
          <Styled.PhotoshopTextBg>
            <img
              src={ImagePhotoshopText}
              alt="PHOTOSHOP"
              className="pts-text"
              style={{ opacity: 0 }}
              width="100%"
            />
          </Styled.PhotoshopTextBg>
        </div>
        <Styled.IntroRight>
          <Styled.Avatar ref={scene} data-relative-input="true">
            <img src={ImageAvatar} alt="Huy Poster" />
            {getPartials().map(({ element: Element, style, rotate }, index) => (
              <div
                key={index}
                style={{
                  ...style,
                  position: "absolute",
                  transform: `translate(-50%, -50%) rotate(${rotate || 0}deg)`,
                }}
              >
                <Element />
              </div>
            ))}
          </Styled.Avatar>
        </Styled.IntroRight>
        <Styled.IntroLeft>
          <Styled.MainSubTitle
            src={ImageMainSubTitle}
            alt="Khoá học Online"
            className="intro-1"
          />
          <h1 style={{ margin: 0 }}>
            <img
              src={ImageTitle}
              style={{ width: "100%", marginBottom: 24, opacity: 0 }}
              alt="Thiết kế Poster với Photoshop"
              className="intro-2"
            />
          </h1>
          <Styled.SubTitle
            src={ImageSubTitle}
            alt="Dành cho người mới bắt đầu"
            className="intro-3"
          />
          <Styled.CTABlock className="anime-pricing" style={{ opacity: 0 }}>
            <Styled.Pricing>
              <del>899.000 đ</del> <span>399.000 đ</span>
            </Styled.Pricing>
            <ButtonBase as="a" href={MESSENGER} target="_blank">
              ĐĂNG KÍ NGAY
            </ButtonBase>
          </Styled.CTABlock>
        </Styled.IntroLeft>
      </Styled.Header>
    </Styled.Container>
  )
}

function getPartials() {
  return [
    {
      element: props => (
        <Styled.SquareGradient
          src={ImagePhotoshopGradient}
          className="anime-avatar-1"
          {...props}
        />
      ),
      style: {
        top: "40%",
        right: "15%",
      },
    },
    {
      element: props => (
        <Styled.Square
          className="anime-avatar-1"
          size={{
            sm: "8vw",
            md: "4vw",
            lg: "4vw",
          }}
          {...props}
        />
      ),
      style: {
        top: "24%",
        left: "25%",
      },
      rotate: 30,
    },
    {
      element: props => (
        <Styled.Square
          className="anime-avatar-1"
          borderColor="#ad47bf"
          size={{
            sm: "4vw",
            md: "2vw",
            lg: "1vw",
          }}
          {...props}
        />
      ),
      style: {
        top: "-5%",
        left: "40%",
      },
      rotate: -30,
    },
    {
      element: props => (
        <Styled.Circle
          className="anime-avatar-2"
          size={{
            sm: "12vw",
            md: "4.4vw",
            lg: "4.4vw",
          }}
          {...props}
        />
      ),
      style: {
        top: "3%",
        right: "20%",
      },
    },
    {
      element: props => (
        <Styled.PlusFilled
          className="anime-avatar-2"
          size={{
            sm: "6vw",
            md: "3vw",
            lg: "3vw",
          }}
          {...props}
        />
      ),
      style: {
        bottom: "15%",
        right: "15%",
      },
      rotate: 30,
    },
    {
      element: props => (
        <Styled.PartialTriangle
          src={ImageTriangle}
          alt="triangle"
          {...props}
          className="anime-avatar-1"
        />
      ),
      rotate: 90,
      style: {
        bottom: "0%",
        left: "60%",
      },
    },
    {
      element: props => (
        <Styled.PartialPlus
          className="anime-avatar-3"
          src={ImagePlus}
          alt="plus"
          {...props}
        />
      ),
      rotate: 90,
      style: {
        top: "30%",
        left: "10%",
      },
    },
    {
      element: props => (
        <Styled.Circle
          className="anime-avatar-3"
          size={{
            sm: "4vw",
            md: "1.4vw",
            lg: "1.4vw",
          }}
          {...props}
        />
      ),
      style: {
        bottom: "0%",
        right: "20%",
      },
    },
  ]
}

function animeText() {
  anime({
    targets: ".poster-text",
    translateX: [-300, 0],
    opacity: [0, 1],
    delay: 500,
    duration: 1800,
    easing: "easeOutQuart",
  })
  anime({
    targets: ".pts-text",
    translateX: [300, 0],
    opacity: [0, 1],
    delay: 500,
    duration: 1800,
    easing: "easeOutQuart",
  })
  anime
    .timeline({ duration: 600, easing: "easeOutQuart" })
    .add({
      targets: ".intro-1",
      translateY: [60, 0],
      opacity: [0, 1],
      delay: 500,
    })
    .add(
      {
        targets: ".intro-2",
        translateY: [60, 0],
        opacity: [0, 1],
      },
      "-=300"
    )
    .add(
      {
        targets: ".intro-3",
        translateY: [60, 0],
        opacity: [0, 1],
      },
      "-=300"
    )
}

function animeAvatarPartials() {
  anime
    .timeline({ duration: 1000 })
    .add({
      targets: ".anime-avatar-1",
      scale: [0, 1],
      opacity: [0, 1],
      delay: 1800,
    })
    .add(
      {
        targets: ".anime-avatar-2",
        scale: [0, 1],
        opacity: [0, 1],
      },
      "-=700"
    )
    .add(
      {
        targets: ".anime-avatar-3",
        scale: [0, 1],
        opacity: [0, 1],
      },
      "-=300"
    )
}

function animeCta() {
  anime({
    targets: ".anime-pricing",
    scale: [0, 1],
    opacity: [0, 1],
    translateZ: 0,
    // easing: "easeInOutExpo",
    delay: 1500,
    duration: 600,
  })
}

export default OnlineCourse
