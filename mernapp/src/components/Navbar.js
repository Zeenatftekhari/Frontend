import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { AppBar, Box, Grid, Typography } from "@mui/material";
import SearchInputBox from "./atoms/searchbar/SearchInputBox";

const navbarStyle = {
  marginTop: "41px",
  marginBottom: "24px",
  marginLeft: "19px",
  marginRight: "16px",
};

const titleStyle = {
  color: "#C47ECC",
  // textAlign: "center",
  fontFamily: "Inter",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "26px",
  marginBottom: "0", // Adjust as needed
};

const subtitleStyle = {
  color: "#6A6A6A",
  fontFamily: "Inter",
  fontSize: "10px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "26px",
  display: "flex",
  alignItems: "center",
  marginBottom: "0",
  marginLeft: "5px",
};

const searchNavbarStyle = {
  width: "315px",
  height: "40px",
  flexShrink: 0,
  borderRadius: "10px",
  border: "1px solid #707070",
  background: "#FCF7FF",
  marginTop: "8px", // Adjust as needed
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px", // Adjust padding as needed
};

const iconStyle = {
  width: "10px",
  height: "12px",
  textAlign: "center",
  flexShrink: 0,
  // marginLeft: "50px",
};

const searchIconStyle = {
  width: "16px",
  height: "16px",
  flexShrink: 0,
};

const micIconStyle = {
  width: "12px",
  height: "16px",
  flexShrink: 0,
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
};

const buttonStyle = {
  margin: "0 10px",
  cursor: "pointer",
};

export default function Navbar({ userInfo, search, searchProduct }) {
  const navigate = useNavigate();
 
  const onProfileClick = () => {
    navigate("/Profile", { state: userInfo })
  }
  return (
    <Grid container style={{}}>
      <Grid item container sx={{ backgroundColor: "#fff", mt: "0.5em" }} p={2}>
        <Grid
          item
          xs={10}
          display="flex"
          flexDirection="column"
          justifyContent={"start"}
        >
          <h1 style={titleStyle}>Welcome back User</h1>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "start",
            }}
          >
            <img src="/location.png" alt="User Location" style={iconStyle} />
            <Typography style={subtitleStyle}>
              {userInfo?.length > 0 ? userInfo[0].address : "User Location"}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2} display="flex" flexDirection="column">
          <div style={buttonContainerStyle}>
            <div onClick={onProfileClick}>
              <img
                src="/face_FILL0_wght400_GRAD0_opsz48 3.png"
                alt="Profile"
                style={{
                  ...buttonStyle,
                  width: "20px",
                  height: "20px",
                  top: "44px",
                  left: "309px",
                }}

              />
            </div>
            <div onClick={() => navigate("/Cart")}>
              <img
                src="/add to cart.png"
                alt="Add to Cart"
                style={{
                  ...buttonStyle,
                  width: "14px",
                  height: "17.8px",
                  top: "43.69px",
                  left: "342px",
                }}
              />
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container p={2}>
        <Grid item xs={12} className="d-flex" style={{}}>
          <SearchInputBox
            type="text"
            value={search}
            sx={{ width: "100%" }}
            onChange={searchProduct}
          />
          {/* <img src="/search.png" alt="Search" style={searchIconStyle} /> */}
          {/* <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            inter-label="Search"
            onChange={(e) => searchProduct(e)}
          />
          <img src="/mic.png" alt="Mic" style={micIconStyle} /> */}
        </Grid>
      </Grid>
    </Grid>
  );
}
