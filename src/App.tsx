import "bootstrap/dist/css/bootstrap.min.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.sass";
import HomePage from "./componets/HomePage";
import MyNavBar from "./componets/MyNavBar";

const MenuPage = lazy(() => import("./componets/MenuPage"));

function App() {
  return (
    <>
      <MyNavBar />
      <Suspense fallback={<div>wait a bit</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={""} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
