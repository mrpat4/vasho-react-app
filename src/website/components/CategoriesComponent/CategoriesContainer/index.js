import React from "react";
import Categories from "../Categories";
import ProductsTitle from "../../card/Product/ProductsTitle";

const CategoriesContainer = () => {
  const array = [
    { title: "کاکتوس", excat: true, to: "/", id: 1 },
    { title: "گیاه هان آپارتمانی", to: "/plants", id: 2 },
    { title: "نهال ", to: "/seedling", id: 3 },
    { title: "بذر", to: "/seed", id: 4 },
    { title: "همه محصولات", to: "/all", id: 5 },
  ];
  const renderCategories = () => {
    return array.map((ar) => <Categories data={ar} />);
  };
  return (
    <div className="category">
      <ProductsTitle title="محصولات" />
      <ul className="category-ul">{renderCategories()}</ul>
    </div>
  );
};
export default CategoriesContainer;
