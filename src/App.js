import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import OTP from './screens/Otp';
import FlashScreen from './screens/Flashscreen'; // Assuming this is your starting screen
import Login from './screens/Login';
import Signup from './screens/Signup';
import Payment from './screens/Paymentpage';
import Bidding from './screens/Bidding';
import Orderdetails from './screens/Orderdetails';
import Payment1 from './screens/Paymentpage2';
import Productdetails from './screens/Productdetail';
import Biddingpopup from './screens/Biddingpopup';
import OrderPlacement from './screens/OrderPlacement';
import Profile from './screens/Profile';
import Cart from './screens/Cart';

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from './components/ContextReducer';

function App() {
  return (
    <Router>
      <div>
        <CartProvider>
          <Routes>
            <Route exact path="/" element={<FlashScreen />} /> 
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/CreateUser" element={<Signup />} />
            <Route exact path="/Otp" element={<OTP />} />
            <Route exact path="/Paymentpage/:name" element={<Payment />} />
            <Route exact path="/Paymentpage2/:name" element={<Payment1 />} />
            <Route exact path="/Bidding/:name" element={<Bidding />} />
            <Route exact path="/Orderdetails/:name" element={<Orderdetails />} />
            <Route path="/Productdetail/:name" element={<Productdetails />} />
            <Route exact path="/Biddingpopup/:name" element={<Biddingpopup />} />
            <Route exact path="/OrderPlacement/:name" element={<OrderPlacement />} />
            <Route exact path="/Profile" element={<Profile />} />
            <Route exact path="/Cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </div>
    </Router>
  );
}

export default App;
