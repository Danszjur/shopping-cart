import { Outlet } from "react-router";
import NavBar from "./components/NavBar";
import { useState } from "react";

export default function App() {
  const [itemNumInCart, setItemNumInCart] = useState(0);
  const [itemsInCart, setItemsInCart] = useState([]);

  function putInCart(itemObj, numberOfItems) {
    setItemsInCart((prev) => [...prev, itemObj]);
    setItemNumInCart((prev) => prev + 1 * numberOfItems);
  }

  return (
    <>
      <NavBar
        displayedText="My Store"
        value={itemNumInCart}
        items={itemsInCart}
      />
      <Outlet context={{ putInCart, itemsInCart }} />
    </>
  );
}
