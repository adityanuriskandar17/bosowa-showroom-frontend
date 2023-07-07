import React from "react";
import Testimonial from "../components/Testimonial";
// import FeaturesSecond from "../components/FeaturesSecond";
import Features from "../components/Features";
import Palette from "../components/palette";

const about = () => {
  return (
    <div>
      {/* <FeaturesSecond /> */}
      <Features />
      <Testimonial />
      <Palette />
    </div>
  );
};

export default about;
