import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
// import { Button } from "bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import fortune from "../assets/fortune.png";
import CustomCard from "../components/Card";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getParticipatedData } from "../services/getParticipatedata/getParticipatedData";
import { TroubleshootSharp } from "@mui/icons-material";

function Cart() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchText, setSearchText] = useState("");
  const [biddingData, setBiddingData] = useState([]);
  const [previousSearchTextLength, setPreviousSearchTextLength] = useState(0);
  const [originalBiddingData, setOriginalBiddingData] = useState([]);
  const [showBidding, setShowBidding] = useState(true);
  const [showOrder, setShowOrder] = useState(false);

  const navigate = useNavigate();

  // Retrieve mobileNumber from localStorage
  let userInfo2 = localStorage.getItem("userInfo2");
  let mobileNumber;
  if (userInfo2) {
    let userInfo = JSON.parse(userInfo2);
    mobileNumber = userInfo?.mobileNumber;
  } else {
    console.log(mobileNumber);
  }

  useEffect(() => {
    getParticipatedCartData();
  }, []);

  const getParticipatedCartData = async () => {
    try {
      const { data } = await getParticipatedData(mobileNumber);
      setBiddingData(data?.data);
      // Update original bidding data when data is fetched initially
      setOriginalBiddingData(data?.data);
      console.log(data?.data, data, "data");
    } catch (error) {
      // Handle error
    }
  };

  useEffect(() => {
    let tempRow = originalBiddingData?.length > 0 ? [...originalBiddingData] : []; // Use the original data

    if (searchText?.length < previousSearchTextLength) {
      // Backspace key was pressed, revert to original data
      setBiddingData(originalBiddingData);
    } else if (originalBiddingData && originalBiddingData?.length > 0) {
      tempRow = tempRow.filter((item) => {
        return item.item.name.toLowerCase().includes(searchText.toLowerCase());
      });
      setBiddingData([...tempRow]);
    } else {
      setBiddingData([...tempRow]);
    }

    // Update the previous search text length
    setPreviousSearchTextLength(searchText?.length);
  }, [searchText, originalBiddingData, previousSearchTextLength]);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHomeButton = () => {
    navigate("/home");
  };
  return (
    <>
      <Card
        sx={{
          height: "200px",
          width: "100%",
          backgroundColor: "rgb(140,92,227)",
          backgroundImage: "line",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <Grid
          container
          padding={2}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Grid
            item
            xs={2}
            md={10}
            component={Button}
            sx={{ color: "#fff", borderColor: "#fff" }}
            variant="outlined"
            onClick={handleHomeButton}
          >
            {/* <Typography variant={"h4"} color="#ffff" sx={{ fontWeight: 800 }}> */}
            Home
          </Grid>
          <Grid item xs={6} md={10}>
            <Typography variant={"h4"} color="#ffff" sx={{ fontWeight: 800 }}>
              Your Cart
            </Typography>
          </Grid>
          <Grid item xs={2} md={1} sx={{ md: { justifyContent: "flex-end" } }}>
            {/* <Avatar color="#ffff" variant="square"> */}
            <IconButton
              fontSize="medium"
              sx={{ color: "#ffff", position: "relative" }}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={() => {
                  setShowBidding(true);
                  setShowOrder(false);
                  handleClose();
                }}
              >
                Participated
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setShowBidding(false);
                  setShowOrder(true);
                  handleClose();
                }}
              >
                Order Placed
              </MenuItem>
            </Menu>
            {/* </Avatar> */}
          </Grid>
        </Grid>
        <CardContent
          sx={{
            position: "absolute",
            height: "120px",
            width: "80%",
            backgroundColor: "#ffff",
            mt: "50px",
            ml: "10%",
            borderRadius: "20px",
            border: "1px solid grey",
            borderColor: "GrayText",
          }}
        >
          <Grid container display={"flex"} direction={"column"} spacing={3}>
            <Grid item sm={12}>
              <TextField
                size="small"
                fullWidth
                placeholder="Search your product"
                onChange={(e) => setSearchText(e.target.value)}
              ></TextField>
            </Grid>
            <Grid
              item
              sm={12}
              container
              display={"flex"}
              direction={"row"}
              justifyContent={"space-evenly"}
            >
              <Grid item display={"flex"} columnGap={2}>
                <Chip label="all" />
                <Chip label="Grocery" />
                <Chip label="Foods" />
                {/* <Chip label="Other" /> */}
              </Grid>
              {/* <Grid item sm={3}>
                <Button
                  variant="outlined"
                  sx={{
                    border: "1px solid rgb(140,92,227)",
                    color: "rgb(140,92,227)",
                    // width: "1em",
                  }}
                >
                  Grocery
                </Button>
              </Grid>
              <Grid item sm={3}>
                <Button
                  variant="outlined"
                  sx={{
                    border: "1px solid rgb(140,92,227)",
                    color: "rgb(140,92,227)",
                  }}
                >
                  Other
                </Button>
              </Grid> */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card />
      {/* <CustomCard /> */}
      {showBidding ? (
        biddingData?.length > 0 ? (
          biddingData.map((item, index) => {
            console.log(item.item.options, "hhh");
            return (
              <Card
                sx={{
                  mt: "4em",
                  // mx: 1,
                }}
              >
                <CardContent>
                  <Grid container>
                    <Grid item xs={3}>
                      <Box
                        sx={{
                          border: "0.5px solid #8C5CE3",
                          background: "#8C5CE3",
                          borderRadius: "5px",
                          width: "4em",
                          height: "6em",
                        }}
                      >
                        <img
                          src={item.item.img}
                          width="80%"
                          height="80%"
                          alt="productImg"
                          style={{ margin: "10%" }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={7} container direction={"column"}>
                      <Grid item>
                        <Typography
                          style={{
                            backgroundColor: "#A5FFD4",
                            borderRadius: "6px",
                            textAlign: "center",
                            fontSize: "12px",
                            width: "60%",
                          }}
                        >
                          Ends in 10.0.0
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={{ fontSize: "12px" }}>
                          {item?.item?.name}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={{ fontSize: "12px" }}>
                          Token Amount ₹ {item?.tokenAmount / 100}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item xs={2}>
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        sx={{
                          height: "3em",
                          width: "3em",
                          backgroundColor: "red",
                          borderRadius: "5px",
                          alignSelf: "end",
                        }}
                      >
                        <Box
                          sx={{
                            textAlign: "center",
                            height: "2.5em",
                            width: "3em",
                            backgroundColor: "red",
                            borderTopLeftRadius: "5px",
                            borderTopRightRadius: "5px",
                            fontSize: "10px",
                            fontWeight: 600,
                            color: "#fff",
                          }}
                        >
                          Current price
                        </Box>
                        <Box
                          className="card-price1"
                          sx={{
                            mt: "0.5em",
                            height: "1.5",
                            width: "3em",
                            backgroundColor: "black",
                            color: "#fff",
                            textAlign: "center",
                            borderBottomLeftRadius: "5px",
                            borderBottomRightRadius: "5px",
                          }}
                        >
                          ₹ {parseInt(item?.item?.options[3][0]?.Current_Price)}
                        </Box>
                      </Box>
                      <Typography sx={{ mt: "1em" }}>
                        Qty: {item?.quantity}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            );
          })
        ) : (
          <>
            <Card sx={{
              mt: "4em",
              height: "10em",
              textAlign: "center",
              borderRadius: "10px",
              paddingTop: "4.5em",
            }}>No data found</Card>
          </>
        )
      ) : showOrder ? (
        <Card
          border={"1px solid black"}
          sx={{
            mt: "4em",
            height: "10em",
            textAlign: "center",
            borderRadius: "10px",
            paddingTop: "4.5em",
          }}
        >
          No Order Detail Available
        </Card>
      ) : (
        "No data available"
      )}
    </>
  );
}

export default Cart;
// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// export default function Cart() {
//   const { name } = useParams();
//   const navigate = useNavigate();

//   const [productToShow, setProductToShow] = useState(null);

//   useEffect(() => {
//     async function fetchGroceryItem() {
//       try {
//         const response = await fetch(
//           `http://localhost:5000/api/GroceryData?_id=${name}`,
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ name }),
//           }
//         );

