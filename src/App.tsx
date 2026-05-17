import "bootstrap/dist/css/bootstrap.min.css";
import { lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.sass";
import HomePage from "./componets/HomePage";
import { LoadingPage } from "./componets/LoadingPage";

const MyNavBar = lazy(() => import("./componets/MyNavBar"));
const MenuPage = lazy(() => import("./componets/MenuPage"));
const CartPage = lazy(() => import("./componets/CartPage"));

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <MyNavBar cart={cart} />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
