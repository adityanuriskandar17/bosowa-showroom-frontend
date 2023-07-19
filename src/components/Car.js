import React from "react";

// import icons
import { BiArea } from "react-icons/bi";
import { TbSofa } from "react-icons/tb";
import { MdWaterDrop } from "react-icons/md";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { housesData } from "../data";
import "../slider.css";
const Car = ({ house }) => {
  const {
    image,
    imageLgg,
    type,
    country,
    name,
    bedrooms,
    bathrooms,
    surface,
    price,
  } = house;

  return (
    <div className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img className="mb-8" src={image} alt={type} />

      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="bg-red-500 rounded-full text-white px-3">{type}</div>
        {/* <div className="bg-violet-500 rounded-full text-white px-3">
          {country}
        </div> */}
      </div>
      <div className="text-lg font-semibold max-w-[260px]">{name}</div>
      <div className="flex gap-x-4 my-4">
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <BiArea />
          </div>
          <div>{bedrooms}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <TbSofa />
          </div>
          <div>{bathrooms}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <MdWaterDrop />
          </div>
          <div>{surface}</div>
        </div>
      </div>
      <div className="text-lg font-semibold text-green-600 mb-0">
        Mulai Dari
      </div>
      <div className="text-lg font-semibold text-black mb-4">{price}</div>
    </div>
  );
};

export default Car;
