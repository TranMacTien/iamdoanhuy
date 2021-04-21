import React from "react"

import Intro from "./components/Intro"
import HomeCourse from "./components/HomeCourse"
import CourseSection from "./components/CourseSection"

function PageIndex(props) {
  return (
    <div>
      <Intro />
      <HomeCourse />
      <section>
        <h2>
          <span>IDEA</span>
          <span>Speed video</span>
        </h2>
        <p>
          Idea luôn đến từ những thứ gần gũi với chúng ta. Với anh em thì Mì tôm
          và Nước ngọt là những thứ quá quen thuộc, không thể thiếu mỗi khi chạy
          deadline.
        </p>
        <p>
          Mời mọi người cùng xem quá trình mình tạo ra một chuỗi nhà máy sản
          xuất Mì gói và Nước ngọt trong tương lai như thế nào nhé.
        </p>
        <button>XEM VIDEO</button>
      </section>

      <section>
        <h2>TỚ CÓ MỘT KÊNH TIKTOK</h2>
        <p>
          Nhằm truyền cảm hứng và mang lại tiếng cười cho các anh em, vào ngày
          1/1/2021 tớ đã lập ra một kênh TikTok mang tên: IAMDOANHUY Với Slogan
          “ Yêu Đủ Thứ - Thích Design", tớ muốn cho anh em thấy thiết kế Poster
          được áp dụng rộng rãi trên mọi ngành nghề, mọi lĩnh vực trong cuộc
          sống này như thế nào, anh em bấm vào xem nhá
        </p>
      </section>
      {/* <CourseSection /> */}
    </div>
  )
}

export default PageIndex
