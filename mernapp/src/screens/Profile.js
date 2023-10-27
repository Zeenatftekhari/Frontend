import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./Profile.css";
import {
  Avatar,
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ShareIcon from "@mui/icons-material/Share";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Header from "../components/atoms/header";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CustomTextField from "../components/atoms/CustomTextField/CustomButton";
import { useState } from "react";
import CustomButton from "../components/atoms/CustomTextField/CustomButton";

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [view, setView] = useState(false);
  const handleGoBackClick = () => {
    navigate("/Home");
  };
  const handleLogout = () => {
    let promptMsg = window.confirm("Are you sure you want to Logout");
    if (promptMsg) {
      localStorage.clear();
      navigate("/");
      alert("Logged out successfully");
    }
  };
  const pathImageStyle = {
    width: "104px",
    height: "4px",
    flexShrink: 0,
    fill: "#D8D8D8",
    marginTop: "11.65px",
    marginBottom: "25.35px",
    // marginLeft: "136.09px",
    // marginRight: "134.91px",
  };
  return (
    <>
      <Grid container p={2}>
        <Grid item>
          <img
            className="path-46026-icon"
            alt=""
            src="/path-46026.svg"
            style={pathImageStyle}
          />
          <KeyboardBackspaceIcon
            onClick={handleGoBackClick}
            sx={{ mt: "2em", mb: "2em" }}
          />
        </Grid>

        <Grid
          item
          container
          p={2}
          alignItems={"center"}
          sx={{
            backgroundColor: "rgba(196, 126, 204, 0.35)",
            borderRadius: "10px",
          }}
        >
          <Grid item xs={4} justifySelf={"center"} sx={{ textAlign: "center" }}>
            <Avatar
              sx={{ width: "90px", height: "90px", background: "#8c5ce3" }}
            >
              <img

                alt=""
                src="/face-fill0-wght400-grad0-opsz48-1.svg"
              />
            </Avatar>
          </Grid>
          <Grid item xs={8}>
            <Box display="flex">
              <Box>
                <Typography variant="h4">
                  {location.state && location.state[0].name}
                </Typography>
                <Typography variant="subtitle1">
                  {location.state && location.state[0].address}
                </Typography>
                <Typography variant="subtitle1">
                  {location.state && location.state[0].Chairmanemail}
                </Typography>
                <Typography variant="subtitle1">
                  {location.state && location.state[0].MobileNumber}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid item container rowGap={2} mt={2}>
          <Grid item xs={12}>
            <CustomButton
              lable="My Orders"
              fullWidth
              disabled
              onClick={() => {
                setView(!view);
              }}
              icon={<ArrowDropDownIcon />}

            />
            {view && (
              <Grid
                container
                p={1}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  background: "rgba(196, 126, 204, 0.35)",
                  height: "6em",
                  width: "100%",
                  borderRadius: "5px",
                }}
              >
                <Grid item xs={8}>
                  <Typography>Pure chocolate</Typography>
                  <Typography>loroem ipsum hjajf hjbjhasfjb </Typography>
                  <Button>View More</Button>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    background: "#fff",
                    height: "4em",
                    width: "60%",
                    borderRadius: "5px",
                  }}
                ></Grid>
              </Grid>
            )}
          </Grid>
          <Grid item xs={12}>
            <CustomButton
              lable="Payment Details"
              fullWidth
              disabled
              onClick={() => {
                // setView(!view);
              }}
              icon={<ArrowDropDownIcon />}

            />
          </Grid>
          <Grid item xs={12}>
            <CustomButton
              lable="Share the web app"
              fullWidth
              icon={<ShareIcon />}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomButton
              lable="Track your order"
              fullWidth
              disabled
              icon={""}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomButton
              lable="Get updates on whatsapp"
              fullWidth
              disabled
              icon={<ToggleOnIcon />}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomButton
              lable="Logout"
              fullWidth
              disabled
              onClick={handleLogout}
              icon={<ArrowDropDownIcon />}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
    //<div className="profile">
    //   <div className="component-658-1" />
    //   <div className="notification-bing" />
    //   <div className="profile-child" />
    //   <div className="component-708-1">
    //     <div className="background">
    //       <div className="background1" />
    //     </div>
    //     <div className="home-indicator">
    //       <div className="home-indicator1" />
    //     </div>
    //   </div>
    //   <img className="vector-icon" alt="" src="/vector.svg" />
    //   <div className="profile-item" />
    //   <div className="profile-inner" />
    //   <div className="group-div">
    //     <div className="group-child" />
    //   </div>

    //
    //   <div className="shop-with-members1">User Name</div>

    //   <div className="shop-now">Shop Now</div>
    //
    //   <img className="ellipse-icon" alt="" src="/ellipse-7621.svg" />
    //   <img
    //     className="face-fill0-wght400-grad0-opsz4-icon"
    //     alt=""
    //     src="/face-fill0-wght400-grad0-opsz48-1.svg"
    //   />

    //   <div className="price-falling-with-each-buy-wrapper">
    //     <div className="price-falling-with">{`Product Discription `}</div>
    //     <img
    //       className="i518025sm005c12realistic-icon"
    //       alt=""
    //       src="/2201i518025sm005c12realistic-chocolate-packaging-setremovebgpreview@2x.png"
    //     />
    //   </div>
    //   <div className="view-more">View More</div>
    //   <div className="rectangle-div" />
    //   <div className="profile-child1" />
    //   <img className="vector-icon1" alt="" src="/vector1.svg" />
    //   <img className="vector-icon2" alt="" src="/vector1.svg" />
    //   <div className="profile-child2" />
    //   <div className="profile-child3" />
    //   <div className="profile-child4" />
    //   <div className="profile-child5" />
    //   <img className="vector-icon3" alt="" src="/vector1.svg" />
    //   <div className="proceed">My Orders</div>
    //   <div className="proceed1">Payment details</div>
    //   <div className="proceed2">Share the web app</div>
    //   <div className="proceed3">Track your order</div>
    //   <div className="proceed4">Get Updates on Whatsapp</div>
    //   <div className="proceed5">Log out</div>
    //   <img
    //     className="toggle-on-fill0-wght400-grad0-icon"
    //     alt=""
    //     src="/toggle-on-fill0-wght400-grad0-opsz48-1.svg"
    //   />
    //   <img className="vector-icon4" alt="" src="/vector2.svg" />
    // </div>
  );
};

export default Profile;