//         if (!response.ok) {
//           throw new Error(`Failed to fetch data. Status: ${response.status}`);
//         }

//         const data = await response.json();
//         const product = data.grocery_items.find((item) => item.name === name);

//         if (product) {
//           setProductToShow(product);
//         } else {
//           console.error("Product not found:", name);
//           // Handle the case where the specified product is not found
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }

//     fetchGroceryItem();
//   }, [name]);

//   if (!productToShow) {
//     return <div>Loading...</div>;
//   }

//   const isMobile = window.innerWidth <= 480;
//   const handleGoBackClick = () => {
//     navigate(`/Home`);
//   };

//   const pathImageStyle = {
//     width: "104px",
//     height: "4px",
//     flexShrink: 0,
//     fill: "#D8D8D8",
//     marginTop: "61.65px",
//     marginBottom: "-35.35px",
//     marginLeft: "136.09px",
//     marginRight: "134.91px",
//   };

//   const descriptionStyle12 = {
//     color: "#FFF",
//     fontFamily: "Inter",
//     fontSize: "12px",
//     fontStyle: "normal",
//     fontWeight: 600,
//     lineHeight: "18px",
//     textAlign: "center",
//     marginLeft: "600px",
//     marginRight: "20px",
//     marginTop: "-45px",
//     marginBottom: "10px",
//     background: "#000", // Replace with your desired rgba color value
//     borderRadius: "5px",
//     width: "59px", // Set the width
//     height: "23px", // Set the height
//     flexShrink: 0,
//   };

