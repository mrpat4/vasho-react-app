import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  // const items = () => {
  return (
    <div className="every-tab">
      <li className="card-product">
        <Link to="/product-page">
          <div className="card-product-img">
            <img src={data.image} alt={data.alt} />
            <div class="overlay">
              <Link to="#">
                <i class="fas fa-share-alt"></i>
              </Link>
              <Link to="#">
                <i class="fas fa-shopping-cart"></i>
              </Link>
            </div>
          </div>
          <div className="caption">
            <h1>{data.headLine}</h1>
            <h3>{data.title}</h3>
            <p>{data.desc}</p>
          </div>
        </Link>
      </li>
    </div>
  );
};
// 	return <Fragment>{items()}</Fragment>;
// };

export default ProductCard;
