import React, { useState, useEffect, useContext } from "react";
// import icons
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { BsFillCarFrontFill } from "react-icons/bs";
// import headless ui
import { Menu } from "@headlessui/react";
// import house context
import { CarContext } from "./CarContext";

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(CarContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    // <div className="w-full relative z-50">
    <Menu as="div" className="dropdown ">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <BsFillCarFrontFill className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">
            {property}
          </div>
          <div className="text-[13px]">Pilih Tipe Mobil</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {properties.map((property, index) => {
          return (
            <Menu.Item
              onClick={() => setProperty(property)}
              className="cursor-pointer hover:text-red-700 transition"
              as="li"
              key={index}
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
    // </div>
  );
};

export default PropertyDropdown;
