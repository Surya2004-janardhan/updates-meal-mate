// import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/menulist";
export default function ExploreMenu( {category, setcategory }) {
  // menu_list = ["ab"]
  // console.log("menulist is",menu_list)
  // console.log();
  // console.log("setcategory is a function:", typeof setcategory === "function");
  // ✅ Filtering logic
  // const filteredItems = category === "All"
  // ? menu_list
  // : menu_list.filter(item => item.category === category);
  return (
    // menu_list = []
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        {" "}
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest quality of food around here....{" "}
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setcategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
              {/* {console.log(item.menu_name, category)} */}
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}
