import React from "react";
import "./index.scss";

const Filters = () => {
  return (
    <div className="aside-filters aside-wrapper">
      <div className="heading-title">
        <div className="box-heading">فیلترها</div>
      </div>
      <div className="box-content">
        <ul className="box-filters aside-box">
          <li className="heads">
            <a className="colapsable tit" data-toggle="collapse" href="#color-colaps">
              رنگ
            </a>
            <div className="collapse" id="color-colaps">
              <div className="filter-color filter-wrapper">
                <div className="checkbox">
                  <label>
                    <input type="checkbox" value="1" />
                    صورتی
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" value="2" />
                    زرد
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" value="3" />
                    آبی
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" value="4" />
                    سبز
                  </label>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="panel-footer text-right">
          <button type="button" id="button-filter">
            اعمال فیلترها
          </button>
        </div>
      </div>
    </div>
  );
};
export default Filters;
