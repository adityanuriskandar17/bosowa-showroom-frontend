import React, { useState, useEffect } from "react";

// import link
// import { Link } from "react-router-dom";

// Import icon whatsapp
import Logo1 from "../assets/img/logo1.png";
import Logo2 from "../assets/img/logo2.svg";

// import icons
import { CgMenuRight, CgClose } from "react-icons/cg";

// import data
import { navigation } from "../data";

// import components
import NavMobile from "./NavMobile";

const Header1 = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <header className="py-8 mb-0 border-b-8 bg-black border-accent">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            <img className="h-6 lg:h-8" src={Logo1} alt="" />
          </a>
          {/* menu icon */}
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className="text-2xl text-white md:hidden lg:text-3xl cursor-pointer"
          >
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>
          {/* nav */}
          <nav className="hidden md:flex">
            <ul className="md:flex md:gap-x-12">
              {navigation.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className="capitalize text-white hover:border-b transition-all"
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a className="pl-12" href="/">
              <img className="h-6 lg:h-8" src={Logo2} alt="" />
            </a>
          </nav>
          {/* nav mobile */}
          <div
            className={`${
              mobileNav ? "left-0" : "-left-full"
            } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all z-50`}
          >
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header1;
