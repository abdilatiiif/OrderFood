import food from "/src/data.js";

import { useState } from "react";

console.log(food);

export default function Menu() {
  return (
    <div className="menu">
      <div className="sticky top-0">
        <button className="close">Close preMeals</button>
        <ul className="food forretter">
          <li>
            <img
              src="https://preview.redd.it/tradional-plate-of-food-from-different-countries-as-per-v0-os3m890fih2b1.png?width=1080&crop=smart&auto=webp&s=1704202a0efeb20d0d9ecf6ffc66bc174b4a94b2"
              alt="india"
            />
            <p>India</p>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="sticky top-0 bg-amber-400">
        <button className="close">Close Main Dinner</button>
        <ul className="food forretter">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="sticky top-0 bg-green-500">
        <button className="close">Close Dessert</button>
        <ul className="food forretter">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="sticky top-0 bg-red-700">
        <button className="close">Close SideMenu</button>
        <ul className="food forretter">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
