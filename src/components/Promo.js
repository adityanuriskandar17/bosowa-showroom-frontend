import React from "react";

// import icons
import { BiArea } from "react-icons/bi";
import { TbSofa } from "react-icons/tb";
import { MdWaterDrop } from "react-icons/md";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { PromosData } from "../data";
import "../slider.css";
const Promo = ({ house }) => {
  const { image, year, type, bulan, name, title, merk, price } = house;

  return (
    <div className="bg-white shadow-1 p-5 w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img className="mb-8" src={image} alt={year} />

      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="bg-red-500 rounded-full text-white px-3">{year}</div>
        <div className="bg-violet-500 rounded-full text-white px-3">
          {bulan}
        </div>
      </div>
      <div className="text-lg font-semibold max-w-[260px]">
        {title} {merk}
      </div>
      {/* <div className="flex gap-x-4 my-4"></div> */}
      {/* <div className="text-lg font-semibold text-green-600 mb-0">{merk}</div>
      <div className="text-lg font-semibold text-black mb-4">{price}</div> */}
    </div>
  );
};

export default Promo;
