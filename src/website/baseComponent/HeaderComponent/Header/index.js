import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./index.scss";

const Header = ({ data }) => {
  return (
    <li className="nav-item" key={data.key}>
      <NavLink className="nav-link" exact={data.excat || false} activeClassName="active" to={data.to}>
        {data.title}
      </NavLink>
    </li>
  );
};
export default withRouter(Header);
