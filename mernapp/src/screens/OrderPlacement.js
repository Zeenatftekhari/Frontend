import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


export default function OrderPlacement() {
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

    navigate(`/Paymentpage2/${name}`);
  };

  const pathImageStyle = {
    width: '204px',
    height: '4px',
    flexShrink: 0,
    fill: '#D8D8D8',
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
    minHeight: '10vh', // Set the minimum height of the container to the viewport height
    position: 'absolute'
  };

  const rectangleStyle = {
    width: '595px',
    height: '112px', // Updated height to match the specified layout
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
    marginLeft: '-70px',
    marginRight: '80.68px'
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
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '25px',
    textAlign: 'center',
    marginLeft: '50px',
    marginTop: '290px',
    marginBottom: '-25px',
    background: 'linear-gradient(247deg, #905CC6 0%, #C47ECC 100%)', // Replace with your desired rgba color value
    borderRadius: '6px',
    width: '491px', // Set the width
    height: '31px', // Set the height
    flexShrink: 0
  };


  const descriptionStyle8 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
    textAlign: 'left',
    marginTop: '-100px',
    marginBottom: '-125px',
    marginLeft: '42px',
    marginRight: '4px',
    position: 'absolute'
  };

  const descriptionStyle1 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 600,
    textAlign: 'left',
    lineHeight: 'normal',
    marginTop: '10px',
    marginBottom: '8px',
    marginLeft: '10px',
    marginRight: '25px',
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
    width: '481px',
    height: '384px',
    flexShrink: 0,
    marginLeft: '28px',
    marginRight: '28px'
  };

  const descriptionStyle4 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '0.018PX',
    textAlign: 'start',
    marginBottom: '-10px',
    marginTop: '740px',
    marginLeft: '-107px',
    marginRight: '217px',
    display: 'flex',
    position: 'absolute'
  };

  const participateButtonStyle = {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '16PX',
    textAlign: 'center',
    width: '177px',
    height: '54px',
    flexShrink: 0,
    borderRadius: '6px',
    background: 'linear-gradient(247deg, #905CC6 0%, #C47ECC 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '46px',
    marginLeft: '400px',
    marginRight: '17px',

  };
  const RectangleImageStyle1 = {
    width: '243px',
    height: '227px',
    flexShrink: 0,
    marginLeft: '18px',
    marginRight: '28px',
    marginTop: '-295px',
    marginBottom:'150px',
    position: 'center',
  };
  const descriptionStyle10 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 600,
    textAlign: 'left',
    lineHeight: 'normal',
    marginTop: '10px',
    marginBottom: '-8px',
    marginLeft: '-5px',

    position: 'absolute'
  };
  const descriptionStyle11 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '18px',
    textAlign: 'left',
    marginTop: '8px',
    marginBottom: '8px',
    marginLeft: '8px',
    marginRight: '248px'
  };
  const descriptionStyle3 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '18px',
    textAlign: 'left',
    marginTop: '-10px',
    marginBottom: '18px'
  };


  return (
    <div style={formContainerStyle}>
      <div style={rectangleStyle}>
        <img src="/Path 46026.png" alt="Path 46026" style={pathImageStyle} />
        <div style={titleContainerStyle}>
          <img src="/leftarrow.png" alt="Left Arrow" style={arrowImageStyle} />
          <div style={titleStyle}>Order Placement</div>
        </div>
      </div>
      <img src="/producdisplay.png" alt="Rectangle" style={RectangleImageStyle} />
      <img src={productToShow.img} alt="Rectangle" style={RectangleImageStyle1} />

      <div style={descriptionStyle8}> {productToShow.name}
        <p style={descriptionStyle11}>Best Price: {productToShow.options[2]?.Best_Price}</p>
        {/* Access purchased_by_X_Buyers, Current_Price, and Next_Price_drops_at from the options */}
        <p style={descriptionStyle11}>{productToShow.options[6]?.Purchased_by_X_Buyers} Buyers</p>
        <div style={descriptionStyle1}> <p> MRP:  {productToShow.options[0]?.MRP}</p>
      <p style={descriptionStyle3}>final Price :</p>
      <p style={descriptionStyle3}> Number of Units: </p>
      <p style={descriptionStyle3}> Total Orders </p>
      <p style={descriptionStyle3}> Token Amount Paid: </p>
      <p style={descriptionStyle3}> Balance: </p>
      <p style={descriptionStyle10}>Total Amount</p> 
      </div>
      </div>

     
      <div style={descriptionStyle}>Congratulations! You are saving</div>
      <div>
      <button style={participateButtonStyle} onClick={handleParticipateClick}>Pay Now 885 </button>

      </div>
      
      <div style={descriptionStyle4}>Place the Order </div>
      <div style={homeIndicatorStyle}></div>
    </div>
  );
}