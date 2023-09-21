import { useState } from "react";
import { Header } from "./components/Header/Header"
import Main from "./components/Main/Main"


export const App = () => {

  const [cart, setCart] = useState([])

  return (
    <>
      <Header cart={cart} setCart={setCart} />
      <Main cart={cart} setCart={setCart} />
    </>
  );
}