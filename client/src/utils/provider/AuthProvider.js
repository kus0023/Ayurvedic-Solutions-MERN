import React, { Component } from "react";
import { connect } from "react-redux";
import { getAuth } from "../../redux/actions/Auth.action";
import { fetchCartItems } from "../../redux/actions/Cart.action";

class AuthProvider extends Component {
  componentDidMount() {
    this.props.getAuth();
    this.props.getCart(); //this can cause problems
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
    getAuth: () => dispatch(getAuth()),
    getCart: () => {
      dispatch(fetchCartItems());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthProvider);
