import React from "react";

// import data
import { housesData } from "../data";

// import use params
import { useParams } from "react-router-dom";

const Lineup = () => {
  // get the house id
  const { id } = useParams();

  const house = housesData.find((house) => house.id === parseInt(id));
  return (
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
                <div className="font-semibold text-center">Mulai Dari</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-center">Warna</div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-100">
            {house.lineup.map((liup, index) => (
              <tr key={index}>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-sm">
                    <div className="font-medium text-gray-700 text-center">
                      {liup.nama}
                    </div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="font-medium text-gray-700 text-center">
                    {liup.harga}
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex justify-center">
                    <div className="font-medium text-gray-700 ">
                      <img src={liup.warna} alt={liup.nama} />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Lineup;
