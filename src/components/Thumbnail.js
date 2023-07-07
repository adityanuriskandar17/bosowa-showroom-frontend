import React from "react";
// import data
import { hero } from "../data2";
// import components

import Stats from "../components/Stats";

const Thumbnail = () => {
  // destructure hero
  const { title, subtitle, buttonText } = hero;
  return (
    <section className="h-[850px] w-full bg-hero bg-right bg-cover bg-no-repeat text-gray-100 pt-[111px] pb-[354px] relative mb-24 lg:bg-center lg:mb-28">
      <div className="container mx-auto text-left">
        {/* title */}
        <h1 className="text-2xl  font-semibold mb-[30px] lg:text-[64px] lg:leading-tight lg:max-w-[888px]">
          <span className="bg-accent rounded-l rounded-3xl">Bosowa </span>
          <br />
          {title}
        </h1>
        {/* subtitle */}
        <h2 className="mb-[30px] max-w-[627px]  lg:mb-[65px] lg:text-xl">
          {subtitle}
        </h2>
        {/* cta button */}
        <button className="bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)] px-[35px] py-[9px] mb-[160px] text-xl rounded-md backdrop-blur-md transition lg:px-[80px] lg:py-[16px] lg:mb-[194px]">
          {buttonText}
        </button>
        {/* stats */}
        <div className="text-center"></div>
      </div>
    </section>
  );
};

export default Thumbnail;
