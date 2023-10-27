import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import OTP from "./screens/Otp";
import FlashScreen from "./screens/Flashscreen"; // Assuming this is your starting screen
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Payment from "./screens/Paymentpage";
import Bidding from "./screens/Bidding";
import Orderdetails from "./screens/Orderdetails";
import Payment1 from "./screens/Paymentpage2";
import Productdetails from "./screens/Productdetail";
import Biddingpopup from "./screens/Biddingpopup";
import OrderPlacement from "./screens/OrderPlacement";
import Profile from "./screens/Profile";
import Cart from "./screens/Cart";

import "../node_modules/bootstrap-dark-5/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { CartProvider } from "./components/ContextReducer";

function App() {
  return (
    <Router>
      <div>
        <CartProvider>
          <Routes>
            <Route exact path="/" element={<FlashScreen key={1} />} key={1} />
            <Route exact path="/Home" element={<Home key={2} />} key={2} />
            <Route exact path="/Login" element={<Login key={3} />} key={3} />
            <Route exact path="/CreateUser" element={<Signup key={4} />} key={4} />
            <Route exact path="/Otp" element={<OTP key={5} />} key={5} />
            <Route exact path="/Paymentpage/:name" element={<Payment key={6} />} key={6} />
            <Route exact path="/Paymentpage2/:name" element={<Payment1 key={7} />} key={7} />
            <Route exact path="/Bidding/:name" element={<Bidding key={8} />} key={8} />
            <Route
              exact
              path="/Orderdetails/:name"
              element={<Orderdetails key={9} />}
              key={9} />
            <Route path="/Productdetail/:name" element={<Productdetails key={10} />} key={10} />
            <Route
              exact
              path="/Biddingpopup/:name"
              element={<Biddingpopup key={11} />}
              key={11} />
            <Route
              exact
              path="/OrderPlacement/:name"
              element={<OrderPlacement key={12} />}
              key={12} />
            <Route exact path="/Profile" element={<Profile key={13} />} key={13} />
            <Route exact path="/Cart" element={<Cart key={14} />} key={14} />
          </Routes>
        </CartProvider>
      </div>
    </Router>
  );
}

export default App;
