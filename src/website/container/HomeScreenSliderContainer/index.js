import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HomeScreenSliderContainer = () => {
	const sliderData = [
		{ img: "https://picsum.photos/seed/picsum/900/400", title: "Slider 1" },
		{ img: "https://picsum.photos/seed/picsum/900/400", title: "Slider 2" },
		{ img: "https://picsum.photos/seed/picsum/900/400", title: "Slider 3" },
		{ img: "https://picsum.photos/seed/picsum/900/400", title: "Slider 4" },
	];

	const renderSlider = () => {
		//TODO make this function as card
		return sliderData.map((data) => (
			<div>
				<img src={data.img} />
				{/* <p className="legend">{data.title}</p> */}
			</div>
		));
	};

	return (
		<div className="sliderContainer">
			<Carousel swipeable={true} transitionTime={2000} autoPlay={true} showStatus={false} showThumbs={false} showArrows={true}>
				{renderSlider()}
			</Carousel>
		</div>
	);
};

export default HomeScreenSliderContainer;
