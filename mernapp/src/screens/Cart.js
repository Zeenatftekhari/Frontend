import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const handleGoBackClick = () => {
    navigate('/Home');
  };
  return (

    <div className="cart">
      <div className="component-658-1">
        <b className="make-payments">Make Payments</b>
      </div>
      <img
        className="notification-bing-icon"
        alt=""
        src="/notificationbing.svg"
      />
      <div className="cart-child" />
      <div className="component-708-1">
        <div className="background">
          <div className="background1" />
        </div>
        <div className="home-indicator">
          <div className="home-indicator1" />
        </div>
      </div>
      <img className="vector-icon" alt="" src="/notificationbing.svg" />
      <img className="path-46026-icon" alt="" src="/path-46026.svg" /> 
     
      <div className="shop-now">Shop Now</div>
      <img className="path-46023-icon" alt="" src="/path-46023.svg" />
      <div className="pure-chocolate">Name</div>
      <div className="potential-drop-rate-container">
        <span>{`Best Price `}</span>
        <b></b>
      </div>
      <img className="union-60-icon" alt="" src="/union-60.svg" />
      <div className="cart-inner">
        <div className="group-child" />
      </div>
      <b className="potential-drop-rate"></b>
      <div className="purchased-by-10">M.R.P</div>
      <div className="rectangle-parent">
        <div className="group-item" />
        <div className="potential-drop-rate-600-20-wrapper">
          <div className="potential-drop-rate1">Ends in </div>
        </div>
      </div>
      
      <div className="shop-with-members">Group Discount Entered</div>
      <div className="view-more">View More</div>
      <div className="cart-item" />
      <div className="rectangle-div" />
      <div className="current-price-parent">
        <div className="current-price">
          <p className="in-publishing-and">Current</p>
          <p className="in-publishing-and">price</p>
        </div>
        <img className="union-59-icon" alt="" src="/union-59.svg" />
        <div className="current-price-300-wrapper">
          <b className="potential-drop-rate1">{`300 `}</b>
        </div>
      </div>
    </div>
  );
};

export default Cart;
