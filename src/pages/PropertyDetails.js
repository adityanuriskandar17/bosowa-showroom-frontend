import React from "react";

// import data
import { housesData } from "../data";

// import use params
import { useParams } from "react-router-dom";

// import icons
import { BiArea } from "react-icons/bi";
import { TbSofa } from "react-icons/tb";
import { MdWaterDrop } from "react-icons/md";

// import Link
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <section className="py-8">
      <div className="container mx-auto min-h-screen">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{house.name}</h2>
            <h3 className="text-lg mb-4 bg-gray">{house.warna}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-red-500 text-white px-3 rounded-full">
              {house.type}
            </div>
            {/* <div className="bg-violet-500 text-white px-3 rounded-full">
              {house.country}
            </div> */}
          </div>
          <div className="text-3xl font-semibold text-black">{house.price}</div>
        </div>
        <div className="flex flex-col lg:items-start gap-8 lg:flex-row lg:gap-x-[100px]">
          <div className="max-w-[768px]">
            <div className="mb-10">
              <Slider {...settings}>
                {house.imageLgg.map((img, index) => (
                  <div key={index}>
                    <p className="font-extrabold text-4xl bg-gray-700 text-white max-w-[200px] px-2 py-4 rounded-l rounded-full text-center">
                      {img.name}
                    </p>
                    <img
                      src={img.image}
                      alt={img.name}
                      className="object-contain w-[700px]"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            {/* EXTERIOR */}
            <div className="font-bold text-2xl lg:text-4xl">EXTERIOR</div>
            <div className="mb-10">
              <Slider {...settings}>
                {house.imageLgg.map((img, index) => (
                  <div key={index}>
                    <div className="flex flex-col min-h-[250px]">
                      <div className="flex items-center mb-0">
                        <img
                          src={img.image}
                          alt={img.name}
                          className="object-contain w-full h-full lg:h-[500px] flex-shrink-0"
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="text-xl font-semibold">{img.name}</div>
                        <p className="text-sm lg:text-xs">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ab deserunt quos, at ipsam velit itaque odit
                          repellendus, suscipit ea nulla reiciendis sed quidem
                          aut placeat quae, error fugiat. Accusamus, animi.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            {/* INTERIOR */}
            <div className="font-bold text-2xl lg:text-4xl">INTERIOR</div>
            <div className="mb-10">
              <Slider {...settings}>
                {house.imageLgg.map((img, index) => (
                  <div key={index}>
                    <div className="flex flex-col min-h-[250px]">
                      <div className="flex items-center mb-0">
                        <img
                          src={img.image}
                          alt={img.name}
                          className="object-contain w-full h-full lg:h-[500px] flex-shrink-0"
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="text-xl font-semibold">{img.name}</div>
                        <p className="text-sm lg:text-xs">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ab deserunt quos, at ipsam velit itaque odit
                          repellendus, suscipit ea nulla reiciendis sed quidem
                          aut placeat quae, error fugiat. Accusamus, animi.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div>{house.description}</div>
          </div>
          <div className="flex-1  bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
            <div className="flex items-center gap-x-4 mb-8 justify-center">
              <div className="font-bold text-4xl">Line Up</div>
            </div>

            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Varian</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Harga</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Warna</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {house.lineup.map((liup, index) => (
                    <tr key={index}>
                      <td className="flex items-center gap-3 px-6 py-4 font-normal text-gray-900">
                        <div className="text-sm">
                          <div className="font-medium text-gray-700">
                            {liup.nama}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">{liup.harga}</td>
                      <td>
                        <img src={liup.warna} alt={liup.nama} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
