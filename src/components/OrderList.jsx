/* eslint-disable react/prop-types */

import { useState } from "react";
export default function OrderList({ order }) {
  return <Order order={order} />;
}

function Order({ order }) {
  const [show, setShow] = useState(false);

  function handleShow() {
    console.log("clicked");
    setShow((prevState) => !prevState);
  }

  return (
    <>
      <div className="border-2 border-gray-200 rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <p className="text-2xl font-semibold text-gray-800 flex-1">
            {order.fullname}
          </p>
          <img
            className="w-16 h-16 rounded-full object-cover"
            src="https://i.pravatar.cc/48?=213e123"
            alt="avatar"
          />
          <button
            onClick={handleShow}
            className={`${
              show ? "bg-red-500" : "bg-green-500"
            } text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300`}
          >
            {show ? "Close" : "Open"}
          </button>
        </div>

        {show && (
          <div className="grid grid-cols-2 gap-4">
            <ul className="text-gray-600">
              <li className="font-medium">Fullname:</li>
              <li className="font-medium">Email:</li>
              <li className="font-medium">Phone:</li>
              <li className="font-medium">Address:</li>
              <li className="font-medium">Premeal:</li>
              <li className="font-medium">Main:</li>
              <li className="font-medium">Drink:</li>
              <li className="font-medium">Dessert:</li>
              <li className="font-medium">Time:</li>
              <li className="font-medium">Date:</li>
              <li className="font-medium">Status:</li>
            </ul>
            <ul className="text-gray-800">
              <li>{order.fullname}</li>
              <li>{order.email}</li>
              <li>{order.phone}</li>
              <li>{order.address}</li>
              <li>{order.premeal}</li>
              <li>{order.main}</li>
              <li>{order.drikke}</li>
              <li>{order.dessert}</li>
              <li>{order.time}</li>
              <li>{order.dateInput}</li>
              <li
                className={
                  order.status === "pick up"
                    ? "bg-green-700 text-white px-2 py-1 rounded-full text-sm"
                    : "bg-pink-400 text-white px-2 py-1 rounded-full text-sm"
                }
              >
                {order.status}
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
