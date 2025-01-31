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
    <section className="bg-amber-200">
      <button
        className="close"
        onClick={() => setShowForm((showForm) => !showForm)}
      >
        {showForm ? "Close Order" : "Open order"}
      </button>
      {showForm && (
        <form className="form" onSubmit={handleOrder}>
          <div className="person">
            <label htmlFor="fullname">Full name:</label>
            <input name="fullname" placeholder="name" required type="text" />

            <label htmlFor="email">Email:</label>
            <input name="email" placeholder="email" required type="email" />

            <label htmlFor="phone">Phone:</label>
            <input name="phone" placeholder="number" required type="tel" />

            <label htmlFor="address">Address:</label>
            <input name="address" placeholder="address" required type="text" />
          </div>

          <div className="order">
            <label htmlFor="premeal">PreMeal:</label>
            <select name="premeal" id="preMeal">
              <option value="bruschetta">Bruschetta</option>
              <option value="tomatsuppe">Tomatsuppe</option>
              <option value="caprese">Caprese</option>
              <option value="rekecocktail">Rekecocktail</option>
              <option value="vårruller">Vårruller</option>
              <option value="vegemite">Vegemite</option>
              <option value="rakfisk">Rakfisk</option>
            </select>

            <label htmlFor="main">Main course</label>
            <select name="main" id="main">
              <option value="france">France</option>
              <option value="south-korea">South Korea</option>
              <option value="india">India</option>
              <option value="japan">Japan</option>
              <option value="usa">USA</option>
              <option value="england">England</option>
              <option value="china">China</option>
            </select>

            <label htmlFor="drink">Drikke</label>
            <select name="drikke" id="drink">
              <option value="pepsi-max">pepsi max</option>
              <option value="coca-cola">coca-cola</option>
              <option value="sprite">sprite</option>
              <option value="milshake">Milkshake</option>
              <option value="lemonade">lemonade</option>
            </select>

            <label htmlFor="dessert">Dessert</label>
            <select name="dessert" id="desert">
              <option value="sjokolade is">sjokolade is</option>
              <option value="Cake">Cake</option>
              <option value="Ananas cake">Ananas cake</option>
              <option value="milshake">Milkshake mountain</option>
              <option value="kunafah">kunafah</option>
            </select>

            <label htmlFor="notat">Tillegg, side, Notater</label>
            <textarea
              name="notat"
              id="notat"
              placeholder="tilleggs notater, allergi"
            ></textarea>
          </div>

          <div className="flex justify-around">
            <label htmlFor="status" className="text-2xl">
              Pick up
            </label>
            <input
              name="status"
              className="h-4 w-14"
              required
              type="radio"
              value="pick up"
              onChange={() => handleStatus("Pick up")}
            />
            <label htmlFor="status" className="text-2xl">
              Delivery
            </label>
            <input
              name="status"
              className="h-4 w-14"
              required
              type="radio"
              value="delivery"
              id="status"
              onChange={() => handleStatus("Delivery")}
            />
          </div>
          <labe htmlFor="time" className="text-2xl">
            Time for{" "}
            <p
              className={
                status === "Pick up" ? "bg-green-400" : "bg-orange-400"
              }
            >
              {" "}
              {status}
            </p>{" "}
          </labe>
          <input required type="time" name="time" />
          <input required type="date" name="date-input" />

          <button
            className=" bg-green-400 h-14 rounded-2xl text-2xl"
            type="submit"
          >
            Order
          </button>
        </form>
      )}
    </section>
  );
}
