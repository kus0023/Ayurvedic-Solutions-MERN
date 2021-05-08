import React, { Component } from "react";
import ProductItem from "./ProductItem";
import "./css/ProductList.css";

class ProdutList extends Component {
  render() {
    return (
      <div className="container section ">
        {/* pagination */}
        <div className="row valign-wrapper">
          <div className="page-box col s4 m3 waves-effect waves-orange">
            <h4 className="flow-text ">
              <span>Page 1</span>
              <i className="material-icons right rotate-left">double_arrow</i>
            </h4>
          </div>
          <div className="current-page col s4 m6 center-align">
            <h2 className=" orange-text">2</h2>
          </div>
          <div className="page-box col s4 m3 waves-effect waves-orange">
            <h4 className="flow-text">
              <i className="material-icons">double_arrow</i>
              <span className="right">Page 3</span>
            </h4>
          </div>
        </div>
        <div className="row">
          <div class="collection">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
      </div>
    );
  }
}

export default ProdutList;
