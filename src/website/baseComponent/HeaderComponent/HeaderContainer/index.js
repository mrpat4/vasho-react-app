import React from "react";
import Header from "../Header";

const HeaderContainer = () => {
  const array = [
    { title: "خانه", to: "/", excat: true, id: 1 },
    { title: "فروشگاه", to: "/store", id: 2 },
    { title: "درباره ما", to: "/about-us", id: 3 },
    { title: "تماس با ما", to: "/call-us", id: 4 },
    { title: "پنل کاربری", to: "/user-panel", id: 5 },
  ];
  const renderHeader = () => {
    return array.map((ar) => <Header data={ar} />);
  };
  return (
    <div className="nav">
      <ul className="nav-ul">{renderHeader()}</ul>
    </div>
  );
};
export default HeaderContainer;
