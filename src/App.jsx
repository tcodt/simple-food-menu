import { useState } from "react";
import menuDatas from "./components/MenuDatas";
import Categories from "./components/Categories";
import { SiBuymeacoffee } from "react-icons/si";
import "./App.css";

const allCategories = [
  "all",
  ...new Set(menuDatas.map((menu) => menu.category)),
]; // Remove Repeated Datas

function App() {
  const [allMenus, setAllMenus] = useState(menuDatas);
  const [categories, setCategories] = useState(allCategories);

  // console.log(allCategories);

  return (
    <section>
      <div className="container mx-auto my-16">
        <div className="flex justify-center items-center">
          <h3 className="text-4xl text-gray-800 font-sans pb-4 animate-bounce font-semibold border-b-2 border-b-yellow-600 mt-8 flex items-center">
            Our Menu
            <SiBuymeacoffee className="text-yellow-700 text-5xl animate-pulse" />
          </h3>
        </div>
        <div className="flex justify-center my-8">
          <Categories categories={categories} menuDatas={menuDatas} />
        </div>
      </div>
    </section>
  );
}

export default App;
