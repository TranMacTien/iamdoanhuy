import React from "react"

import ImagePosterChi from "images/posters/chi.jpeg"
import ImagePosterBMT from "images/posters/bmt.jpeg"
import ImagePosterSonTung from "images/posters/son-tung.jpeg"
import ImagePosterDenVau from "images/posters/den-vau.jpeg"
import ImagePosterJack from "images/posters/jack.jpeg"
import ImagePosterRonaldo from "images/posters/ronaldo.jpeg"
import ImagePosterMessi from "images/posters/messi.jpeg"
import ImagePosterNeymar from "images/posters/neymar.jpeg"

import * as Styled from "./CourseIntroduction.styled"

function CourseIntroduction(props) {
  return (
    <div>
      <Styled.GroupFirst>
          <Styled.GroupTextWrapper order={2}>
            <Styled.Title>TỔNG QUAN KHOÁ HỌC</Styled.Title>
            <Styled.SubTitle>
              Học Photoshop cần có một lộ trình rõ&nbsp;ràng
            </Styled.SubTitle>
            <Styled.Desc>
              Học Photoshop trên mạng không hề khó. Tuy nhiên vấn đề lớn nhất đó
              chính là không có một lộ trình học rõ ràng, lan man khiến những
              người học cảm thấy Photoshop vô cùng phức tạp, đặc biệt là người
              mới.
            </Styled.Desc>
            <Styled.Desc>
              Khoá học này chúng ta sẽ cùng chinh phục những công cụ cần thiết
              nhất của Photoshop, ứng dụng thực hành từng công cụ và mục tiêu
              kết thúc khoá học các bạn sẽ tạo ra được POSTER cho riêng mình.
            </Styled.Desc>
            <Styled.CtaButtonWrapper>
              <Styled.CtaButton>ĐĂNG KÍ NGAY</Styled.CtaButton>
            </Styled.CtaButtonWrapper>
          </Styled.GroupTextWrapper>
          <Styled.GroupWrapper1>
            <Styled.ImageGroupFirst>
              <Styled.PosterBMT>
                <img src={ImagePosterBMT} alt="Huy Poster" />
              </Styled.PosterBMT>
              <Styled.PosterChi>
                <img src={ImagePosterChi} alt="Huy Poster" />
              </Styled.PosterChi>
            </Styled.ImageGroupFirst>
          </Styled.GroupWrapper1>
      </Styled.GroupFirst>
      <Styled.GroupSecond>
        <Styled.GroupTextWrapper order={0} gap={{ md: 24 }}>
          <Styled.Title>ĐỐI TƯỢNG HỌC</Styled.Title>
          <Styled.SubTitle>Ai có thể học Photoshop?</Styled.SubTitle>
          <Styled.List>
            <li>Học sinh THPT muốn tiếp cận ngành thiết kế đồ họa.</li>
            <li>
              Sinh viên các ngành marketing, báo chí, ... nâng cao sự hiểu biết
              về Photoshop để phục vụ công việc khi ra trường.
            </li>
            <li>
              Bán hàng online, quản lý fanpage cần những thiết kế đẹp để thu hút
              khách hàng.
            </li>
            <li>
              Các bạn yêu thích Poster, muốn tự tay thiết kế để giảm căng thẳng,
              giải stress.
            </li>
          </Styled.List>
          <Styled.CtaButtonWrapper>
            <Styled.CtaButton>ĐĂNG KÍ NGAY</Styled.CtaButton>
          </Styled.CtaButtonWrapper>
        </Styled.GroupTextWrapper>
        <Styled.GroupWrapper2>
          <Styled.ImageGroupSecond>
            <Styled.PosterSonTung>
              <img src={ImagePosterSonTung} alt="Huy Poster" />
            </Styled.PosterSonTung>
            <Styled.PosterDenVau>
              <img src={ImagePosterDenVau} alt="Huy Poster" />
            </Styled.PosterDenVau>
            <Styled.PosterJack>
              <img src={ImagePosterJack} alt="Huy Poster" />
            </Styled.PosterJack>
          </Styled.ImageGroupSecond>
        </Styled.GroupWrapper2>
      </Styled.GroupSecond>
      <Styled.GroupThird>
        <Styled.GroupTextWrapper order={2}>
          <Styled.Title>GIÁO TRÌNH KHOÁ HỌC</Styled.Title>
          <Styled.SubTitle>
            Hơn 30 video và được hỗ trợ trực tuyến
          </Styled.SubTitle>
          <Styled.Desc>
            Với kinh nghiệm giảng dạy môn Photoshop và làm việc trong ngành
            thiết kế, ở khoá học này, Huy chắt lọc mọi thứ từ kiến thức đến thực
            hành một cách ngắn gọn, dễ hiểu nhất để các bạn có thể học và làm
            một cách dễ&nbsp;dàng.
          </Styled.Desc>
          <Styled.Desc>
            Ở đây Huy không chỉ là bán một khoá học, mà Huy muốn giúp tất cả các
            bạn có thể làm được với Photoshop. Ngoài 30+ video, các bạn sẽ được
            hỗ trợ trực tuyến khi gặp khó khăn trong quá trình học. Huy và team
            luôn đồng hành cùng các bạn.
          </Styled.Desc>
          <Styled.CtaButtonWrapper>
            <Styled.CtaButton>ĐĂNG KÍ NGAY</Styled.CtaButton>
          </Styled.CtaButtonWrapper>
        </Styled.GroupTextWrapper>
        <Styled.GroupWrapper3>
          <Styled.ImageGroupThird>
            <Styled.PosterRonaldo>
              <img width="100%" src={ImagePosterRonaldo} alt="Huy Poster" />
            </Styled.PosterRonaldo>
            <Styled.PosterMessi>
              <img width="100%" src={ImagePosterMessi} alt="Huy Poster" />
            </Styled.PosterMessi>
            <Styled.PosterNeymar>
              <img width="100%" src={ImagePosterNeymar} alt="Huy Poster" />
            </Styled.PosterNeymar>
          </Styled.ImageGroupThird>
        </Styled.GroupWrapper3>
      </Styled.GroupThird>
    </div>
  )
}

export default CourseIntroduction
