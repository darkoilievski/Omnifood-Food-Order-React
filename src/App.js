import React, { useState } from "react";

import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
const App = () => {
  const [cartIsShown, setCardIsShown] = useState(false);
  const showCardHandler = () => {
    setCardIsShown(true);
  };
  const hideCardHandler = () => {
    setCardIsShown(false);
  };
  return (
    <>
      {cartIsShown && <Cart onCloseCart={hideCardHandler} />}
      <Header onShowCart={showCardHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
