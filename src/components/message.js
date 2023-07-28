// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay} from 'swiper/modules';

export default function Message () {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 27000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        // modules={[Autoplay, Pagination, Navigation]}

        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>Whatever you do, work heartily, as for the Lord and not for men.</SwiperSlide>
        <SwiperSlide>We do it to get the a crown that will last forever...</SwiperSlide>
      </Swiper>
    </div>
  );
}
