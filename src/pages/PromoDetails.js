import React from "react";

// import data
// import { newInStore } from "../data2";
import { promoData } from "../data";

import { useParams } from "react-router-dom";

// import components
// import NewItemsSlider from "./NewItemsSlider";
// import Stats from "./Stats";

const PromoDetails = () => {
  // destructure newInStore
  const { id } = useParams();

  const house = promoData.find((house) => house.id === parseInt(id));
  return (
    <section className="section">
      <div className="container mx-auto">
        <>
          {/* component */}
          <div className="max-w-screen-xl mx-[1px]">
            <main className="mt-10">
              <div
                className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
                style={{ height: "24em" }}
              >
                <div
                  className="absolute left-0 bottom-0 w-full h-full z-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
                  }}
                />
                <img
                  src={house.image}
                  className="absolute left-0 top-0 w-full h-full z-0 object-cover"
                />
                <div className="p-4 absolute bottom-0 left-0 z-20">
                  <a
                    href="#"
                    className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
                  >
                    {house.year}
                  </a>
                  <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                    {house.title}
                    {house.merk}
                  </h2>
                  <div class="flex mt-3">
                    <img
                      src="https://randomuser.me/api/portraits/men/97.jpg"
                      class="h-10 w-10 rounded-full mr-2 object-cover"
                    />
                    <div>
                      <p class="font-semibold text-gray-200 text-sm">
                        {" "}
                        Aditya{" "}
                      </p>
                      <p class="font-semibold text-gray-400 text-xs">
                        {" "}
                        1 July 2023{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                <p className="pb-6">{house.description1}</p>
                <p className="pb-6 border-b-2 border-gray-500">
                  {house.description2}
                </p>
                {/* <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                  Sportsman do offending supported extremity breakfast by
                  listening. Decisively advantages nor expression unpleasing she
                  led met. Estate was tended ten boy nearer seemed. As so seeing
                  latter he should thirty whence. Steepest speaking up attended
                  it as. Made neat an on be gave show snug tore.
                </div> */}
                {house.mobil.map((mbl, index) => (
                  <div key={index}>
                    <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
                      {mbl.nama}
                    </h2>
                    {/* <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5"> */}
                    {mbl.keterangan.map((keter, index) => (
                      <div key={index}>
                        <div className="flex mb-6 lg:last:mb-0">
                          <div className="text-2xl mr-4 lg:text-3xl">-</div>
                          <div>
                            <h4 className="text-base lg:text-xl font-semibold mb-3">
                              {keter.title}
                            </h4>
                            <div className="flex mb-6 lg:last:mb-0">
                              {keter.subtitle ? (
                                <>
                                  <div className="text-2xl mr-4 lg:text-3xl">
                                    *
                                  </div>
                                  <h6>{keter.subtitle}</h6>
                                </>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* </div> */}
                  </div>
                ))}
              </div>
            </main>
            {/* main ends here */}
          </div>
        </>
      </div>
    </section>
  );
};

export default PromoDetails;
