import React from "react";
import "./index.scss";
import SideBar from "./sideBar";

const StoreScreen = () => {
  return (
    <div id="store" className="container">
      <div className="row">
        <aside id="column-right" className="col-sm-3 hidden-xs">
          <SideBar />
        </aside>
      </div>
    </div>
  );
};
export default StoreScreen;
