import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Height, ViewHeadline } from "@mui/icons-material";
import { Container } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <div>
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }} //disableOnInteraction은 슬라이드 위에 마우스 안먹히게 함. 클릭해도 그림 멈추지않고 계속 움직임
        >
          <SwiperSlide>
            <img src="http://www.greenartfair.com/theme/bootstrap/img/main/slide1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="http://www.greenartfair.com/theme/bootstrap/img/main/slide3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="http://www.greenartfair.com/theme/bootstrap/img/main/slide2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="http://www.greenartfair.com/theme/bootstrap/img/main/slide2.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div style={{ backgroundColor: "black", height: "500px" }}>
        <Container
          style={{ backgroundColor: "yellow", height: "100%" }}
        ></Container>
      </div>
      <div>
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop
          autoplay={{ delay: 1000, disableOnInteraction: false }} //disableOnInteraction은 슬라이드 위에 마우스 안먹히게 함. 클릭해도 그림 멈추지않고 계속 움직임
        >
          <SwiperSlide>
            <img src="http://www.greenartfair.com/theme/bootstrap/img/common/sponsor4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="http://www.greenartfair.com/theme/bootstrap/img/common/sponsor6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="http://www.greenartfair.com/theme/bootstrap/img/common/sponsor7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="http://www.greenartfair.com/theme/bootstrap/img/common/sponsor10.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="http://www.greenartfair.com/theme/bootstrap/img/common/sponsor9.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="http://www.greenartfair.com/theme/bootstrap/img/common/sponsor12.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="http://www.greenartfair.com/theme/bootstrap/img/common/sponsor5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="http://www.greenartfair.com/theme/bootstrap/img/common/sponsor8.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HomePage;
