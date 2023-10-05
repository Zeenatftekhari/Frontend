import React, { useState, useEffect } from 'react';
import { useNavigate , useParams} from 'react-router-dom'; 

export default function Orderdetails() {
  const { name } = useParams();
  const navigate = useNavigate(); 
  const [productToShow, setProductToShow] = useState(null);

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
        navigate('/Home');
    };

    const buttonStyle = {
      width: '543px', 
      height: '54px',
      flexShrink: 0,
      color: '#FFF',
      textAlign: 'center',
      fontFamily: 'Inter',
      fontSize: '26px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '16px', 
      letterSpacing: '-0.145px',
      borderRadius: '6px',
      background: 'linear-gradient(247deg, #905CC6 0%, #C47ECC 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '250px'
     
        };

    
  const pathImageStyle = {
    width: '104px',
    height: '4px',
    flexShrink: 0,
    fill: '#3E3E3E',
    marginTop: '11.65px',
    marginBottom: '25.35px',
    marginLeft: '136.09px',
    marginRight: '134.91px'
  };

  const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '10vh', 
    position: 'absolute'
  };

  const rectangleStyle = {
    width: '675px',
    height: '112px', 
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
    marginTop: '11.13px',
    marginBottom: '30px',
    marginLeft: '36px',
    marginRight: '76.68px'
  };

  const arrowImageStyle = {
    width: '24px',
    height: '24px',
    flexShrink: 0,
    marginTop: '41.13px',
    marginBottom: '30px',
    marginLeft: '16px',
    marginRight: '44.68px'
  };

  const titleStyle = {
    color: '#1D1D1D',
    fontFamily: 'Inter',
    fontSize: '28px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
    textAlign: 'center',
    marginTop: '41.13px',
    marginBottom: '30px',
   
  };

  const descriptionStyle2 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '14px',
    textAlign: 'center',
    marginTop: '-10px',
    marginBottom : '370px',
    position: 'absolute'
  };
  const descriptionStyle3 = {
    width : '246px',
    height : '25px',
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '21px',
    fontStyle: 'normal',
    fontWeight:600,
    lineHeight: 'normal',
    textAlign: 'center',
    marginTop: '10px',
    marginBottom : '2px',
    marginLeft : '-100px',
    position: 'absolute'
  };

  const descriptionStyle4 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight:600,
    lineHeight: 'normal',
    textAlign: 'left',
    marginTop: '100px',
    marginBottom : '199px',
    marginLeft: '-165px',
    marginRight: '174px',
    position: 'absolute'
  };
  const descriptionStyle5 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '14px',
    marginTop: '240px',
    marginBottom : '270px',
    marginLeft: '5px',
    marginRight: '274px',
    position: 'absolute'
  };

  const descriptionStyle6 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '14px',
    marginTop: '180px',
    marginBottom : '279px',
    marginLeft: '346px',
    marginRight: '-40px',
    position: 'absolute'
  };
  const descriptionStyle7 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '22px',
    fontStyle: 'normal',
    fontWeight:600,
    lineHeight: 'normal',
    textAlign: 'center',
    marginTop: '150px',
    marginBottom : '29px',
    marginLeft: '-260px',
    marginRight: '124px',
    position: 'absolute'
  };

  const descriptionStyle8 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight:600,
    lineHeight: 'normal',
    textAlign: 'center',
    marginTop: '450px',
    marginBottom : '-169px',
    marginLeft: '-88px',
    marginRight: '174px',
    position: 'absolute'
  };
  const homeIndicatorStyle = {
    width: '134px',
    height: '5px',
    flexShrink: 0,
    marginTop: '8px',
    marginBottom: '10px',
    background: '#EDEDED',
  };
  const RectangleImageStyle = {
    width: '541px',
    height: '484px',
    flexShrink: 0,
    marginLeft: '28px',
    marginRight: '28px'
  };

  const circleImageStyle = {
    width: '356px',
    height: '335px',
    position : 'absolute',
    marginTop : '-10px',
    marginBottom: '750px',
    flexShrink: 0,
  };
  const lineStyle = {
    height: '1.5px',
    position : 'absolute',
    marginTop : '280px',
    marginBottom: '50px',
    flexShrink: 0,
  };
 
  const ImageStyle = {
    width: '120px',
    height: '109px',
    flexshrink: '0',
    marginTop: '410px',
    marginBottom : '10px',
    marginLeft : '274px',
    marginRight : '23px'

  };
  
  const descriptionStyle9 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '18px',
    textAlign: 'left',
    marginTop: '203px',
    marginBottom: '28px',
    marginLeft: '-262px',
    marginRight: '50px',
    position: 'absolute'
  };
  return (
    <div style={formContainerStyle}>
      <div style={rectangleStyle}>
        <img src="/Path 46026.png" alt="Path 46026" style={pathImageStyle} />
        <div style={titleContainerStyle}>
          <img src="/leftarrow.png" alt="Left Arrow" style={arrowImageStyle} />
          <div style={titleStyle}>Order Details</div>
        </div>
      </div>
      <img src="/purplerectangle.png" alt="Rectangle" style={RectangleImageStyle} />
      <img src="/orderconfirmed.png" alt='Confirmation' style={circleImageStyle}/>
        <div style={descriptionStyle2}>Thank You !
        <div style={descriptionStyle3}> Your Order is Confirmed </div>
        </div>
        <div style={descriptionStyle4}> Track Your Order </div>
        <div style={descriptionStyle6}> Total value - {productToShow.options[0]?.MRP}  </div>
        <div style={descriptionStyle5}> Delivery Estimate Date - 5 days </div>
        <img src="/Line 6691.png" alt='line' style={lineStyle}/>
        <div>
  <span style={descriptionStyle7}>Product description:</span>
  <span style={descriptionStyle9}> {productToShow.description}</span>
</div>
        <img src={productToShow.img} alt='Rectnagle1' style={ImageStyle}/>
        <div style={descriptionStyle8}> Shippment Information </div>
        <button type="submit" className="btn btn-primary" style={buttonStyle}>
      <span style={{ marginRight: '5px' }}
      onClick={handleParticipateClick}>Continue Shopping</span>
        </button>

        <div style={homeIndicatorStyle}></div>
    </div>
  );
}
