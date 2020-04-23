import React from "react";
import Footer from "./website/baseComponent/Footer";
import TopHeader from "./website/baseComponent/TopHeader";
import { Route } from "react-router-dom";
import HeaderContainer from "./website/baseComponent/HeaderComponent/HeaderContainer";
import routes from "./routs";

const App = () => {
  return (
    <div>
      <TopHeader />
      <HeaderContainer />
      {routes.map((route) => (
        <Route {...route} />
      ))}
      <Footer />
    </div>
  );
};

export default App;
