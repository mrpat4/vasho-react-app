import React from "react";
import "./index.scss";

const StoreCategories = () => {
  return (
    <div className="aside-category">
      <div className="heading-title">
        <div className="box-heading">دسته بندی</div>
      </div>

      <div className="box-content">
        <ul className="box-category">
          <li>
            <a href="#" className="active">
              همه محصولات
            </a>
          </li>
          <li>
            <a href="#">کاکتوس ها</a>
          </li>
          <li>
            <a href="#">ساکولنت ها</a>
          </li>
          <li>
            <a href="#">گیاهان آپارتمانی</a>
          </li>
          <li>
            <a href="#">سبزی ها</a>
          </li>
          <li>
            <a href="#">نهال ها</a>
          </li>
          <li>
            <a href="#">بذرها</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default StoreCategories;
