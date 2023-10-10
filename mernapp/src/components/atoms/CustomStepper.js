import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { Card } from "@mui/material";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: "linear-gradient(to right, #8C5CE3, #8C5CE3)",
      boxShadow:
        "5px 0 10px rgba(144, 202, 249, 5) , -5px 0 10px rgba(144, 202, 249, 5) ", // Box shadow on both sides
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: "linear-gradient(to right, #8C5CE3, #8C5CE3)",
      boxShadow:
        "5px 0 10px rgba(144, 202, 249, 10) , -5px 0 10px rgba(144, 202, 249, 0) ", // Box shadow on both sides
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    zIndex: +2,
    height: 3,
    border: 0,
    backgroundColor: theme.palette.mode === "dark" ? "#90caf9" : "#90caf9",
    borderRadius: 1,
    boxShadow:
      "5px 0 10px rgba(187, 222, 251, 2) , -5px 0 10px rgba(187, 222, 251, 2) ",
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor: "rgba(144, 202, 249, 5)",
  zIndex: 1,
  color: "#fff",
  fontWeight: 600,
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  border: "5px solid rgba(187, 222, 251, 1)",
  ...(ownerState.active && {
    backgroundImage: "linear-gradient(to right, #8C5CE3, #8C5CE3)",
    // boxShadow: "5px 5px 10px rgba(255, 255, 255, 5)",
  }),
  ...(ownerState.completed && {
    backgroundImage: "linear-gradient(to right, #8C5CE3, #8C5CE3)",
    // boxShadow: "5px 5px 10px rgba(255, 255, 255, 5)",
  }),
}));

function ColorlibStepIcon(props) {
  console.log(props);
  const { active, completed, className, step, count, index } = props;

  const icons = {
    1: 200,
    2: 300,
    3: 400,
    4: 500,
    5: 600,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {index === 1 ? count : `${icons[step]}${count}`}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = [1000, 900, 800, 700, 600];

export default function CustomizedSteppers({ count }) {
  return (
    <Card
      sx={{
        backgroundColor: "#ede7f6",
        width: "40em",
        height: "8em",
        marginX: "1.5em",
        marginY: "2.5em",
      }}
    >
      <Stack
        sx={{ width: "100%", display: "flex", marginTop: "1em" }}
        spacing={3}
      >
        <Stepper
          alternativeLabel
          connector={<ColorlibConnector />}
          activeStep={1}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel
                StepIconComponent={() => (
                  <ColorlibStepIcon
                    step={index + 1}
                    count={index + 1 === 1 ? count : ""}
                    index={index + 1}
                  />
                )}
                sx={{ fontSize: "1.2em", fontWeight: 800 }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
    </Card>
  );
}
