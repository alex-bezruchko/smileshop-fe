import React from 'react';
import { Route } from "react-router-dom";
import Cart from "./parts/cart";
import Header from "./parts/header/Header";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/cart" component={Cart} />
    </div>
  );
}

export default App;
