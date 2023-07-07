import React from "react";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import data
// import { newInStore } from "../data2";

import { useParams } from "react-router-dom";
import { housesData } from "../data";

const NewItemsSlider = () => {
  const { id } = useParams();

  const house = housesData.find((house) => house.id === parseInt(id));
  return (
    <Swiper
      grabCursor={true}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {house.products.map((product, index) => {
        return (
          <SwiperSlide className="max-w-[265px]" key={index}>
            <div className="relative">
              <img src={product.image} alt="" />
            </div>
            <div className="w-full text-black text-center text-[18px] lg:text-2xl font-medium capitalize font-semibold">
              {product.name}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default NewItemsSlider;
