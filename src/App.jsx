import Menu from "./components/Menu";
import "./data";
import Button from "./components/Button";
import { useState } from "react";
import OrderForm from "./components/OrderForm";
import OrderList from "./components/OrderList";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const [orderForm, setOrderForm] = useState(true);

  function showMenuHandler() {
    setShowMenu((show) => !show);
  }

  function showOrderFormHandler() {
    setOrderForm((show) => !show);
  }

  return (
    <>
      <header className="header">
        <img className="w-33 lg:w-37" src="bilder/logosvg.svg" alt="logo" />
        <h1>Order all you can eat</h1>
      </header>
      <div className="cta">
        <Button btnName={"order--now"} onClick={showOrderFormHandler}>
          {" "}
          Order now ⌄{" "}
        </Button>
        <Button btnName={"show--menu"} onClick={showMenuHandler}>
          {" "}
          Show Menu ⌄{" "}
        </Button>
      </div>
      {orderForm && <OrderForm orderForm={orderForm} />}
      {showMenu && <Menu />}

      <OrderList />
    </>
  );
}

export default App;
