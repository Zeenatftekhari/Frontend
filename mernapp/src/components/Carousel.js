import React from 'react';
import { Link } from 'react-router-dom';

const carouselStyle = {
  width: '343px',
  height: '134px',
  marginTop: '10px',
  marginBottom: '2px',
  marginLeft: '15px',
  marginRight: '17px',
  borderRadius: '10px',
  background: '#8C5CE3',
  flexShrink: 0,
};

const titleStyle = {
  color: '#FFF',
  textAlign: 'center',
  fontFamily: 'Inter',
  fontSize: '21px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '26px',
  letterSpacing: '0.021px',
  marginTop: '10px',
  marginBottom: '2px',
  marginLeft: '135px',
  marginRight: '16px',
};

const subtitleStyle = {
  color: "#FFF",
  fontFamily: 'Inter',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '26px',
  marginTop:'10px',
  marginBottom: '-94px',
  marginLeft: '150px',
  marginRight: '44px',
};

const imageStyle = {
  width: '90px', // Set the width of the image
  height: '90px', // Set the height of the image
  margin: '10px', // Adjust the margin as needed
};
export default function Carousel() {
  return (
    <div style={carouselStyle}>
      <div className="carousel-inner" id="carousel">
        <div className="carousel-item active">
        <div style={titleStyle}>Weekly group buy exclusive</div>
          <div style={subtitleStyle}>Shop More, Save More</div>
          <img src="/Group 4.png" alt="Carousel Image" style={imageStyle} />

        </div>
      </div>
    </div>
  );
}
