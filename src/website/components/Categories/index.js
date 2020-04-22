import React from "react";
import "./index.scss";
import { NavLink, withRouter } from "react-router-dom";

const array = [
	{ title: "caactus", excat: true, to: "/", id: 1 },
	{ title: "flower", to: "https://www.google.com", id: 2 },
	{ title: "seed", to: "https://www.instagram.com", id: 3 },
	{ title: "tree", to: "https://www.w3school.com", id: 4 },
	{ title: "house Plants", to: "https://www.antivirus.ir", id: 5 },
];
const Categories = ({ location }) => {
	const items = () => {
		return array.map((item) => (
			<li key={item.key}>
				<NavLink exact={item.excat || false} activeClassName="active" to={item.to}>
					{item.title}
				</NavLink>
			</li>
		));
	};
	return (
		<div className="category">
			<h1>محصولات</h1>
			<ul className="category-ul">{items()}</ul>
		</div>
	);
};

export default withRouter(Categories);
