import React from "react"

import { StyledContainer } from "./Footer.styled"

function Footer(props) {
  return <StyledContainer>
    <div>
      <div><img src="" alt=""/></div>
      <div>
        <ul>
          <li><a href="">Youtube</a></li>
          <li><a href="">Facebook</a></li>
          <li><a href="">Tiktok</a></li>
        </ul>
      </div>
    </div>
    <div>
      <ul>
        <li>
          <a href="">Email: huydoan9825@gmail.com</a>
        </li>
        <li>
          <a href="">Số điện thoại: 0968 573 574</a>
        </li>
        <li>
          <a href="">Facebook: https://www.facebook.com/iamdoanhuy</a>
        </li>
      </ul>
    </div>
  </StyledContainer>
}

export default Footer
