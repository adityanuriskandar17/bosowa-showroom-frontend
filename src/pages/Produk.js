import React from "react";

// import components
import HouseList from "../components/CarList";
import Search from "../components/Search";

const Produk = () => {
  return (
    <div className="min-h-[1800px]">
      <Search />
      <HouseList />
    </div>
  );
};

export default Produk;
