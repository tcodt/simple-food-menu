import React from "react";

export default function Products({ menuDatas }) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-16">
      {menuDatas.map((menu) => (
        <div
          key={menu.id}
          className="grid grid-cols-2 items-start justify-items-stretch gap-4 bg-yellow-100 border-2 border-yellow-600 rounded-md p-4"
        >
          <img
            src={menu.img}
            alt="Product Image"
            className="h-40 object-contain bg-yellow-200 transition rounded-md"
          />
          <div>
            <div className="flex justify-between pb-2">
              <h3 className="text-xl text-gray-900 font-sans font-semibold">
                {menu.title}
              </h3>
              <span className="text-base font-sans font-semibold text-yellow-700">
                ${menu.price}
              </span>
            </div>
            <hr />
            <p className="text-base text-gray-600 font-sans font-semibold mt-4">
              {menu.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
