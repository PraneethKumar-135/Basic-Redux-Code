"use client"
import UserDetailsSlice from "./Slices/postdata";
import Store from "./Store/Store";
import { Provider } from "react-redux"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Provider store={Store}>
        <UserDetailsSlice />
      </Provider>
    </main>
  );
}
