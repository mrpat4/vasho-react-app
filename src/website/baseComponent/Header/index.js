import React from "react";
import "./index.scss";
import { NavLink, withRouter } from "react-router-dom";

const array = [
	{ title: "store", to: "", id: 1 },
	{ title: "home", to: "#", id: 2 },
	{ title: "flowers", to: "#", id: 3 },
	{ title: "trees", to: "#", id: 4 },
	{ title: "house Plants", to: "#", id: 5 },
	{ title: "user panel", to: "#", id: 5 },
	{ title: "cart", to: "#", id: 5 },
];
const Header = () => {
	const items = () => {
		return array.map((item) => (
			<li key={item.key}>
				<NavLink activeClassName="active" to={item.to}>
					{item.title}
				</NavLink>
			</li>
		));
	};
	return (
		<div className="nav">
			<ul className="nav-ul">{items()}</ul>
		</div>
	);
};

export default withRouter(Header);
