import React, { useContext } from "react";

// import context
import { CarContext } from "./CarContext";

// import components
import House from "./Car";

// import link
import { Link } from "react-router-dom";

// import icons
import { ImSpinner2 } from "react-icons/im";
const CarList = () => {
  const { houses, loading } = useContext(CarContext);

  // if loading is true
  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-red-700 text-4xl mt-[200px]" />
    );
  }

  if (houses.length < 1) {
    return (
      <div className="text-center text-3xl text-gray-400 mt-48">
        Sorry. Nothing found
      </div>
    );
  }
  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {houses.map((house, index) => {
            return (
              <Link to={`/car/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CarList;
