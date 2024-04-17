"use client";
import React from 'react';
import { Counter } from './app/features/counter/counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img  className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
