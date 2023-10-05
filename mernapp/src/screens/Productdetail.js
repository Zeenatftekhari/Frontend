import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Stepper from 'react-stepper-horizontal';
export default function Productdetails() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [productToShow, setProductToShow] = useState(null);
  const [quantity, setQuantity] = useState(1); // Initialize quantity to 1

  useEffect(() => {
    async function fetchGroceryItem() {
      try {
        const response = await fetch(`http://localhost:5000/api/GroceryData?_id=${name}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name }), // Replace with the data you want to send in the request body
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();
        const product = data.grocery_items.find(item => item.name === name);

        if (product) {
          setProductToShow(product);
        } else {
          console.error('Product not found:', name);
          // Handle the case where the specified product is not found
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchGroceryItem();
  }, [name]);

  if (!productToShow) {
    return <div>Loading...</div>;
  }
  const handleParticipateClick = () => {
    navigate(`/Paymentpage/${name}?quantity=${quantity}`);
  };
  
 
  const isMobile = window.innerWidth <= 480;
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const buttonStyle = {
    width: isMobile ? '100%' : '673px', // Adjusted width
    height: '54px',
    flexShrink: 0,
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: isMobile ? '18px' : '16px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '18px', // Updated font size to 16px
    letterSpacing: '-0.145px',
    borderRadius: '6px',
    background: 'linear-gradient(247deg, #905CC6 0%, #C47ECC 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '16px',
    marginLeft:isMobile ? '0' : '10px',
  };

  const pathImageStyle = {
    width: '104px',
    height: '4px',
    flexShrink: 0,
    fill: '#D8D8D8',
    marginTop: '11.65px',
    marginBottom: '25.35px',
    marginLeft: '136.09px',
    marginRight: '134.91px'
  };

  const formContainerStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  };

  const rectangleStyle = {
    width: '100%', // Adjusted for full width
    height: 'auto', // Updated height to match the specified layout
    background: '#F0F0F0',
    position: 'relative',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const titleContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '41.13px',
    marginBottom: '30px',
    marginLeft: '16px',
    marginRight: '76.68px'
  };

  const arrowImageStyle = {
    width: '24px',
    height: '24px',
    flexShrink: 0,
    marginTop: '41.13px',
    marginBottom: '30px',
    marginLeft: '-90px',
    marginRight: '120.68px'
  };

  const titleStyle = {
    color: '#1D1D1D',
    fontFamily: 'Inter',
    fontSize: '26px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
    textAlign: 'center',
    marginTop: '31.13px',
    marginBottom: '30px',
 
  };

  const descriptionStyle = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '25px',
    textAlign: 'center',
    marginTop: '10px',
    marginBottom: '5px',
    marginLeft: '18px',
    background: 'linear-gradient(247deg, #905CC6 0%, #C47ECC 100%)', // Replace with your desired rgba color value
    borderRadius: '6px',
    width: '661px', 
    height: '31px', 
    flexShrink: 0
  };

  const descriptionStyle7 = {
    color: '#fff',
    fontFamily: 'Inter',
    fontSize: isMobile ? '10px' : '16px', // Adjusted for mobile
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '25px',
    textAlign: 'left',
    marginTop: '20px',
    marginRight : '-380px',
    marginBottom: '-10px',
    marginLeft: isMobile ? '0' : '14px', // Adjusted for mobile
    background: '#8C5CE3',
    borderRadius: '6px',
    width: isMobile ? '100%' : '673px', // Adjusted for mobile
    height: '64px',
    flexShrink: 0,
  };

  const descriptionStyle8 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
    textAlign: 'start',
    marginTop: '45px',
    marginLeft: '20px',
    marginRight: '165px',
    position: 'absolute'
  };

  const descriptionStyle1 = {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: '10px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '14px',
    textAlign: 'left',
    marginLeft: '25px',
    marginTop: '35px',
    marginBottom: '5px',
    background: '#A5FFD4', // Replace with your desired rgba color value
    borderRadius: '6px',
    width: '112px', // Set the width
    height: '15px', // Set the height
    flexShrink: 0
  };

  const descriptionStyle5 = {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '12px',
    textAlign: 'center',
    marginLeft: '600px',
    marginRight: '10px',
    marginTop: '-175px',
    marginBottom: '25px',
    background: '#FF4A4A', // Replace with your desired rgba color value
    borderRadius: '5px',
    width: '58px', // Set the width
    height: '54px', // Set the height
    flexShrink: 0
  };
  const descriptionStyle12 = {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '18px',
    textAlign: 'center',
    marginLeft: '600px',
    marginRight: '20px',
    marginTop: '-45px',
    marginBottom: '10px',
    background: '#000', // Replace with your desired rgba color value
    borderRadius: '5px',
    width: '59px', // Set the width
    height: '23px', // Set the height
    flexShrink: 0
  };
  const descriptionStyle17 = {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '18px',
    textAlign: 'center',
    marginLeft: '600px',
    marginRight: '20px',
    marginTop: '15px',
    marginBottom: '10px',
    background: ' rgba(187, 187, 187, 0.35)', 
    borderRadius: '6px',
    width: '69px', // Set the width
    height: '23px', // Set the height
    flexShrink: 0
  };
  const descriptionStyle6 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '10px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '14px',
    textAlign: 'center',
    marginLeft: '500px',
    marginRight: '80px',
    marginTop: '10px',
    marginBottom: '5px',
    background: 'rgba(196, 126, 204, 0.35)',
    borderRadius: '6px',
    width: '169px', // Set the width
    height: '17px', // Set the height
    flexShrink: 0
  };
  const descriptionStyle2 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '15px',
    textAlign: 'center',
    marginTop: '1px',
    marginBottom: '17px'
  };
  const descriptionStyle3 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '18px',
    textAlign: 'center',
    marginTop: '9px',
    marginBottom: '18px'
  };
  const descriptionStyle10 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '14px',
    textAlign: 'left',
    marginTop: '-17px',
    marginBottom: '-88px',
    marginLeft: '35px',
  };
  const descriptionStyle13 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '14px',
    textAlign: 'left',
    marginTop: '-17px',
    marginBottom: '-88px',
    marginLeft: '65px',
  };
  const descriptionStyle14 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '14px',
    textAlign: 'left',
    marginTop: '72px',
    marginBottom: '-88px',
    marginLeft: '105px',
  };
  const descriptionStyle11 = {
    color: '#6A6A6A',
    fontFamily: 'Inter',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '18px',
    textAlign: 'left',
    marginTop: '100px',
    marginBottom: '-88px',
    marginLeft: '25px',
  };
  const descriptionStyle9 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '18px',
    textAlign: 'left',
    marginTop: '83px',
    marginBottom: '18px',
    marginLeft: '20px',
    marginRight: '50px',
    position: 'absolute'
  };
  const homeIndicatorStyle = {
    width: '134px',
    height: '5px',
    flexShrink: 0,
    marginTop: '160px',
    marginBottom: '10px',
    background: '#EDEDED',
  };
  const RectangleImageStyle = {
    width: isMobile ? '100%' : '641px', // Adjusted for mobile
    height: 'auto',
    flexShrink: 0,
    marginLeft: '18px',
    marginRight: '28px',
    
  };
  const RectangleImageStyle1 = {
    width: isMobile ? '100%' : '343px', // Adjusted for mobile
    height: 'auto',
    flexShrink: 0,
    marginLeft: '168px',
    marginRight: '28px',
    marginTop: '-560px',
    position: 'center',
    
  };

  const descriptionStyle4 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
    textAlign: 'left',
    marginTop: '15px',
    marginBottom: '29px',
    marginLeft: '20px',
    marginRight: '160px',
    position: 'absolute'
  };
  const descriptionStyle15 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '10px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '14px',
    textAlign: 'right',
    marginLeft: '490px',
    marginRight: '80px',
    marginTop: '10px',
    marginBottom: '5px',
    background: 'none',
    borderRadius: '6px',
    width: '169px',
    height: '17px',
    flexShrink: 0
};

  const participateButtonStyle = {
    color: '#8C5CE3',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
    textAlign: 'center',
    width: '149px',
    height: '26px',
    flexShrink: 0,
    borderRadius: '5px',
    background: '#FFF',
    border: 'none',
    marginTop: '-50px',
    marginLeft: '520px',
    marginRight: '17px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  const shareViaWhatsApp = () => {
    const productURL = window.location.href; // Get the current page URL
    const message = `Check out this amazing product: ${productToShow.name} - ${productURL}`;
    const encodedMessage = encodeURIComponent(message);
  
    const whatsappURL = `https://api.whatsapp.com/send?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };
   //const progressBarWidth = '50%';
   
   const handleGoBackClick = () => {
    navigate('/Home');
  };
  const steps = [
    { title: 'Step 1' },
    { title: 'Step 2' },
    { title: 'Step 3' },
    { title: 'Step 4' },
    { title: 'Step 5' },
  ];
  const biddingstyle = {
    borderRadius: '6px',
    position: 'center',
    width: isMobile ? '100%' : '671px',
    height: 'auto', // Adjusted for variable height content
    marginLeft: isMobile ? '0' : '15px',
    marginRight: isMobile ? '0' : '60px',
    marginTop: isMobile ? '16px' : '80px', // Adjusted for mobile
  };
  const buttonStyle1 = {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    fontSize: '20px', // Adjust the font size as needed
    lineHeight: '20px', // Adjust the line height as needed
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
        >
          <img src="/leftarrow.png" alt="Left Arrow" style={arrowImageStyle} />
        </button>
          <div style={titleStyle}>Product Detail</div>
        </div>
      </div>
      <div key={0}>
      <img src= "/producdisplay.png" alt="Rectangle" style={RectangleImageStyle} />
        <img src={productToShow.img} alt="Rectangle" style={RectangleImageStyle1} />
        <div>
          <div style={descriptionStyle1}> Ends in 10.0.0 </div>
          <div >
  <p style={descriptionStyle4}>{productToShow.name}</p>
 </div>

  <div
  style={descriptionStyle11}>MRP: 
  <div style={descriptionStyle10}>{productToShow.options[0]?.MRP}</div>
    </div> 
    <div>
      <div style={descriptionStyle11}>Best Price:
      <div style={descriptionStyle13}> {productToShow.options[2]?.Best_Price}</div>
      </div>
      <div style={descriptionStyle11}>Purchased by </div> <div style={descriptionStyle14}>{productToShow.options[6]?.Purchased_by_X_Buyers} 7 Buyers </div>
</div>


          <div style={descriptionStyle5}>
            {/* Access Current_Price from the options */}
            Current Price</div>
            <div style={descriptionStyle12}>{productToShow.options[3]?.Current_Price}
          </div>
          <div style={descriptionStyle17}>
          <button style={buttonStyle1} onClick={handleDecreaseQuantity}>-</button>
          {quantity}
          <button  style={buttonStyle1} onClick={handleIncreaseQuantity}>+</button>
        </div>
          <div>
            <div style={descriptionStyle15}> Purchased {productToShow.options[4]?.Purchased}</div>
          <div style={descriptionStyle6}> Next price drops at:{productToShow.options[5]?.Next_Price_drops_at} 220g</div>
          </div>    
       <img src="/bidding.png" alt="bidding" style={biddingstyle} />

        </div>
        <div style={descriptionStyle}>You will be charged the final price at the end of the deal</div>
        <div style={descriptionStyle3}>** You will get a notification once the pool ends </div>
        <div style={descriptionStyle2}>Invite people to get a better discount </div>
        <button  type="button"
  className="btn btn-primary"
  style={buttonStyle}
  onClick={shareViaWhatsApp} // Attach the shareViaWhatsApp function to onClick
>
          <span style={{ marginRight: '5px' }}>Invite Now </span>
        </button>
        <div style={descriptionStyle7}> Claim this discounted deal by paying token amount ₹ 5/unit</div>
        <button style={participateButtonStyle} onClick={handleParticipateClick}>
          Participate
        </button>
        <div>
  <span style={descriptionStyle8}>Product description:</span>
  <span style={descriptionStyle9}> {productToShow.description}</span>
</div>

        <div style={homeIndicatorStyle}></div>
      </div>
    </div>
  );
}