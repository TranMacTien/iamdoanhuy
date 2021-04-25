import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { useWindowSize } from "react-use"

import ImageHungBa from "images/posters/hung_ba.jpeg"
import ImagePhotoshop from "images/photoshop_icon.png"
import ImageHomeBg from "images/home_bg.jpeg"
import ImageHomeBg2 from "images/home_bg_2.jpeg"
import ImageSpeedArt from "images/speed_art_2.jpeg"
import ImageYoutube from "images/youtube_icon.png"
import ImageTiktok from "images/tiktok_icon.png"
import BlockQuote from "components/BlockQuote"

import Intro from "./components/Intro"
import HomeBlockSecondary from "./components/HomeBlockSecondary"
import * as Styled from "./PageIndex.styled"

const MAX_SLIDE_WIDTH = 300

function PageIndex(props) {
  const { width } = useWindowSize()
  const slidesPerView = Math.floor(width / MAX_SLIDE_WIDTH)
  return (
    <div>
      <Intro />
      <HomeBlockSecondary
        background={ImageHomeBg}
        image={ImagePhotoshop}
        title={
          <>
            Khoá học <br />
            thiết kế POSTER
          </>
        }
        desc={
          <>
            <p>
              POSTER là một trong những ấn phẩm truyền thông phổ biến nhất. Từ
              phim ảnh, event, quảng bá sản phẩm,... POSTER đều được sử dụng
              linh hoạt dù là online hay offline.
            </p>
            <p>
              Photoshop là một trong những phần mềm giúp bạn có thể tiếp cận và
              tạo ra được những sản phẩm poster từ cơ bản đến chuyên nghiệp một
              cách nhanh nhất.
            </p>
            <p>Dù bạn là người mới cũng không sao, hãy để Huy giúp bạn nhé !</p>
          </>
        }
        textLink="XEM CHI TIẾT"
      />
      <Styled.SliderContainer>
        <Swiper
          loop
          spaceBetween={20}
          slidesPerView={slidesPerView}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {new Array(10).fill(0).map((el, index) => (
            <SwiperSlide key={index}>
              <Styled.SliderImageWrapper>
                <Styled.SliderImage src={ImageHungBa} alt="" />
              </Styled.SliderImageWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </Styled.SliderContainer>
      <HomeBlockSecondary
        background={ImageSpeedArt}
        image={ImageYoutube}
        title={
          <>
            IDEA
            <br />
            Speed video
          </>
        }
        desc={
          <>
            <p>
              Idea luôn đến từ những thứ gần gũi với chúng ta. Với anh em thì Mì
              tôm và Nước ngọt là những thứ quá quen thuộc, không thể thiếu mỗi
              khi chạy deadline.
            </p>
            <p>
              Mời mọi người cùng xem quá trình mình tạo ra một chuỗi nhà máy sản
              xuất Mì gói và Nước ngọt trong tương lai như thế nào nhé.
            </p>
          </>
        }
        imageWidth={600}
        textLink="XEM VIDEO"
        type="secondary"
      />
      <div style={{ padding: "20px 0" }}>
        <HomeBlockSecondary
          background={ImageHomeBg2}
          image={ImageTiktok}
          title={
            <>
              TỚ CÓ MỘT
              <br />
              KÊNH TIKTOK
            </>
          }
          desc={
            <>
              <p>
                Nhằm truyền cảm hứng và mang lại tiếng cười cho các anh em, vào
                ngày 1/1/2021 tớ đã lập ra một kênh TikTok mang tên:{" "}
                <em>@Iamdoanhuy</em>. Với Slogan “Yêu Đủ Thứ - Thích Design", tớ
                muốn cho anh em thấy thiết kế Poster được áp dụng rộng rãi trên
                mọi ngành nghề, mọi lĩnh vực trong cuộc sống này như thế nào,
                anh em bấm vào xem nhá
              </p>
            </>
          }
          textLink="XEM LIỀN"
        />
      </div>
      <BlockQuote />
    </div>
  )
}

export default PageIndex
