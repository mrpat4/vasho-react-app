import React from "react";
import "./index.scss";
import logo from "../../../assets/images/img/logo.png";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="top-header">
      <ul>
        <li className="logo">
          <Link to="#">
            <img src={logo} alt="logo" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="fas fa-search"></i>
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="fas fa-shopping-cart"></i>
            <span className="card-total">0</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="fas fa-user-alt"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TopHeader;
