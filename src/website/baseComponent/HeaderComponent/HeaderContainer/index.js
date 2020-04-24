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
  // return (
  //   <div classNameName="nav">
  //     <ul classNameName="nav-ul">{renderHeader()}</ul>
  //   </div>
  // );
  return (
    <nav className="nav navbar navbar-expand-lg navbar-dark sticky-top">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse ul-wrapper" id="navbarSupportedContent">
        <ul className="nav-ul navbar-nav mx-auto">{renderHeader()}</ul>
      </div>
    </nav>
  );
};
export default HeaderContainer;
