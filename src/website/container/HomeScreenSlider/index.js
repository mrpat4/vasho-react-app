import React from "react";

const HomeScreenSlider = ({ data }) => {
  return (
    <div>
      <img src={data.src} alt={data.alt} />
    </div>
  );
};
export default HomeScreenSlider;
