import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    window.addEventListener("resize", updateContainerWidth);

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener("resize", updateContainerWidth);
    };
  }, []);

  const containerHeight = 812; // Set the container height

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // width: `${containerWidth}px`,
    width: "100%",
    heigth: "100%",
    // height: `${containerHeight}px`,
    flexShrink: 0,
    backgroundColor: "#FFF",
    boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.07)",
    margin: "0 auto",
    backgroundImage: `url('Flashscreen.png')`,
    backgroundSize: "100% 100%",
    // backgroundPosition: 'center top',
    // marginBottom: `${containerHeight * 0.615}px`, // 50% of container height
  };

  const titleStyle = {
    color: "#c47ecc",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "55px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    letterSpacing: "-0.017px",
    marginBottom: "10px",
  };

  // const subtitleStyle = {
  //   color: '#8c5ce3',
  //   fontFamily: 'Inter',
  //   fontSize: '36px',
  //   fontStyle: 'normal',
  //   fontWeight: 400,
  //   lineHeight: 'normal',
  //   letterSpacing: '-0.011px',
  //   marginBottom: '30px',
  // };

  const buttonStyle = {
    width: "171px",
    height: "54px",
    flexShrink: 0,
    borderRadius: "6px",
    background: "linear-gradient(247deg, #905CC6 0%, #C47ECC 100%)",
    color: "#fff",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    letterSpacing: "-0.005px",
    cursor: "pointer",
    // margin: "0 10px",
    // marginBottom: "20px",
  };

  const handleSignUpClick = () => {
    navigate("/CreateUser");
  };

  const handleSignUpClick1 = () => {
    navigate("/login");
  };

  return (
    <Box style={containerStyle}>
      <Grid containter mt={8}>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Typography
            sx={{
              color: "#c47ecc",
              textAlign: "center",
              fontFamily: "Inter",
              fontWeight: 700,
              fontSize: "55px",
              width: "199px",
            }}
            className="f_Inter"
          >
            Weekly
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          // mb={3}
          textAlign="center"
        >
          <Typography
            className="f_Inter"
            sx={{
              fontSize: "34px",
              fontWeight: 400,
              color: "#8c5ce3",
              letterSpacing: "-0.03%",
            }}
          >
            Group Buy
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          textAlign="center"
          mb={14}
        >
          <img src="/Group.png" alt="Logo" width={"175.5px"} height="121.5px" style={{ marginRight: "12px" }} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} textAlign="center" mt={2} mb={3}>
          <button style={buttonStyle} onClick={handleSignUpClick}>
            Sign Up
          </button>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} textAlign="center">
          <button style={buttonStyle} onClick={handleSignUpClick1}>
            Log In
          </button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FlashScreen;
