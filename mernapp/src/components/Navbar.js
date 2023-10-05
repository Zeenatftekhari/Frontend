import React from 'react';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge'

const navbarStyle = {
  marginTop: '41px',
  marginBottom: '24px',
  marginLeft: '19px',
  marginRight: '16px',
};

const titleStyle = {
  color: '#C47ECC',
  textAlign: 'center',
  fontFamily: 'Inter',
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '26px',
  marginBottom: '0', // Adjust as needed
};

const subtitleStyle = {
  color: '#6A6A6A',
  fontFamily: 'Inter',
  fontSize: '10px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '26px',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '0', // Adjust as needed
};

const searchNavbarStyle = {
  width: '343px',
  height: '40px',
  flexShrink: 0,
  borderRadius: '10px',
  border: '1px solid #707070',
  background: '#FCF7FF',
  marginTop: '8px', // Adjust as needed
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 10px', // Adjust padding as needed
};

const iconStyle = {
  width: '10px',
  height: '12px',
  flexShrink: 0,
};

const searchIconStyle = {
  width: '16px',
  height: '16px',
  flexShrink: 0,
};

const micIconStyle = {
  width: '12px',
  height: '16px',
  flexShrink: 0,
};


const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const buttonStyle = {
  margin: '0 10px',
  cursor: 'pointer',
};

export default function Navbar() {
  return (
    <div style={navbarStyle}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-inter" to="/">
            <h1 style={titleStyle}>Welcome back User</h1>
            <div style={subtitleStyle}>
              <img src="/location.png" alt="User Location" style={iconStyle} />
              User Location
            </div>
          </Link>
          <div style={buttonContainerStyle}>
            <Link to="/Profile">
              <img
                src="/face_FILL0_wght400_GRAD0_opsz48 3.png"
                alt="Profile"
                style={{ ...buttonStyle, width: '20px', height: '20px', top : '44px', left: '309px' }}
              />
            </Link>
            <Link to="/Cart"r>
              <img
                src="/add to cart.png"
                alt="Add to Cart"
                style={{ ...buttonStyle, width: '14px', height: '17.8px', top: '43.69px', left: '342px' }}
              />
            </Link>
          </div>

          <form className="d-flex" style={searchNavbarStyle}>
            <img src="/search.png" alt="Search" style={searchIconStyle} />
            <input className="form-control me-2" type="search" placeholder="Search" inter-label="Search" />
            <img src="/mic.png" alt="Mic" style={micIconStyle} />
          </form>
          
        </div>
      </nav>
    </div>
  );
}