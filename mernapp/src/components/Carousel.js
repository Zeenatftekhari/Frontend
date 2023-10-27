import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Grid } from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const imageStyle = {
  width: "90px", // Set the width of the image
  height: "90px", // Set the height of the image
  margin: "10px", // Adjust the margin as needed
};
const carouselStyle = {
  width: "343px",
  height: "134px",
  marginTop: "10px",
  marginBottom: "2px",
  marginLeft: "15px",
  marginRight: "17px",
  borderRadius: "10px",
  background: "#8C5CE3",
  flexShrink: 0,
};

const titleStyle = {
  color: "#FFF",
  textAlign: "center",
  fontFamily: "Inter",
  fontSize: "21px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "26px",
  letterSpacing: "0.021px",
  marginTop: "10px",
  marginBottom: "2px",
  marginLeft: "135px",
  marginRight: "16px",
};

const subtitleStyle = {
  color: "#FFF",
  fontFamily: "Inter",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "26px",
  marginTop: "10px",
  marginBottom: "-94px",
  marginLeft: "150px",
  marginRight: "44px",
};
const images = [
  {
    label: "Goč, nknk",
    imgPath: "/Group 4.png",
  },
  {
    label: "Goč, jasj",
    imgPath: "/Group 4.png",
  },
  {
    label: "Goč, hjsaj",
    imgPath: "/Group 4.png",
  },
  {
    label: "Goč, jasj",
    imgPath: "/Group 4.png",
  },
  {
    label: "Goč, hjsaj",
    imgPath: "/Group 4.png",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => {
            return (
              <>
                <Grid container p={2} key={`a${index}`}>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      backgroundColor: "#8C5CE3",
                      padding: 2,
                      borderRadius: "10px",
                    }}
                  >
                    {/* <div className="carousel-inner" id="carousel">
                      <div className="carousel-item active"> */}
                    <div style={titleStyle}>Weekly group buy exclusive</div>
                    <div style={subtitleStyle}>Shop More, Save More</div>
                    <div>
                      {Math.abs(activeStep - index) <= 2 ? (
                        <img
                          src={step.imgPath}
                          alt={step.label}
                          style={imageStyle}
                          height={"100%"}
                          width={"100%"}
                        />
                      ) : null}
                    </div>
                  </Grid>
                </Grid>
              </>
            );
          })}
        </AutoPlaySwipeableViews>
      </Grid>
    </Grid>
  );
}

export default SwipeableTextMobileStepper;
