import React from "react";
import "./index.scss";
import StoreCategories from "./StoreCategories";
import Filters from "./Filters";

const SideBar = () => {
  return (
    <div className="box">
      <StoreCategories />
      <Filters />
    </div>
  );
};
export default SideBar;
