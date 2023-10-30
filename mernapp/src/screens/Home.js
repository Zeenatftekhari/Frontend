import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import axios from "axios";
import { getUserByNumber } from "../services/getUser/getuserinfo";
import SwipeableTextMobileStepper from "../components/Carousel";
import { Box, Grid } from "@mui/material";

// const homeStyle = {
//   width: "375px",
//   height: "1499px",
//   flexShrink: 0,
//   background: "#FFF",
//   boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.07)",
// };

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

export default function Home() {
  const [grocery_category, setGroceryCat] = useState([]);
  const [grocery_items, setGroceryItems] = useState([]);
  const [prodIndex, setProductIndex] = useState("")
  const [userInfo, setUserInfo] = useState("");
  const [search, setSearch] = useState("");
  let userLoginInfo2 = JSON.parse(localStorage.getItem("userInfo2"));
  let mobileNumber = userLoginInfo2?.mobileNumber;
  const loadGroceryItems = async () => {
    try {
      //console.log  ("sucess")
      const {data} = await axios.post("http://localhost:5000/api/GroceryData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      //console.log (response.data,"fetched grocery items")
      console.log(data,data.grocery_items, "sucessfully fetched data")
      if (data.error) {
        throw new Error("Failed to fetch data");
      }
      //const data = await response.json();
     
      setGroceryItems(data.grocery_items);
      setGroceryCat(data.grocery_category);
    } catch (error) {

    }
  };
  const getUserDetailsByNumber = async () => {
    try {
      const { data, error } = await getUserByNumber(mobileNumber);
      setUserInfo(data?.userInfo);
      localStorage.setItem("userInfo", JSON.stringify(data?.userInfo));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadGroceryItems();
    getUserDetailsByNumber();
  }, []);
  const searchProductByName = (e) => {
    setSearch(e.target.value);
  };
  const handleIndex = (i) => {
    let productId = JSON.stringify(localStorage.getItem("productId"))
    if (productId !== undefined && productId !== null && productId !== "") {
      if (grocery_items[i]?._id) {

        localStorage.setItem("productId", JSON.stringify(grocery_items[i]?._id))
      }
    } else {
      if (productId === grocery_items[i]._id) {
      } else {
        localStorage.removeItem("productId")
        localStorage.setItem("productId", JSON.stringify(grocery_items[i]._id))
      }
    }
  }
  useEffect(() => {
    console.log("useEffect Running")
  }, [])
  return (
    <Box>
      <Box textAlign={"center"}>
        <img src="/Path 46026.png" alt="Path 46026" style={pathImageStyle} />
      </Box>
      <div>
        <Navbar
          userInfo={userInfo}
          search={search}
          searchProduct={searchProductByName}
        />

        <SwipeableTextMobileStepper />
      </div>
      <Grid container p={2}>
        {grocery_category && grocery_category.length > 0 ? (
          grocery_category.map((data, ind) => {
            return (
              <Grid item xs={12} key={data.id}>
                <div className="">{data.grocery_category}</div>
                {/* <hr
                  id="hr-success"
                  style={{
                    height: "4px",
                    backgroundImage:
                      "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))",
                    background: "none",
                  }}
                /> */}
                {grocery_items && grocery_items.length > 0 ? (
                  grocery_items
                    .filter(
                      (items) =>
                        items.grocery_category === data.grocery_category &&
                        items.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .slice(0, 4)
                    .map((filterItems, index) => {
                      return (
                        <div
                          className="col-12 col-md-6 col-lg-3 p-2"
                          key={filterItems.id}
                        >
                          <Card
                            foodName={filterItems.name}
                            options1={filterItems.options[0]}
                            item={filterItems}
                            options={filterItems.options[3]}
                            ImgSrc={filterItems.img}
                            index={index}
                            handleIndex={handleIndex}
                          />
                        </div>
                      );
                    })
                ) : (
                  <div>No Data Available</div>
                )}
              </Grid>
            );
          })
        ) : (
          <div>No Data Available</div>
        )}
      </Grid>
      <Footer />
    </Box>
  );
}
