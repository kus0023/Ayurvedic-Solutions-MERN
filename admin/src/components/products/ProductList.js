import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MyGridView from "../../helpers/view/MyGridView";
import Product from "./Product";

class ProductList extends Component {
  render() {
    const data = this.props.data;
    return (
      <div>
        <div className="container">
          <MyGridView data={data} column={3}>
            <Product />
          </MyGridView>
        </div>

        {/* Floating add button to add new product */}
        <div className="fixed-action-btn">
          <Link
            to="/products/add"
            className="btn-floating btn-large red modal-trigger"
          >
            <i className="large material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.product.items,
  };
};

export default connect(mapStateToProps)(ProductList);
