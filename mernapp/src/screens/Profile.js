import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./Profile.css";


const Profile = () => {
  const navigate = useNavigate();
const handleGoBackClick = () => {
  navigate('/Home');
};
  return (
    <div className="profile">
      <div className="component-658-1" />
      <div className="notification-bing" />
      <div className="profile-child" />
      <div className="component-708-1">
        <div className="background">
          <div className="background1" />
        </div>
        <div className="home-indicator">
          <div className="home-indicator1" />
        </div>
      </div>
      <img className="vector-icon" alt="" src="/vector.svg" />
      <div className="profile-item" />
      <div className="profile-inner" />
      <div className="group-div">
        <div className="group-child" />
      </div>
      
      <img className="path-46026-icon" alt="" src="/path-46026.svg" />
      <div className="shop-with-members1">User Name</div>
     
      <div className="shop-now">Shop Now</div>
      <button
          type="button"
          style={{ border: 'none', background: 'none', cursor: 'pointer' }}
          onClick={handleGoBackClick}
        ><img className="path-46023-icon" alt="" src="/path-46023.svg" /></button>
      <img className="ellipse-icon" alt="" src="/ellipse-7621.svg" />
      <img
        className="face-fill0-wght400-grad0-opsz4-icon"
        alt=""
        src="/face-fill0-wght400-grad0-opsz48-1.svg"
      />
      
      <div className="price-falling-with-each-buy-wrapper">
        <div className="price-falling-with">{`Product Discription `}</div>
        <img
        className="i518025sm005c12realistic-icon"
        alt=""
        src="/2201i518025sm005c12realistic-chocolate-packaging-setremovebgpreview@2x.png"
      />
      </div>
      <div className="view-more">View More</div>
      <div className="rectangle-div" />
      <div className="profile-child1" />
      <img className="vector-icon1" alt="" src="/vector1.svg" />
      <img className="vector-icon2" alt="" src="/vector1.svg" />
      <div className="profile-child2" />
      <div className="profile-child3" />
      <div className="profile-child4" />
      <div className="profile-child5" />
      <img className="vector-icon3" alt="" src="/vector1.svg" />
      <div className="proceed">My Orders</div>
      <div className="proceed1">Payment details</div>
      <div className="proceed2">Share the web app</div>
      <div className="proceed3">Track your order</div>
      <div className="proceed4">Get Updates on Whatsapp</div>
      <div className="proceed5">Log out</div>
      <img
        className="toggle-on-fill0-wght400-grad0-icon"
        alt=""
        src="/toggle-on-fill0-wght400-grad0-opsz48-1.svg"
      />
      <img className="vector-icon4" alt="" src="/vector2.svg" />
    </div>
  );
};

export default Profile;
