import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MyGridView from "../../helpers/view/MyGridView";
import Product from "./Product";

class ProductList extends Component {
  render() {
    const data =  this.props.data;
    return (
      <div>
      
        <div class="container">
         <MyGridView data={data} column={3} >
           <Product />
         </MyGridView>
        </div>

        {/* Floating add button to add new product */}
        <div class="fixed-action-btn">
          <Link
            to="/products/add"
            class="btn-floating btn-large red modal-trigger">
                <i class="large material-icons">add</i>
          </Link>
        </div> 
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
