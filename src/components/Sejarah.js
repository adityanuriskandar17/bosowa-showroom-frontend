import React from "react";

// import data
import { sejarah1 } from "../data2";

// import components
import ProductSlider from "./ProductSlider";

const Sejarah = () => {
  // destructure products
  const { title, subtitle1, subtitle2, subtitle3 } = sejarah1;
  return (
    <section className="section text-left">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="title">{title}</h2>
        </div>
        <div>
          <p className="max-w-[639px] mx-auto mb-[50px] lg:mb-[10px]">
            {subtitle1}
          </p>
          <p className="max-w-[639px] mx-auto mb-[50px] lg:mb-[10px]">
            {subtitle2}
          </p>
          <p className="max-w-[639px] mx-auto mb-[50px] lg:mb-[10px]">
            {subtitle3}
          </p>
        </div>
        {/* slider */}
      </div>
    </section>
  );
};

export default Sejarah;
