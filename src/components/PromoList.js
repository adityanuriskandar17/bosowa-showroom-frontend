import React, { useContext } from "react";

// import context
// import { HouseContext } from "./HouseContext";

// import components
import Promo from "./Promo";

// import link
import { Link } from "react-router-dom";
import { promoData } from "../data";

const PromoList = () => {
  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {promoData.map((promo, index) => {
            return (
              <Link to={`/promo/${promo.id}`} key={index}>
                <Promo house={promo} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PromoList;
