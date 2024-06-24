'use client'

// import Swiper JS
import {Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';

const ImageGallery = ({ images }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className='w-full aspect-[3/2]'
    >
      {images.map((item, index) => (
        <SwiperSlide key={item+index} className='w-full h-full'>
          <img src={item} alt="item" className='w-full h-full object-cover' />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ImageGallery