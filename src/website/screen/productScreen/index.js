import React from "react";
import ProductDetail from "./ProductDetail";
import ProductDescriptionNav from "./ProductDescriptionNav";
import ProductDescriptionText from "./ProductDescriptionText";
import "./index.scss";
import ProductDescriptionReview from "./ProductDescriptionReview";
import ProductContainer from "../../components/card/Product/ProductContainer";
import ProductsTitle from "../../components/card/Product/ProductsTitle";

const ProductScreen = () => {
  return (
    <div className="container">
      <ProductDetail />
      <ProductDescriptionNav />
      <div className="product-description-text">
        <ProductDescriptionText />
        <ProductDescriptionReview />
      </div>
      <ProductsTitle title="محصولات مشابه" />
      <ProductContainer />
    </div>
  );
};
export default ProductScreen;
