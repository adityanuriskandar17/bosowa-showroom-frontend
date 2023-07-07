import React from "react";

// import data
import { features } from "../data2";

const Features = () => {
  // destructure features
  const { title, subtitle, image, buttonText, items } = features;
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-[100px]">
          {/* image */}
          <div className="flex-1 order-1 lg:-order-1 ">
            <img
              className="object-contain w-[500px] h-[500px]"
              src={image.type}
              alt=""
            />
          </div>
          {/* text */}
          <div className="flex-1 flex flex-col">
            <h2 className="title">{title}</h2>
            <p className="subtitle">{subtitle}</p>
            {/* items */}
            <div>
              {items.map((item, index) => {
                const { title, subtitle, icon } = item;
                return (
                  <div className="flex mb-6 lg:last:mb-0">
                    <div className="text-2xl mr-4 lg:text-3xl">{icon}</div>
                    <div>
                      <h4 className="text-base lg:text-xl font-semibold mb-3">
                        {title}
                      </h4>
                      <p>{subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=+6285341416675&text=Halo%20Miftach%20saya%20ingin%20membeli%20Mobil."
              target="_blank"
              className="bg-accent font-bold text-white rounded-full px-2 py-4 mt-8 w-full text-center"
            >
              Hubungi Kontak
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
