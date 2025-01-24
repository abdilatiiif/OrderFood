export default function OrderForm() {
  console.log("hello from from order form");
  return (
    <section className="bg-amber-200">
      <button className="close">Close Order Form</button>
      <form className="form">
        <div className="person">
          <label htmlFor="">Name:</label>
          <input type="text" />

          <label htmlFor="">Email:</label>
          <input type="email" />

          <label htmlFor="">Phone:</label>
          <input type="tel" />

          <label htmlFor="">Address:</label>
          <input type="text" />
        </div>

        <div className="order">
          <label htmlFor="">Forrett:</label>
          <select name="" id="">
            <option value="bruschetta">Bruschetta</option>
            <option value="tomatsuppe">Tomatsuppe</option>
            <option value="caprese">Caprese</option>
            <option value="rekecocktail">Rekecocktail</option>
            <option value="vårruller">Vårruller</option>
            <option value="vegemite">Vegemite</option>
            <option value="rakfisk">Rakfisk</option>
          </select>

          <label htmlFor="">Hovedrett:</label>
          <select name="" id="">
            <option value="france">France</option>
            <option value="south-korea">South Korea</option>
          </select>
        </div>
      </form>
    </section>
  );
}
