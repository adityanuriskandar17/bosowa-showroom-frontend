import React from "react";

// import data
import { housesData } from "../data";

// import use params
import { useParams } from "react-router-dom";

// import icons
// import { BiArea } from "react-icons/bi";
// import { TbSofa } from "react-icons/tb";
// import { MdWaterDrop } from "react-icons/md";

// import Link
// import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lineup from "../components/Lineup";
import NewItems from "../components/NewItems";
import Thumbnail from "../components/Thumbnail";

// icon
// import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const PropertyDetails = () => {
  // get the house id
  const { id } = useParams();

  const house = housesData.find((house) => house.id === parseInt(id));

  // get the house based on the id
  // const house = housesData.find((house) => {
  //   return house.id === parseInt(id);
  // });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="py-0">
      <Thumbnail />
      <div className="container mx-auto min-h-screen">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-1">{house.name}</h2>
            <div className="bg-red-500 text-white px-3 rounded-full mb-2">
              {house.type}
            </div>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            {/* <div className="bg-violet-500 text-white px-3 rounded-full">
              {house.country}
            </div> */}
          </div>
          <div className="text-3xl font-semibold text-black">
            Mulai Dari <br />
            {house.price}
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="max-w-full">
            <div className="mb-10">
              <Slider {...settings}>
                {house.imageLgg.map((img, index) => (
                  <div key={index}>
                    <div className="flex flex-col min-h-[250px]">
                      <div className="flex items-center mb-0">
                        <p className="font-extrabold text-4xl bg-gray-700 text-white max-w-[200px] px-2 py-4 rounded-l rounded-full text-center">
                          {img.name}
                        </p>
                        <img
                          src={img.image}
                          alt={img.name}
                          className="object-contain w-full h-full lg:h-[500px] flex-shrink-0"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <NewItems />
            <Lineup />
            {/* INTERIOR */}
            <div className="font-bold text-2xl lg:text-4xl">INTERIOR</div>
            <div className="mb-10">
              <Slider {...settings}>
                {house.exterior.map((img, index) => (
                  <div key={index}>
                    <div className="flex flex-col min-h-[250px]">
                      <div className="flex items-center justify-between mb-8">
                        <div>
                          <img
                            src={img.image}
                            alt={img.name}
                            className="object-contain w-full h-full lg:h-[500px] flex-shrink-0"
                          />
                        </div>
                        <div className="flex flex-col ml-8">
                          <div className="text-xl font-semibold">
                            {img.name}
                          </div>
                          <p className="text-sm lg:text-xs">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ab deserunt quos, at ipsam velit itaque odit
                            repellendus, suscipit ea nulla reiciendis sed quidem
                            aut placeat quae, error fugiat. Accusamus, animi.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            {/* EXTERIOR */}
            <div className="font-bold text-2xl lg:text-4xl">EXTERIOR</div>
            <div className="mb-10">
              <Slider {...settings}>
                {house.exterior.map((img, index) => (
                  <div key={index}>
                    <div className="flex flex-col min-h-[250px]">
                      <div className="flex items-center justify-between mb-8">
                        <div>
                          <div className="text-xl font-semibold">
                            {img.name}
                          </div>
                          <p className="text-sm lg:text-xs">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ab deserunt quos, at ipsam velit itaque odit
                            repellendus, suscipit ea nulla reiciendis sed quidem
                            aut placeat quae, error fugiat. Accusamus, animi.
                          </p>
                        </div>
                        <div className="flex flex-col ml-8">
                          <img
                            src={img.image}
                            alt={img.name}
                            className="object-contain w-full h-full lg:h-[500px] flex-shrink-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            {/* <div>{house.description}</div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
