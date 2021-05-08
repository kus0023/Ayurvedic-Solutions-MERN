import React, { Component } from "react";
import { connect } from "react-redux";
import AddNewProductModal from "../Modals/AddNewProductModal";
import Navbar from "../navbar/Navbar";
import Product from "./Product";

class ProductList extends Component {

  
  
  render() {
    const data =  this.props.data;
    return (
      <div>
      
        <div class="container">
          <div class="row">

            {
data && data.map((item, i)=> <Product key={i} data={item} />)
            }
           
          
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

const mapStateToProps= state =>{
  return{
    data: state.product.items
  }
}

export default connect (mapStateToProps)(ProductList);
