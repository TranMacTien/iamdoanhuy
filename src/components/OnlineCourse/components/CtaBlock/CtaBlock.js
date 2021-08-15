import React, { useEffect } from "react"
import anime from "animejs"

import ImageBox from "images/photoshop-box.png"
import ImageBoxShadow from "images/photoshop-box-shadow.png"
import { ButtonBase, Center } from "components/Common.styled"
import { observeAnimation } from "utils/observeAnimation"
import * as Styled from "./CtaBlock.styled"

function CtaBlock(props) {
  useEffect(() => {
    observeAnimation(() => {
      animateBox()
      animateText()
    }, [document.querySelector(".photoshop-box")])
  }, [])
  return (
    <Styled.Section>
      <Styled.Container>
        <div>
          <Styled.H3 className="cta-text-animation">
            Đăng ký ngay khoá học
          </Styled.H3>
          <Styled.H2>
            <strong className="cta-text-animation">
              THIẾT KẾ POSTER VỚI PHOTOSHOP
            </strong>
            <br />
            <strong className="cta-text-animation">
              Dành cho người mới bắt đầu
            </strong>
          </Styled.H2>
          <div className="cta-button-animation" style={{ opacity: 0 }}>
            <Styled.Price>
              <del>899.000 đ</del>
              <span>
                <strong>399.000 đ</strong>
              </span>
            </Styled.Price>
            <Center>
              <ButtonBase>ĐĂNG KÍ NGAY</ButtonBase>
            </Center>
          </div>
        </div>
        <Styled.PhotoshopBoxSection>
          <Styled.PhotoshopBox className="photoshop-box" id="photoshop-box">
            <img src={ImageBox} alt="photoshop huyposter" />
          </Styled.PhotoshopBox>
          <Styled.PhotoshopBoxShadow
            className="photoshop-box"
            id="photoshop-box-shadow"
          >
            <img src={ImageBoxShadow} alt="photoshop huyposter" />
          </Styled.PhotoshopBoxShadow>
        </Styled.PhotoshopBoxSection>
      </Styled.Container>
    </Styled.Section>
  )
}

function animateBox() {
  anime({
    targets: "#photoshop-box",
    duration: 2000,
    delay: 500,
    opacity: [0, 1],
    translateY: [-100, 0],
  })
  anime({
    targets: "#photoshop-box-shadow",
    duration: 2000,
    delay: 500,
    opacity: [0, 1],
    scaleX: [0, 1],
  })
}

function animateText() {
  anime({
    targets: ".cta-text-animation",
    duration: 600,
    opacity: [0, 1],
    translateY: [40, 0],
    easing: "easeOutQuart",
    delay: anime.stagger(200),
  })
  anime({
    targets: ".cta-button-animation",
    duration: 600,
    opacity: [0, 1],
    scale: [0, 1],
    delay: 500,
  })
}

export default CtaBlock