//   const descriptionStyle13 = {
//     color: "#3E3E3E",
//     fontFamily: "Inter",
//     fontSize: "14px",
//     fontStyle: "normal",
//     fontWeight: 700,
//     lineHeight: "14px",
//     textAlign: "left",
//     marginTop: "-17px",
//     marginBottom: "-88px",
//     marginLeft: "65px",
//   };

//   const formContainerStyle = {
//     minHeight: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     position: "absolute",
//   };

//   const rectangleStyle = {
//     width: "100%",
//     height: "120px",
//     background: "#F0F0F0",
//     position: "relative",
//     marginBottom: "120px",
//     marginTop: "-280PX",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//   };

//   const arrowImageStyle = {
//     width: "24px",
//     height: "24px",
//     marginTop: "111.13px",
//     marginBottom: "-90px",
//     marginLeft: "-90px",
//     marginRight: "550.68px",
//   };

//   const titleStyle = {
//     color: "#1D1D1D",
//     fontFamily: "Inter",
//     fontSize: "28px",
//     fontStyle: "normal",
//     fontWeight: 600,
//     lineHeight: "normal",
//     textAlign: "center",
//     marginTop: "111.13px",
//     marginBottom: "10px",
//   };

//   const RectangleImageStyle = {
//     width: isMobile ? "100%" : "141px",
//     height: "auto",
//     marginLeft: "-48px",
//     marginRight: "428px",
//     marginTop: "-45px",
//   };

//   const RectangleImageStyle1 = {
//     width: isMobile ? "100%" : "83px",
//     height: "auto",
//     marginLeft: "88px",
//     marginRight: "558px",
//     marginTop: "-100px",
//     marginBottom: "90px",
//     position: "center",
//   };
//   const descriptionStyle = {
//     color: "#3E3E3E",
//     fontFamily: "Inter",
//     fontSize: "18px",
//     fontStyle: "normal",
//     fontWeight: 600,
//     lineHeight: "normal",
//     textAlign: "left",
//     marginTop: "5px",
//     marginBottom: "29px",
//     marginLeft: "260px",
//     marginRight: "160px",
//     position: "absolute",
//   };

