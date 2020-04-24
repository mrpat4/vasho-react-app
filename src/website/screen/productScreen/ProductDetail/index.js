import React from "react";
import "./index.scss";
import HomeScreenSliderContainer from "../../../container/HomeScreenSliderContainer";

const ProductDetail = () => {
  return (
    <section className="product-wraper row">
      <div className="right-side col-lg-6 order-2">
        <div className="right-side-inner">
          <h2>اسم گیاه</h2>
          <ul className="product-detail-list">
            <li>
              <span>شرکت :</span>
              <a href="#" alt="something">
                با من
              </a>
            </li>
            <li>
              <span>کد محصول :</span>1234
            </li>
            <li>
              <span>امتیاز محصول :</span>50
            </li>
            <li>
              <span>موجودی :</span>موجود
            </li>
          </ul>
          <ul className="product-price">
            <li>
              <span className="old-price">50000 تومان</span>
            </li>
            <li>
              <h3 className="special-price">20000 تومان</h3>
            </li>
          </ul>
          <div className="add-wraper">
            <label htmlFor="qty">: تعداد</label>
            <input type="number" placeholder="1" name="qty" />
            <button>اضافه به سبد خرید</button>
          </div>
        </div>
      </div>
      <div className="left-side col-lg-6 order-lg-2">
        <HomeScreenSliderContainer />
      </div>
    </section>
  );
};
export default ProductDetail;
