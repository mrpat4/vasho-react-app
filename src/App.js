import React from "react";
import Footer from "./website/baseComponent/Footer";
import HomeScreen from "./website/screen/HomeScreen";
import Header from "./website/baseComponent/Header";
import TopHeader from "./website/baseComponent/TopHeader";
import { Route } from "react-router-dom";

const App = () => {
	return (
		<div>
			<TopHeader />
			<Header />
			<Route path="/" component={HomeScreen} />
			<Footer />
		</div>
	);
};

export default App;
