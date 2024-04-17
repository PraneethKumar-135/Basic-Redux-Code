"use client"
import Image from "next/image";
import Form from "./FormComponent/Form";
import { Provider } from 'react-redux'
import store from "./Store/Store";
import CakeView from "./CakeComponent/CakeView";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Provider store={store}>
        <CakeView />
      </Provider>
    </main>
  );
}
