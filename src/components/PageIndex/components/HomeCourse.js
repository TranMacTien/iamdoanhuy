import React from "react"
import { ButtonBase } from "components/Common.styled"
import {
  StyledPortfolioContainer,
} from "../PageIndex.styled"

function HomeCourse(props) {
  return (
    <StyledPortfolioContainer>
      <h2>
        Khoa hoc <br />
        thiet ke POSTER
      </h2>
      <p>
        POSTER là một trong những ấn phẩm truyền thông phổ biến nhất. Từ phim
        ảnh, event, quảng bá sản phẩm,... POSTER đều được sử dụng linh hoạt dù
        là online hay offline.
      </p>
      <p>Photoshop là một trong những phần mềm giúp bạn có
        thể tiếp cận và tạo ra được những sản phẩm poster từ cơ bản đến chuyên
        nghiệp một cách nhanh nhất.</p>
      <p>Dù bạn là người mới cũng không sao, hãy để Huy giúp bạn nhé !</p>

      <ButtonBase>XEM CHI TIET</ButtonBase>
    </StyledPortfolioContainer>
  )
}

export default HomeCourse
