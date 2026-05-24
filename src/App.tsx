import "bootstrap/dist/css/bootstrap.min.css";
import { lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.sass";
import HomePage from "./componets/HomePage";
import { LoadingPage } from "./componets/LoadingPage";

const MyNavBar = lazy(() => import("./componets/MyNavBar"));
const MenuPage = lazy(() => import("./componets/MenuPage"));
const CartPage = lazy(() => import("./componets/CartPage"));
type cartitem = {
  name: string;
  amount: number;
};
function App() {
  const [cart, setCart] = useState<cartitem[]>([]);
  function changeCart(name: string) {
    setCart((prev) => {
      const index = prev.findIndex((item) => item.name === name);

      if (index !== -1) {
        const updated = [...prev];
        updated[index] = {
          ...updated[index],
          amount: updated[index].amount + 1,
        };
        return updated;
      }

      return [...prev, { name, amount: 1 }];
    });
    console.log(cart);
  }
  console.log(cart);
  return (
    <>
      <MyNavBar cart={cart} />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage cartFunc={changeCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
