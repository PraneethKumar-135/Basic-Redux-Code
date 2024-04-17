"use client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import { Provider } from 'react-redux'
import store from "./Store/store";

export default function Page() {
  return (
    <main className="flex  flex-col items-center justify-between mt-5">
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route >
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </main>
  );
}
