import React from "react";
import Footer from "./website/baseComponent/Footer";
import HomeScreen from "./website/screen/HomeScreen";
import TopHeader from "./website/baseComponent/TopHeader";
import { Route } from "react-router-dom";
import HeaderContainer from "./website/baseComponent/HeaderComponent/HeaderContainer";

const App = () => {
  return (
    <div>
      <TopHeader />
      <HeaderContainer />
      <Route path="/" component={HomeScreen} />
      <Footer />
    </div>
  );
};

export default App;
