/* eslint-disable react/prop-types */
import food from "/src/data.js";

import { useState } from "react";

export default function Menu({ showMenu }) {
  const [hovedretter, setHovedretter] = useState(food.hovedretter);
  const [forretter, setForretter] = useState(food.forretter);
  const [menuShow, setMenuShow] = useState(false);
  const [premealShow, setPremealShow] = useState(false);

  const hovedretterList = hovedretter.map((hovedrett) => (
    <Rett key={hovedrett.navn} rett={hovedrett} />
  ));

  const forretterList = forretter.map((forrett) => {
    return <Rett key={forrett.navn} rett={forrett} />;
  });

  function handlePreMeal() {
    setPremealShow(!premealShow);
  }
  function handleMenu() {
    setMenuShow(!menuShow);
  }

  return (
    <section className="menu">
      <div className="sticky top-0 mb-14 ">
        <button onClick={handleMenu} className="close">
          {menuShow ? "Close Menu" : "Open Menu"}
        </button>
        {menuShow && <ul className="food">{hovedretterList}</ul>}
      </div>
      <div className={`sticky top-0 ${premealShow && "bg-amber-400"}`}>
        <button onClick={handlePreMeal} className="close">
          {premealShow ? "Close Premeal" : "Open Premeal"}
        </button>
        {premealShow && <ul className="food">{forretterList}</ul>}
      </div>
    </section>
  );
}

function Rett({ rett }) {
  return (
    <li>
      <img className="rounded-lg max-w-[350px]" src={rett.src} alt="india" />
      <h3 className="font-bold text-3xl">{rett.navn}</h3>
      <div className="flex justify-between items-center">
        <div className="flex items-center text-sm">
          allergener:
          {rett.allergener.map((allergen) => (
            <p key={allergen} className="text-sm mx-1">
              {allergen}
            </p>
          ))}
        </div>
        <p>Price: {rett.pris}</p>
      </div>
      <button className="bg-green-500 rounded-2xl p-1">Order</button>
    </li>
  );
}
