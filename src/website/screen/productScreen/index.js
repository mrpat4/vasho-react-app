import React from "react";
import ProductDetail from "./ProductDetail";
import ProductDescriptionNav from "./ProductDescriptionNav";

const ProductScreen = () => {
  return (
    <div className="col-main">
      <ProductDetail />
      <ProductDescriptionNav />
    </div>
  );
};
export default ProductScreen;
