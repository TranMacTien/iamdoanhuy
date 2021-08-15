import React from "react"

import ImageBox from "images/photoshop-box.png"
import ImageBoxShadow from "images/photoshop-box-shadow.png"
import { ButtonBase, Center } from "components/Common.styled"
import * as Styled from "./CtaBlock.styled"

function CtoBlock(props) {
  return (
    <Styled.Container>
      <Styled.H3>Đăng ký ngay khoá học</Styled.H3>
      <Styled.H2>
        <strong>THIẾT KẾ POSTER VỚI PHOTOSHOP</strong>
        <br />
        <strong>Dành cho người mới bắt đầu</strong>
      </Styled.H2>
      <Styled.Price>
        <del>899.000 đ</del>
        <span>
          <strong>399.000 đ</strong>
        </span>
      </Styled.Price>
      <Center>
        <ButtonBase>ĐĂNG KÍ NGAY</ButtonBase>
      </Center>
      <Styled.PhotoshopBox>
        <img src={ImageBox} alt="photoshop huyposter" />
      </Styled.PhotoshopBox>
      <Styled.PhotoshopBoxShadow>
        <img src={ImageBoxShadow} alt="photoshop huyposter" />
      </Styled.PhotoshopBoxShadow>
    </Styled.Container>
  )
}

export default CtoBlock
