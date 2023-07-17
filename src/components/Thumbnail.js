import React from "react";
// import data
// import { hero } from "../data2";
// import components

// import Stats from "../components/Stats";

// import data
import { housesData } from "../data";

// import use params
import { useParams } from "react-router-dom";

const Thumbnail = () => {
  // destructure hero
  const { id } = useParams();

  const house = housesData.find((house) => house.id === parseInt(id));
  // const { title, subtitle, buttonText } = hero;
  return (
    <section
      className="h-[850px] w-full bg-right bg-cover bg-no-repeat text-gray-100 pt-[111px] pb-[354px] relative mb-24 lg:bg-center lg:mb-28"
      style={{ backgroundImage: `url(${house.big})` }}
    >
      <div className="container ml-24 text-left pt-16">
        {/* title */}
        <h1 className="text-4xl lg:text-6xl font-bold mb-2 leading-tight lg:leading-snug max-w-[888px]">
          {house.name}
          <br />
        </h1>
        {/* subtitle */}

        <h2 className="text-white text-xl lg:text-3xl font-medium mb-6 max-w-[280px]">
          Mulai dari
          <br />
          <div className="bg-red-500 text-white px-3 rounded-full mb-2 text-center">
            {house.price}
          </div>
        </h2>
      </div>
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div> */}
    </section>
  );
};

export default Thumbnail;
