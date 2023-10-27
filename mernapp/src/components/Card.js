import React, { useState, useEffect } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography, Button, Divider } from "@mui/material";
// import {  } from "bootstrap";

export default function CustomCard({
  ImgSrc,
  options,
  item,
  FoodName,
  index,
  handleIndex = () => { }
}) {
  // console.log(index);
  const cartData = useCart();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(Object.keys(options)[0]);
  const priceOptions = Object.keys(options);
  const [productToShow, setProductToShow] = useState(null);
  const groceryItem = item;
  const dispatch = useDispatchCart();

  const handleParticipateClick = (ind) => {
    if (!localStorage.getItem("token")) {
      if (FoodName) {
        console.log(FoodName, FoodName.length);
      } else {
        console.log("FoodName is undefined");
      }
      // console.log("participate");
      handleIndex(ind);
      const encodedName = encodeURIComponent(item.name);
      navigate(`/Productdetail/${encodedName}`, { state: groceryItem._id });
    }
  };
  // console.log("Rendered Card Component");
  const handleQty = (e) => {
    setQty(Math.max(parseInt(e.target.value) || 1, 1)); // Ensure qty is at least 1
  };

  const handleOptions = (e) => {
    setSize(e.target.value);
  };

  const handleAddToCart = async () => {
    const foodItem = cartData.find((item) => item.id === groceryItem._id);
    const finalPrice = qty * parseInt(options[size]);

    if (foodItem) {
      if (foodItem.size === size) {
        await dispatch({
          type: "UPDATE",
          id: groceryItem._id,
          price: finalPrice,
          qty: qty,
        });
      } else {
        await dispatch({
          type: "ADD",
          id: groceryItem._id,
          name: groceryItem.name,
          price: finalPrice,
          qty: qty,
          size: size,
          img: ImgSrc,
        });
        console.log("Size is different, so simply ADD one more to the list");
      }
    } else {
      await dispatch({
        type: "ADD",
        id: groceryItem._id,
        name: groceryItem.name,
        price: finalPrice,
        qty: qty,
        size: size,
        img: ImgSrc,
      });
    }
  };

  useEffect(() => {
    setSize(Object.keys(options)[0]); // Initialize size when options change
  }, [options]);

  const finalPrice = qty * parseInt(options[size]);

  const participateButtonStyle = {
    borderRadius: "6px",
    border: "none",
    background: "#B878CB",
    width: "128px",
    height: "31px",
    flexShrink: 0,
    color: "#FFF",
    fontSize: "14px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // marginLeft: "170px",
    cursor: "pointer",
    marginTop: "50px",
    // padding:"10px"
  };
  const descriptionStyle5 = {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "12px",
    textAlign: "center",
    marginLeft: "230px",
    marginRight: "180px",
    marginTop: "-75px",
    marginBottom: "25px",
    background: "#FF4A4A", // Replace with your desired rgba color value
    borderRadius: "5px",
    width: "58px", // Set the width
    height: "40px", // Set the height
    flexShrink: 0,
  };
  const descriptionStyle6 = {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: "10px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "18px",
    textAlign: "center",
    marginLeft: "230px",
    marginRight: "180px",
    marginTop: "-30px",
    marginBottom: "10px",
    background: "#000", // Replace with your desired rgba color value
    borderRadius: "5px",
    width: "59px", // Set the width
    height: "23px", // Set the height
    flexShrink: 0,
  };
  const descriptionStyle13 = {
    background: "rgba(196, 126, 204, 0.20)",
    marginTop: "2px",
  };
  const descriptionStyle1 = {
    color: "#000",
    fontFamily: "Inter",
    fontSize: "10px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "14px",
    textAlign: "center",
    marginLeft: "15px",
    marginTop: "15px",
    marginBottom: "5px",
    background: "#A5FFD4", // Replace with your desired rgba color value
    borderRadius: "6px",
    width: "112px", // Set the width
    height: "15px", // Set the height
    flexShrink: 0,
  };
  const descriptionStyle7 = {
    color: "#3E3E3E",
    fontFamily: "Inter",
    fontSize: "10px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "14px",
    textAlign: "center",
    // marginLeft: "-10px",
    // marginRight: "80px",
    // marginTop: "10px",
    // marginBottom: "-25px",
    // width: "169px", // Set the width
    // height: "17px", // Set the height
    flexShrink: 0,
  };
  return (
    <>
      <Grid container p={0} gap={1}>
        <Grid item xs={12}>
          <Typography style={descriptionStyle1}> Ends in 10.0.0 </Typography>
        </Grid>
        <Grid item container justifyContent={"space-around"} sm={12}>
          <Grid item xs={3} sx={{ width: "80px", height: "69px" }}>
            <img
              src={item.img}
              className="card-img-top"
              alt="..."
              style={{
                width: "100%",
                height: "100%",
                flexshrink: 0,
                objectFit: "fill",
                ...descriptionStyle13,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography
              // variant="subtitle2"
              style={{
                maxWidth: "12em",
                wordWrap: "break-word",
                fontSize: "12px",
                fontWeight: 400
              }}
            >
              {item.name}
            </Typography>
          </Grid>
          <Grid item xs={2} marginTop={-5}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              sx={{
                height: "4em",
                width: "3.5em",
                backgroundColor: "red",
                borderRadius: "5px",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  height: "60%",
                  width: "100%",
                  backgroundColor: "red",
                  borderTopLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                Current price
              </Box>
              <Box
                // className="card-price1"
                sx={{
                  // mt: "0.5em",
                  height: "40%",
                  width: "100%",
                  backgroundColor: "black",
                  color: "#fff",
                  textAlign: "center",
                  borderBottomLeftRadius: "5px",
                  borderBottomRightRadius: "5px",
                }}
              >
                ₹ {finalPrice}
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Grid item xs={6}>
            <Typography variant="subtitle2" sx={{ fontSize: "10px" }}>
              Next price drops at:
              {productToShow?.options?.[5]?.Next_Price_drops_at}
              220g
            </Typography>
          </Grid>
          <Grid item xs={6} justifySelf={"end"}>
            <Button
              onClick={() => {
                handleIndex(index);
                handleParticipateClick();
              }}
              sx={{
                height: "2.5em",
                width: "100%",
                color: "#fff",
                background: "#B878CB",
                fontSize: "10px",
                fontWeight: 500
              }}
              variant="contained"
            >
              Participate Now
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ color: "grey", height: "5px", mt: "1em" }} />
    </>

    // <div className="card mt-1" style={{ width: "22rem", maxHeight: "360px" }}>
    //   <div style={descriptionStyle1}> Ends in 10.0.0 </div>
    //   <img
    //     src={item.img}
    //     className="card-img-top"
    //     alt="..."
    //     style={{
    //       width: "60px",
    //       height: "69px",
    //       flexshrink: 0,
    //       objectFit: "fill",
    //       ...descriptionStyle13,
    //     }}
    //   />
    //   <div style={descriptionStyle7}>
    //     Next price drops at:{productToShow?.options?.[5]?.Next_Price_drops_at}
    //     220g
    //   </div>
    //   <div className="card-body">
    //     <h5
    //       className="card-title"
    //       style={{
    //         fontFamily: "Inter",
    //         fontSize: "12px",
    //         marginLeft: "62px",
    //         marginTop: "-80px",
    //         marginRight: "100px",
    //       }}
    //     >
    //       {item.name}
    //     </h5>

    //     <div className="container w-100">
    //       <div className="card-price" style={descriptionStyle5}>
    //         <div>Current price</div>
    //       </div>
    //       <div className="card-price1" style={descriptionStyle6}>
    //         ₹ {finalPrice}
    //       </div>
    //       <button
    //         style={participateButtonStyle}
    //         onClick={handleParticipateClick}
    //       >
    //         Participate Now
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}
