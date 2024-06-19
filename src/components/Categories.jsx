import { useState } from "react";
import { LuShoppingBag } from "react-icons/lu";
import { FaStarHalfAlt } from "react-icons/fa";
import "../App.css";

// eslint-disable-next-line react/prop-types
const Categories = ({ categories, menuDatas }) => {
  const [mainCategory, setMainCategory] = useState("all");

  const filteredItems = menuDatas.filter((item) => {
    if (mainCategory === "all") {
      return true;
    } else {
      return item.category === mainCategory;
    }
  });

  return (
    <div>
      <div className="flex justify-center">
        {/* eslint-disable-next-line react/prop-types */}
        {categories.map((category, index) => (
          <button
            key={index}
            type="button"
            className={`${
              category === mainCategory
                ? "bg-yellow-700 py-1 px-2 rounded-md border-2 border-yellow-700 font-sans font-semibold text-lg mx-2 text-white outline-none"
                : "py-1 px-2 rounded-md border-2 border-yellow-700 text-yellow-700 font-sans font-semibold text-lg mx-2 hover:bg-yellow-50 transition outline-none"
            }`}
            onClick={() => setMainCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 mt-16">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-2 items-start justify-items-stretch gap-4 bg-yellow-100 border-2 border-yellow-600 rounded-md p-4"
          >
            <img
              src={item.img}
              alt="Product Image"
              className="h-40 object-contain bg-yellow-200 transition rounded-md"
            />
            <div>
              <div className="flex justify-between pb-2">
                <h3 className="text-xl text-gray-900 font-sans font-semibold">
                  {item.title}
                </h3>
                <span className="flex items-center text-lg font-sans font-semibold">
                  <FaStarHalfAlt className="text-yellow-500" />
                  &nbsp;
                  {item.rate}
                </span>
              </div>
              <hr />
              <p className="text-base text-gray-600 font-sans font-semibold mt-4">
                {item.desc}
              </p>
            </div>
            <div className="w-full btn-order-el">
              <button className="py-1 px-2 bg-yellow-300 w-1/3 rounded-md shadow-sm text-base font-sans font-semibold hover:bg-yellow-600 hover:text-white transition flex justify-between">
                Order
                <LuShoppingBag className="text-xl" />
              </button>
              <span className="flex items-center text-lg font-sans font-semibold text-yellow-700">
                Price: ${item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
