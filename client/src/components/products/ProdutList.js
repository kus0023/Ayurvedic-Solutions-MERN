import React, { Component } from "react";
import ProductItem from "./ProductItem";
import "./css/ProductList.css";

//actions
import { getProducts } from "../../redux/actions/Product.action";
import { connect } from "react-redux";

class ProdutList extends Component {
  componentDidMount() {
    this.props.getProducts(1, 10);
  }
  render() {
    return (
      <div className="container section ">
        {/* pagination */}
        <div className="row valign-wrapper">
          <div className="page-box col s4 m3 waves-effect waves-orange">
            <h4 className="flow-text ">
              <span>Previous</span>
              <i className="material-icons right rotate-left">double_arrow</i>
            </h4>
          </div>
          <div className="current-page col s4 m6 center-align">
            <h2 className=" orange-text">1</h2>
          </div>
          <div className="page-box col s4 m3 waves-effect waves-orange">
            <h4 className="flow-text">
              <i className="material-icons">double_arrow</i>
              <span className="right">Next</span>
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="collection">
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

const mapStateToProps = (state) => {
  const { isLoading, result } = state.productState;

  return {
    isLoading,
    pagination: result?.pagination,
    products: result?.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: (page, limit) => dispatch(getProducts(page, limit)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProdutList);
