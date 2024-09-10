import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import Home from "./pages/Home";
import Bikes from "./pages/Bikes";
import BikeInfo from "./pages/BikeInfo";
import { bikes } from "./data";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function addItemToCart(bike) {
    const dupeItem = cart.find((item) => item.id === bike.id);
    setCart((oldCart) =>
      dupeItem
        ? [
            ...oldCart.map((item) => {
              return item.id === dupeItem.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item;
            }),
          ]
        : [...oldCart, { ...bike, quantity: 1 }]
    );
  }

  function updateCart(item, newQuantity) {
    setCart((oldCart) =>
      oldCart.map((oldItem) => {
        if (oldItem.id === item.id) {
          return {
            ...oldItem,
            quantity: newQuantity,
          };
        } else {
          return oldItem;
        }
      })
    );
  }

  function removeItem(item) {
    setCart((oldCart) => oldCart.filter((cartItem) => cartItem.id !== item.id));
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += +item.quantity;
    });
    return counter;
  }

  function calcPrices() {
    let total = 0;
    cart.forEach((item) => {
      total += (item.salePrice || item.originalPrice) * item.quantity;
    });
    return {
      subtotal: total * 0.9,
      tax: total * 0.1,
      total,
    };
  }

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Routes> {/* Wrap Route components inside Routes */}
          <Route path="/" element={<Home bikes={bikes} />} />
          <Route path="/bikes" element={<Bikes bikes={bikes} />} />
          <Route
            path="/bikes/:id"
            element={<BikeInfo bikes={bikes} addItemToCart={addItemToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                updateCart={updateCart}
                removeItem={removeItem}
                totals={calcPrices()}
              />
            } 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
