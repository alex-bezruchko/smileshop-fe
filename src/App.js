import React from 'react';
import { Route } from "react-router-dom";
import Cart from "./parts/cart";
import Header from "./parts/header/Header";
import WelcomeCarousel from "./components/WelcomeCarousel";

import Footer from "./parts/Footer";
import Copyright from "./parts/Copyright";
import Welcome from "./components/Welcome";


import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/" component={WelcomeCarousel} />
      <Route exact path="/products" component={Welcome} />

      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
