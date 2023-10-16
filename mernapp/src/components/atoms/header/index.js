import { Button, Divider, Grid } from "@mui/material";
import "./header.css";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
function Header({ onClick, title }) {
  return (
    <>
      <Grid container sx={{ height: "7em", background: "#F0F0F0" }}>
        <Grid item xs={12} sx={{ background: "#F0F0F0", justifyContent: "center", mx: "35%" }} >
          <img
            src="/Path 46026.png"
            alt="Path 46026"
            className="pathImageStyle"
          />
          {/* <Divider sx={{ height: "10px", width: "110px", justifySelf: "center" }} textAlign="center" /> */}
        </Grid>
        <Grid item xs={1} >
          {/* <Button
            type="button"
            style={{ border: "none", background: "none", cursor: "pointer" }}
            onClick={onClick}
          > */}
          <KeyboardBackspaceIcon onClick={onClick} sx={{ cursor: "pointer", alignSelf: "center", ml: "1em" }} />
          {/* </Button> */}
        </Grid>
        <Grid item xs={11} textAlign="start">
          <div className="titleStyle">{title}</div>
        </Grid>
      </Grid>
      {/* <div className="rectangleStyle"> */}
      {/* <div className="rectangleStyle">

        <div className="titleContainerStyle">


        </div>
      </div> */}
      {/* </div> */}
      {title === "Bidding Details" ? (
        <>
          <div className="subtitleStyle">Thank You</div>
          <div className="subtitleStyle1">For Participating</div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Header;
