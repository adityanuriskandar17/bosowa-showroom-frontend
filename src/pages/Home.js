import React from "react";

// import components
// import Banner from "../components/Banner";
// import HouseList from "../components/HouseList";
// import Stats from "../components/Stats";
// import Hero from "../components/Hero";
import NewItems from "../components/NewItems";
import Newsletter from "../components/Newsletter";
import Hero from "../components/Hero";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="min-h-[1800px]">
      {/* <Banner /> */}
      <Hero />
      <Products />
      {/* <NewItems /> */}
      <Newsletter />
      {/* <HouseList /> */}
    </div>
  );
};

export default Home;
