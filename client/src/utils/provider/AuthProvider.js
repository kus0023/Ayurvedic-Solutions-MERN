import React, { Component } from "react";
import { connect } from "react-redux";
import { getAuth } from "../../redux/actions/Auth.action";
import { fetchCartItems } from "../../redux/actions/Cart.action";

class AuthProvider extends Component {
  componentDidMount() {
    this.props.getAuth();
  }

  componentDidUpdate() {
    if (this.props.isReady) {
      this.props.getCart();
    }
  }

  render() {
    return this.props.isReady ? (
      this.props.children
    ) : (
      <h1 className="center">Loading..</h1>
    );
  }
}

const mapStateToProps = (state) => ({
  isReady: state.auth.isReady,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getAuth: async () => dispatch(await getAuth()),
    getCart: () => {
      dispatch(fetchCartItems());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthProvider);
