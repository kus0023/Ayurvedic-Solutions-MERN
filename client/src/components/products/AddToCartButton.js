import React, { Component } from "react";
import { connect } from "react-redux";
import { addCartItem } from "../../redux/actions/Cart.action";
import { getOneProduct } from "../../redux/actions/Product.action";

class AddToCartButton extends Component {
  componentDidMount() {
    // console.log(this.props);
  }
  componentDidUpdate() {
    this.props.getDetail(this.props.productId);
  }
  render() {
    // console.log(this.props.state);
    if (!this.props.isLoggedIn) {
      return (
        <div>
          <button className="btn orange waves-effect" disabled>
            <i className="material-icons right">add</i> Login to add
          </button>
        </div>
      );
    }

    if (this.props.isInCart) {
      return (
        <button className="btn orange waves-effect" disabled>
          <i className="material-icons right">check</i> Added
        </button>
      );
    }
    return (
      <div>
        <button
          className="btn orange waves-effect"
          onClick={() => {
            this.props.addCartItem(this.props.productId);
          }}
        >
          <i className="material-icons right">add</i> Add to Cart
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
  isLoggedIn: state.auth.user !== null,
  isInCart: state.productState?.productDetail?.isPresentInCart,
  isLoading: state.productState?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (id) => dispatch(addCartItem(id)),
  getDetail: (id) => dispatch(getOneProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartButton);
