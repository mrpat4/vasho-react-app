import React from "react";
import "./index.scss";

const ProductDescriptionReview = () => {
  return (
    <div className="product-description-review">
      <form className="review-form1">
        <div>
          <table>
            <tbody>
              <tr className="border-bottom">
                <td>
                  <strong>نام</strong>
                </td>
                <td className="date">
                  <p>تاریخ</p>
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="review-text-body">
                  <p className="review-text">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                    کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <h4>نظر خود را با ما به اشتراک بگذارید</h4>
          <form className="review-form2" action="review">
            <div className="show-review">
              <label htmlFor="name">نام شما</label>
              <input required id="name" type="name" />
              <label htmlFor="message">نظر شما</label>
              <textarea required name="message" id="message" cols="30" rows="10"></textarea>
            </div>
            <div className="rating-section">
              <label>امتیاز</label>
              <span>بد</span>
              <input required name="rating" value="1" type="radio" />
              <input required name="rating" value="2" type="radio" />
              <input required name="rating" value="3" type="radio" />
              <input required name="rating" value="4" type="radio" />
              <input required name="rating" value="5" type="radio" />
              <span>خوب</span>
            </div>
            <button>ارسال</button>
          </form>
        </div>
      </form>
    </div>
  );
};
export default ProductDescriptionReview;
