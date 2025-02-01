/* eslint-disable react/prop-types */
import React from "react";

export default function OrderForm({ orderForm, getOrder }) {
  let [status, setStatus] = React.useState("");

  const [showForm, setShowForm] = React.useState(orderForm);

  function handleStatus(text) {
    setStatus((status = text));
  }

  function handleOrder(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const image = "https://i.pravatar.cc/48";
    const id = crypto.randomUUID();

    const order = {
      fullname: formData.get("fullname"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      premeal: formData.get("premeal"),
      main: formData.get("main"),
      drikke: formData.get("drikke"),
      dessert: formData.get("dessert"),
      time: formData.get("time"),
      dateInput: formData.get("date-input"),
      status: formData.get("status"),
      notat: formData.get("notat"),
      image: `${image}?=${id}`,
    };

    getOrder(order);
    setShowForm(false);
  }

  return (
    <section className="bg-amber-100 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <button
        onClick={() => setShowForm((prev) => !prev)}
        className="mb-6 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
      >
        {showForm ? "Close Order" : "Open Order"}
      </button>

      {showForm && (
        <form onSubmit={handleOrder} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-amber-800">
                Personal Information
              </h2>
              <input
                name="fullname"
                placeholder="Full Name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                name="address"
                placeholder="Address"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-amber-800">
                Order Details
              </h2>
              <select
                name="premeal"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="">Select Pre-meal</option>
                {[
                  "Bruschetta",
                  "Tomatsuppe",
                  "Caprese",
                  "Rekecocktail",
                  "Vårruller",
                  "Vegemite",
                  "Rakfisk",
                ].map((item) => (
                  <option key={item} value={item.toLowerCase()}>
                    {item}
                  </option>
                ))}
              </select>

              <select
                name="main"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="">Select Main Course</option>
                {[
                  "France",
                  "South Korea",
                  "India",
                  "Japan",
                  "USA",
                  "England",
                  "China",
                ].map((item) => (
                  <option key={item} value={item.toLowerCase()}>
                    {item}
                  </option>
                ))}
              </select>

              <select
                name="drikke"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="">Select Drink</option>
                {[
                  "Pepsi Max",
                  "Coca-Cola",
                  "Sprite",
                  "Milkshake",
                  "Lemonade",
                ].map((item) => (
                  <option key={item} value={item.toLowerCase()}>
                    {item}
                  </option>
                ))}
              </select>

              <select
                name="dessert"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="">Select Dessert</option>
                {[
                  "Sjokolade Is",
                  "Cake",
                  "Ananas Cake",
                  "Milkshake Mountain",
                  "Kunafah",
                ].map((item) => (
                  <option key={item} value={item.toLowerCase()}>
                    {item}
                  </option>
                ))}
              </select>

              <textarea
                name="notat"
                placeholder="Additional notes, allergies, etc."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 h-24"
              ></textarea>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-amber-800">
              Delivery Options
            </h2>
            <div className="flex justify-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="status"
                  value="pick up"
                  onChange={() => handleStatus("Pick up")}
                  className="form-radio text-amber-500"
                />
                <span className="ml-2">Pick Up</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="status"
                  value="delivery"
                  onChange={() => handleStatus("Delivery")}
                  className="form-radio text-amber-500"
                />
                <span className="ml-2">Delivery</span>
              </label>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <label htmlFor="time" className="text-lg font-semibold">
                Time for{" "}
                <span
                  className={`px-2 py-1 rounded ${
                    status === "Pick up" ? "bg-green-400" : "bg-orange-400"
                  }`}
                >
                  {status}
                </span>
              </label>
              <input
                type="time"
                name="time"
                required
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                type="date"
                name="date-input"
                required
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white text-xl py-3 rounded-md transition duration-300 ease-in-out"
          >
            Place Order
          </button>
        </form>
      )}
    </section>
  );
}
