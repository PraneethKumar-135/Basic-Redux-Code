"use client";
import store from './app/store'
import { Provider } from 'react-redux'
import App from '../app'

export default function Home() {
  return (
      <Provider store={store}>
        <App />
      </Provider>
  );
}
