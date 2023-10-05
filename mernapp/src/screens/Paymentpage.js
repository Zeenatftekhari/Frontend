import React , { useState,useEffect }from 'react';
import { useNavigate, useParams } from 'react-router-dom';
//import axios from 'axios';


export default function Payment() {
  const { name } = useParams();
  const navigate = useNavigate(); 
  const { quantity } = useParams();
console.log('Quantity:', quantity);

  const calculateTotalAmount = () => {
    const tokenAmountPerQuantity = 5; // Adjust this value as needed
  
    // Parse the quantity to ensure it's a number
    const parsedQuantity = parseInt(quantity, 10);
  
    // Check if parsedQuantity is a valid number
    if (!isNaN(parsedQuantity)) {
      // Calculate the total payment amount by multiplying token amount by quantity
      return tokenAmountPerQuantity * parsedQuantity;
    } else {
      // Handle the case where quantity is not a valid number
      return 5; // Or any default value you prefer
    }
  };
  
  

    const handleParticipateClick = () => {
        
        navigate(`/Bidding/${name}`);
    };

    const isMobile = window.innerWidth <= 480; // Adjust breakpoint as needed

    /*function DiscountInfo() {
      const [discount, setDiscount] = useState(null);
  
      useEffect(() => {
          async function fetchDiscount() {
              const res = await axios.get('/api/active-discount');
              setDiscount(res.data);
          }
          fetchDiscount();
      }, []);
  
      async function joinDiscount() {
          const res = await axios.post('/api/join-discount', { userId:_id });
          if (res.data.success) {
              setDiscount(res.data.discount);
          } else {
              alert(res.data.error);
          }
      }*/

      const handleGoBackClick = () => {
        navigate(`/Productdetail/${name}`);
      };
    
  
  const buttonStyle = {
    width: isMobile ? '100%' : '443px',
    height: '54px',
    flexShrink: 0,
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: isMobile ? '14px' : '16px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '16px',
    letterSpacing: '-0.145px',
    borderRadius: '6px',
    background: 'linear-gradient(247deg, #905CC6 0%, #C47ECC 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const inputLayoutStyle = {
    width: isMobile ? '100%' : '443px',
    height: '54px',
    flexShrink: 0,
  };

  const inputStyle = {
    borderRadius: '6px',
    border: '1px solid #C47ECC',
    background: '#FFF',
    fontFamily: 'Inter',
    width: '443px', // Match the width with the button
    height: '54px',
    paddingLeft: '15px',
    paddingRight: '15px',
    fontSize: isMobile ? '16px' : '16px',
    lineHeight: 'normal',
  };

  const pathImageStyle = {
    width: isMobile ? '50px' : '104px',
    height: '4px',
    flexShrink: 0,
    fill: '#D8D8D8',
    marginTop: '11.65px',
    marginBottom: '25.35px',
    marginLeft: '50px', // Adjusted for mobile
    marginRight: '50px', // Adjusted for mobile
  };

  const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '10vh',
    position: 'absolute',
    padding: isMobile ? '10px' : '0', // Added padding for mobile
  };

  const rectangleStyle = {
    width: isMobile ? '100%' : '475px',
    height: '112px',
    background: '#F0F0F0',
    position: 'relative',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const titleContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: isMobile ? '20px' : '41.13px', // Adjusted for mobile
    marginBottom: isMobile ? '20px' : '30px', // Adjusted for mobile
    marginLeft: isMobile ? '0' : '16px', // Adjusted for mobile
    marginRight: isMobile ? '0' : '76.68px', // Adjusted for mobile
  };

  const arrowImageStyle = {
    width: '24px',
    height: '24px',
    flexShrink: 0,
    marginTop: isMobile ? '10px' : '41.13px', // Adjusted for mobile
    marginBottom: isMobile ? '10px' : '30px', // Adjusted for mobile
    marginLeft: isMobile ? '-40px' : '16px', // Adjusted for mobile
    marginRight: isMobile ? '60px' : '44.68px', // Adjusted for mobile
  };

  const titleStyle = {
    color: '#1D1D1D',
    fontFamily: 'Inter',
    fontSize: isMobile ? '20px' : '26px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
    textAlign: 'center',
    marginTop: isMobile ? '10px' : '41.13px', // Adjusted for mobile
    marginBottom: isMobile ? '10px' : '30px',
    marginRight: isMobile? '0px': '30px' // Adjusted for mobile
  };

  const subtitleStyle = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: isMobile ? '18px' : '21px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: isMobile ? '25px' : 'normal', // Adjusted for mobile
    textAlign: 'center',
    marginTop: '4px',
  };

  const subtitleStyle1 = {
    color: '#3E3E3E',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: isMobile ? '18px' : '21px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: isMobile ? '25px' : '45px', // Adjusted for mobile
    marginTop: '4px',
  };

  const amountStyle = {
    color: '#8C5CE3',
    fontFamily: 'Inter',
    fontSize: isMobile ? '40px' : '41px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: isMobile ? '35px' : '45px',
    letterSpacing: '0.041px',
    marginTop: '18px',
  };

  const descriptionStyle = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: isMobile ? '18px' : '21px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: isMobile ? '25px' : 'normal', // Adjusted for mobile
    textAlign: 'center',
    marginTop: '4px',
  };

  const descriptionStyle1 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: isMobile ? '16px' : '18px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: isMobile ? '18px' : '16px', // Adjusted for mobile
    textAlign: 'center',
    marginTop: '4px',
    marginBottom: isMobile ? '10px' : '20px', // Adjusted for mobile
  };
  const homeIndicatorStyle = {
    width: '134px',
    height: '5px',
    flexShrink: 0,
    marginTop: isMobile ? '10px' : '18px', // Adjusted for mobile
    marginBottom: '10px',
    background: '#EDEDED',
  };

  const scannerImageStyle = {
    width: isMobile ? '350px' : '319px', // Adjusted for mobile
    height: isMobile ? '350px' : '319px', // Adjusted for mobile
    flexShrink: 0,
    marginLeft: isMobile ? '0' : '28px', // Adjusted for mobile
    marginRight: isMobile ? '0' : '28px', // Adjusted for mobile
  };

  return (
    <div style={formContainerStyle}>
      <div style={rectangleStyle}>
        <img src="/Path 46026.png" alt="Path 46026" style={pathImageStyle} />
        <div style={titleContainerStyle}>
        <button
          type="button"
          style={{ border: 'none', background: 'none', cursor: 'pointer' }}
          onClick={handleGoBackClick}
        ><img src="/leftarrow.png" alt="Left Arrow" style={arrowImageStyle} />
        </button>
          <div style={titleStyle}>Payment Detail</div>
        </div>
      </div>
      <div style={subtitleStyle}>Paying to Weekly Group Buy</div>
      <div style={subtitleStyle1}>Amount</div>
      <div style={amountStyle}>₹ {calculateTotalAmount()}</div>
      <img src="/scanner.png" alt="Scanner" style={scannerImageStyle} />
      <div style={descriptionStyle}>Scan & Pay ₹ {calculateTotalAmount()}</div>
      <div style={descriptionStyle1}> or</div>
      <form>
        <div className="mb-3" style={inputLayoutStyle}>
          <input type="text" className="form-control" id="name" placeholder="ENTER UPI ID" style={inputStyle} />
        </div>
      </form>
      <button
        type="submit"
        className="btn btn-primary"
        style={buttonStyle}
        onClick={() => {
          handleParticipateClick();
          //joinDiscount();
        }}
        
      >
        <span style={{ marginRight: '5px' }}>Pay Now</span>
      </button>
      
      <div style={homeIndicatorStyle}></div>
    </div>
  );
  }
//}
