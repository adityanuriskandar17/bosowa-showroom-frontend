import React from "react";
// import image

import Image from "../assets/img/car-banner.png";

// import components

import Search from "../components/Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-red-700">Bosowa</span> Menyediakan mobil
            impian anda
          </h1>
          <p className="max-w-[480px] mb-8">
            PT Bosowa Berlian Motor, Dealer resmi kendaraan Mitsubishi Motors di
            Indonesia Timur, kembali menyelenggarakan program penjualan menarik
            untuk anda yang melakukan pembelian kendaraan Mitsubishi pada Juli
            2023
          </p>
        </div>
        {/* image */}
        <div className="hidden flex-1 lg:flex justify-end items-center">
          <img src={Image} alt="" />
        </div>
      </div>
      {/* <Search /> */}
    </section>
  );
};

export default Banner;
