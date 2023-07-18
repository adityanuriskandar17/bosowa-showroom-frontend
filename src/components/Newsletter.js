import React from "react";

// import data
import { newsletter } from "../data2";

const Newsletter = () => {
  // desctructure newsletter
  const { title, subtitle, placeholder, buttonText } = newsletter;
  return (
    <section className="h-64 lg:h-96 w-full bg-newsletter bg-right bg-cover bg-no-repeat text-gray-100 pt-16 pb-40 relative mb-24 lg:bg-center lg:mb-28"></section>
  );
};

export default Newsletter;
