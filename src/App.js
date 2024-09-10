import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bikes from "./pages/Bikes";
import { bikes } from "./data";
import BikeInfo from "./pages/BikeInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/bikes' exact element={<Bikes bikes={ bikes } />} />
          <Route
            path="/bikes/:id"
            element={<BikeInfo bikes={bikes} />}
          />
          {/* <Route path="/" element={<Home bikes={bikes} />} />
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
          /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
