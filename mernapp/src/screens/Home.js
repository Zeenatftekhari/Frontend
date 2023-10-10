import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { getUserByNumber } from "../services/getUser/getuserinfo";
import SwipeableTextMobileStepper from "../components/Carousel";

const homeStyle = {
  width: "375px",
  height: "1499px",
  flexShrink: 0,
  background: "#FFF",
  boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.07)",
};

const pathImageStyle = {
  width: "104px",
  height: "4px",
  flexShrink: 0,
  fill: "#D8D8D8",
  marginTop: "11.65px",
  marginBottom: "25.35px",
  marginLeft: "136.09px",
  marginRight: "134.91px",
};

export default function Home() {
  const [grocery_category, setGroceryCat] = useState([]);
  const [grocery_items, setGroceryItems] = useState([]);
  const [userInfo, setUserInfo] = useState("");
  const [search, setSearch] = useState("");
  // let userLoginInfo = localStorage.getItem("userInfo");
  let userLoginInfo2 = JSON.parse(localStorage.getItem("userInfo2"));
  let mobileNumber = userLoginInfo2?.mobileNumber;
  console.log(userLoginInfo2, "info 1 and 2");
  const loadGroceryItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/GroceryData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log("API Response:", data);
      setGroceryItems(data.grocery_items);
      setGroceryCat(data.grocery_category);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };
  const getUserDetailsByNumber = async () => {
    try {
      const { data, error } = await getUserByNumber(mobileNumber);
      setUserInfo(data?.userInfo);
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

  return (
    <div style={homeStyle}>
      <img src="/Path 46026.png" alt="Path 46026" style={pathImageStyle} />
      <div>
        <Navbar userInfo={userInfo} searchProduct={searchProductByName} />
      </div>
      <div>
        <SwipeableTextMobileStepper />
      </div>
      <div className="container">
        {grocery_category && grocery_category.length > 0 ? (
          grocery_category.map((data) => {
            return (
              <div className="row mb-3" key={data.id}>
                <div className="fs-3 m-3">{data.grocery_category}</div>
                <hr
                  id="hr-success"
                  style={{
                    height: "4px",
                    backgroundImage:
                      "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))",
                    background: "none",
                  }}
                />
                {grocery_items && grocery_items.length > 0 ? (
                  grocery_items
                    .filter(
                      (items) =>
                        items.grocery_category === data.grocery_category &&
                        items.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .slice(0, 4)
                    .map((filterItems) => {
                      return (
                        <div
                          className="col-12 col-md-6 col-lg-3"
                          key={filterItems.id}
                        >
                          <Card
                            foodName={filterItems.name}
                            options1={filterItems.options[0]}
                            item={filterItems}
                            options={filterItems.options[3]}
                            ImgSrc={filterItems.img}
                          />
                        </div>
                      );
                    })
                ) : (
                  <div>No Data Available</div>
                )}
              </div>
            );
          })
        ) : (
          <div>No Data Available</div>
        )}
      </div>
      <Footer />
    </div>
  );
}
