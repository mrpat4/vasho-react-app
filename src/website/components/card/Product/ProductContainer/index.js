import React from "react";
import ProductCard from "../ProductCard";

const ProductContainer = () => {
  const array = [
    { image: "https://picsum.photos/seed/picsum/200/200", headLine: "تیتر مطلب", title: "قیمت", desc: "زمان قرارگیری", alt: "21" },
    { image: "https://picsum.photos/seed/picsum/200/200", headLine: "تیتر مطلب", title: "قیمت", desc: "زمان قرارگیری", alt: "21" },
    { image: "https://picsum.photos/seed/picsum/200/200", headLine: "تیتر مطلب", title: "قیمت", desc: "زمان قرارگیری", alt: "21" },
    { image: "https://picsum.photos/seed/picsum/200/200", headLine: "تیتر مطلب", title: "قیمت", desc: "زمان قرارگیری", alt: "21" },
    { image: "https://picsum.photos/seed/picsum/200/200", headLine: "تیتر مطلب", title: "قیمت", desc: "زمان قرارگیری", alt: "21" },
    { image: "https://picsum.photos/seed/picsum/200/200", headLine: "تیتر مطلب", title: "قیمت", desc: "زمان قرارگیری", alt: "21" },
    { image: "https://picsum.photos/seed/picsum/200/200", headLine: "تیتر مطلب", title: "قیمت", desc: "زمان قرارگیری", alt: "21" },
    { image: "https://picsum.photos/seed/picsum/200/200", headLine: "تیتر مطلب", title: "قیمت", desc: "زمان قرارگیری", alt: "21" },
  ];

  const renderProducts = () => {
    return array.map((ar) => <ProductCard data={ar} />);
  };

  return <div className="productContainer row">{renderProducts()}</div>;
};

export default ProductContainer;
