import React from "react";
import "./index.scss";
import TextBanner from "./TextBanner";
import Categories from "../../components/Categories";
import ProductContainer from "../../components/card/Product/ProductContainer";
import HomeScreenSliderContainer from "../../container/HomeScreenSliderContainer";

const HomeScreen = () => {
	return (
		<main className="col-main">
			<HomeScreenSliderContainer />
			<Categories />
			<ProductContainer />
			<TextBanner />
		</main>
	);
};

export default HomeScreen;
