import Menu from "./components/Menu";
import "./data";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <>
      <header className="header">
        <img className="w-33 lg:w-37" src="bilder/logosvg.svg" alt="logo" />
        <h1>Order all you can eat</h1>
      </header>
      <div className="cta">
        <Button btnName={"order--now"}> Order now ⌄ </Button>
        <Button btnName={"show--menu"}> Show Menu ⌄ </Button>
      </div>
      {showMenu && <Menu />}
    </>
  );
}

export default App;
