import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FlashScreen() {
  const navigate = useNavigate();
  const [containerWidth, setContainerWidth] = useState(360);

  const updateContainerWidth = () => {
    const newWidth = window.innerWidth < 460 ? window.innerWidth : 360;
    setContainerWidth(newWidth);
  };

  useEffect(() => {
    // Update container width initially and on window resize
    updateContainerWidth();
    window.addEventListener('resize', updateContainerWidth);

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener('resize', updateContainerWidth);
    };
  }, []);

  const containerHeight = 812; // Set the container height

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: `${containerWidth}px`,
    height: `${containerHeight}px`,
    flexShrink: 0,
    backgroundColor: '#FFF',
    boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.07)',
    margin: '0 auto', 
    backgroundImage: `url('Flashscreen.png')`,
    backgroundSize: '100% 100%',
    backgroundPosition: 'center top',
    marginBottom: `${containerHeight * 0.615}px`, // 50% of container height
  };


  const titleStyle = {
    color: '#c47ecc',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '55px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    letterSpacing: '-0.017px',
    marginBottom: '10px',
  };

  const subtitleStyle = {
    color: '#8c5ce3',
    fontFamily: 'Inter',
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    letterSpacing: '-0.011px',
    marginBottom: '30px',
  };

  const imageStyle = {
    width: '200px',
    height: 'auto',
    marginBottom: '176.9px',
  };

  const buttonStyle = {
    width: '171px',
    height: '54px',
    flexShrink: 0,
    borderRadius: '6px',
    background: 'linear-gradient(247deg, #905CC6 0%, #C47ECC 100%)',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    letterSpacing: '-0.005px',
    cursor: 'pointer',
    margin: '0 10px',
    marginBottom: '20px',
  };

  const handleSignUpClick = () => {
    navigate('/CreateUser');
  };

  const handleSignUpClick1 = () => {
    navigate('/login');
  };


  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Weekly</h1>
      <h2 style={subtitleStyle}>Group Buy</h2>
      <img src="/Group.png" alt="Logo" style={imageStyle} />
      <button style={buttonStyle} onClick={handleSignUpClick}>
        Sign Up
      </button>
      <button style={buttonStyle} onClick={handleSignUpClick1}>
      Log In</button>
    </div>
  );
}

export default FlashScreen;
