/* eslint-disable react/prop-types */
import { useState } from "react";
import food from "../data.js";

export default function Menu() {
  const [menuShow, setMenuShow] = useState(false);
  const [premealShow, setPremealShow] = useState(false);

  function handlePreMeal() {
    setPremealShow(!premealShow);
  }
  function handleMenu() {
    setMenuShow(!menuShow);
  }

  return (
    <section className="bg-amber-50 p-4 md:p-8 rounded-lg shadow-lg">
      <div className="mb-8">
        <button
          onClick={handleMenu}
          className="w-full md:w-auto px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-75 transition-colors duration-200"
        >
          {menuShow ? "Close Menu" : "Open Menu"}
        </button>
        {menuShow && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">
              Main Courses
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {food.hovedretter &&
                food.hovedretter.map(
                  (rett) => rett && <Rett key={rett.navn} rett={rett} />
                )}
            </ul>
          </div>
        )}
      </div>
      <div className={`${premealShow ? "bg-amber-100 p-4 rounded-lg" : ""}`}>
        <button
          onClick={handlePreMeal}
          className="w-full md:w-auto px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-colors duration-200"
        >
          {premealShow ? "Close Premeal" : "Open Premeal"}
        </button>
        {premealShow && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Starters</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {food.forretter &&
                food.forretter.map(
                  (rett) => rett && <Rett key={rett.navn} rett={rett} />
                )}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

function Rett({ rett }) {
  if (!rett) return null;

  console.log(rett);

  return (
    <li className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
      <div className="relative pb-2/3">
        <img className="" src={rett.src} alt={rett.navn} />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2 text-gray-800">{rett.navn}</h3>
        <div className="flex flex-col space-y-2">
          <div className="flex flex-wrap items-center text-sm text-gray-600">
            <span className="font-semibold mr-2">Allergener:</span>
            {rett.allergener &&
              rett.allergener.map((allergen) => (
                <span
                  key={allergen}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs mr-1 mb-1"
                >
                  {allergen}
                </span>
              ))}
          </div>
          <p className="text-lg font-semibold text-green-600">
            Price: {rett.pris} kr
          </p>
        </div>
        <button className="mt-4 w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-75">
          Order Now
        </button>
      </div>
    </li>
  );
}
