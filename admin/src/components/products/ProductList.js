import React, { Component } from "react";
import AddNewProductModal from "../Modals/AddNewProductModal";
import Navbar from "../navbar/Navbar";
import Product from "./Product";

class ProductList extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="container">
          <div class="row">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>

        {/* Floating add button to add new product */}
        <div class="fixed-action-btn">
          <a
            href="#modal-product-add"
            class="btn-floating btn-large red modal-trigger"
          >
            <i class="large material-icons">add</i>
          </a>
        </div>

        <AddNewProductModal />
      </div>
    );
  }
}

export default ProductList;