//   const descriptionStyle1 = {
//     color: "#000",
//     fontFamily: "Inter",
//     fontSize: "10px",
//     fontStyle: "normal",
//     fontWeight: 400,
//     lineHeight: "14px",
//     textAlign: "left",
//     marginLeft: "265px",
//     marginTop: "-185px",
//     marginBottom: "5px",
//     background: "#A5FFD4",
//     borderRadius: "6px",
//     width: "112px",
//     height: "15px",
//   };

//   const descriptionStyle5 = {
//     color: "#FFF",
//     fontFamily: "Inter",
//     fontSize: "12px",
//     fontStyle: "normal",
//     fontWeight: 400,
//     lineHeight: "12px",
//     textAlign: "center",
//     marginLeft: "600px",
//     marginRight: "10px",
//     marginTop: "-155px",
//     marginBottom: "25px",
//     background: "#FF4A4A",
//     borderRadius: "5px",
//     width: "58px",
//     height: "54px",
//   };

//   const descriptionStyle10 = {
//     color: "#3E3E3E",
//     fontFamily: "Inter",
//     fontSize: "14px",
//     fontStyle: "normal",
//     fontWeight: 700,
//     lineHeight: "14px",
//     textAlign: "left",
//     marginTop: "-17px",
//     marginBottom: "-88px",
//     marginLeft: "35px",
//   };

//   const descriptionStyle11 = {
//     color: "#6A6A6A",
//     fontFamily: "Inter",
//     fontSize: "12px",
//     fontStyle: "normal",
//     fontWeight: 400,
//     lineHeight: "18px",
//     textAlign: "left",
//     marginTop: "90px",
//     marginBottom: "-88px",
//     marginLeft: "265px",
//   };
//   const buttonstyle = {
//     color: "#8C5CE3",
//     fontfamily: "Inter",
//     fontsize: "12px",
//     fontstyle: "normal",
//     fontWeight: 600,
//     lineheight: "14px",
//     letterspacing: "0.012px",
//     background: "none",
//     border: "none",
//     marginTop: "95px",
//   };

//   return (
//     <div style={formContainerStyle}>
//       <div style={rectangleStyle}>
//         <img src="/Path 46026.png" alt="Path 46026" style={pathImageStyle} />

//         <button
//           type="button"
//           style={{ border: "none", background: "none", cursor: "pointer" }}
//           onClick={handleGoBackClick}
//         >
//           <img src="/leftarrow.png" alt="Left Arrow" style={arrowImageStyle} />
//         </button>
//         <div style={titleStyle}>Group Discount Entered</div>
//       </div>

//       <img
//         src="/producdisplay.png"
//         alt="Rectangle"
//         style={RectangleImageStyle}
//       />
//       <img
//         src={productToShow.img}
//         alt="Rectangle"
//         style={RectangleImageStyle1}
//       />
//       <div>
//         <div style={descriptionStyle1}> Ends in 10.0.0 </div>
//         <div>
//           <p style={descriptionStyle}>{productToShow.name}</p>
//         </div>

//         <div style={descriptionStyle11}>
//           MRP:
//           <div style={descriptionStyle10}>{productToShow.options[0]?.MRP}</div>
//         </div>
//         <div>
//           <div style={descriptionStyle11}>
//             Best Price:
//             <div style={descriptionStyle13}>
//               {" "}
//               {productToShow.options[2]?.Best_Price}
//             </div>
//             <button
//               type="button"
//               className="btn btn-primary"
//               style={buttonstyle}
//             >
//               <span style={{ marginRight: "5px" }}>View More</span>
//             </button>
//           </div>
//         </div>

//         <div style={descriptionStyle5}>Current Price</div>
//         <div style={descriptionStyle12}>
//           {productToShow.options[3]?.Current_Price}
//         </div>
//         <div>
//           <div></div>
//         </div>
//       </div>
//     </div>
//   );
// }
