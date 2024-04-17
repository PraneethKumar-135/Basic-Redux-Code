"use client"

import Product from "./component/product";
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from "./component/Dashboard";
import Cart from "./component/Cart";
import RootLayout from "./component/RootLayout";
import NavBarPanel from './component/NavBarPanel'; // Import the NavBarPanel component

import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

export default function Home() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products" element={<Product />} /> {/* Define the /products route */}
    </Route>
  ));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBarPanel /> {/* Include the NavBarPanel component */}
      <RouterProvider router={router} />
    </main>
  );
}
