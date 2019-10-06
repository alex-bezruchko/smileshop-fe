import React from 'react';
import { Route } from "react-router-dom";
import Cart from "./parts/cart";
import Header from "./parts/header/Header";
import Footer from "./parts/Footer";
// import Copyright from "./parts/Copyright";


import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/cart" component={Cart} />
      <Footer />
      {/* <Copyright /> */}
    </div>
  );
}

export default App;
