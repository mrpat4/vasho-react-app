import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import HomeScreenSlider from "../HomeScreenSlider";

const HomeScreenSliderContainer = () => {
  const array = [
    { src: "https://picsum.photos/seed/picsum/900/400", alt: "Slider 1" },
    { src: "https://picsum.photos/seed/picsum/900/400", alt: "Slider 2" },
    { src: "https://picsum.photos/seed/picsum/900/400", alt: "Slider 3" },
    { src: "https://picsum.photos/seed/picsum/900/400", alt: "Slider 4" },
  ];

  const renderSlider = () => {
    //TODO make this function as card
    return array.map((ar) => <HomeScreenSlider data={ar} />);
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
