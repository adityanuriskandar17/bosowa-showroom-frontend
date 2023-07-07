import React from "react";

// import data
// import { newInStore } from "../data2";
import { housesData } from "../data";

import { useParams } from "react-router-dom";

// import components
import NewItemsSlider from "./NewItemsSlider";
// import Stats from "./Stats";

const NewItems = () => {
  // destructure newInStore
  const { id } = useParams();

  const house = housesData.find((house) => house.id === parseInt(id));
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          {/* text */}
          <div className="flex md:flex-col items-baseline gap-x-6 mb-6 lg:mb-0">
            <h2 className="title max-w-[245px] lg:mt-[30px] lg:mb-[40px]">
              {house.title}
            </h2>
            {/* <p className="max-w-[245px] lg:mb-12">{house.subtitle}</p> */}
            <div className="hidden lg:flex items-center"></div>
          </div>
          {/* slider */}
          <div className="lg:max-w-[800px] xl:max-w-[990px] lg:relative lg:-right-24">
            <NewItemsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
