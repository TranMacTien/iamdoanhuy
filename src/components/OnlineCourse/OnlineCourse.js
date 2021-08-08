import React, { useEffect, useRef } from "react"
import Parallax from "parallax-js"
import anime from "animejs"

import ImageAvatar from "images/huy-intro.png"
import ImagePosterText from "images/poster-text-bg.png"
import ImagePhotoshopText from "images/photoshop-text-bg.png"
import ImageMainSubTitle from "images/khoa-hoc-online-text.png"
import ImageTitle from "images/khoa-hoc-online-text-2.png"
import ImageSubTitle from "images/khoa-hoc-online-text-3.png"
import ImageTriangle from "images/partials/triangle.svg"
import * as Styled from "./OnlineCourse.styled"



function OnlineCourse(props) {
  const scene = useRef()

  const animeText = () => {
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
    anime({
      targets: ".intro-1",
      translateX: [-100, 0],
      opacity: [0, 1],
      delay: anime.stagger(1200),
      duration: 600,
      easing: "easeOutQuart",
    })
    anime({
      targets: ".intro-2",
      translateX: [100, 0],
      opacity: [0, 1],
      delay: 600,
      duration: 600,
      easing: "easeOutQuart",
    })
  }

  useEffect(() => {
    new Parallax(scene.current)
    animeText()
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
            />
          </Styled.PosterTextBg>
          <Styled.PhotoshopTextBg>
            <img
              src={ImagePhotoshopText}
              alt="PHOTOSHOP"
              className="pts-text"
              width="100%"
            />
          </Styled.PhotoshopTextBg>
        </div>
        <Styled.IntroLeft>
          <img
            src={ImageMainSubTitle}
            style={{ width: "40%", marginBottom: 16 }}
            alt="Khoá học Online"
            className="intro-1"
          />
          <img
            src={ImageTitle}
            style={{ width: "100%", marginBottom: 24 }}
            alt="Thiết kế Poster với Photoshop"
            className="intro-2"
          />
          <img
            src={ImageSubTitle}
            style={{ width: "60%", marginLeft: "20%" }}
            alt="Dành cho người mới bắt đầu"
            className="intro-1"
          />
        </Styled.IntroLeft>
        <Styled.IntroRight>
          <Styled.Avatar ref={scene} data-relative-input="true">
            <img src={ImageAvatar} alt="Huy Poster" />
            {getPartials().map(
              ({ element: Element, style, depth, rotate }, index) => (
                <Styled.PartialWrapper data-depth={depth} key={index}>
                  <div
                    style={{
                      ...style,
                      position: "absolute",
                      transform: `translate(-50%, -50%) rotate(${
                        rotate || 0
                      }deg)`,
                    }}
                  >
                    <Element />
                  </div>
                </Styled.PartialWrapper>
              )
            )}
          </Styled.Avatar>
        </Styled.IntroRight>
      </Styled.Header>
    </Styled.Container>
  )
}

function getPartials() {
  return [
    {
      element: props => <Styled.SquareGradient size={120} {...props} />,
      style: {
        top: "40%",
        right: "5%",
      },
      depth: 0.3,
    },
    {
      element: props => <Styled.Square size={60} {...props} />,
      style: {
        top: "30%",
        left: "8%",
      },
      depth: 0.2,
      rotate: 45,
    },
    {
      element: props => <Styled.Circle size={70} {...props} />,
      style: {
        top: "5%",
        right: "15%",
      },
      depth: 0.2,
    },
    {
      element: props => <Styled.PlusFilled size={60} {...props} />,
      style: {
        bottom: "5%",
        right: "5%",
      },
      depth: 0.24,
      rotate: 30,
    },
    {
      element: props => (
        <img
          src={ImageTriangle}
          style={{ width: 60 }}
          alt="triangle"
          {...props}
        />
      ),
      style: {
        bottom: "0%",
        left: "60%",
      },
      depth: 0.06,
    },
  ]
}

export default OnlineCourse
