import React from "react";
import "./index.scss";

const ProductsTitle = (props) => {
  return (
    <div className="title-container">
      <h1 className="products-title">{props.title}</h1>
    </div>
  );
};
export default ProductsTitle;
