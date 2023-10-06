import React, { useState, useEffect } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';
import { useNavigate } from 'react-router-dom';

export default function Card(props) {
  const cartData = useCart();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(Object.keys(props.options)[0]);
  const priceOptions = Object.keys(props.options);
  const [productToShow, setProductToShow] = useState(null);
  const groceryItem = props.item;
  const {FoodName} = props;
  const dispatch = useDispatchCart();

  const handleParticipateClick = () => {
    if (!localStorage.getItem("token")) {
      console.log("Navigating to Product Detail");
      console.log(groceryItem.name,groceryItem.name.length);
      if (FoodName) {
        console.log(FoodName, FoodName.length);
      } else {
        console.log("FoodName is undefined");
      }
      
      const encodedName = encodeURIComponent(props.item.name)
      navigate(`/Productdetail/${encodedName}`);
    }
  }
  console.log("Rendered Card Component");
  const handleQty = (e) => {
    setQty(Math.max(parseInt(e.target.value) || 1, 1)); // Ensure qty is at least 1
  }

  const handleOptions = (e) => {
    setSize(e.target.value);
  }

  const handleAddToCart = async () => {
    const foodItem = cartData.find(item => item.id === groceryItem._id);
    const finalPrice = qty * parseInt(props.options[size]);

    if (foodItem) {
      if (foodItem.size === size) {
        await dispatch({ type: "UPDATE", id: groceryItem._id, price: finalPrice, qty: qty });
      } else {
        await dispatch({ type: "ADD", id: groceryItem._id, name: groceryItem.name, price: finalPrice, qty: qty, size: size, img: props.ImgSrc });
        console.log("Size is different, so simply ADD one more to the list");
      }
    } else {
      await dispatch({ type: "ADD", id: groceryItem._id, name: groceryItem.name, price: finalPrice, qty: qty, size: size, img: props.ImgSrc });
    }
  }

  useEffect(() => {
    setSize(Object.keys(props.options)[0]); // Initialize size when options change
  }, [props.options]);

  const finalPrice = qty * parseInt(props.options[size]);

  const participateButtonStyle = {
    borderRadius: '6px',
    border: 'none',
    background: '#B878CB',
    width: '128px',
    height: '31px',
    flexShrink: 0,
    color: '#FFF',
    fontSize: '14px',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '170px',
    cursor: 'pointer',
  };
  const descriptionStyle5 = {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '12px',
    textAlign: 'center',
    marginLeft: '230px',
    marginRight: '180px',
    marginTop: '-75px',
    marginBottom: '25px',
    background: '#FF4A4A', // Replace with your desired rgba color value
    borderRadius: '5px',
    width: '58px', // Set the width
    height: '40px', // Set the height
    flexShrink: 0
  };
  const descriptionStyle6 = {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: '10px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '18px',
    textAlign: 'center',
    marginLeft: '230px',
    marginRight: '180px',
    marginTop: '-30px',
    marginBottom: '10px',
    background: '#000', // Replace with your desired rgba color value
    borderRadius: '5px',
    width: '59px', // Set the width
    height: '23px', // Set the height
    flexShrink: 0
  };
 const descriptionStyle13 = {
  background: 'rgba(196, 126, 204, 0.20)',
  marginTop: '2px'
 }
 const descriptionStyle1 = {
  color: '#000',
  fontFamily: 'Inter',
  fontSize: '10px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '14px',
  textAlign: 'left',
  marginLeft: '15px',
  marginTop: '15px',
  marginBottom: '5px',
  background: '#A5FFD4', // Replace with your desired rgba color value
  borderRadius: '6px',
  width: '112px', // Set the width
  height: '15px', // Set the height
  flexShrink: 0
};
const descriptionStyle7 = {
  color: '#3E3E3E',
  fontFamily: 'Inter',
  fontSize: '10px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '14px',
  textAlign: 'center',
  marginLeft: '-10px',
  marginRight: '80px',
  marginTop: '10px',
  marginBottom: '-25px',
  width: '169px', // Set the width
  height: '17px', // Set the height
  flexShrink: 0
};
  return (
    <div className="card mt-1" style={{ width: '22rem', maxHeight: '360px' }}>
      <div style={descriptionStyle1}> Ends in 10.0.0 </div>
      <img src={props.item.img} className="card-img-top" alt="..." style={{ width: '60px', height: '69px',flexshrink: 0, objectFit: "fill" ,...descriptionStyle13 }}  />
      <div style={descriptionStyle7}> Next price drops at:{productToShow?.options?.[5]?.Next_Price_drops_at} 220g</div>
      <div className="card-body">
        <h5 className="card-title" style={{ fontFamily: 'Inter',
    fontSize: '12px', marginLeft: '62px', marginTop:'-80px', marginRight: '100px'}}>{props.item.name}</h5>

        <div className="container w-100">
          <div className='card-price' style={ descriptionStyle5}>
          <div>Current price</div>
          </div>
          <div className='card-price1' style={descriptionStyle6}>
           ₹ {finalPrice}
          </div>
          <button
            style={participateButtonStyle}
            onClick={handleParticipateClick}
          >
            Participate Now
          </button>
        </div>
      </div>
    </div>
  );
}
