import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Cart() {
  const { name } = useParams();
  const navigate = useNavigate();

  const [productToShow, setProductToShow] = useState(null);

  useEffect(() => {
    async function fetchGroceryItem() {
      try {
        const response = await fetch(
          `http://localhost:5000/api/GroceryData?_id=${name}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name }),
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();
        const product = data.grocery_items.find((item) => item.name === name);

        if (product) {
          setProductToShow(product);
        } else {
          console.error("Product not found:", name);
          // Handle the case where the specified product is not found
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchGroceryItem();
  }, [name]);

  if (!productToShow) {
    return <div>Loading...</div>;
  }

  const isMobile = window.innerWidth <= 480;
  const handleGoBackClick = () => {
    navigate(`/Home`);
  };

  const pathImageStyle = {
    width: "104px",
    height: "4px",
    flexShrink: 0,
    fill: "#D8D8D8",
    marginTop: "61.65px",
    marginBottom: "-35.35px",
    marginLeft: "136.09px",
    marginRight: "134.91px",
  };

  const descriptionStyle12 = {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "18px",
    textAlign: "center",
    marginLeft: "600px",
    marginRight: "20px",
    marginTop: "-45px",
    marginBottom: "10px",
    background: "#000", // Replace with your desired rgba color value
    borderRadius: "5px",
    width: "59px", // Set the width
    height: "23px", // Set the height
    flexShrink: 0,
  };

  const descriptionStyle13 = {
    color: "#3E3E3E",
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "14px",
    textAlign: "left",
    marginTop: "-17px",
    marginBottom: "-88px",
    marginLeft: "65px",
  };


  const formContainerStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  };

  const rectangleStyle = {
    width: "100%",
    height: "120px",
    background: "#F0F0F0",
    position: "relative",
    marginBottom: "120px",
    marginTop: "-280PX",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };


  const arrowImageStyle = {
    width: "24px",
    height: "24px",
    marginTop: "111.13px",
    marginBottom: "-90px",
    marginLeft: "-90px",
    marginRight: "550.68px",
  };

  const titleStyle = {
    color: "#1D1D1D",
    fontFamily: "Inter",
    fontSize: "28px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    textAlign: "center",
    marginTop: "111.13px",
    marginBottom: "10px",
  };

  
  const RectangleImageStyle = {
    width: isMobile ? "100%" : "141px",
    height: "auto",
    marginLeft: "-48px",
    marginRight: "428px",
    marginTop: "-45px"
  };

  const RectangleImageStyle1 = {
    width: isMobile ? "100%" : "83px",
    height: "auto",
    marginLeft: "88px",
    marginRight: "558px",
    marginTop: "-100px",
    marginBottom: "90px",
    position: "center",
  };
  const descriptionStyle = {
    color: "#3E3E3E",
    fontFamily: "Inter",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    textAlign: "left",
    marginTop: "5px",
    marginBottom: "29px",
    marginLeft: "260px",
    marginRight: "160px",
    position: "absolute",
  };

  const descriptionStyle1 = {
    color: "#000",
    fontFamily: "Inter",
    fontSize: "10px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "14px",
    textAlign: "left",
    marginLeft: "265px",
    marginTop: "-185px",
    marginBottom: "5px",
    background: "#A5FFD4",
    borderRadius: "6px",
    width: "112px",
    height: "15px",
  };

  const descriptionStyle5 = {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "12px",
    textAlign: "center",
    marginLeft: "600px",
    marginRight: "10px",
    marginTop: "-155px",
    marginBottom: "25px",
    background: "#FF4A4A",
    borderRadius: "5px",
    width: "58px",
    height: "54px",
  };


  const descriptionStyle10 = {
    color: "#3E3E3E",
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "14px",
    textAlign: "left",
    marginTop: "-17px",
    marginBottom: "-88px",
    marginLeft: "35px",
  };

  const descriptionStyle11 = {
    color: "#6A6A6A",
    fontFamily: "Inter",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "18px",
    textAlign: "left",
    marginTop: "90px",
    marginBottom: "-88px",
    marginLeft: "265px",
  };
  const buttonstyle = {color: "#8C5CE3",
    fontfamily: "Inter",
    fontsize: "12px",
    fontstyle: "normal",
    fontWeight: 600,
    lineheight: "14px",
    letterspacing: "0.012px",
    background: 'none',
    border: 'none',
    marginTop: '95px'

  }

  return (
    <div style={formContainerStyle}>
      <div style={rectangleStyle}>
        <img src="/Path 46026.png" alt="Path 46026" style={pathImageStyle} />

        <button
          type="button"
          style={{ border: "none", background: "none", cursor: "pointer" }}
          onClick={handleGoBackClick}
        >
          <img
            src="/leftarrow.png"
            alt="Left Arrow"
            style={arrowImageStyle}
          />
        </button>
        <div style={titleStyle}>Group Discount Entered</div>
      </div>

      <img
        src="/producdisplay.png"
        alt="Rectangle"
        style={RectangleImageStyle}
      />
      <img
        src={productToShow.img}
        alt="Rectangle"
        style={RectangleImageStyle1}
      />
      <div>
        <div style={descriptionStyle1}> Ends in 10.0.0 </div>
        <div>
          <p style={descriptionStyle}>{productToShow.name}</p>
        </div>

        <div style={descriptionStyle11}>
          MRP:
          <div style={descriptionStyle10}>{productToShow.options[0]?.MRP}</div>
        </div>
        <div>
          <div style={descriptionStyle11}>
            Best Price:
            <div style={descriptionStyle13}>
              {" "}
              {productToShow.options[2]?.Best_Price}
            </div>
            <button
        type="button"
        className="btn btn-primary"
        style={buttonstyle}
      >
        <span style={{ marginRight: "5px" }}>View More</span>
      </button>
          </div>
        </div>

        <div style={descriptionStyle5}>Current Price</div>
        <div style={descriptionStyle12}>
          {productToShow.options[3]?.Current_Price}
        </div>
        <div>
          <div>
          </div>
        </div>
      </div>

    </div>
  );
}
