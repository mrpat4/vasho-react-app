import React from "react";
import "./index.scss";
import TextBanner from "./TextBanner";
// import Categories from "../../components/Categories";
import ProductContainer from "../../components/card/Product/ProductContainer";
import HomeScreenSliderContainer from "../../container/HomeScreenSliderContainer";
import CategoriesContainer from "../../components/CategoriesComponent/CategoriesContainer";

const HomeScreen = () => {
  return (
    <main className="col-main">
      <HomeScreenSliderContainer />
      <CategoriesContainer />
      <ProductContainer />
      <TextBanner />
    </main>
  );
};

export default HomeScreen;
